#SCSS(Syntactically Awesome StyleSheets) —— CSS预处理器
## 学习参考
> 详见 [SCSS迷你书(下)](http://www.tuicool.com/articles/vuY3ueJ)  
## 注释
    1.//单行注释
    2./* 范围注释 */
## 变量 $变量名：变量值
    1.普通变量
    2.默认变量 !default
    3.全局变量
    4.局部变量
## 样式继承
    1.元素嵌套
    2.属性嵌套
    3.父类选择器 &
        #main{
             p{ font-size:15px}     //css : #main p{};
             >a{                    //css: #main>a{}
                  &:link,
                  &:visited{}       //css: #main>a:link,#main>a:link{}
                  &:hover{};        // &在SCSS内嵌中代表父类,css: #main>a:hover{};
                  &:active{};
             }
        }
    4.占位符 %
        %mr5{
           margin-right:5px;
        }
        body{
            @extend %mr5;       //css: body{margin-right:5px}
        }
## 宏(类函数)
    1.不带参数混合宏
        @mixin ul-unstyle{
            list-style:none;
        }
    2.带参数混合宏
        $width:50px;
        $display:inline-block;
        @mixin li-unstyle($width,$display){
            list-style:none;
            width:$width;
            display:$display;
        } 
        ul{
            @include li-unstyle($width,$display);
        }
        /*ul {
            list-style: none;
            width: 50px;
            display: inline-block;
        }*/
    3.带默认参数混合宏
        @mixin li-unstyle($width:5px,$display:block){
            list-style:none;
            width:$width;
            display:$display;
        } 
        li{  
            @include li-unstyle;
        }
        /*li {
            list-style: none;
            width: 5px;
            display: block;
        }*/
    4.混合宏传参， 类值列表参数
        $shadow:0 0 3px rgba(#000,.5);
        @mixin sw($shadow...){
            text-shadow:$shadow;
        }
        p{
            @include sw($shadow);
        }
        /*p {
            text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        }*/
## 插值 #{}
    $test:(margin,border);
    @mixin t($t1, $t2){
        @each $t3 in $test{
            #{$t3}-#{$t1}:$t2;
        }
    }
    .btn{
        @include t(right,5px);
    }
    /*.btn {
        margin-right: 5px;
        border-right: 5px;
    }*/
## 数据类型
    - 数字: 1、 2、 13、 10px； 
    - 字符串：有引号字符串或无引号字符串，如，”foo”、 ‘bar’、 baz； 
    - 颜色：blue、 #04a3f9、 rgba(255,0,0,0.5)； 
    - 布尔型：true、 false； 
    - 空值： null； 
    - 值列表：1.5em 1em 0 2em Helvetica, Arial, sans-serif。[用空格或者逗号分开]
## 逻辑处理
    1.@if
        @mixin tt($b:false){
            @if $b{
                border-right:5px;
            }
            @else{
                @for $i from 1 through 3 {
                    .item-#{$i} { width: 2em * $i; }
                }
            }
        }
        .b1{
            @include tt($b:true);
        }
        .b2{
            @include tt;
        }
        /*.b1 {
            border-right: 5px;
        }
        .b2 .item-1 {
            width: 2em;
        }
        .b2 .item-2 {
          width: 4em;
        }
        .b2 .item-3 {
            width: 6em;
        }*/
    2.@for
        - @for $i from <start> through <end> 
        - @for $i from <start> to <end> 
        - $i 表示变量
        - start 表示起始值
        - end 表示结束值
        @for $i from 1 through 3 {
            .item-#{$i} { width: 2em * $i; }
        }
        /*.item-1 {
            width: 2em;
        }
        .item-2 {
            width: 4em;
        }
        .item-3 {
            width: 6em;
        }*/
    3.@while
        $num : 2;
        $height: 10px;
        @while $num > 0 {
            .page-#{height}{
                height:$height * $num;
            };
            $num : $num - 1;
        }
        /*.page-height {
            height: 20px;
        }
        .page-height {
            height: 10px;
        }*/
    4.@each @each $var in <list>
        $test:top,right,bottom,left;
        @mixin btn-extend{
            @each $i in  $test{
                border-#{$i}:5px;
            }
        }
        .btn{
            @include btn-extend;
        }
        /*.btn {
            border-top: 5px;
            border-right: 5px;
            border-bottom: 5px;
            border-left: 5px;
        }*/
## 函数
    1.unquote(): 只会去除最外层的字符串,不处理中间的字符串,没有字符串符号则不处理
    2.to-upper-case(),to-lower-case(): 转换大小写
    3.percentage($value)：将一个不带单位的数转换成百分比值
    4.round($value)：将数值四舍五入，转换成一个最接近的整数
    5.ceil($value)：将大于自己的小数转换成下一位整数
    6.floor($value)：将一个数去除他的小数部分
    7.abs($value)：返回一个数的绝对值
    8.min($numbers…)：找出几个数值之间的最小值
    9.max($numbers…)：找出几个数值之间的最大值
    10.random(): 获取随机数
## 列表函数
    1.length($list)：返回一个列表的长度值
        input length(10px) print 1 ,input length(border 1px solid) print3;
    2.nth(list, list, n)：返回一个列表中指定的某个标签值
        input nth(10px 20px 30px,2) ,print 20px ;
    3.join(list1, list1, list2, [$separator])：将两个列给连接在一起，变成一个列表(最多只能两个)
        input: join((blue,red),(#abc #def)) ,print (#0000ff, #ff0000, #aabbcc, #ddeeff) ；
    4.append(list1, list1, val, [$separator])：将某个值放在列表的最后
        input: append(10px 20px ,30px) , print (10px 20px 30px);
    5.zip($lists…)：将几个列表结合成一个多维的列表
        input: zip(1px 2px 3px,solid dashed dotted,green blue red) , print ((1px "solid" #008000), (2px "dashed" #0000ff), (3px "dotted" #ff0000)) ;
    6.index(list,list, value)：返回一个值在列表中的位置值
        input : index(1px solid red, solid) , print 2;
## @指令
    1.@import 指令 导入引用文件
    2.@media 指令 响应式
    3.@extend 指令 用于扩展选择器或占位符
    4.@at-root 指令 跳出根元素
    5.@debug/@warn/@error 用于调试