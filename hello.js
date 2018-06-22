import http from 'http'
import app from './app';

const server = http.createServer(app)

server.on('error', (error) => {
    console.error(error);
})

server.on('listening', () => {
    console.info('Listening on http://localhost:3000')
})

server.listen(3000, (err) => {
    if (err) {
        return console.error(err)
    }
});