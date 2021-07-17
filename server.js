var express = require('express'); // 웹서버 사용 .
var app = express();
var fs = require('fs'); // 파일 로드 사용.
port = 4000

// 포트 설정
app.listen(port, function () {
console.log('비제이닮은꼴 서버가 시작되었습니다.');
});

app.use(express.static(__dirname+"/public"));

// 라우팅 설정
app.get('/', function (req, res) { 
fs.readFile('./index.html', function (error, data) {
    console.log("서버트래픽 발생.");
if (error) {
console.log(error);
} else {
res.writeHead(200, { 'Content-Type': 'text/html' }); // Head Type 설정 .
res.end(data); // 로드 html response .
}
});
});
