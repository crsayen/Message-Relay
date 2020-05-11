var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
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