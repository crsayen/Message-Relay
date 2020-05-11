import socketio

sio = socketio.Client()

@sio.on('receive')
def on_message(data):
    if data == "ping":
      sio.emit('send', 'pong')
    print(data)

sio.connect('http://35.223.229.47:80')

while 1:
  msg = input()
  sio.emit('send', msg)
