import { insertUser, queryUser } from './queries'
import { iSignIn, iUser } from '../../types'
import { UniqueConstraintError } from 'sequelize'
import Boom from '@hapi/boom'
import bcrypt from 'bcrypt'
import generateToken from '../../utils/createJwt'

export const createNewUser = async (userData: iUser) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const passwordHashed = await bcrypt.hash(userData.password, salt)
    const userPayload: iUser = {
      ...userData,
      password: passwordHashed
    }
    const userCreated = await insertUser(userPayload)
    
    return userCreated
  } catch (error) {
    if (error instanceof UniqueConstraintError)  throw Boom.badRequest(error.errors[0].message)
    throw error
  }
}

// not needed
export const getAllUsers = async () => {
  const allUsers = await queryUser({})
  return allUsers
}

export const authenticateUser = async (user: iSignIn) => {
  const [userExists] = await queryUser({ where: { username: user.username } })
  if (!userExists) throw Boom.badData('Invalid username or password')
  const userValues = userExists.get({ plain: true })
  const passwordIsValid = await bcrypt.compare(user.password, userValues.password)
  if (!passwordIsValid) throw Boom.badData('Invalid username or password')
  const token = generateToken(userValues)
  return token
}
