if (process.env.NODE_ENV === undefined) {
    module.exports = require('./dev')
} else {
    module.exports = require('./prod')
}