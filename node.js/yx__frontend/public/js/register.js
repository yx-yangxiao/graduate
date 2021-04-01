$(function() {
    //创建表单验证实例
    let vaildForm = new VaildForm()
        //重新获得验证码的时间
    let time = 5
    $('#getCode').on('click', function() {
            $(this).text(time + 's后发送').prop('disabled', true);

            let timer = setInterval(() => {
                if (time <= 0) {
                    clearInterval(timer)
                    $(this).text('获取验证码').prop('disabled', false)
                    time = 5
                } else {
                    time--
                    $(this).text(time + 's后发送');
                }
            }, 1000)
        })
        //验证部分的提取
    function vaild(Reg) {
        let value = $(this).val()
        if (vaildForm[Reg](value)) {
            console.log("正确");
            $(this).next().hide().removeAttr('name')
            return
        } else {
            console.log('不正确');
            $(this).next().show().attr('name', 1)
            return
        }
    }
    //验证我们的邮箱真确与否
    $('#inputEmail').on('change', function() {
            vaild.call(this, 'isEmail')
        })
        //验证我们的名字正确与否
    $('#inputName').on('change', function() {
            vaild.call(this, 'isName')
        })
        //验证验证码的真确与否
    $('#inputCode').on('change', function() {
            vaild.call(this, 'isCode')
        })
        //注册点击前先要验证表单
    $('#register').on('click', function() {
        let isEmpty = false
        $('.form-control').each(function() {
            let value = $(this).val()
            console.log("数据是==》", value);
            if (value === '') {
                $(this).next().show().attr('name', 1)
                isEmpty = true
                console.log("数据是空的", isEmpty);
                // return false
            }
        })
        if (isEmpty) {
            return
        }
        let isHasError = $('.err-msg[name="1"]').length > 0
        console.log("是否有报错", isHasError);
        //如果没有报错的话
        if (!isHasError) {
            //获取表单信息
            let userInfo = {};
            $('.form-control').each(function() {
                //获取id
                let id = $(this).attr('id');
                userInfo[id] = $(this).val();
            })

            console.log('userInfo ==> ', userInfo);

            //发起注册请求
            console.log('发起注册请求');
            $.ajax({
                //请求方式
                type: 'POST',

                //请求路径
                url: 'http://localhost:8989/register',

                //请求参数
                data: userInfo,

                //成功后执行
                success: function(result) {
                    console.log('result ==> ', result);
                }

            })

        }
    })
})