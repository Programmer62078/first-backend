CREATE A PAGE THAT SHOWS A NAVIGATION BAR OF MYNTRA WITH THE FOLLOWING LINKS:
A. HOME
B. MEN
C. WOMEN
D. KIDS
E. CART

CLICKING ON EACH LINK PAGE SHOULD NAVIGATE TO THAT PAGE AND A WELCOME TO SECTION TEXT IS SHOWN THERE.

format for this

const http = require("http");

const server = http.createServer((req, res) => {
all the thing come here 
res.setHeader()
res.write()
return res.end()
});

server.listen(3000, () => {
  console.log(`server running on address http:/localhost:3000`);
});
