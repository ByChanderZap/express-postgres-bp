import joi from 'joi'

const baseValidString = joi.string().min(3).max(100).regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const idSchema =  joi.string().uuid()
const fullNameSchema =  baseValidString.message('"{#label}" with value "{#value}" is not a valid string, only alphanumeric characters are allowed')
const usernameSchema = joi.string().min(5).max(30).alphanum()
const passwordSchema = joi.string()
  .min(8)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  .message('"{#label}" must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number')

const contactSchema = joi.string()
  .pattern(/^(\+)[1-9]{1,3}\d{1,10}$/)
  .message('Did not match the pattern, must contain country code and nombre ex: +52123456789')


export const userCreateSchema = {
  fullName: fullNameSchema.required(),
  username: usernameSchema.required(),
  password: passwordSchema.required(),
  contact: contactSchema.required(),
}

export const loginSchema = {
  username: usernameSchema.required(),
  password: passwordSchema.required(),
}
