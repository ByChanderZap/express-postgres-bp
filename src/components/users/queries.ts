import { User } from '../../utils/db/models'
import { iUser } from '../../types'


export const insertUser = (userData: iUser) => {
  return User.create(userData, {
    returning: true,
    attributes: { exclude: ['password'] }
  })
}

// not needed
export const queryUser = (query) => {
  return User.findAll(query)
}
