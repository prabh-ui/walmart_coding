'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./src/routes');
const path = require('path');

// server config
const port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'))
app.get('/' , (req,res)=>{
   // res.sendFile(path.join(__dirname,"public" ,"index.html"))
   res.sendFile(path.join(__dirname,"public" ,"index.html"))
})
// register routes
registerRoutes(app);

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;


