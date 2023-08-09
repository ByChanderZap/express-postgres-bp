import { Sequelize } from 'sequelize-typescript'
import config from '../../config'

const sequelize = new Sequelize({
  database: config.POSTGRES_DB,
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  host: config.POSTGRES_HOST || 'db',
  dialect: 'postgres',
  port: 5432,
  logging: false
})

  
// To load all models, you can use the Object.values, this will create something like:
// models: [OneModel, AnotherModel, Etc]

// const sequelize = new Sequelize({
//   host: 'db',
//   dialect: 'postgres',
//   port: 5432,
//   database: config.POSTGRES_DB,
//   username: config.POSTGRES_USER,
//   password: config.POSTGRES_PASSWORD
//   logging: false,
//   // models: Object.values(AllModels),
// })


export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('Database connection has been established successfully.')
    await sequelize.sync({ alter: true })
    console.log('Database synchronization completed.')
    return sequelize
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    return null
  }
}

export default sequelize



