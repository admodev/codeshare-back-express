export const environment = {
  PORT: process.env.PORT ?? 8000,
  DATABASE_USER: process.env.DATABASE_USER ?? "devuser",
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_URL:
    process.env.DATABASE_URL ?? "mongodb+srv://dbuser:dbpassword@devcluster",
};
