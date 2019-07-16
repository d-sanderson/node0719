"use strict"

// let arr = [1, 2, 3, 4]

// debugger;

// let mapd = arr.map( e => {
//   return e + e;
// });

// console.log(mapd);


//  Streams in Node
//  [1, 2, 3, 4] like an array, but available over time in chunks (i.e 64kb at a time).
//  What are streams good for?
//  Good if you have huge amts of data you need to process
//  Advice: Use streams all the time, bc you never know when the Data is going to grow
//  Steams are like pipes
//  zip and crypto are examples of streams
//  read, write, transform (the most interesting stream)
//  cluster gives you a way to load balance your processes
//  cluster/pm2 is a useful wrapper for using cluster

// import util from 'util'

// import {exec} from 'child_process';
// import EventEmitter from 'events';
// import { Server } from 'tls';

// const eventEmitter = new EventEmitter();

// eventEmitter.on('change', () => {
//   console.log('Something has changed')
// })

// setInterval(() => {
//   eventEmitter.emit('change');
// }, 1000);



//  Error First Callback Pattern
// exec('ls /', (err, stdout, stderr) => {
//   if(err) {
//     if(err === 408) {
//       console.log(err, '408')
//     }
//     else {
//       process.exit();
//     }
//   }
//   else {

//   }
// });

//Promise based Pattern

// const execP = util.promisify(exec);

// const main = async () => {
//   try {
//  const { stdout, stderr } = await execP('ls /');
//  console.log(stdout)
// }
//   catch (error) {
//     process.exit(1)
//   }
// }
// main();

//  What Happens if you need to handle many events?
// Use an Event Emitter



//  How to Create a Web Server, natively in Node
// import http from 'http';
// const server = http.createServer();

// //  events
// server.on('request', (req, res) => {
//   console.log('Request!!')
//   if (req.url == '/favicon.ico') {
//     res.write('favicon');
//   } else {
//     res.write('Hello David')
//   }
//   res.end();
// })
// server.listen(3000);

// How to Create a Web Server, using Express
// import express from 'express';

// const server = express();

// // Route Handling

// server.get('/', (req, res) => {
//   import() // returns a Promise (asynchronous), require() is Synchronous
//   res.send({ msg: 'Hello Express World'});
// });


// server.get('/favicon.*', (req, res) => {
//   res.sendFile('./favicon...');
// });

// server.listen(3000);

// import is statically evaluated while require is dynamically evaluated.
// process.stdin.resume();
// console.log('Hello12341234')

