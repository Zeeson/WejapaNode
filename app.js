var http = require('http'); 
const { parse } = require('querystring');

// get 
var server = http.createServer((req, res) => {   
    if (req.method == 'GET') {         
  
        res.writeHead(200, { 'Content-Type': 'text/html' });   
        res.write('<html><body><p>Hello World, Welcome to WeJapa Internships</p></body></html>');
        res.end();
    
    } else if(req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
          body += chunk.toString(); // convert Buffer to string
      });
      req.on('end', (result) => {
          console.log(body);
          console.log(result);
          const name = result

          res.end(`'Hello ${name}, Welcome to WeJapa Internships"`);
    });
    
  } else {
      res.end(`
          <!doctype html>
          <html>
          <body>
              <form action="/" method="post">
                  <input type="text" name="name" /><br />
                  <button>Save</button>
              </form>
          </body>
          </html>
      `);
  }
});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')

