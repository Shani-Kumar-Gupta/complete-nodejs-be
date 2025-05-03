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