const express=require ("express");
const app=express();
const PORT = process.env.PORT || 3000;

let string_square=function(s){

    let l=s.length;
    
    return l*l;
}


app.get('/', (req, res) => res.send("Hello World"));

app.get('/square', (req, res) => res.send(
    string_square(req.query.string)+""
));



app.listen(PORT);
