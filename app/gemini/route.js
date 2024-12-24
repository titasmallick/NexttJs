import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateContentOnPrompt = async (promptData) => {
  if (!promptData || !promptData.prompt) {
    console.warn("Input validation failed: Missing 'prompt' field.");
    return { error: "Invalid input: 'prompt' field is required." };
  }

  try {
    const result = await model.generateContent(promptData.prompt);
    return { content: result.response.text() };
  } catch (error) {
    console.warn("Error during model content generation:", {
      message: error.message,
      stack: error.stack,
    });
    return { error: "Failed to generate content from Gemini AI." };
  }
};

export async function POST(request) {
  try {
    const data = await request.json();

    // Input validation
    if (!data.prompt) {
      console.warn("Input validation failed: 'prompt' field is missing.");
      return NextResponse.json(
        { error: "Missing required 'prompt'" },
        { status: 400 } // Bad Request
      );
    }

    // Generate content
    const result = await generateContentOnPrompt(data);

    if (result.error) {
      console.warn("Error in content generation:", result.error);
      return NextResponse.json(
        { error: result.error },
        { status: 500 } // Internal Server Error
      );
    }

    return NextResponse.json({ message: result.content });
  } catch (error) {
    console.warn("Unexpected error processing prompt request:", {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
