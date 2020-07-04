$(() => {


    let user_id = localStorage.getItem("user_id") || "";
    // 渲染页面
    $.ajax({
        url: "../server/getCart.php",
        data: { user_id },
        dataType: "json",

    }).done(data => {
        console.log(data);


        let html = $.map(data, function (item, indexOrKey) {
            item.price = item.price.slice(1)

            return `
            <tr class="cartList">
                    <td class="top cart-item-checkbox">
                        <label class="h-checkbox-wrapper">
                            <span id="dan" class="h-checkbox " style="width: 14px; height: 14px;">
                                <input type="checkbox" value="N">
                            </span>
                        </label>
                    </td>
                    <td class="top cart-item-distribution">
                        <div><span id="span-change">修改配送方式</span>
                        </div>
                    </td>
                    <td class="top cart-item-info" style="position: relative;">
                        <a href="/product-detail.html?productCode=u0000000014620">
                            <img src=${item.img_src}>
                        </a>
                        <ul>
                            <li>
                                <a href="/product-detail.html?productCode=u0000000014620">
                                    <p title=${item.title}>${item.title}</p>
                                </a>
                            </li>
                            <li>
                                <span class="seven">支持30天无理由退换货</span>
                            </li>
                        </ul>
                    </td>
                    <td class="top">
                        <div>
                            <p>
                                尺码：
                               ${item.good_size}
                            </p>
                            <p>
                                颜色：
                               
                                ${item.good_color}
                            
                            </p>
                        </div>
                    </td>
                    <td class="top cart-item-price">
                        <ul class="ul2">
                            <li>
                                <span class="h-currency h-cny bold">￥${item.price}</span>
                            </li>
                            <li>初上市价格</li>
                            <li>
                                <span class="h-currency h-cny bold">￥${item.price}</span>
                            </li>
                        </ul>
                    </td>
                    <td class="top cart-item-quantity">
                        <div>
                            <i class="icon  icon-cart-down" style="cursor: pointer;">
                            </i><input type="text" value="${item.num}"><i class="icon  icon-cart-add"
                                style="cursor: pointer;"></i>
                        </div>
                        <div class="notice-div "></div>
                    </td>
                    <td class="top priceclass">
                        <span class="h-currency h-cny bold">${Number(item.num) * item.price}</span>
                    </td>
                    <td class="top cart-item-operation">
                        <ul>
                            <li><span class="hover-span">移入收藏夹</span></li>
                            <li><span class="hover-span">删除</span></li>
                            <li>
                                <div class="h-similar">
                                    <span class="similar-span">查找相似</span>
                                    <i class="icon  icon-open-address" style="transform: rotate(90deg);"></i>
                                </div>
                            </li>
                        </ul>
                    </td>
                </tr>
            `
        }).join("");

        $("tbody").html(html)
    });


















    // 单选
    $(".content_mar").on("click", ".h-checkbox input", function () {


        //全选
        if ($(this).attr("id") == "all") {
            $("#all").parent().toggleClass("checked");

            $("tbody").find("input[type=checkbox]").parent().toggleClass("checked");
            computedTotal();
        } else {
            $(this).parent().toggleClass("checked");
            computedTotal();
        }

    });
     function computedTotal() {
        let ele = $(".cart-item-checkbox").filter(function() {
            return $("input", this).parent().hasClass("checked") == true;
        })
        console.log(ele);
        let total = 0
        let totalprice = 0
        ele.each(function (index,item) {
            totalprice += $(item).siblings(".priceclass").children("span").text() *1;
          })
   console.log(totalprice);
          
       
        



        $(".last_price").text(totalprice)
        }
    //加减

    $(".content_mar").on("click", ".icon", function () {


        if ($(this)[0].className == "icon  icon-cart-down") {
            if($(this).siblings("input").val() == 0){

            }else{
                console.log($(this).siblings("input").val());
                
                 $(this).siblings("input").val($(this).siblings("input").val()  -1 )
                 $(this).parent().parent().next().children("span").text(
                    $(this).siblings("input").val() *
                    $(this).parent().parent().prev().children().children("li:first-child").children().text().slice(1,3)
                 );
            }
           
        }else if(($(this)[0].className == "icon  icon-cart-add")){
            $(this).siblings("input").val($(this).siblings("input").val()  *1 +1 )
            $(this).parent().parent().next().children("span").text(
                $(this).siblings("input").val() *
                $(this).parent().parent().prev().children().children("li:first-child").children().text().slice(1,3)
             );
        }
        
    })

    $(".content_mar").on("click", ".hover-span", function () {
        console.log(this);
        $(this).parents(".cartList").remove();
    })


    
    $(".red").click(function (e) { 
        layer.msg('功能暂未实现', {icon: 5});        
    });

   







    // $(".h-checkbox input").click(function (e) { 
    //     $(this).parent().toggleClass("checked");      
    // });

    //全选
    

















})