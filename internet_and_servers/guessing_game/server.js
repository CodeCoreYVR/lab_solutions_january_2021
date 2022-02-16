const net = require('net');

const guessingNumber = 5;
let times = 0;

const server = net.createServer(
    socket => {
        socket.on('data', data => {
            const number = parseInt(data.toString());
            console.log(number)
            let result = '';
            times++;
            if (number == guessingNumber) {
                result = `You guessed right in ${times} attempt(s)`;
            } else if (number > guessingNumber) {
                result = `Guess lower`;
            } else {
                result = `Guess higher`;
            }
            socket.write(result);
        })
    }
);


server.listen(4000);
console.log('Server is listening on the port 4000');