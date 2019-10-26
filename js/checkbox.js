
$.fn.extend({
    bindCheckBox:function($subCheckbox,$param){
        let isFn = false;
        if($param){
            if(typeof $param == 'function'){
                isFn = true;
            }
        }
        //全选按钮的点击事件
        this.click(()=>{
            this.checkAll($subCheckbox);
            isFn&&$param();
        });	
        //每个复选框的点击事件
        $subCheckbox.click(()=>{
            this.backControl($subCheckbox);
            isFn&&$param();
        });

        // if(!isFn){
        //     $param.click(()=>{
        //         this.unChecked($subCheckbox);
        //     })
        // }
    },
    checkAll:function($subCheckbox){
        // this :是调用checkAll函数的对象,this是jQuery对象。
        $subCheckbox.attr("checked",this.attr("checked")=="checked"?true:false);
    },
    unChecked:function($subCheckbox){
        //this:父复选框；
        $subCheckbox.each(function(){
            // this ：循环过程中的当前checkbox，是dom对象。
            this.checked = !this.checked;
        });
        this.backControl($subCheckbox);
    },
    backControl:function($subCheckbox){
        let isCheckAll = true;
        $subCheckbox.each(function(){
            if(!this.checked){
                isCheckAll = false;
            }
        });
        this.attr("checked",isCheckAll);
    }
});