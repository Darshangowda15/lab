const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    if (req.url === "/lab") {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write("<h1 style='text-align:center;'>Welcome to Darshan’s Ctrl+C Ctrl+V Zone </h1>");
        res.write("<h3 style='text-align:center;'>Bro's and My Dear Girls, Just Execute & Escape This Lab </h3>");


        res.write(`
            <pre>
#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}
            </pre>
        `);

        res.write("<h3>Conclusion: C code needs GCC compiler to run</h3>");

        res.end();
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Page Not Found</h1>");
    }

});

// Port
const PORT = process.env.PORT || 4000;

// Start server
server.listen(PORT, "0.0.0.0", () => {
    console.log("Server Running...");
});