const express = require('express');
const app = express();

app.set('view engine','hbs');
app.use(express.static('public'))
app.use(express.json({extended: true}))

app.get('/',(req,res)=>{
  res.redirect('/slider')
})

app.get('/slider',(req,res)=>{
  res.render('slider')
})

app.listen(3000)
