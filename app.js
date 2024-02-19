//프라스크에서 서버받는 역할 

const io = require('socket.io-client');
const socket = io('http://192.168.1.178:5000');


    setInterval(()=>{
        socket.emit('send_signal');
    },1000)

    
    socket.on('receive_signal',(data)=>{
    console.log(data);
    })

