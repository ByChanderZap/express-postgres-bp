import { DataType, Model } from 'sequelize-typescript'
import { iUpdateUserData, iUser } from '../../../types'
import db from '../db'

export const User = db.define<Model<iUser, iUpdateUserData>>('Users', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  },
  fullName: {
    type: DataType.STRING,
    allowNull: false,
    unique: false
  },
  username: {
    type: DataType.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataType.STRING,
    allowNull: false,
  },
  contact: {
    type: DataType.STRING,
    allowNull: false,
  },
}, {
  hooks: {
    afterCreate: (record) => {
      delete record.dataValues.password
    },
    afterUpdate: (record) => {
      delete record.dataValues.password
    }
  }
})
