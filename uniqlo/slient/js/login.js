$(()=>{
    // 焦点变化
    $(".form_group input").focus(function(){
        $(this).parent().addClass("inputAC");
        console.log($(this).parent());
        
    })
    $(".form_group input").blur(function(){
        $(this).parent().removeClass("inputAC");
    })
    $("#loginbtn").click(function(){
        let username = $.trim($("#username").val());
        let password = $.trim($("#userpass").val());
    
    if(username.length ==0){
        alert("用户名不能为空")
        return
    }
    if(password.length == 0){
        alert("密码不能为空")
        return;
    }

    $.ajax({
        type:"post",
        url:"../server/login.php",
        dataType:"json",
        data:`username=${username}&password=${md5(password).slice(0,15)}`
    }).done(data => {
        if(data.status == "success"){
            alert(data.msg);
            location.href ="index.html"
        }else{
            alert(data.msg);
        }
    })
})
})


