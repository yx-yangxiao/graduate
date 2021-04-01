exports.serverOptions = {
    host: 'localhost',
    port: 8989
}
exports.mysqlOptions = {
    //数据库的名称
    database: 'yxdb',
    //用户的名称
    username: 'root',
    //密码
    password: '123456',
    //连接地址
    host: 'localhost',
    //连接的数据库类型
    dialect: 'mysql',
    //连接的时区
    timezone: '+08:00',
    //连接池的配置
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

}