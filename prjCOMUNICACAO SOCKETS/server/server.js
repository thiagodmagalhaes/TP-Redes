const app = require('express')()

// "INICIALIZANDO O SOCKET"
const http = require('http').createServer(app)
const io = require('socket.io')(http) // INSTANCIA DO SOCKET IO

// DIRECIONANDO PARA PAGINA INICIAL
app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/index3.html')
})

io.on('connection',(socket)=>{
    console.log('Novo usuario conectado ', socket.id)
    socket.on('msg',(msg)=>{
        console.log(msg)
        socket.broadcast.emit('msg',msg);
    })
})

http.listen(1998, '127.0.0.1', function(){
    console.log('Ouvindo porta 1998')
})

