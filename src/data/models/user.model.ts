import { Table, Column, Model } from "sequelize-typescript";
import {STRING,} from "sequelize"

@Table({
    freezeTableName: true,
    schema:'public',
    tableName: 'users',
    createdAt: false,
    updatedAt: false
})

export class UserPojo extends Model{
   
  
    @Column({
        primaryKey: true,
        type: STRING,
        field:'user_id'
    })
    user_id: string
    

    @Column({
        type: STRING,
        field: 'fullname'
    })
    fullname: string

    @Column({
        type: STRING,
        field: 'phone'
    })
    phone: string

    @Column({
        type: STRING,
        field: 'email',  
    })
    email: string

    @Column({
        type: STRING,
        field: 'password',
    })
    password: string

    @Column({
        type: STRING,
        field: 'dob'
    })
    dob: string

    @Column({
        type: STRING,
        field: 'deposit'
    })
    deposit: string
}