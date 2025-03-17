import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";


const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql, { schema });


// import { drizzle } from 'drizzle-orm/node-postgres';
// import { Pool } from 'pg';
// import { Feedback } from '../app/(auth)/dashboard/interview/feedback/page'

// const pool = new Pool({
//   connectionString: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// export const db = drizzle(pool, { schema: { feedback: Feedback } });