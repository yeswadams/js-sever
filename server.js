// Import the http library, which is used to create an HTTP server
const http = require('http'); // 'require' is used to include the http module

// Import the fs (file system) library, which allows us to interact with the file system
const fs = require('fs');

// Define a constant for the port number the server will listen on
const port = 3000; // Using a constant ensures the port number doesn't change during runtime

// Create an HTTP server
const server = http.createServer(function(req, res) {
    // Write the HTTP response headers with status code 200 (OK) and specify the content type as HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // Read the 'index.html' file from the file system
    fs.readFile('index.html', function(error, data) {
        if (error) { // If there is an error (e.g., the file does not exist):
            res.writeHead(404); // Write a 404 (Not Found) status code in the response headers
            res.write('Error: File Not Found'); // Write an error message in the response body
        } else { 
            res.write(data); // If no error, write the content of the 'index.html' file to the response body
        }
        res.end(); // End the response to complete the request/response cycle
    });
});

// Make the server listen on the specified port
server.listen(port, function(error) {
    if (error) { // If there is an error while starting the server:
        console.log('Something went wrong', error); // Log the error to the console
    } else { 
        console.log('Server is listening on port ' + port); // Log a success message with the port number
    }
});
