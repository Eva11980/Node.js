// const http = require('http');
// //   回傳
// const server = http.createServer((request, response) => {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });

//     response.end('<h2>ABC</h2>');
// });
// //不低於1024 一般來說使用3000
// server.listen(3000);


const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.end(`<h2>${request.url}</h2>`);
});

server.listen(3000);