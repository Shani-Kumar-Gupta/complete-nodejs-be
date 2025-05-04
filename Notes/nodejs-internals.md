# **NodeJS Internals:**

## NodeJS Major Components:
* JavaScript Runtime Environment: Google V8 Engine
* Event loop: Libuv (Handling File System access, asynchronous operations, networking and cuncurrency)
* Standard Library (Modules)
  * FS Module
  * buffer: To handle binary data
  * child_process: To run child process
  * events: To handle events
  * http: Node to act as http server
  * https: Node to act as https server
  * os: provide information about operating system
  * path: To handle file path
  * querystring: To handle url query string
  * readline
  * zlib
  * tls

## Misconceptions:
* NodeJS is single threaded. (Depends what parts of code we are taking about because we have thread pool as well).
* NodeJS uses thread pool for all IO operations. Thread pool need to be block while IO.
* Event Loop runs on one thread. V8/JavaScript runon another thread.
* setImmediate vs process.nextTick() 

## How NodeJS Code Executes?

[index.js] --- Executes using ---> node index.js --- Creates ---> Node Process [Each Process has Main Thread and Thread Pool(Executes CPU Intensive Task)]

By Default Thread -> 4
Upto -> 128 [We can control the thread]

CPU Intensive Task:
* FS
* Crypto
* Compression

Main Thread Execution Sequence:
* Init Project
* Top level code execution
* Require module loading
* Start Event Loop

Event Loop execution sequence:
* Expired timmer callbacks execution
  * setTimeout
  * setInterval
* IO Pooling
* setImmediate callback executions
* Closed callback
