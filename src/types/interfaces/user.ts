import { Request } from 'express'

export interface iUser {
  id?: string
  fullName: string
  username: string
  contact: string
  password: string
}

export interface iUserCreationRequest {
  body: {
    id?: string
    fullName: string
    username: string
    contact: string
    password: string
  }
}

export interface iUpdateUserData {
  fullName?: string
  username?: string
  contact?: string
  password?: string
}

export type iUserCreation = Omit<iUser, 'id'>

export interface iSignIn {
  username: string
  password: string
}
export interface AuthenticatedRequest extends Request {
  user: {
    id: string;
  }
}

export interface iJwtPayload {
  id: string;
}

export interface SignInRequest extends Request {
  body: {
    username: string
    password: string
  }
}
