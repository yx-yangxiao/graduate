let express = require('express')
let cors = require('cors')
let ejs = require('ejs')
let path = require('path')
let app = express()
    //设置模板引擎,ejs
app.set('views', path.resolve(__dirname, 'views'))
    //html,第一步是设置我们的view引擎是html的   
app.set('view engine', 'html')
app.engine('.html', ejs.__express)
    //处理跨域的方法
app.use(cors())
    //处理静态的路径
app.use(express.static(path.resolve(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('register')
        // res.send({ msg: '后台管理系统', code: 200 })
})
app.listen(10001, () => {
    console.log('the server is running at http://localhost:10001');
})