const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.set("view engine","ejs");
app.use(express.static('Public'))
app.use('/image',express.static(__dirname + 'Public/image'))
app.use('/css',express.static(__dirname   + 'Public/css'))
app.use('/css',express.static(__dirname +  'Public/js'))
app.use(express.urlencoded({extended: true}))

const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Wishlist")

const registerschema=new mongoose.Schema({
  email:String,
  password:Number
});

const otpschema=new mongoose.Schema({
  email:Number,
  password:Number
})

const o1=mongoose.model("otp",otpschema)

const a1=mongoose.model("wish",registerschema)


app.get("/",function(req,res){
  res.render("landing")
})
  
app.get("/welcome",function(req,res){
    res.render("welcome")
  });
  

app.get("/otp",function(req,res){
    res.render("otp")
  });  
  
app.get("/verification_page",function(req,res){
    res.render("verification_page")
  });
  
app.get("/cart",function(req,res){
    res.render("cart")
  });

  app.get("/shopping",function(req,res){
    res.render("shopping")
  });
 
  app.get("/buynow",function(req,res){
    res.render("buynow_page")
  });

  app.post("/",function(req,res){

    const b1=new a1({
      email:req.body.username,
      password:req.body.password
    });
    b1.save(function(err){
      if(err){
        console.log(err)
      }
      else{
        res.render("otp")
      }
    });
  });

  app.post("/otp",function(req,res){
    const d1=new o1({
      email:req.body.number,
      password:req.body.pass
    })
    d1.save(function(err){
      if(err){
        console.log(err)
      }
      else{
        res.render("verification_page")
      }
    });
  });

  app.listen("8000",function(){
    console.log("Server is started at port number 8000");
   })  

  
  