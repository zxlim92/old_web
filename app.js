const express = require('express');
const app = express();
const port = 3000;
const path = require ('path');
// app.set('views', path.join(__dirname,'views'));
// app.set('view engine','ejs');
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/img',express.static(__dirname+'public/img'))
app.set('views', path.join(__dirname,'public/views'));
app.set('view engine','ejs');
app.get('/',function(req,res){
    // res.render('main');
    res.render('main')
    console.log('home');
});
app.listen(port,function(){
    console.log('test')
});
app.get('/test',function(req,res){
    // res.send('hello test');
});