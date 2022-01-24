/*exports.myDate = function(){
    return Date();
}*/

const { resolveInclude } = require("ejs");
/*
first(10,function(firstResult,err){
    console.log("1",firstResult);
    if(!err){
        second(firstResult,function(secondResult,err){
            console.log("2",secondResult);
               if(!err){
                   third(secondResult,function(thirdResult,err){
                    console.log("3",thirdResult);
                       if(!err){
                           console.log("result",thirdResult);
                       }
                   })
               }
             })
      }
})

const myPromise = new Promise((resolve,reject)=>{
    resolve(10);
})

myPromise.then(first).then(second).then(third).then((result)=>{
   console.log(result);
})
function first(value){
    return value+10;
}

function second(value){
    return value+10;
}

function third(value){
    return value+10;
}
try{
    ads("abc")
}
catch(err){
    console.log("error---->",err)
}
finally{
    console.log("calling finally")
}
function ads(data){
    console.log(data);
}







/*myPromise.then((d)=>{
    console.log(d);
})
myPromise.catch((d)=>{
    console.log(d);
})
myPromise.finally((d)=>{
    console.log(d);
})*/


function resolvefun(){
    return new Promise(resolve => {
        setTimeout(()=>{
         resolve("Done")
        },1000)
    });
}

async function call(){
    console.log("calling");
    const result = await resolvefun();
    console.log(result);
}
call();


function myFirst(req,res){
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.write("<h3 style='color:blue'> Hey Node.js </h3>" + date.myDate() + data);
    // return res.end();
    var q= url.parse(req.url,true);
    let filePath= "." + q.pathname + '.html';
    console.log("file Name",q.pathname);
 // let filePath;    
  switch(req.url){
      case '/':
       filePath = './index.html'
       break;
       case '/profile':
           filePath= './profile.html'
           break;
       default:
           filePath= './page.html'
  }
  fs.readFile(filePath,function(err,data){
      if(err){
         res.writeHead(404,{'Content-Type':'text/html'});
         return res.end("404 NOT FOUND");
      }
      res.writeHead(200,{'Content-Type':'text/html'});
         return res.end(data);
 
  })
  
  fs.readFile(filePath,function(err,data){
      if(err){
          console.log('error');
          return req.end('<p>ERROR<p>');
         }
         return res.end(data);
  })
 }
 //127.0.0.1==localhost:8000
 const server= http.createServer(myFirst);
 
 server.listen(PORT, function(err){
     if(err){
         console.log("ERROR");
         return;
     }
     console.log("server is on port",PORT);
 })
 
 
 http.createServer(function(req,res){
     res.write("Hey Node.js");
     return res.end();
 }).listen(PORT);
 /* {
    name:'Smanika', 
    email:'smanika1169.cse19@chitkara.edu.in',
    batch:'CSE',
    college: 'Chitkara University',
    roll: '1910991169'
}); */

/*app.get('/profile', function(req, res) {
    console.log("path",__dirname);
  res.sendFile(path.join(__dirname, '/profile.html'));
});

//app.listen(PORT);
//console.log('Server started at http://localhost:' + PORT);


app.get('/',function(req,res){
    return res.send('<h1>HEY EXPRESS</H1>');
})

app.get('/profile',function(req,res){
    return res.send('<h1>HEY PROFILE</H1>');
})

/*app.get('/index',function(req,res){
    return res.send('<h1>HEY INDEX</H1>');
})
*/