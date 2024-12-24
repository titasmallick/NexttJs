const adminCred = {
  type: "service_account",
  project_id: "add-your-project-id-here",
  private_key_id: "add-your-private-key-id-here",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nadd-your-private-key-here\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-4pyxk@add-your-project-id-here.iam.gserviceaccount.com",
  client_id: "add-your-client-id-here",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4pyxk%40add-your-project-id-here.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
export default adminCred;
