# JQuery 

## 学习参考
> [锋利的jQuery(第二版)]()  

# 第1章 认识jQuery
## 1.1 JS与JQuery
### 1.1.1 JS存在的问题
	1.window.onload事件存在覆盖问题，只能有一个
	2.代码容错性差
	3.浏览器兼容性问题
	4.书写繁琐，代码量多
	5.很难实现动画效果
### 1.1.2 JS简介
    JS和jQuery入口函数的区别：JS的window.onload事件需要等所有内容加载完毕后执行，而jQuery的ready在HTML标签全加载之后开始加载。
    JS创建对象
	    1.var obj = {};
	    2.var obj = new Object();
	    3.var obj = Object.create();
## 1.2 jQuery的优势
    1.轻量级
    2.强大的选择器
    3.DOM操作的封装
    4.可靠的事件处理机制
    5.完善的Ajax
    6.不污染顶级变量
    7.出色的浏览器兼容性
    8.链式操作方法
    9.隐式迭代
    10.行为层与结构层的分离
    11.丰富的插件支持
    12.完善的文档
    13.开源
## JQuery语法	
### 过滤选择器
	:eq(index)	//选择第index个元素
	:first	//选择匹配的第一个元素
	:last	//选择匹配的最后一个元素
	:lt(index)/:gt(index)	//选择小于/大于index的元素
	:odd	//选择所有序号为奇数行的元素
	:even	//选择所有序号为偶数行的元素
	.parent()	//选择父元素
	.children()	//选择子元素
	.siblings()	//选择兄弟元素
	.eq(index)	//选择第index个
	.find()		//查找元素
### 下拉菜单
	mouseover/mouseout
	mouseenter/mouseleave
	hover
### jQuery动画效果
	1.基本效果
		show/hide
	2.滑动效果
		slideDown/slideUp/slideToggle
	3.淡入淡出
		fadeIn/fadeOut/fadeTo/fadeToggle
	4.自定义
		animate/stop/delay/finish
	5.其它动画
		stop(false)	停止当前动画，后续队列中的动画继续执行
		stop(true)	停止当前动画，并清空后续队列中的所有动画
		stop(false,true)	当前动画立即执行完毕，后续队列中的动画继续执行
		stop(true,true)		当前动画立即执行完毕，并清空后续队列中的所有动画
### 样式操作
	.css()			//CSS样式
	.andClass()		//添加样式
	.removeClass()	//移除样式
	.toggleClass()	//切换样式
	.hasClass()		//判断样式
### 操作文档
	内部插入节点
		.append()	//在元素内部的后面追加元素
		.appendTo()	//把元素追加到元素内部的后面
		.prepend	//在元素内部的前面追加元素
		.prependTo()//把元素追加到元素内部的前面
	外部插入节点
		.after()	//在元素后面添加兄弟节点元素
		.before()	//在div前面添加兄弟节点元素
		.insertBefore()	//把元素插入到元素前面
		.insertAfter()	//把元素插入到元素后面
	删除节点
		.remove()	//删除选中元素
		.empty()	//清楚元素内容
		.html("")	//清空元素内容
	复制节点
		.clone()	//复制节点：参数为true时，绑定的事件也会被复制
	包裹节点
		.wrap()		//包裹 单个包裹
		.wrapAll()	//包裹 所有包裹在一个node中
	替换节点
		.replaceWith()	//替换节点
### 元素操作
	.height()	//高度
	.width()	//宽度
	.offset()	//获取或设置坐标值 设置值后变成相对定位
	.position()	//获取坐标值 子绝父相 只能读取
	.scrollTop()//相对于滚动条顶部的偏移
	.scrollLeft()//相对于滚动条左部的偏移
### jQuery事件
	简单事件绑定
		blur	
		change
		click
		dbclick
		error
		focus
		focusin
		focusout
		keydown
		keypress
		keyup
		mousedown
		mouseenter
		mouseleave
		mousemove
		mouseout
		mouseover
		mouseup
		resize
		scroll
		select
		submit
		unload
	其他事件绑定
		bind/on
		delegate
		one
	解绑事件
		unbind/off
		undelegate
	触发事件
		click
		trigger
		triggerHandler
### event对象
	event.data	//传递的额外事件响应方法的额外参数
	event.currentTarget	//在事件响应方法中等同于this，当前DOM对象
	event.target //事件触发源，不一定===this
	event.pageX	//The mouse position relative to the left edge of the document
	event.pageY	//
	event.stopPropagation()	//阻止事件冒泡
	e.preventDefault();	//阻止默认行为
	event.type	//事件类型：click/dbclick...
	event.which	//鼠标的按键类型，左1 中2 右3
### jQuery其他补充
	链式编程：end()补充
	隐式迭代
	map函数
	each函数
	+noConflict全局对象污染冲突
    data()和attr()的区别：
		1.获取数据的时候，attr方法需要传入参数，data方法可以不传入参数，这时候获取到的是一个JS对象，即使没有任何data属性。
		2.获取到的数据类型不同，attr方法获取到的数据类型是字符串(String),data方法获取到的是相应的类型。
		3.data方法获取到数据之后，我们使用一个对象来接收它，那么就可以直接操作(设置值或获取值)这个对象，而attr方法不可以。并且通过这种方式，要比data(key,value)的方式更高效。
		4.data-attribute属性会在页面初始化的时候放到jQuery对象，被缓存起来，而attr方法不会。
	插件机制
		jQuery.lazyload.js 	延迟加载
		jQuery.color.js 	颜色动画
	jQueryUI