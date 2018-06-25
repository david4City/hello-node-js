export default (request, response, next) => {
    request.hackerProbability = Math.random();
    if(request.hackerProbability > 0.9) {
        response.status(401).end('Nope')
        next('Nope')
    }
    next()
};