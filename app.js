const express=require('express')
const _app=require('./config.js')
app=express();

app.get('/',(req,res)=>res.send('hello'));

app.listen(_app.port);

console.log('Application is running on http://localhost:'+ _app.port);
