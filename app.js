const express = require('express')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname,'/assets')))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/shop', (req, res) => {
    res.render('shop')
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.listen(PORT, () => {
    console.log(`Sale started at Port ${PORT}`)
})