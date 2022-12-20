const port = 3000;

const { createApp } = require('@unleash/proxy');

const app = createApp({
    unleashUrl: 'http://localhost:4242/api/',
    unleashApiToken: 'ß',
    clientKeys: ['proxy-client-key'],
    proxyPort: 3000,
});

app.listen(port, () =>
    console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`),
);