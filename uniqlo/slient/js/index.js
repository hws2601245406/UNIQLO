$(()=>{
    // document.write("<script language=javascript src='./js/common.js'></script>")

    let user_id = localStorage.getItem("user_id") || "";
    let user_name = localStorage.getItem("user_name") || "";

    console.log(user_id ,user_name);
    if(user_id && user_name){
        $("#regli").text(`${user_name}:欢迎你`)
        $("#logli").text("注销")

    }
    if($("#logli").text() == "注销"){
        $("#logli").click(function () { 
            localStorage.removeItem("user_id");
            localStorage.removeItem("user_name")
            window.location.reload();
            return false;
        });
        
    }



})