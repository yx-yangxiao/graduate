class API {
    //创建数据的时候使用的接口
    createData(modelName, Obj) {
            //modelName是我们的模型名字，然后是我们的Obj是我们的数据表
            return Model[modelName].create(Obj)
        }
        //查询数据的接口
    findData(modelName, condition, attributes) {
        //1 是模型的名字 2是查询的字段 3是我们的查询条件 *方法是findall
        return Model[modelName].findAll({
            attributes,
            where: condition
        })
    }
}
module.exports = new API()