$(() => {
    //侧边切换图片
    $(".picture-viewer-scroll-content ul li").hover(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".picture-viewer-picture img").attr("src", `./img/${$(this).index() + 1}.jpg`)
    }
    );

    // 鼠标滑过放大镜--
    $(".picture-viewer-picture").mouseover(function (e) {
          $(".cursor-div").css({
            opacity:0.5
          }).parent().siblings().eq(0).css("display","block")
    }).mouseleave(function () { 
        $(".cursor-div").css({
            opacity:0
          }).parent().siblings().eq(0).css("display","none")
    })

    $(".picture-viewer-picture").mousemove(function (event) { 
        let e = event || window.event;

        // values: e.clientX, e.clientY, e.pageX, e.pageY
    //   console.log(e.offsetX);
                    // 鼠标对于窗口，鼠标在元素内，事件对象的位置
            // console.log(e.clientX,e.offsetX,this.offsetLeft);
            var left = e.pageX - $(this).offset().left -125  
            var top = e.pageY - $(this).offset().top -125
            if(left < 0){
                left = 0
            }else if(left > 250){
                left = 250
            }
            if(top < 0){
                top = 0
            }else if(top > 250){
                top = 250
            }
            $(".cursor-div").css({
                left,
                top
            })
            $(".picture-viewer-overlay-picture img").css({
                left : -left *2 ,
                top : - top *2
            })


            });
    $(".sku-select-colors li").click(function (e) {
        $(this).toggleClass("active")
    });
    $(".sku-select-sizes li").click(function () {
        $(this).toggleClass("active").siblings().removeClass("active")
    })

    $(".counter-minus").click(function () {
        if ($(this).siblings("input").val() == 1) {
            $(this).siblings("input").val() == 1
        } else {
            $(this).siblings("input").val(
                $(this).siblings("input").val() - 1
            )
        }
    })
    $(".counter-plus").click(function () {
        $(this).siblings("input").val(
            $(this).siblings("input").val() * 1 + 1
        )
    })

    //点击加入购物车

    $(".button-addCart").click(function (e) {
        e.stopPropagation();
        //检查是否选中选项
        let colorTrue = $(".sku-select-colors").children().hasClass("active");
        let sizeTrue = $(".sku-select-sizes").children().hasClass("active")
        if (colorTrue && sizeTrue) {
            //加入购物车
            let user_id = localStorage.getItem("user_id") || ""
            let user_name = localStorage.getItem("user_name") || "";
            let good_id = $(".img_list").attr("data-id")
            let good_color = $(".sku-select-colors .active").attr("data-color")
            let good_size = $(".sku-select-sizes .active").text();
            let good_num = $(".counter input").val();
            // console.log(user_id, user_name, good_id, good_color, good_size, good_num);

            // console.log(user_id, user_name, good_id);
            if (user_id && user_name) {
                $.ajax({
                    url: "../server/addCart.php",
                    data: {user_id, good_id, good_color, good_size, good_num},
                }).done(data => {
                    console.log(data)
                    layer.msg('亲，快去付款吧！马上就到你手里啦');
                });
            } else {
                location.href = "login.html"
            }
         } else {
                layer.msg('亲，请选择尺码和标签');
            }


            //加入购物车

            // }



        });












})