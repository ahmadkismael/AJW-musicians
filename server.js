const express = require('express');
const app = express()
const methodOverride = require('method-override')

const musicians = require('./controllers/musicians');

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));

app.get('/', (req,res) =>{
res.render('home')
})

app.use('/musicians', musicians )

app.get('/*', (req,res) =>{
    res.render('404');
})

app.listen(4000, () =>{
    console.log("listening on port 4000")
})