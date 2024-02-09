const FRONTEND_URL = process.env.FRONTEND_URL

const PORT = process.env.PORT || 8080

const DB_HOST = process.env.DB_HOST || 'dpg-cmsn9f0l5elc738sgq1g-a.oregon-postgres.render.com'
const DB_USER = process.env.DB_USER || 'prueba_postgre_3iwv_user'
const DB_PASSWORD = process.env.DB_PASSWORD || 'RrbDYg8si3CPwsXnzWWWIRnFHaP5PmZQ'
const DB_NAME = process.env.DB_NAME || 'prueba_postgre_3iwv'
const DB_PORT = process.env.DB_PORT || '5432'

module.exports = {
  FRONTEND_URL,
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT
}
