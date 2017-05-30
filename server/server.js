const express = require('express');

const app = express();

var port = process.env.PORT || 3000

app.listen(port, (err)=>{
  if(err){
    return console.log(`Error running server`);
  }
  console.log(`Node server running on port ${port}`);
})
