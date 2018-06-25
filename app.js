import express from 'express'
import sayHello from './sayHello.js'
import security from './middlewares/security'
import personsRouter from './routers/personsRouter'

const app = express()

app.use(security)

app.get('/', (request, response) => {
    const { name } = request.query;
    if (Array.isArray(name) === true)
        return response.end(sayHello(name.join(' and ')))
    response.end(sayHello(name))
})
.post('/', (request, response) => {
    response.status(401).end(`Nope ${request.hackerProbability}`);
})

app.use('/persons', personsRouter({ scope: 'app' }))

const routerProject = express.Router({ mergeParams: true })

routerProject.use('/persons', personsRouter({ scope: 'project' }))

app.use('/projects', routerProject)

export default app