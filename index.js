const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

http 
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    switch (req.url) {
        case "/":
            res.write('<h1 style="color: red">Nothing To See Here!</h1>');
            break;
        case "/test":
            res.write('<p style="font-size: 12px; color: red">Nothing To See Here!</p>');
            break
        case "/hangingwiththebigdogs":
            res.write('<p style="font-size: 10px; color: red">Look At ME!</p>');
            break
        default:
            res.statusCode = 404;
            res.write("Error: 404 UHOH!! You Shouldn't Be Here! You did something wrong.")
            break;
    }
    res.end();
  });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
      });