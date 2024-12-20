# Next.js Boilerplate

Welcome to the **Next.js Boilerplate**! This project is a robust starter template for building modern web applications using **Next.js**, **NextUI**, **Geist UI**, **Firebase**, **Google Gemini**, **TailwindCSS**, and **Framer Motion**.

## Features

- **Next.js**: A React framework for server-side rendering and static site generation.
- **NextUI**: Modern, responsive UI components.
- **Geist UI**: Clean, minimalistic fonts and design.
- **Firebase**: Seamless backend integration with Firebase services.
- **Google Gemini**: Leverage AI capabilities from Google's Generative AI library.
- **TailwindCSS**: Rapidly build modern, responsive designs.
- **Framer Motion**: Easy animations and transitions for React components.

## Folder Structure

```
├── app/                # App directory for Next.js routes and pages
├── components/         # Reusable React components
├── config/             # Configuration files (e.g., Firebase, Tailwind)
├── public/             # Static assets like images and icons
├── styles/             # Global and modular CSS files
├── types/              # TypeScript definitions
├── .vscode/            # VS Code workspace settings
├── .eslintignore       # Files and directories ignored by ESLint
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignored files
├── .npmrc              # npm configuration
├── LICENSE             # License for the project
├── next-env.d.ts       # Next.js TypeScript definitions
├── next.config.js      # Next.js configuration
├── package.json        # npm dependencies and scripts
├── postcss.config.js   # PostCSS configuration for TailwindCSS
├── tailwind.config.js  # TailwindCSS configuration
├── tsconfig.json       # TypeScript configuration
```

## Getting Started

Follow these instructions to get a copy of the project up and running:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/titasmallick/NexttJs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd NexttJs
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your application.

### Production

Build and start the production server:
```bash
npm run build
npm start
```

## Configuration

### Firebase
Update your Firebase configuration in the `config/firebaseConfig.js` file:
```javascript
const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_AUTH_DOMAIN>",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_STORAGE_BUCKET>",
  messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
  appId: "<YOUR_APP_ID>"
};

export default firebaseConfig;
```

### TailwindCSS
Customize the `tailwind.config.js` file to fit your design needs.

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the production-ready application.
- `start`: Runs the application in production mode.
- `lint`: Lints the codebase using ESLint.

## Contribution

Feel free to fork the repository and submit pull requests. Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Titas Mallick](https://github.com/titasmallick).

