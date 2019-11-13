var express = require('express')
var mongoose = require('mongoose');
var app = express();
var bodyparser = require('body-parser');
//app.use(bodyparser.json());
//app.use(express.json);
const path = require('path');
mongoose.connect("mongodb://localhost:27017/MCQ_web")
app.use(express.static('public'));
var flag=0;
var flag2=0;

app.set('view engine', 'ejs');
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());


mongoose.connection.on('error', (err) => {
    console.log('DB connection Failed :*( ');
  });
  
  mongoose.connection.on('connected', (err) => {
    console.log('DB connected :>');
  });
  mongoose.set('useFindAndModify', false);

  var Schema = mongoose.Schema;
  let Question = new Schema({
      Title:String,
      Marks:Number,
      Option1:String,
      Option2:String,
      Option3:String,
      Option4:String,
      Answer:Number                 // Anwer specifies answer number
  })

  let Users = new Schema({
      name: String,
      username:String,
      password: String,
      email: String,
      marks:Number,
  })

  let Logedinuser = new Schema({
      username:String,
      password:String,
  })

  var user = mongoose.model('Users',Users);
  var logedinuser = mongoose.model('logedinuser',Logedinuser);
  var question = mongoose.model('question',Question);

  app.get("/",(req,res)=>{
      res.sendFile(__dirname+"/login.html");
  });

  app.get('/signup.html',(req,res)=>{
      res.sendFile(__dirname+"/signup.html");
  })
  app.get('/login.html',(req,res)=>{
      res.sendFile(__dirname+"/login.html");
  })
  app.get('/login.js',(req,res)=>{
      res.sendFile(__dirname+"/login.js");
  })
  app.get('/adminquestions.html',(req,res)=>{
        res.sendFile(__dirname+"/adminquestions.html");
  })
  app.get('/viewquestions.html',(req,res)=>{
      res.sendFile(__dirname+"/viewquestions.html");
  })
  app.get('/script.js',(req,res)=>{
      res.sendFile(__dirname+"/script.js");
  })
  app.listen(5000);