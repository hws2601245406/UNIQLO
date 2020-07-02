// var lis = document.querySelector(".nav-baby-list").querySelectorAll(".nav-list-part")
// var lis = Array.from(lis).slice(1)
// var arr =[]
// Array.from(lis).forEach(li => {
//     let obj ={}
//     obj.title = li.querySelector("dt").innerText
//     var arr2 = []
//     Array.from(li.querySelectorAll("a")).forEach((item)=>{
//         let obj2 = {}
//         obj2.txt = item.innerText;
//         obj2.class = item.parentNode.className
//          arr2.push(obj2)
//     })
//     obj.list = arr2
//     arr.push(obj)
    
    
// });
var lis = document.querySelector(".h-col").querySelector("ul").querySelectorAll(".submenu")
var arr = []
lis.forEach(li => {
    let obj ={}
    obj.title = li.querySelector("a").innerText
    var arr2 = []
    li.querySelector("ul").querySelectorAll("li").forEach((item)=>{
    let obj2={}
    obj2.txt = item.querySelector("a").innerText
    obj2.href = item.querySelector("a").getAttribute('href')
    arr2.push(obj2)
    })
    obj.list = arr2
    arr.push(obj)
});


lis.forEach(li=>{
    let obj = {};
    obj.img_src = li.querySelector(".picture-img").src;
    obj.inli = $(".corner-li").html()
    obj.simg_src = li.querySelector(".block ul li div img").src
    obj.Gender = li.querySelector("p").innerText
    obj.size = li.querySelector(".p-size").innerText
    obj.title = li.querySelectorAll("p")[1].innerText
    obj.price = li.querySelector(".h-currency").innerText
    obj.talknum = li.querySelector(".span-boder").innerText
    arr.push(obj)
})