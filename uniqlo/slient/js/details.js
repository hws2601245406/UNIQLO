$(()=>{
    //侧边切换图片
    $(".picture-viewer-scroll-content ul li").hover(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            $(".picture-viewer-picture img").attr("src",`./img/${$(this).index()+1}.jpg`)
        }
    );

    
    // $(".picture-viewer-picture").mouseenter(function () { 
    //       $(".cursor-div").css({
    //         opacity:0.5
    //       }).parent().siblings().eq(0).css("display","block")
    // }).mouseleave(function () { 
    //     $(".cursor-div").css({
    //         opacity:0
    //       }).parent().siblings().eq(0).css("display","none")
    // }).mousemove(function (e) { 
    //     // values: e.clientX, e.clientY, e.pageX, e.pageY
    // //   console.log(e.offsetX);
    //                 // 鼠标对于窗口，鼠标在元素内，事件对象的位置
    //         // console.log(e.clientX,e.offsetX,this.offsetLeft);
    //         var left = e.pageX - this.offsetLeft -250  
    //         var top = e.pageY - this.offsetTop -250
    //         console.log(left ,top);
    //         if(left < 0){
    //             left = 0
    //         }else if(left > 250){
    //             left = 250
    //         }
    //         if(top < 0){
    //             top = 0
    //         }else if(top > 250){
    //             top = 250
    //         }
    //         $(".cursor-div").css({
    //             left,
    //             top
    //         })
    //         $(".picture-viewer-overlay-picture img").css({
    //             left : -left ,
    //             top : - top
    //         })

            
    // });
        console.log($(".sku-select-colors li"));    
        
        $(".sku-select-colors li").click(function (e) { 
            $(this).toggleClass("active")
        }); 
        $(".sku-select-sizes li").click(function(){
            $(this).toggleClass("active").siblings().removeClass("active")
        })











})