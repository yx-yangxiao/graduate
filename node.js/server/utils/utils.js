let crypto = require('crypto')
class Utils {
    encodeString(value) {
        //以md5的方式来加密我们的信息
        let md5 = crypto.createHash('md5')
            //用hex的方式来解码我们的信息
        return md5.update(value).digest('hex')
    }
}
module.exports = new Utils()