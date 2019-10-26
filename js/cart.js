// 引入头部尾部
$(function(){
    $(".Ylogo").load("share.html .Flogo", function () {
        $.getScript("js/share.js");
    });
    $(".Ynav").load("share.html .Fnav", function () {
        $.getScript("js/share.js",function(){
             showUser();
        });
    });
    $(".Yfooter").load("share.html .Ffooter", function () {
        $.getScript("js/share.js");
    });
    $(".Yfix").load("share.html .fix", function () {
        $.getScript("js/share.js");
    });
    $(".YFiconfont").load("share.html #gogo", function () {
        $.getScript("js/share.js");
    });
})

//购物车
$(function(){
    // 加
    $(".btnAdd").click(function(){
        let $text = $(this).prev();
        $text.val(parseInt($text.val())+1);
        // xiaojimoney();

        // $("#xiaoji").val()=$text.val()*$text.parent().prev().html;
        calMoney();
    });
    // 减
    $(".btnReduce").click(function(){
        let $text = $(this).next();
        if($text.val()>1){
            $text.val(parseInt($text.val())-1);
        }
        // xiaojimoney();
        // $text.parent().next().child().val()=$text.val()*$text.parent().prev().html;
        calMoney();
    });

    $("#allCheckBox").bindCheckBox($(".goodsBox :checkbox"),calMoney);
});

//总计
function calMoney(){
    let money = 0;
    let $subCheckBox = $(".goodsBox :checkbox");
    for(let i=0;i<$subCheckBox.length;i++){
        if($subCheckBox[i].checked){
            let $goodsBox = $($subCheckBox[i].parentNode.parentNode);
            money += parseFloat($goodsBox.find(".price").html())*parseFloat($goodsBox.find(".count").val());
        }
    }
    $("#totalMoney").html(money);
}

// 小计
// function xiaojimoney(){
    
//     let price=document.getElementsByClassName("price");
//     for(let i=0;i<price.length;i++){

//     }
//     $("#xiaoji").html(xiaojimoney);
// }

//删除一行
function del(obj){
    if(confirm("确定删除?")==true){
        obj.parentNode.remove();
    }
}
//清空购物车
function delet(obj){
    if(confirm("确定清空购物车?")==true){
        obj.parentNode.parentNode.remove();
    }
    $(".kongcart").attr("style","display:block");
}



