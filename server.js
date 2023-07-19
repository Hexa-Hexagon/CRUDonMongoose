const http = require('http');
const { PORT } = require('./config/index');
const app = require('./app');



const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
})