import Sequelize from 'sequelize'

export default new Sequelize({
    database: 'application',
    dialect: 'mysql',
    port: 3307,
    pool: {
        min: 1,
        max: 3,
        acquire: 500,
        idle: 500,
        evict: 2000
    },
    replication: {
        read: [ // round robin config
            { host: 'localhost', username: 'user', password: 'password' },
            // ...
        ],
        write: { host: 'localhost', username: 'user', password: 'password' }
    },
    logging: false,
    define: {
        charset: 'utf8'
    }
})
