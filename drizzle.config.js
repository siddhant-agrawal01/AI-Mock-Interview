/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    // url: "postgresql://sidanace:9fHjxPbsRG4E@ep-ancient-smoke-a10sd11h.ap-southeast-1.aws.neon.tech/AI%20mock%20interview?sslmode=require",
    url: "postgresql://neondb_owner:VCdgQH4AU0ti@ep-super-lab-a1e4obie.ap-southeast-1.aws.neon.tech/Interview?sslmode=require",
  },
};
