const express = require('express');
const Connect = require('./comman/connection');
const app = express();

Connect();
const port = 9900;

app.listen(port,()=>{
    console.log("server in running on:",port)
})