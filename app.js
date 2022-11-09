const http = require('http');
const {readFile} = require('fs/promises');
const port = 8080;

const handler = async (req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    const data = await readFile("./index.html", "utf8");

    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  } else if (req.url === "/about" || req.url === "/about.html") {
    const data = await readFile("./about.html", "utf8");

    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  } else if (req.url === "/contact-me" || req.url === "/contact-me.html") {
    const data = await readFile("./contact-me.html", "utf8");

    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  } else {
    const data = await readFile("./404.html", "utf8");
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  }
};

const server = http.createServer(handler);

server.listen(port);

