'use strict';

const express = require('express')
const ejs = require("ejs")
const app = express()
const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render("home")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


module.exports = app;