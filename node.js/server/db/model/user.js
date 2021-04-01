const Sequelize = require('sequelize')
let Model = Sequelize.Model
class User extends Model {}
User.init({
        //id字段
        id: {
            //数据类型是sequelize的哪一种，是否是无符号的
            type: Sequelize.INTEGER.UNSIGNED,
            //是否允许为空数值
            allowNull: false,
            //主键
            primaryKey: true,
            //主动递增
            autoIncrement: true,
            //备注
            comment: '表id'

        },
        userId: {
            type: Sequelize.STRING(30),
            allowNull: true,
            defaultValue: '',
            comment: '用户id'
        },
        email: {
            type: Sequelize.STRING(30),
            allowNull: true,
            defaultValue: '',
            comment: '邮箱'
        },
        userName: {
            type: Sequelize.STRING(30),
            allowNull: true,
            defaultValue: '',
            comment: '用户名称'
        },
        passWord: {
            type: Sequelize.STRING(32),
            allowNull: true,
            defaultValue: '',
            comment: '密码'
        }
    }, {
        //表的配置项目,默认是项目的配置名字，如现在不配置的情况下，我们的名字就是user
        modelName: 'username',
        //时间戳的属性，创建和修改的时间
        timestamps: true,
        //假删除，仅仅只是用逻辑删除的方式而不是用真删除的方式
        paranoid: true,
        //用蛇形的设置方式来设置我们的字段(xx__xx)
        underscored: true,
        //禁止修改我们的表名称
        freezeTableName: true,
        //链接的实例对象是sequelize: global.sequelize,因为已经全局声明了所以就省了
        sequelize
    })
    //如果我们的表已经有了那么就要先删除我们的表然后再创建新表，否则就直接创建新表
User.sync({ force: false })
    //导出我们的表
module.exports = User