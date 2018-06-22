export default (request, response, next) => {
    if(Math.random() > 0.9) {
        response.status(401).end('Nope')
        next('Nope')
    }
    next()
};