import { Table, Column, Model } from "sequelize-typescript";
import {STRING} from "sequelize"

@Table({
    freezeTableName: true,
    schema: 'public',
    tableName: 'crypto',
    createdAt: false,
    updatedAt: false
})

export class CryptoPojo extends Model{

    @Column({
        primaryKey: true,
        type: STRING,
        field: 'crypto_id'
    })
    crypto_id: string

    @Column ({
        type: STRING,
        field: 'crypto_name'
    })
    crypto_name: string
    
    @Column({
        type: STRING,
        field: 'value'
    })
    value: string

    @Column({
        type: STRING,
        field: 'asset'
    })
    asset: string

    @Column({
        type: STRING,
        field: 'stock'
    })
    stock: string
}