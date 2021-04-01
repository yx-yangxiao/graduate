let routesController = require(__basename + '/routesController/routesController.js')
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('访问成功')
    })

    app.get('/home', (req, res) => {
        res.send('主页')
    })
    app.post('/register', routesController.register)
}