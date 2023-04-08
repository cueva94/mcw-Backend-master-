import express from "express"
import { userControllers } from "../controllers/user.controllers"

const router = express.Router()

// Router Usuario 

router.post('/add', userControllers.addUser)
router.post('/login', userControllers.userLogin)

export default router 
module.exports = router 