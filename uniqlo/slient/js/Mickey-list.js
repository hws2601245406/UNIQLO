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
                if($(this).siblings("ul").css("display") == "none"){
                   $(this).css({"backgroundImage": "url(img/下三角.png)"})
                   $(this).siblings("ul").css("display","block")  
                }else{
                    $(this).css({"backgroundImage": "url(img/右三角.png)"})
                   $(this).siblings("ul").css("display","none")  
                }
               
            })


        }

    );
    // 右边商品列表
        $.ajax({
            url:"../server/getlist.php",
            dataType:"json"
        }).done(data => {
            
            
            let html = data.map(item => {
                console.log(item.inli);
                
                return `<li class="product_li">
                <div class="h_product">
                    <a target="_blank" href="/product-detail.html?productCode=u0000000004782">
                        <div class="product_content">
                            <ul class="corner-ul false false">
                                <li class="corner-li">
                                    ${item.inli}
                                </li>
                            </ul>
                            <div class="product_back">
                                <div class="back_pic">
                                    <img class="pic_img"
                                        src=${item.img_src}
                                        alt="男装 (UT) DPJ印花T恤(短袖) 414323  超值精选 门店自提 XS 黑色,"
                                        title="男装 (UT) DPJ印花T恤(短袖) 414323  超值精选 门店自提 XS 黑色,">
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
                        </div>

                    </a>
                </div>
            </li>
                
                
                `
            }).join("");
            $(".product_ul").html(html)
            
        })














})