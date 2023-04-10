import express from "express"
import { cryptoController } from "../controllers/cryptocurrency.controllers"

const router = express.Router()

router.post('/newCrypto', cryptoController.addCrypto)
router.get('/allCrypto', cryptoController.getCrypto)

export default router 
module.exports = router