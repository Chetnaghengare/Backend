import express from 'express';
const app = express();

app.get('/' , (req , res) =>{
    res.send('Hello World!');
})


// get list of 5 jokes

app.get('/jokes' , (req,resp)=>{
    const jokes = [
        {
            id : 1 ,
            title : 'A joke' ,
            content : 'this is a joke' 
        },
        {
            id : 1 ,
            title : '2nd joke' ,
            content : 'this  2nd is a joke' 
        },
        {
            id : 1 ,
            title : '3rd joke' ,
            content : 'this 3rd is a joke' 
        },
    ];
    resp.send(jokes);
});
const port =  process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
});