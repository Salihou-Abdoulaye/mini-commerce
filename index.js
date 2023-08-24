const express = require('express')
const app = express()
const router = require('./routes/produtRoute')
const mongoose = require('mongoose')

const port = 4000

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/db_commerce');
    console.log('DATABASE CONNECTED!')
}


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Everyone welcome to my api !')
})
app.use('/api', router)
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})