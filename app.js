const express=require ("express");
const app=express();
const PORT = process.env.PORT || 3000;

const string_square=require("./string_square");

app.get('/', (req, res) => res.send("Hello World"));

app.get('/square', (req, res) => res.send(
    string_square(req.query.string)+""
));



app.listen(PORT);
