import { CryptoServices } from "../services/cryptocurrency.service"
import { newCryptoDto } from "../types"
import Logger from "../utils/utils";

const cryptoServices : CryptoServices = new CryptoServices()

export const cryptoController = {

    addCrypto: (req: any, res: any) =>{
        try {
            const newCrypto : newCryptoDto = req.body
            cryptoServices.addCrypto(newCrypto)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                Logger.log(err)
            })
        } catch (error) {
            Logger.error(error)
            res.sendEstatus(500)
        }
    },

    getCrypto: (_req: any, res:any) =>{
        cryptoServices.getCryptos().then(result =>{
            res.json(result)
          }).catch(error => {
            Logger.error("Error Obtener crypto")
            res.sendEstatus(500)
          })
    }
}