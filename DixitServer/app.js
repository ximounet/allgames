var sio = require('socket.io');
console.log('Hello world');
var server = sio.listen(8000);
server.sockets.on('connection', function (socket) {
    console.log('A new client connected!');
});
//# sourceMappingURL=app.js.map