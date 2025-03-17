/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    // url: "postgresql://sidanace:9fHjxPbsRG4E@ep-ancient-smoke-a10sd11h.ap-southeast-1.aws.neon.tech/AI%20mock%20interview?sslmode=require",
url:"postgresql://MockInterview_owner:npg_fwTc85PgEoGu@ep-still-feather-a8smhv13-pooler.eastus2.azure.neon.tech/MockInterview?sslmode=require"  },
};
