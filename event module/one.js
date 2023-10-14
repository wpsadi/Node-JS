const evtEmitter = require("events")
const { connected } = require("process")

const emitter = new evtEmitter()

//register a listener
emitter.on("messageLogged", function(arg){
    console.log("listener called",arg)
})

//raise an event
emitter.emit("messageLogged",{id:"1"})