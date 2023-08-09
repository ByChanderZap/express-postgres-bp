import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken'
import config from '../config'
import { iUser } from '../types'

const generateToken = (user: iUser): string => {
  const payload: JwtPayload = {
    sub: user.id,
  }

  const secret: Secret = config.JWT_SECRET

  const options: SignOptions = {
    expiresIn: '1h'
  }

  return jwt.sign(payload, secret, options)
}

export default generateToken
