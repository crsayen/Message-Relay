import socketio

sio = socketio.Client()

@sio.on('receive')
def on_message(data):
    print(data)

sio.connect('http://http://35.223.229.47:80')

while 1:
  msg = input()
  sio.emit('send', msg)
