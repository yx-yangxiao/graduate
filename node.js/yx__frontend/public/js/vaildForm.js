//表单验证模块
class VaildForm {
    constructor() {
            this.emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            this.nameReg = /[\一-\龥]/
            this.codeReg = /^\d{6}$/
        }
        //邮箱验证模块
    isEmail(value) {
            return this.emailReg.test(value);
        }
        //昵称验证模块
    isName(value) {
        return this.nameReg.test(value)
    }
    isCode(value) {
        return this.codeReg.test(value)
    }
}