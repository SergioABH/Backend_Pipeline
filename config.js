require('dotenv').config()

const FRONTEND_URL = process.env.FRONTEND_URL

const PORT = process.env.PORT || 8080

const DB_HOST = process.env.DB_HOST || process.env.DB_HOST_TEST
const DB_USER = process.env.DB_USER || process.env.DB_USER_TEST
const DB_PASSWORD = process.env.DB_PASSWORD || process.env.DB_PASSWORD_TEST
const DB_NAME = process.env.DB_NAME || process.env.DB_NAME_TEST
const DB_PORT = process.env.DB_PORT || process.env.DB_PORT_TEST

module.exports = {
  FRONTEND_URL,
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT
}
