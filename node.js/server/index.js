global.__basename = __dirname
global.config = require(__basename + '/config/config.js')
global.sequelize = require(__basename + '/db/connect.js')
global.Model = require(__basename + '/db/model/model.js')
    //解析请求体的模块
let bodyParser = require('body-parser')
let express = require('express')
let routes = require('./routes/routes')
    //实例化我们的express对象
let app = express()
    //将请求体解析为json格式
app.use(bodyParser.json())
    //
    //extended：false接收任何数据格式, true接收字符串或者数组
app.use(bodyParser.urlencoded({
        extended: false
    }))
    //CORS 跨域资源共享
    //app.all(*)表示所有请求路径必须经过
app.all('*', (req, res, next) => {

    //允许跨域地址
    // res.header("Access-Control-Allow-Origin", req.headers.origin);

    //*表示允许所有域请求，在实际开发中，一般指定允许某个域请求，如上面设置
    res.header("Access-Control-Allow-Origin", "*");

    //如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    //该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求。
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    //该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可
    //res.header('Access-Control-Allow-Credentials', true);

    //允许通过
    next();

});
//记载所有的路由
routes(app)


app.use((req, res) => {
    res.status(404).send('没有找到资源')
})
app.use((err, req, res) => {
    if (err) {
        res.status(500).send('服务器出现故障  ')
    }
})

app.listen(config.serverOptions.port, () => {
    console.log(`the server is running at=>${config.serverOptions.host}:${config.serverOptions.port}`);
})