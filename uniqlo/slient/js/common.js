$(()=>{
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
        $(".popup") .click(function(e){e.stopPropagation()}).children().children().children("ul").children().click(function(){
            $(".search_box input").val($(this).text())
            
        })               
    })
        $(document).click(function () {
            console.log(1);
            
            $(".popup_container").html("")
            $(".nav-mask-cover").css("display","none")
          })
        
        // if(1139.6<e.pageX)
        
// 门店购买弹出      
        $(".appDown").hover(function () {
            $(".share-overlay").css("visibility","visible")
        }, function () {
            $(".share-overlay").css("visibility","hidden")
        }
    );


// 列表分类
        //遮罩层 + 列表
        $(".left_nav").children("li").not(".nav-logo").click(function (e) {
            $(".nav-mask-cover").css("display","block");
            e.stopPropagation();

          })
        
















    });


    

   
