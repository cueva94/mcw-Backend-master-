import express from 'express'
import UserRouter from './routes/user.routes'

const app = express()
const PORT = 3000

app.use(express.json())



app.use('/api/users', UserRouter)

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
})