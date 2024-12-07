const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === `/home`) {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Home </h1>`);
    return res.end();
  } else if (req.url === `/man`) {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Man </h1>`);
    return res.end();
  } else if (req.url === `/woman`) {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Woman </h1>`);
    return res.end();
  } else if (req.url === `/kids`) {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Kids </h1>`);
    return res.end();
  } else if (req.url === `/cart`) {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Cart </h1>`);
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Myntra</title>
  </head>
  <body>
    <head>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/man">Man</a></li>
          <li><a href="/woman">Woman</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </head>
  </body>
</html>
`);
  res.end();
});

server.listen(3000, () => {
  console.log(`server running on address http:/localhost:3000`);
});
