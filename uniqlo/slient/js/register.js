$(() =>{

    $("#phoneID").val(13926291888);
    $("#usernameID").val("zsf111");
    $("#passwordA").val(123456789);
    $("#passwordB").val(123456789);
    // 28788c

    // 焦点变化
    $(".form_group input").focus(function(){
        $(this).parent().addClass("inputAC");

        console.log($(this).parent());
        
    })





    let options = {
        "usernameID": {
            reg: `/^[a-zA-Z][a-zA-Z0-9]{5,11}$/.test(val)`,
            msg: "用户名不符合规范!!!"
        },
        "phoneID": {
            reg: `/^1[3-9]\\d{9}$/.test(val)`,
            msg: "手机号码不符合规范!!!"
        },
        "passwordA": {
            reg: `/^[a-zA-Z0-9_]{8,12}$/.test(val)`,
            msg: "密码不符合规范!!!"
        },
        "passwordB": {
            reg: `$.trim($("#passwordA").val()) === val`,
            msg: "两次输入的密码不相同!!!"
        },
    }


//前端验证
    $(".form_group input").not("#agreebtn").blur(function () {
        $(this).parent().removeClass("inputAC");
        let id = this.id;
        let val =$.trim($(this).val());
        if(eval(options[id].reg)){
            $(this).parent().next().text("");
            $(this).parent().removeClass("form-group-error")
        }else{
            $(this).parent().next().text(options[id].msg);
            $(this).parent().addClass("form-group-error")
        }
      })

//注册功能
    $("#registerbtn").click(function(){
        $("#phoneID,#usernameID,#passwordA,#passwordB").trigger("blur")
        if ($(".form-group-error").length != 0){
            console.log("xx");
            
            return
        }
        let isCheck = $("#agreebtn").is(":checked");
        if(!isCheck){
            alert("请阅读并同意注册协议以及隐私政策！")
            return
        }

        let data = {
            username: $.trim($("#usernameID").val()),
            phone: $.trim($("#phoneID").val()),
            password: md5($.trim($("#passwordA").val())).slice(0, 15)
        }

        $.ajax({
            url:"../server/res.php",
            type:"post",
            data,
            dataType:"json",
        }).done(data =>{
            if(data.status == "success"){
                alert("注册成功")
                location.href = "login.html"
            }else{
                alert(data.msg)
            }
        })

        


        
    })
})