import {Table, Column, Model} from "sequelize-typescript"
import {STRING} from "sequelize"

@Table({
    freezeTableName: true,
    schema: 'public',
    tableName: 'cryptouser',
    createdAt: false,
    updatedAt: false
})

export class CryptoUserPojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'crypto_id'
    })
    crypto_id: string

    @Column({
        primaryKey: true,
        type: STRING,
        field: 'user_id'
    })
    user_id: string

    @Column({
        type: STRING,
        field: 'amount'
    })
    amount: string
}