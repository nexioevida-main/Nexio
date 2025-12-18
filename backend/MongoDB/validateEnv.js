const requiredEnv = [
  "PORT",
  "MONGODB_URL",
  "JWT_SECRET",
  "GOOGLE_CLIENT_ID",
  "EMAIL_USER",
  "EMAIL_PASS",
];

export default function validateEnv() {
  requiredEnv.forEach((key) => {
    if (!process.env[key]) {
      console.error(`❌ Missing environment variable: ${key}`);
      process.exit(1);
    }
  });
}
