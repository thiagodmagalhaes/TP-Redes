const net = require('net') 
//Criando uma constant para Ler texto do client
const readline = require('readline')

// Criando um socket para o Client
const client = new net.Socket()
const rl = new readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
client.connect(4000,'127.0.0.1' , () => {
    console.log('Conectou')
    rl.addListener('line',line => {
        client.write(line)
    })

})


