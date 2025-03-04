# Simple Node.js HTTP Server

This project demonstrates a basic HTTP server built using Node.js. The server serves an `index.html` file to clients and handles errors gracefully when the file is not found. The project is a great starting point for learning how to use Node.js to create a web server and work with the file system.

---

## Features

- Serves static HTML content ('index.html').
- Uses the Node.js 'HTTP' module to create the server.
- Handles errors gracefully by displaying an error message if the requested file is not found.
- Logs server startup messages and errors to the console.

---

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v12.0.0 or later)

---

## Getting Started

Follow these steps to set up and run the server:

### 1. Clone the repository
git clone <repository-url>
cd https://github.com/yeswadams/js-sever

## 2. Install Dependencies
No additional dependencies are required for this project as it uses only the built-in Node.js modules (http and fs).

## 3. Add an index.html File
Create an index.html file in the root directory of the project. This file will be served as the response to HTTP requests. Below is an example of a simple index.html file:

html
Copy
Edit
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Node.js Server</title>
</head>
<body>
    <h1>Welcome to the Simple Node.js HTTP Server!</h1>
    <p>This is a static HTML page served by the server.</p>
</body>
</html>

## 4. Run the Server
Use the following command to start the server:

## 5. Access the Server
Open your browser and navigate to:

http://localhost:3000
Code Structure
server.js: The main file that sets up and runs the HTTP server.
index.html: The HTML file that the server serves to clients. (You need to create this file.)

## How It Works
The HTTP module is used to create the server.
When a request is received, the server:
Reads the index.html file using the fs module.
If the file is found, its content is sent as a response.
If the file is not found, a 404 error message is returned to the client.
The server listens for incoming requests on port 3000 and logs messages to the console.
Error Handling
If the index.html file is missing or cannot be read, the server responds with:
HTTP Status Code: 404
Message: Error: File Not Found
Logs
Startup Log: When the server starts successfully, it logs:

## The server is listening on port 3000
Error Log: If the server fails to start, it logs:

Something went wrong: [Error details]
## Customization
Port Number: The server listens on port 3000 by default. To change the port, modify the port constant in server.js:

const port = <your-port-number>;
HTML Content: Update the index.html file to serve your desired content.

## Contributing
Feel free to fork this repository and submit pull requests for improvements or additional features. Contributions are always welcome!

## License
This project is licensed under the MIT License.

## Acknowledgments
Thanks to the Node.js documentation and community for providing resources to get started with server-side programming.
 
 
