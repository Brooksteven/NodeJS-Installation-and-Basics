# NodeJS Installation and Basics

## Introduction

NodeJS (or simply Node) is a very popular JavaScript runtime that enables developers to create JavaScript applications outside of the context of a web browser. This lab will walk you through the steps of installing Node and the Node Package Manager (npm) on Windows.

## Objectives

- Install Node.
- Install npm.
- Use basic Node commands to run JavaScript code outside of a browser.
- Use basic npm commands to:
  - Create a package file.
  - Install packages.
  - Run a program.

## Equipment

- A Windows-based computer with administrator privileges.  
  If you do not have administrator privileges, speak with your instructor about potential alternative solutions.

## Submission

Submit your completed lab using the **Start Assignment** button on the assignment page in Canvas.  
Your submission should include:
- A link to the GitHub repository for your project.

## Instructions

### Part 1: Node Installation

1. Navigate to the [NodeJS downloads page](https://nodejs.org/en/download/).
2. Download and run the **Windows installer** (or the one that matches your OS) for the **LTS version**.
3. Follow the installation wizard:
   - Click “Next.”
   - Accept the license agreement.
   - Choose install location (or leave default).
   - Leave default install options.
   - Skip Tools for Native Modules unless told otherwise.
   - Click “Install.”

### Part 2: Node Command Line Interface

Open your command line tool (e.g., Git Bash) and verify your installation:

`node -v`  
`npm -v`  

Run basic JS code using:  

`node -e "console.log(17 + 25)"`  

Create a file called `index.js` and add:  

`console.log('Hello World');`  

Run the file using:  

`node index.js`  

### Part 3: Node Package Manager (npm)

Initialize a project:  

`npm init`  

Or quickly set it up:  

`npm init -y`  

Add a `start` script inside your `package.json`:  

`"scripts": { "start": "node index.js" }`  

Run your project:  

`npm start`  

Install a package like `nodemon`:  

`npm i --save-dev nodemon`  

Run your app with:  

`nodemon index.js`  

## Popular npm Packages

- **Express** – Minimalist web framework  
- **Async** – Async utilities  
- **Lodash** – Utility functions  
- **Axios** – Promise-based HTTP client  
- **Karma** – Test runner  
- **Mocha** – Test framework  
- **Moment** – Date/time manipulation  
- **Babel** – JavaScript compiler  
- **Socket.io** – Real-time communication  
- **Mongoose** – MongoDB object modeling  
- **React** – UI library  
- **Redux** – State management  
- **Jest** – Testing framework  
- **GraphQL** – API query language  
- **Nodemailer** – Email sending  
- **dotenv** – Load environment variables  
- **Passport** – Authentication middleware  

### Part 4: Creating a Server

Empty the contents of your `index.js` file and add:

`const http = require('http');`  
`const hostname = '127.0.0.1';`  
`const port = 3000;`  

`const server = http.createServer((req, res) => {`  
&nbsp;&nbsp;&nbsp;&nbsp;`res.statusCode = 200;`  
&nbsp;&nbsp;&nbsp;&nbsp;`res.setHeader('Content-Type', 'text/plain');`  
&nbsp;&nbsp;&nbsp;&nbsp;`res.end('Hello World!\n');`  
`});`  

`server.listen(port, hostname, () => {`  
&nbsp;&nbsp;&nbsp;&nbsp;`console.log(Server running at http://${hostname}:${port}/);`  
`});`  

Save the file and run:  

`nodemon index.js`  

Open a browser and visit `127.0.0.1:3000`. You should see **Hello World!** displayed.  

### Part 5: Open Exploration

Using what you have learned about HTTP request routing, create at least two different routes for your application. Have the “default” route continue to render the content above.

Experiment with changing the response:

`const server = http.createServer((req, res) => {`  
&nbsp;&nbsp;&nbsp;&nbsp;`res.statusCode = 200;`  
&nbsp;&nbsp;&nbsp;&nbsp;`res.setHeader('Content-Type', 'text/html');`  
&nbsp;&nbsp;&nbsp;&nbsp;`res.write('<h1 style="color: red">Hello World!</h1>');`  
&nbsp;&nbsp;&nbsp;&nbsp;`res.write('<p>I wonder what else we can send...</p>');`  
&nbsp;&nbsp;&nbsp;&nbsp;`res.end();`  
`});`  

Get creative, explore different routes, and experiment with adding features!  
