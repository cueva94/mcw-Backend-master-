export class userDto{
    user_id?: string
    fullname: string 
    phone: string 
    email: string 
    password: string
    dob: string
    deposit: string
}

export class cryptoDto{
    crypto_id?: string
    crypto_name: string 
    value: string  
    asset: string
    stock: string
}

export class cryptoUserDto{
    crypto_id: string
    user_id: string
    amount: string
}


export type newUserDto = Omit<userDto, 'user_id'>
export type newCryptoDto = Omit< cryptoDto, 'crypto_id'>
