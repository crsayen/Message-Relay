var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(80, () => {
  console.log('listening on 0.0.0.0:80');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('send', msg => {
    if (msg == 'server') {
      socket.emit('receive', 'pong')
      return
    }
    socket.broadcast.emit('receive', msg)
  })

  socket.on('disconnect', () => {
    console.log('disconnected:', socket.id );
  });
});