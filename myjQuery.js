(function (){
    function jQuery (selector){
        return new jQuery.prototype.init(selector);
    }
    jQuery.prototype.init = function (selector) {
        //选出DOM并包装成jQuery对象 返回
        // id class
        this.length = 0;
        //  null undefined dom
        if(selector == null) {
            return this;
        }

        if(typeof selector == 'string' && selector.indexOf('.') != -1){
            var dom = document.getElementsByClassName(selector.slice(1));
        }else if (typeof selector == 'string' && selector.indexOf('#') != -1){
            var dom = document.getElementById(selector.slice(1));
        }

        if (selector instanceof Element || dom.length == undefined){
            this[0] = dom || selector;
            this.length++;

        }else{
            for(var i = 0; i <dom.length; i ++){
                this[i] = dom[i];
                this.length++;
            }
        }
    }
    jQuery.prototype.css = function(config){
        //循环操作每一个dom
        //循环操作
        for(var i = 0;i < this.length; i++){
            for(var attr in config){
                this[i].style[attr] = config[attr];
            }
        }

        //链式操作
        return this;
    }

    jQuery.prototype.get = function (num) {
        if(num == null){
            return [].slice.call(this,0);
        }else{
            if(num >= 0){
                return this[num];
            }else{
                
                return this[num + this.length]
            }
        }
        //三目运算
        // return num == null ? [].slice.call(this,0):(num >= 0 ? this [num] : this[num + this.length]);
    }

    jQuery.prototype.eq = function (num) {
        var dom = num != null ? (num >= 0 ? this [num] : this[num + this.length]) : null;
        return jQuery(dom);
    }
    jQuery.prototype.init.prototype = jQuery.prototype;

    window.$ = window.jQuery =jQuery;
})();

 