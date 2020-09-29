const express = require('express')
const path = require('Path')

const app = express();
const PORT = process.ENV.PORT || 8000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname,'/assets')))


app.listen(PORT, () => {
    console.log(`Sale started at Port ${PORT}`)
})