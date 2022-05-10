const express = require('express');
const app = express();
const cluster = require('cluster');
const totalCPUs = require('os').cpus().length;

const fabObj = require('./mathlogic/fabboniciseries');

if(cluster.isMaster){
    console.log(`total number of cpus are ${totalCPUs}`);

    for(var i = 0; i < totalCPUs; i++){
        cluster.fork();
    }

    //if cluster is online 

    cluster.on("online" , worker =>{
        console.log(`worker id is ${worker.id} and pid is ${worker.process.pid}`)
    })

    //exist 

    cluster.on('exit' , worker =>{
        console.log(`worker id ${worker.id} and PID is ${worker.process.pid} is offline`);
        console.log('let fork new worker ');
        cluster.fork();
    })
}





app.get('/' , (req , res)=>{
    let number = fabObj.calculateFibonaciValue(Number.parseInt(req.query.number));
    res.send(`<h1>${number}</h1>`)
})
app.listen(3001 , ()=>{
    console.log('listning on port 3001');
})