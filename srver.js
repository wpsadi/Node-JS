const express = require("express")

app = express();

app.get("/", function(req,res){
    res.send("hash define")
})
    
app.listen(8000, function(){
    console.log("Server is online")
})