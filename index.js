const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("hello world");
 });

 
 const port = 8090
 app.listen(port);
 