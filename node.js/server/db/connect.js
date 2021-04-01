let Sequelize = require('sequelize')

module.exports = new Sequelize(config.mysqlOptions.database, config.mysqlOptions.username, config.mysqlOptions.password, {
    host: config.mysqlOptions.host,
    dialect: config.mysqlOptions.dialect,
    timezone: config.mysqlOptions.timezone,
    pool: config.mysqlOptions.pool
})