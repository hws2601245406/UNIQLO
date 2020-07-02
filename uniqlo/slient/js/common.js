$(() => {
    // 搜索框
    /* <div class="popup" style="background-color: #ffffff;
                position: absolute;left: 1139.6px; top: 34.0375px;">
                    <div class="h_text_box" style="width: 250px;">
                    <div class="recommended-words">
                        <div class="recommended-words-title">热门搜索</div>
                        <ul><li class="">防晒衣</li><li class="">哆啦A梦合作系列</li><li class="">无钢圈文胸</li><li class="">短袖T恤</li><li class="">AIRism舒爽内衣系列</li><li class="">内裤</li><li class="">夏季裤装</li><li class="">连衣裙</li><li class="">UT系列</li><li class="">亲子装</li></ul>
                    </div>
                    </div>
            </div> */

    $(".search_box input").click(function (e) {
        event.stopPropagation()
        $(".popup_container").html(`<div class="popup" style="background-color: #ffffff;
        position: absolute;left: 1139.6px; top: 34.0375px;">
            <div class="h_text_box" style="width: 250px;">
            <div class="recommended-words">
                <div class="recommended-words-title">热门搜索</div>
                <ul><li class="">防晒衣</li><li class="">哆啦A梦合作系列</li><li class="">无钢圈文胸</li><li class="">短袖T恤</li><li class="">AIRism舒爽内衣系列</li><li class="">内裤</li><li class="">夏季裤装</li><li class="">连衣裙</li><li class="">UT系列</li><li class="">亲子装</li></ul>
            </div>
            </div>
    </div>`)
        $(".popup").click(function (e) { e.stopPropagation() }).children().children().children("ul").children().click(function () {
            $(".search_box input").val($(this).text())

        })
    })
    $(document).click(function () {
            $(".popup_container").html("")
        $(".nav-mask-cover").css("display", "none")
        $(".main_nav_list").css("display", "none")
    })

    // if(1139.6<e.pageX)

    // 门店购买弹出      
    $(".appDown").hover(function () {
        $(".share-overlay").css("visibility", "visible")
    }, function () {
        $(".share-overlay").css("visibility", "hidden")
    }
    );


    // 列表分类
    //遮罩层 + 列表
    var dataNum = ["../server/women.json",
        "../server/men.json",
        "../server/kids.json",
        "../server/baby.json"
    ]
    $(".left_nav").children("li").not(".nav-logo").click(function (e) {
        $(".nav-mask-cover").css("display", "block");

        let lis = $(".left_nav").children("li").not(".nav-logo")
        let index = Array.from(lis).indexOf($($(this))[0])
        $(".main_nav_list").css("display", "block")
        $($(".main_nav_list").children()[index]).css("zIndex", "2000").siblings().css("zIndex", "0")
        $.getJSON(dataNum[index],
            function (data) {
                let html = data.map((ele)=>{
                    let html2 = ele.list.map((item)=>{
                        return `<li class=${item.class}><a>${item.txt}</a></li>`
                    }).join("");

                    return `
                    <div class="list_part">
                            <dt>${ele.title}</dt>
                            ${html2}
                            </div>
                    `
                }).join("");

                $($(".listleft")[index]).html(html)
          
            
            }
        );
        e.stopPropagation();
    })

    //滚动固定悬浮
    var top = $($(".wrap")[0]).offset().top + 188
    $(document).scroll(function () { 
        var scrTop = $(window).scrollTop();
        if(scrTop >= top) {
            $($(".wrap")[0]).css({
                'position':'fixed','top':'0',
                "left": "119.6px",
                "boxShadow": "0 3px 5px rgba(4,0,0,.22)",
                "backgroundColor": "hsla(0,0%,100%,.85)",
                "zIndex":"1999"
            })
        }else{
            $($(".wrap")[0]).css({
                'position':"",
                "boxShadow": "0",
                "backgroundColor": "hsla(0,0%,100%,.85)",
                "zIndex":"1999"
            })

        }
    });    
    //返回顶部
    $(".toTop").hide().click(function () {
        $("html").animate({
            scrollTop:0
        },
        500)
        return false
      })
    $(window).scroll(function () { 
        var scrTop = $(window).scrollTop();
        
        if(scrTop > 1500 ){
            $(".toTop").fadeIn(200);
        }else{
            $(".toTop").fadeOut(200);
        }
        
    });















});





