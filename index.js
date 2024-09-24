require('dotenv').config()
const express = require('express');
const app = express();
const port = 5000;

app.get('/' , (req , res)=>{
    res.send("Hello I am Chetna");
})

app.get('/login' , (req , res)=>{
    res.send("Enter your details");
})
app.get('/User' , (req , res)=>{
    res.send("See your details");
})
app.listen(process.env.PORT , ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
});

console.log("hello");