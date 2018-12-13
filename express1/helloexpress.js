var express=require('express')
var app=express()
var bodyParser=require('body-parser')
var ejs=require('ejs')
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')
var urlEncodedParser=bodyParser.urlencoded({extended:false})

/*app.get('/',function(req,res){
    res.sendFile(__dirname + '/home.html')
  
})

app.get('/about',function(req,res){

    res.sendFile(__dirname + '/about.html')
})

app.get('/contact',function(req,res){

    res.sendFile(__dirname + '/contact.html')
})*/

app.get('/',function(req,res){
    
  res.render('home')
})
app.get('/about',function(req,res){
    console.log(req.query)
    res.render('about',{urlData:req.query})
  })
  app.get('/contact',function(req,res){
    
    res.render('contact')
  })

app.post('/contact',urlEncodedParser,function(req,res){
    console.log(req.query)
    //res.send("Received information  " +JSON.stringify(req.body))
    res.render('contactsuccess')
})
app.get('/profile/:name',function(req,res){
    //res.send("Iam profile page of " +req.params.name)
    var personData={age:25,location:'Bangalore',
    hobbies:['swimming','driving']}
    res.render('profile',{personName: req.params.name,data:personData})
})
app.listen(8888)