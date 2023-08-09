import express, { Express } from 'express'
import * as mainRoutes from './main.routes'
import { connectToDatabase } from './utils/db/db'
import config from './config'
import { errorHandler, logErrors, notFoundHandler, wrapError } from './utils/middlewares'

const api: Express = express()

const HOST = 'localhost'
const PORT = config.PORT || 3000
//  Server configuration
api.use(express.json())
api.use(express.urlencoded({ extended: true }))


// routes
api.use('/', mainRoutes.routes());

(async () => {
  try {
    await connectToDatabase()
  } catch (error) {
    console.error('An error occurred while connecting to the database', error)
  }
})()

//  Error handlers
api.use(logErrors)
api.use(wrapError)
api.use(errorHandler)
api.use(notFoundHandler)

api.listen(PORT, () => console.log(`API running ${HOST}:${PORT}`))
