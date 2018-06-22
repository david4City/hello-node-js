import express from 'express';
import sayHello from './sayHello.js'
import security from './middlewares/security'

const app = express();

app.use(security);

app.param('personId', (request, response, next, id) => {
    request.values = {
        person: {
            id
        }
    };
    next();
});
// ...
app.get('/', (request, response) => {
    const { name } = request.query;
    if (Array.isArray(name) === true)
        return response.end(sayHello(name.join(' and ')))
    response.end(sayHello(name))
})
.get('/persons/:personId', (request, response) => {
    response.json(request.values.person)
})
.post('/', (request, response) => {
    response.status(401).end('Nope');
})

export default app;