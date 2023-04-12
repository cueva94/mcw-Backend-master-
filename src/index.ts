import express from 'express'
import UserRouter from './routes/user.routes'
import CryptoRouter from './routes/cryptocurrency.routes'
import CryptoUserrouter from './routes/criptoUser.routes'

const app = express()
const PORT = 3000
const cors = require('cors')
const whiteList =[
    'http://localhost:4200'
]

app.use(express.json())
app.use(cors({origin: whiteList}))

app.use('/api/users', UserRouter)
app.use('/api/crypto', CryptoRouter)
app.use('/api/cryptoUser',CryptoUserrouter)

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
})