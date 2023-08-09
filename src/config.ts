import dotenv from 'dotenv'
import { Config, ENV, allowedUndefinedKeys } from './types'

// Parsing the env file.
dotenv.config()

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    JWT_SECRET: process.env.JWT_SECRET || 'secret'
  }
}

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitizedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined && !allowedUndefinedKeys.includes(key)) {
      throw new Error(`Missing key ${key} in config.env`)
    }
  }
  return config as Config
}


const config = getConfig()

const sanitizedConfig = getSanitizedConfig(config)

export default sanitizedConfig
