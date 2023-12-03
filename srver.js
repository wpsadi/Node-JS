const http = require("http")

const regex = /\/items\/\w+/g
// console.log("hi")

let srvr = http.createServer(function(req,res){
    // if (err){
    //     console.log("error in starting the server")  
    //     return;
    // }
    if (req.url == "/"){
        res.getHeaders(content-type, "text/plain")
        res.end("You are at right place")
    }
    else if ((req.url == "/items") || (req.url == "/items/")){
        res.getHeaders(content-type, "text/plain")
        res.end("just a one step more")
    }
    // else if (regex.test(req.url) == true){
    //     
    //     res.end({"hi":"bye"})
    // }
    else{
        // res.getHeaders = "application/json"
        let x = req.url
        x = x.split("/")    
        if (x.length > 2){
            console.log(x[1], )
            x = x.slice(2,x.length)
            console.log(x)
            let obj = new Object()
            count= 0
            for (i of x){
                obj[count++] = i
                
            }

            res.setHeader('content-type', "application/json")

            res.end(JSON.stringify(obj))
        }
        else{
            let obj = {"message": "no result found"}
            res.setHeader('content-type', "application/json")

            res.end(JSON.stringify(obj))
            // res.end("hi")
        }

    }
    
})

srvr.listen(8000,function(){
    console.log("Server is up online")
})
