const { Pool } = require('pg');
require('dotenv').config();

const connectionString = 
  process.env.POSTGRES_URL_NON_POOLING || 
  process.env.POSTGRES_PRISMA_URL || 
  process.env.POSTGRES_URL || 
  process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
