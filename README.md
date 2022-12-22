# UnleashPocClientJs

## To setup proxy server (client SDK connects to proxy, which connects to main Unleash tool)

Need to have this setup for client SDK to work.

1. node src/proxyServer.js

- Proxy server needs to connect to the main Unleash server using API key and Unleash URL.
- The client then connect to the proxy server URL/port using the client keys.

## To Run the Client side SDK

Uses webpack
https://webpack.js.org/guides/installation/

and simple http server
https://www.npmjs.com/package/http-server

1. npm run build
2. cd dist
3. http-server -p [port]

Access server at http://localhost:[port]
