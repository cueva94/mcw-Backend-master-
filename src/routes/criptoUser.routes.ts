import express from "express"
import { cryptoUserController } from "../controllers/cryptoUser.controllers"

const CryptoUserrouter = express.Router()

CryptoUserrouter.post('/allCryptoUser', cryptoUserController.cryptoUsers)
CryptoUserrouter.post('/CryptoUserBuy', cryptoUserController.cryptoBuy)


export default CryptoUserrouter 
module.exports = CryptoUserrouter