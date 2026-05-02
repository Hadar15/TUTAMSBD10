const { Pool } = require('pg');
require('dotenv').config();

let connectionString = 
  process.env.POSTGRES_URL_NON_POOLING || 
  process.env.POSTGRES_PRISMA_URL || 
  process.env.POSTGRES_URL || 
  process.env.DATABASE_URL;


if (connectionString && connectionString.includes('?')) {
  connectionString = connectionString.split('?')[0];
}

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
