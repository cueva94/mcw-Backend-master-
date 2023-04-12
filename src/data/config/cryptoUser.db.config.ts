import { Sequelize } from "sequelize-typescript"
import { CryptoUserPojo } from "../models/cryptoUser.model"

export const cryptUser_connect = () => {
    const DB_HOSTNAME = 'localhost'
    const DB_PORT = 5432
    const DB_NAME = 'cryptomonedas'
    const DB_USERNAME = 'javii'
    const DB_PASSWORD = 'Jaherrera_1994'
    const DB_SCHEMA = 'public'
    const DB_DIALECT: any = 'postgres'

    const dbConfig = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOSTNAME,
        dialect: DB_DIALECT,
        schema: DB_SCHEMA,
        port: DB_PORT,
        repositoryMode: true,
        pool: {
            max: 10, 
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    })
    
    dbConfig.addModels([CryptoUserPojo])

    const db: any = {}

    db.Sequelize = Sequelize
    db.sequelize = dbConfig

    return db 
}  