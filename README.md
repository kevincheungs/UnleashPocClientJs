# UnleashPocClientJs

To setup proxy server (client SDK connects to proxy, which connects to main Unleash tool)

1. node src/proxyServer.js

To Run the Client side SDK

Uses webpack
https://webpack.js.org/guides/installation/

and simple http server
https://www.npmjs.com/package/http-server

1. npm run build
2. cd dist
3. http-server -p [port]

Access server at http://localhost:[port]
