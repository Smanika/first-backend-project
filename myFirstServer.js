/*const abd={
    name:"Smanika"
}
abd.name;
*/

// const http = require('http');  -> not used in express because express khud create server krta
//const date= require('./index');
//const fs= require('fs');
//const url=require('url');
//const router = express.Router();


const PORT = 8000;
const express = require('express');
const path = require('path');
const app = express();

const database= require('./config/mongoose')
const Movie= require('./models/movie')

const chatServer = require('http').Server(app);
const socket= require('./config/socket').socket(chatServer);
chatServer.listen(2000);
console.log("Server on port 2000")

//socket.on()

// sendFile will go here
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

/*app.get('/profile',function(req,res){
    return res.render('profile', {myInfo : myInfo});
 })*/
/*
// MIDDLEWARE
app.use(function(req,res,next){
    console.log("Calling 1")
    next();
})
app.use(function(req,res,next){
    console.log("Calling 2")
    next();
})*/

app.use(express.urlencoded({extended:true}));//middleware
// BLOCKING CODE VS NON-BLOCKING CODE
// SINGLE THREAD VS MULTIPLE THREAD
//CALLSTACK       setTimeout();



/*


var myInfo=[{
    name:"Smanika", 
    email:"smanika1169.cse19@chitkara.edu.in",
    batch:"CSE",
    college: "Chitkara University",
    roll: "1910991169"
},
   { name2:"Smanika", 
    email2:"smanika1169.cse19@chitkara.edu.in",
    batch2:"CSE",
},{
    name2:"Smanika", 
    email2:"smanika1169.cse19@chitkara.edu.in",
    batch2:"CSE",
}
]

app.get('/profile',function(req,res){
    return res.render('profile', {
        name:'Smanika', 
    email:'smanika1169.cse19@chitkara.edu.in',
    batch:'CSE',
    college: 'Chitkara University',
    roll: '1910991169',

    name1:'ABC', 
    email1:'abc@gmail.com',
    batch1:'CSE',

    name2:'DEF', 
    email2:'def@gmail.com',
    batch2:'CSE',
    });
 })

*/

/* var Movies = [
     {
     name: 'IronMan-I',
     year: '2009'
 },
 {
    name: 'MS Dhoni',
    year: '2016'
},
{
   name: 'The Twilight',
   year: '2009'
}
] */ 
app.get('/index',function(req,res){

    Movie.find({},function(err,movies){
        if(err){
            console.log("Error Movies")
            return;
        }
        return res.render('index', {Movies:movies})
    })
    
}) 

app.post('/addMovies',function(req,res){
   /* console.log(req.body);
    let obj={
        name : req.body.movieName,
        year: req.body.movieYear
    }
    Movies.push(obj);
    return res.redirect('back'); */
    Movie.create({
        name : req.body.movieName,
        year: req.body.movieYear
    },function(err,newMovie){
        if(err){
            console.log("Error in adding movies")
            return;
        }
        console.log("new movie",newMovie)
        return res.redirect('back')
    })
})

app.get('/movieDelete',function(req,res){
/*
    let movieIndex = Movies.findIndex(value => value.name == req.params.name);
    console.log("Index",movieIndex)
    if(movieIndex!=-1){
        Movies.splice(movieIndex,1)
    }
   return res.redirect('back') */
  /* Movie.find({},function(err,movies){
    if(err){
        console.log("Error movies")
        return;
    }
    
    return res.render('index',{Movies: movies})
   }) */
   Movie.findByIdAndDelete(req.query.id,function(err){
       if(err){
           console.log("Error in deleting")
           return;
       }
       return res.redirect('back');
   })
})


app.post('/updateMovie',function(req,res){
    console.log(req.body);
   Movie.findByIdAndUpdate(req.query.id,req.body,function(err,updateMovie){
      if(err){
          console.log("Error in Updating")
          return;
        }
      console.log(updateMovie);
      return res.redirect('back');
    })
})

/*app.get('/movieUpdate',function(req,res){
    Movie.findByIdAndUpdate(req.query.id,{year : req.body.movieYear},{new: true},function(err,updatedName){
        if(err){
            console.log("Error in updating")
            return;
        }
        console.log("Updated movie",updatedName)
        return res.redirect('back')
    })
})*/

app.listen(PORT,function(err){
    if(err){
        console.log(err);
        return;   
     }
        console.log("Server is running on port",PORT)
})

//GET  POST  PATCH   DELETE