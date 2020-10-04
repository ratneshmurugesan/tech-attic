// const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(proxy('/api/mock/', { 
//       target: 'http://localhost:1993/',
//       secure: false, 
//     }));
// };
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/api/mock", { 
      target: 'http://localhost:1993/',
      secure: false, 
    }));
};