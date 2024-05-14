const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index')
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Listening to port 8080 on http://localhost:8080");
});