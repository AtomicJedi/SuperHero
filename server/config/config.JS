require('dotenv').config()

module.exports = {
  PORT: 5000,
  ORIGIN: process.env.ORIGIN_URL,
  URL: process.env.URL,
  MONGO_USERNAME: process.env.MONGO_USERNAME,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  JWT_PASSWORD: process.env.JWT_PASSWORD,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  MAIL_USERNAME: process.env.MAIL_USERNAME,
  SECRET_KEY: process.env.SECRET_KEY,
  API_MODE: process.env.API_MODE,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  MAIL_SERVICE: process.env.MAIL_SERVICE,
}

