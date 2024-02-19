
//프라스크에서 서버받는 역할 2
const net = require('net');

const server = net.createServer((socket) => {
  //console.log('클라이언트가 연결되었습니다.');

  socket.on('data', (data) => {
    console.log('받은 데이터:', data.toString());
  });

  socket.on('end', () => {
    //console.log('클라이언트 연결이 종료되었습니다.');
  });
});

const PORT = 3000;
const HOST = '192.168.1.178';  // 호스트 주소를 적절히 수정하세요.

server.listen(PORT, HOST, () => {
  console.log(`서버가 ${HOST}:${PORT} 에서 실행 중입니다.`);
});
