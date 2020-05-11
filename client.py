import socketio

sio = socketio.Client()

@sio.on('receive')
def on_message(data):
    print(data)

sio.connect('http://localhost:3000')

while 1:
  msg = input()
  sio.emit('send', msg)
