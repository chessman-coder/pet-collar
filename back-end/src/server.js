import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 1214

app.use(json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
