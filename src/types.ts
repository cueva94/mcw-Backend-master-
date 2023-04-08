export class userDto{
    user_id?: string
    username: string 
    fullname: string 
    email: string 
    password: string
    birthdate: string
    deposit: string
}


export type newUserDto = Omit<userDto, 'user_id'>
