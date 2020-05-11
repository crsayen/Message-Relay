var app = require('express')();
var cors = require('cors')
var server = require('http').createServer(app);
var io = require('socket.io')(server,{pingTimeout: 0, pingInterval: 500, origins: '*:*'});

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('listening on 0.0.0.0:80');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('send', msg =>
    socket.broadcast.emit('receive', msg)
  )

  socket.on('disconnect', () => {
    console.log('disconnected:', socket.id );
  });
});