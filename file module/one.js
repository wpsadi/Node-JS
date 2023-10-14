const fs = require("fs")

file= fs.readdirSync(".")
console.log(file)

read = fs.readdir("./", function(err, files){
    if (err){
        console.log(err)
    }
    else{
        console.log(files)
    }

})

// console.log(read)