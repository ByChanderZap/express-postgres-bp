import { Request, Response } from 'express'
import boom from '@hapi/boom'

export const notFoundHandler = (req: Request, res: Response) => {
  const {
    output: { statusCode, payload }
  } = boom.notFound()

  res.status(statusCode).json(payload)
}

