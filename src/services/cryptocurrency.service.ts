import { CryptoPojo } from "../data/models/cryptocurrency.model"
import { CryptoRepository } from "../data/repositories/cryptocurrency.model"
import { cryptoDto, newCryptoDto } from "../types"
import Logger from "../utils/utils"
export class CryptoServices{
    
    _cryptoRepository: CryptoRepository
    constructor(){
        this._cryptoRepository = new CryptoRepository()
    }

    async addCrypto( crypto : newCryptoDto) : Promise <string> {
       let cryptoPojo : CryptoPojo = crypto as CryptoPojo 
        const cryptoPromise = this._cryptoRepository.addCrypto(cryptoPojo)
        .then(crypto_id => {
            return crypto_id
        }).catch(error => {
            Logger.error(error,"Error en el servicio addCrypto")
            throw error
        })
        return cryptoPromise
    }

    //TODO: Devolver todas las cryptocurrency de la bbdd
    async getCryptos(): Promise <cryptoDto[]>{
        const cryptoPromise = await this._cryptoRepository.getCrypto().then(cryptosAsPojo => {
            let cryptosAsDto : cryptoDto [] = []
            cryptosAsPojo.forEach(cryptoAsPojo => {
                let cryptoAsDto = cryptoAsPojo
                cryptosAsDto.push(cryptoAsDto)
            })
            return cryptosAsDto
        }).catch(error => {
            Logger.error(error, "Error en el servicio getCryptos")
            throw error
        })
        return cryptoPromise
    }
} 