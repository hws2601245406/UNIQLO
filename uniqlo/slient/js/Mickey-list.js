$(() => {

    // 左边导航列表
    $.getJSON("../server/left_list.json",
        function (data) {
            let html = data.map((ele) => {
                let html2 = ele.list.map((item) => {
                    return `<li>
                    <a href=${item.href}>${item.txt}</a>
                </li>
                    `
                }).join("");

                return `
                <li class="left_list_s">
                            <i></i>
                            <a href="/c/BENZHOUXINPIN20200629.html">${ele.title}</a>
                            <ul>
                                ${html2}
                            </ul>
                        </li>
                `
            }).join("");

            $(".left_list ul").html(html)
            $(".left_list_s i").click(function () {
                if ($(this).siblings("ul").css("display") == "none") {
                    $(this).css({ "backgroundImage": "url(img/下三角.png)" })
                    $(this).siblings("ul").css("display", "block")
                } else {
                    $(this).css({ "backgroundImage": "url(img/右三角.png)" })
                    $(this).siblings("ul").css("display", "none")
                }

            })


        }

    );
    // 右边商品列表
    $.ajax({
        url: "../server/getlist.php",
        data:"sort=default",
        dataType: "json"
    }).done(data => {

        let html = data.map(item => {
            return `<li class="product_li" style="position:relative" data-id=${item.goods_id}>
                <div class="h_product">
                        <div class="product_content">
                            <ul class="corner-ul false false">
                                <li class="corner-li">
                                    ${item.inli}
                                </li>
                            </ul>
                            <div class="product_back">
                                <div class="back_pic">
                    <a target="_blank" href="details.html">

                                    <img class="pic_img"
                                        src=${item.img_src}
                                        alt="男装 (UT) DPJ印花T恤(短袖) 414323  超值精选 门店自提 XS 黑色,"
                                        title="男装 (UT) DPJ印花T恤(短袖) 414323  超值精选 门店自提 XS 黑色,"></a>
                                </div>
                            </div>
                            <div class="block">
                                <ul class="showPic-ul">
                                    <li style="display: block;">
                                        <div class="h-picture selected" style="width: 21px; height: 21px;">
                                            <img class="picture-img"
                                                src=${item.simg_src}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <p>${item.Gender}
                                <span class="p-size">${item.size}</span>
                            </p>
                            <p>${item.title}</p>
                            <span class="h-currency h-cny bold"
                                style="color: red;font-family: UniqloBold;">${item.price}</span>
                            <div class="comment-star">
                                <span class="h-comment-star">
                                    <i class="h-comment-star-light" style="width: 14px; height: 14px;">
                                    </i>
                                    <i class="h-comment-star-light"
                                        style="width: 14px; height: 14px; margin-left: 3px;">
                                    </i>
                                    <i class="h-comment-star-light"
                                        style="width: 14px; height: 14px; margin-left: 3px;">
                                    </i>
                                    <i class="h-comment-star-light"
                                        style="width: 14px; height: 14px; margin-left: 3px;">
                                    </i>
                                    <i style="width: 14px; height: 14px; margin-left: 3px;"></i>
                                    <input type="hidden" value="4">
                                    <span>(<span class="span-boder">${item.talknum}</span>)</span></span>
                            </div>
                <div class="carti" ;">加入购物车   <i class="iconfont icon-gouwucheman" "></i></div>

                        </div>

                    

                </div>
                
                
            </li>
                
                
                `
        }).join("");
        $(".product_ul").html(html)

    })



    console.log(1);


    $(".product_ul").on("click",".carti", function (e) {
        e.stopPropagation();
        if($(this).hasClass("carti")){
            //加入购物车
            let user_id = localStorage.getItem("user_id") || ""
            let user_name = localStorage.getItem("user_name") || "";
            let good_id = $(".img_list").attr("data-id")
            let good_color = $(".sku-select-colors .active").attr("data-color")
            let good_size = $(".sku-select-sizes .active").text();
            let good_num = $(".counter input").val();
            console.log(user_id,user_name,good_id,good_color,good_size,good_num);
            if(user_id&&user_name){
                $.ajax({
                    url: "../server/addCart.php",
                    data: {user_id,good_id},
                }).done(data=>{
                    console.log(data)
                });
            }else{
                location.href="login.html"
            }
            
        }
      
        
    });

    $(".sort").click(function(){

        let sortType = $(this).data().sort;

        $.ajax({
            url: "../server/getlist.php",
            data:"sort=" + sortType,
            dataType: "json"
        }).done(data => {
    
            let html = data.map(item => {
                return `<li class="product_li" style="position:relative" data-id=${item.goods_id}>
                    <div class="h_product">
                            <div class="product_content">
                                <ul class="corner-ul false false">
                                    <li class="corner-li">
                                        ${item.inli}
                                    </li>
                                </ul>
                                <div class="product_back">
                                    <div class="back_pic">
                        <a target="_blank" href="details.html">
    
                                        <img class="pic_img"
                                            src=${item.img_src}
                                            alt="男装 (UT) DPJ印花T恤(短袖) 414323  超值精选 门店自提 XS 黑色,"
                                            title="男装 (UT) DPJ印花T恤(短袖) 414323  超值精选 门店自提 XS 黑色,"></a>
                                    </div>
                                </div>
                                <div class="block">
                                    <ul class="showPic-ul">
                                        <li style="display: block;">
                                            <div class="h-picture selected" style="width: 21px; height: 21px;">
                                                <img class="picture-img"
                                                    src=${item.simg_src}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <p>${item.Gender}
                                    <span class="p-size">${item.size}</span>
                                </p>
                                <p>${item.title}</p>
                                <span class="h-currency h-cny bold"
                                    style="color: red;font-family: UniqloBold;">${item.price}</span>
                                <div class="comment-star">
                                    <span class="h-comment-star">
                                        <i class="h-comment-star-light" style="width: 14px; height: 14px;">
                                        </i>
                                        <i class="h-comment-star-light"
                                            style="width: 14px; height: 14px; margin-left: 3px;">
                                        </i>
                                        <i class="h-comment-star-light"
                                            style="width: 14px; height: 14px; margin-left: 3px;">
                                        </i>
                                        <i class="h-comment-star-light"
                                            style="width: 14px; height: 14px; margin-left: 3px;">
                                        </i>
                                        <i style="width: 14px; height: 14px; margin-left: 3px;"></i>
                                        <input type="hidden" value="4">
                                        <span>(<span class="span-boder">${item.talknum}</span>)</span></span>
                                </div>
                    <div class="carti" ;">加入购物车   <i class="iconfont icon-gouwucheman" "></i></div>
    
                            </div>
    
                        
    
                    </div>
                    
                    
                </li>
                    
                    
                    `
            }).join("");
            $(".product_ul").html(html)
    
        })
    })









})