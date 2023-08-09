import { NextFunction, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { AuthenticatedRequest } from '../../types'
import Boom from '@hapi/boom'
import config from '../../config'

export const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    next(Boom.unauthorized('No JWT provided'))
  }

  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET) as JwtPayload
    req.user = { id: decoded.sub }
    next()
  } catch (err) {
    next(Boom.unauthorized('Invalid JWT'))
  }
}
