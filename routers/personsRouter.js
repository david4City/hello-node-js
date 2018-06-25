import express from 'express'
import Person from '../models/Person'

export default ({ scope = null } = {}) => {
    Person.sync(); // Synchronize the table structure with the server

    const router = express.Router({ mergeParams: true })

    router.route('/')
        .get((request, response) => { /* ... */ })
        .post((request, response) => { /* ... */ })

    router.route('/:personId')
        .get((request, response) => { /* ... */ })
        .delete((request, response) => { /* ... */ })
        .put((request, response) => { /* ... */ })

    return router
}