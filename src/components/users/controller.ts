import { NextFunction, Response } from 'express'
import * as service from './service'
import { SignInRequest, iUserCreationRequest } from '../../types'

export const createUser = async (req: iUserCreationRequest, res: Response, next: NextFunction) => {
  try {
    const user = await service.createNewUser(req.body)
    res.status(201).json({
      create: 'success',
      user
    })
  } catch (error) {
    next(error)
  }
}

export const signIn = async (req: SignInRequest, res: Response, next: NextFunction) => {
  try {
    const jwt = await service.authenticateUser(req.body)
    res.status(200).json({
      success: true,
      token: jwt
    })
  } catch (error) {
    next(error)
  }
}
