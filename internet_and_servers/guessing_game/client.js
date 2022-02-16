const net = require('net');

const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
})

const client = new net.Socket();

client.on('data', data => {
    if (data.toString().indexOf("You guessed right") > -1) {
        console.log(data + '');
        client.end();
        process.exit();
    } else {
        interface.prompt();
        interface.question(`${data} \n> `, answer => {
            client.write(answer);
        })
    }

})

client.connect(4000, 'localhost', () => {
    interface.question("type the number:\n> ", answer => {
        client.write(answer);
    })
})