import socketio
from time import perf_counter

t_start = 0

sio = socketio.Client()

@sio.on('receive')
def on_message(data):
    if data == "peer":
      sio.emit('send', 'pong')
    if data == 'pong':
      print('took {}ms'.format(int((perf_counter() - t_start) * 1000)))
    else:
      print(data)

sio.connect('http://35.223.229.47:80')

while 1:
  msg = input()
  if msg in ['peer', 'server']:
    t_start = perf_counter()
  sio.emit('send', msg)
