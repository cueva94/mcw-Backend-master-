import {CryptoUserServices} from "../services/cryptoUser.service"
import {cryptoUserDto} from "../types"
import Logger from "../utils/utils";


const cryptouserServices : CryptoUserServices = new CryptoUserServices ()

export const cryptoUserController = {

    cryptoUsers: (req: any, res:any) =>{
        try {
      const user_id = req.body
           cryptouserServices.cryptoUsers(user_id)
            .then(result => {
                res.json(result)
                Logger.warn(result)
            })
            
        } catch (error) {
            Logger.error(error)
            res.sendEstatus(500)
        } 
    },

    cryptoBuy: (req: any, res: any) =>{
        try {
            const newCryptoBuy : cryptoUserDto = req.body
            cryptouserServices.cryptoBuy(newCryptoBuy)
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
    }


 }
