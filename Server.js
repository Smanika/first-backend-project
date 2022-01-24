const PORT = 3000;
const express = require('express');
const path = require('path');
const app = express();
// sendFile will go here
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var Movies = [
     {
     name: 'TronMan-I',
     Year: '2009'
 },
 {
    name: 'MS Dhoni',
    Year: '2016'
},
{
   name: 'The Twilight',
   Year: '2009'
}
]
app.get('/index',function(req,res){
    return res.render('index', {Movies:Movies})
})

//https://github.com/geeteshcode/codingninjasBackend
