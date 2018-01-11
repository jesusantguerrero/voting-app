const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

const listen = app.listen(process.env.PORT || 500 , () => {
  console.log(`listening port ${listen.address().port}`);
})