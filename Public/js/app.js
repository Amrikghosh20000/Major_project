const express= require('express');
const app=express();
const port=3000;
const twilio=require('twilio');

app.get("/",(req,res)=>{
   var client = new twilio('AC3b04ebd9238c8c5adc66b94a448a440a','d5580aca47d2c79eaf29452d5447c541')
    
   client.messages.create({
        to:'+91 98319 46948',
        from:'+1 934 202 4171',
        body:'Hello from wishlist our BCA Major project',
    })



    res.send("SMS sent!"); 

})
app.listen(port,()=>{
    console.log("App is listening on port ",port)
})
