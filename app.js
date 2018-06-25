import express from 'express';
import sayHello from './sayHello.js'
import security from './middlewares/security'

const app = express();

app.use(security);

app.get('/', (request, response) => {
    const { name } = request.query;
    if (Array.isArray(name) === true)
        return response.end(sayHello(name.join(' and ')))
    response.end(sayHello(name))
})
.get('/persons/:personId', (request, response) => {
    const { personId: id } = request.params;
    response.end(id)
})
.post('/', (request, response) => {
    response.status(401).end(`Nope ${request.hackerProbability}`);
})

export default app;