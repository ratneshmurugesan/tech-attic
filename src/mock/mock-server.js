const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const server = jsonServer.create();

// Data
const metaData = require('./data/meta-data');
const weekData = require('./data/week-data');


// server.use((_, res, next) => {
//     res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//     res.header('Access-Control-Allow-Headers', '*');
//     next();
// });

server.get('/api/mock/welcome', (_, res) => {
    res.json('Hello Mock');
});

server.get('/api/mock/timetracking/meta-data/', (_, res) => {
    res.json(metaData);
});

server.use(bodyParser.json());
server.post('/api/mock/timetracking/week-data/', (req, res) => {
    console.log("POST request listener");
    const body = req.body;
    console.log("POST body", body);
    res.json(weekData);
});

server.listen(1993, () => { console.log('Mock server running at 1993 port') });