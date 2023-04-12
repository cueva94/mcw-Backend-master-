import { CryptoPojo } from "../models/cryptocurrency.model"
import {v4 as uuid} from 'uuid'
import { crypt_connect } from "../config/cryptocurrency.db.config"
import Logger from "../../utils/utils"
export class CryptoRepository{

    _db: any = {}
    _cryptoRepository: any 
    constructor(){
        this._db = crypt_connect()
        this._cryptoRepository = this._db.sequelize.getRepository(CryptoPojo)
    }

    async addCrypto ( newCrypto : CryptoPojo) : Promise <string> {
        try {
            newCrypto.crypto_id = uuid()
            newCrypto = await this._cryptoRepository.create(newCrypto)
            return newCrypto.crypto_id
            
        } catch (error) {
            Logger.error(error, "Error en el repositorio addCrypto")
            throw error 
        }
    }
    
    async getCrypto() : Promise <CryptoPojo[]>{
        try {
            return await this._cryptoRepository.findAll()
        } catch (error) {
            Logger.error(error, "Error en el repositorio getCrypto")
            throw error
        }
    }
}