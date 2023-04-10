import { CryptoPojo } from "../models/cryptocurrency.model"
import {v4 as uuid} from 'uuid'
import { crypt_connect } from "../config/cryptocurrency.db.config"

export class CryptoRepository{

    _db: any = {}
    _cryptoRepository: any 
    constructor(){
        this._db = crypt_connect()
        this._cryptoRepository = this._db.sequelize.getRepository(CryptoPojo)
    }
    //crear cryptocurrency
    async addCrypto ( newCrypto : CryptoPojo) : Promise <string> {
        try {
            newCrypto.crypto_id = uuid()
            newCrypto = await this._cryptoRepository.create(newCrypto)
            return newCrypto.crypto_id
            
        } catch (error) {
            console.error(error)
            throw error 
        }
    }
    
    // obtener lista de cryptos creadas 
    async getCrypto() : Promise <CryptoPojo[]>{
        try {
            return await this._cryptoRepository.findAll()
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}