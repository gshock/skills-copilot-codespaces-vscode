//create web server
//create a route
//create a request handler
//create a response handler
//create a response
//send a response
//listen to a port

// create a web server
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    //create a route
    if (req.url === '/') {
        //create a request handler
        fs.readFile('./public/index.html', 'UTF-8', (err, data) => {
            //create a response handler
            res.writeHead(200, { 'Content-Type': 'text/html' });
            //create a response
            res.write(data);
            //send a response
            res.end();
        });
    } else if (req.url === '/about') {
        //create a request handler
        fs.readFile('./public/about.html', 'UTF-8', (err, data) => {
            //create a response handler
            res.writeHead(200, { 'Content-Type': 'text/html' });
            //create a response
            res.write(data);
            //send a response
            res.end();
        });
    } else if (req.url === '/contact') {
        //create a request handler
        fs.readFile('./public/contact.html', 'UTF-8', (err, data) => {
            //create a response handler
            res.writeHead(200, { 'Content-Type': 'text/html' });
            //create a response
            res.write(data);
            //send a response
            res.end();
        });
    } else if (req.url === '/api/users') {
        //create a request handler
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'John Doe', age: 30 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        //create a response
        res.write(JSON.stringify(users));
        //send a response
        res.end();
    } else {
        //create a request handler
        fs.readFile('./public/404.html', 'UTF-8', (err, data) => {
            //create a response handler
            res.writeHead(200, { 'Content-Type': 'text/html' });
            //create a response
            res.write(data);
            //send a response
            res.end();
        });
    }
});