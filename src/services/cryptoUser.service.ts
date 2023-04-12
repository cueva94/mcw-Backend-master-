import { CryptoUserPojo } from "../data/models/cryptoUser.model"
import { CryptoUserRepository } from "../data/repositories/cryptoUser.model"
import {cryptoUserDto} from "../types"

export class CryptoUserServices{

    _cryptoUserRepository: CryptoUserRepository
    static cryptoUsers: any

    constructor(){
        this._cryptoUserRepository = new CryptoUserRepository ()
    }

 async cryptoUsers( user_id: string) : Promise <cryptoUserDto[]>{
    const cryptoUserPomise = await this._cryptoUserRepository.cryptoUsers(user_id)
    .then( res =>{
        res.forEach( resElement => {
            return this.ParseIntoDto(resElement)
        })
        return res

    }).catch(error =>{
        console.error(error)
        throw error
    })
    return cryptoUserPomise 
 }


 async cryptoBuy( cryptoBuy : cryptoUserDto) : Promise <string> {
    let cryptoUserPojo : CryptoUserPojo = cryptoBuy as CryptoUserPojo  
     const cryptoBuyPromise = this._cryptoUserRepository.cryptoBuy(cryptoUserPojo)
     .then(res => {
         return res
     }).catch(error => {
         console.error(error)
         throw error
     })
     return cryptoBuyPromise
 }

ParseIntoDto (CryptoUserPojo : CryptoUserPojo) : cryptoUserDto{
    const cryptoUserDto : cryptoUserDto = {
      crypto_id: CryptoUserPojo.crypto_id,
      user_id: CryptoUserPojo.user_id,
      amount: CryptoUserPojo.amount  
    }
    return cryptoUserDto
}



}
