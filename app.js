const express=require ("express");
const app=express();
const PORT = process.env.PORT || 3000;
const bodyparser = require ("body-parser");
const string_square=require("./string_square");

app.use(bodyparser.json());

app.get('/', (req, res) => res.send("Hello World"));

app.get('/square', (req, res) => res.send(
    res.status(200).json(string_square(req.query.string))
));



app.listen(PORT);
