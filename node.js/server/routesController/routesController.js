//数据库的操作模块
let Sequelize = require('sequelize');
//导入接口模块
let API = require(__basename + '/api/api.js')
let utils = require(__basename + '/utils/utils.js')
class RoutesController {
    //注册的页面
    register(req, res) { //如果填写的信息没有出错的情况下开始注册
        console.log('前台发来的信息是', req.body);
        //密码等于加密后的inputPassword
        let passWord = utils.encodeString(req.body.inputPassword)
        console.log("加密后的密码是", passWord);
        let userId = '__yx' + new Date().getTime()
        let obj = {
                passWord: passWord,
                userId: userId,
                email: req.body.inputEmail,
                userName: req.body.inputName
            }
            //检测是否已经有邮箱注册了
        API.findData('User', { email: req.body.inputEmail }, ['userId']).then(result => {
            console.log("查询的结果是", result);
            if (result.length === 0) {
                API.createData('User', obj).then(() => {
                    res.send({ msg: '注册成功', code: 100 })
                }).catch(err => {
                    console.log("错误信息是", err);
                    res.send(() => ({ msg: '注册失败', code: 102 }))
                })
            } else {
                res.send({ msg: '邮箱已经被注册了', code: 102 })
            }
            res.send({ msg: '注册成功', code: 100 })
        }).catch(err => {
            console.log('查询失败了', err);
            res.send({ msg: '查询失败', code: 101 })
        })






    }
}

module.exports = new RoutesController();