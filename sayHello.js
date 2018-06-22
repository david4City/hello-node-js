import superb from 'superb'
module.exports = (name = 'bob') => {
    return `Hello ${name}, you are ${superb()}!`
}