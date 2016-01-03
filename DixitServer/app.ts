import * as sio from 'socket.io';

console.log('Hello world');

var server = sio.listen(8000);
server.sockets.on('connection', (socket) => {
    console.log('A new client connected!');
});