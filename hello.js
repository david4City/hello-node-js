import http from 'http'
import url from 'url'
import sayHello from './sayHello.js'

const requestHandler = (request, response) => {
    const { query: { name } } = url.parse(request.url, true)
    if(Array.isArray(name) === true)
        return response.end(sayHello(name.join(' and ')));
    return response.end(sayHello(name));
}
// ...
const server = http.createServer(requestHandler)

server.on('error', (error) => {
    console.error(error);
})

server.on('listening', () => {
    console.info('Listening on http://localhost:3000')
})

server.listen(3000, (err) => {
    if(err) {
        return console.error(err)
    }
});