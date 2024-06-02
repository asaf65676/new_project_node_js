const express = require('express');
const app = express();
const PORT = 8080;
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get('/about', (req, res) => {
    res.render('about.hbs', {
    });
});

app.get('/payment', (req, res) => {
    res.render('payment.hbs', {
    });

});
app.get('/houses', (req, res) => {
    res.render('houses.hbs', {
    });

});
app.get('/finds', (req, res) => {
    res.render('finds.hbs', {
    });
});

app.listen(PORT,() =>{

});