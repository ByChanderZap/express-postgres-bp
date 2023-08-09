import { NextFunction, Request, Response } from 'express'
import config from '../../config'
import boom from '@hapi/boom'

const withErrorStack = (err, stack) => {
  if (config.NODE_ENV === 'dev') {
    return { ...err, stack }
  }
  return err
}

export const logErrors = (err, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  next(err)
}

export const wrapError = (err, req: Request, res: Response, next: NextFunction) => {
  if(!err.isBoom){
    next(boom.badImplementation(err))
  }

  next(err)
}

export const errorHandler = (err, req: Request, res: Response, next: NextFunction) => {   //eslint-disable-line
  const { output: { statusCode, payload } } = err

  res.status(statusCode)
  res.json(withErrorStack(payload, err.stack))
}

