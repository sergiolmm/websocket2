/*
'use strict';
const express = require('express');

const PORT = process.env.PORT || 3001;
const INDEX = '/index.html';
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
const io = require("socket.io")(server,{
  cors: {
    origins: "*:*",
    methods: ["GET", "POST"]
  }
}).listen(443);
io.on('connection', (socket) => {
  socket.on('disconnect', () => console.log('Client disconnected'));
  socket.on('messaged', (args) => {
    io.emit('message', args);
    console.log(args)
  });

   socket.on('event_name', (...args) => {
    io.emit('message2', args);
     console.log(args)
  });
});
*/


const express = require('express')
const app = express()
const porta = process.env.PORT || '3000'

app.get('/oi', (req, res) => {
  res.send('Hello World!')
})

app.get('/', function(req, res, next) {
  res.json({message: 'alive'});
});

app.listen(porta, () => {
  console.log(`Example app listening on port ${porta}`)
})

/*
const express = require('express')

var webserver = express()

webserver.use((req, res) =>
   res.sendFile('/websocket-client.html', { root: __dirname })
 )


 //.listen(80, () => console.log(`Listening on ${80}`))
 
 app.get('/oi', (req, res) => {
   res.send('Hello World!')
 })


 var port = normalizePort(process.env.PORT || '3000');
 webserver.set('port', port);

var server = http.createServer(webserver);

server.listen(port);


 function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}




 const { WebSocketServer } = require('ws')

 const sockserver = new WebSocketServer({ port: porta })

 sockserver.on('connection', ws => {
 console.log('New client connected!')
 ws.send('connection established')
 ws.on('close', () => console.log('Client has disconnected!'))
 ws.on('message', data => {
   sockserver.clients.forEach(client => {
     console.log(`distributing message: ${data}`)
     client.send(`${data}`)
   })
 })

 ws.onerror = function () {
   console.log('websocket error')
 }
}
)
*/