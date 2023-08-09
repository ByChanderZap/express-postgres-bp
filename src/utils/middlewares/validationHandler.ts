import { NextFunction, Request, Response } from 'express'
import boom from '@hapi/boom'
import joi from 'joi'


const validate = (data, schema) => {
  const { error } = joi.object(schema).validate(data)
  return error
}

export const validationHandler = (schema, check='body') => {
  return function(req: Request, res: Response, next: NextFunction) {
    const error = validate(req[check], schema)

    error ? next(boom.badRequest(error)) : next()
  }
}
