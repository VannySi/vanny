# JQuery 

## 学习参考
> [锋利的jQuery(第二版)]()  
> [jQuery3.1中文文档](http://jquery.cuishifeng.cn/index.html)

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
    
# 第2章 jQuery选择器
## 2.1 基本选择器
    #id 单个元素
    .class  集合元素
    element 集合元素
    *       集合元素
    ele1,ele2...    集合元素
## 2.2 层次选择器
    ancestor descendant 集合元素
    parent > child  集合元素
    prev + next 集合元素
    prev ~ sibling  集合元素
## 2.3 过滤选择器
### 2.3.1 基本过滤选择器
	:eq(index)	//选择第index个元素   单个元素
	:first	//选择匹配的第一个元素    单个元素
	:last	//选择匹配的最后一个元素   单个元素
	:not(selector)  //去除所有与给定选择器匹配的元素   集合元素
	:lt(index)/:gt(index)	//选择小于/大于index的元素   集合元素
	:odd	//选择所有序号为奇数行的元素 集合元素
	:even	//选择所有序号为偶数行的元素 集合元素
	:header //选取所有的标题元素 集合元素
	:animated   //选取当前正在执行动画的所有元素   集合元素
	:focus  //选取当前获取焦点的元素   集合元素
### 2.3.2 内容过滤选择器
    :contains(text) //选取含有文本内容为“text”的元素    集合元素
    :empty  //选取不包含子元素或者文本的空元素  集合元素
    :has(selector)  //选取含有选择器所匹配的元素的元素  集合元素
    :parent //选取含有子元素或者文本的元素    集合元素
### 2.3.3 可见性过滤选择器
    :hidden     集合元素
    :visible    集合元素
### 2.3.4 属性过滤选择器
    [attr]  //选取有此属性的元素 集合元素
    [attr=value]    //选取属性值为value的元素    集合元素
    [attr!=value]   //选取属性值不等于value的元素  集合元素
    [attr^=value]   //选取属性值以value开始的元素  集合元素
    [attr$=value]   //选取属性值以value结束的元素  集合元素
    [attr*=value]   //选取属性值含有value的元素   集合元素
    [attr|=value]   //选取属性等于给定字符串或者以该字符串为前缀(该字符串后跟一个连字符“-”)的元素  集合元素
    [attr~=value]   //选取属性用空格分隔的值中包含一个给定值的元素    集合元素
    [attr1][attr2]  //用属性选择器合并成一个复合属性选择器，满足多个条件 集合元素
### 2.3.5 子元素过滤选择器
    :nth-child      集合元素
    :first-child    集合元素
    :last-child     集合元素
    :only-child     集合元素
### 2.3.6 表单对象属性过滤选择器
    :enabled    //选取所有可用元素  集合元素
    :disabled   //选取所有不可用元素 集合元素
    :checked    //选取所有被选中元素(单选框/复选框) 集合元素
    :selected   //选取所有被选中的选项元素(下拉列表)    集合元素
## 2.4 表单选择器
    :input  //选取所有的<input><textarea><select><button>元素  集合元素
    :text   //选取所有的单行文本框    集合元素
    :password   //选取所有的密码框  集合元素
    :radio  //选取所有的单选框  集合元素
    :checkbox   //选取所有的多选框  集合元素
    :submit //选取所有的提交按钮  集合元素
    :image  //选取所有的图像按钮 集合元素
    :reset  //选取所有的重置按钮 集合元素
    :button //选取所有的按钮   集合元素
    :file   //选取所有的上传域  集合元素
    :hidden //选取所有不可见元素 集合元素
	.parent()	//选择父元素
	.children()	//选择子元素
	.siblings()	//选择兄弟元素
	.eq(index)	//选择第index个
	.find()		//查找元素
## 2.5 其他选择器
    - MoreSelectorsforjQuery插件
    - Basic XPath插件
    - document.getElementsBySelector()
    - cssQuery()
    - querySelectorAll()
    
# 第3章 jQuery中的DOM操作
## 3.1 DOM操作的分类
    - DOM Core
    - HTML-DOM
    - CSS-DOM
## 3.2 jQuery中的DOM操作
### 3.2.1 插入节点
    append()
    appendTo()
    prepend()
    prependTo()
    after()
    insertAfter()
    before()
    insertBefore()
### 3.2.2 删除节点
    remove()
    detach()
    empty()
### 3.2.3 复制节点
    clone()
### 3.2.4 替换节点
    replaceWith()
    replaceAll()
### 3.2.5 包裹节点
    wrap()
    wrapAll()
    wrapInner()
### 3.2.6 属性操作
    attr()
    removeAttr()
### 3.2.7 样式操作
    attr()
    removeAttr()
    addClass()
    removeClass()
    toggle()
    toggleClass()
    hasClass()/is('.class')
### 3.2.8 设置和获取HTML、文本和值
    html()
    text()
    val()
### 3.2.9 遍历节点
    children()
    next()
    prev()
    siblings()
    closest()
    parent()
    parents()
    find()
    filter()
    nextAll()
    prevAll()
### 3.2.10 CSS-DOM操作
    css()
    width()
    height()
    offset()
    position()
    scrollTop()
    scrollLeft()

# 第4章 juery中的事件和动画
## 4.1 jQuery中的事件
### 4.1.1 加载DOM
    $(function(){})
    $(window).load(function(){})
### 4.1.2 事件绑定
    on(events,[selector],[data],fn)
    events: 一个或多个用空格分隔的事件类型和可选的命名空间。包括blur(失去焦点)、focus(获取焦点)、load(载入远程HTML代码并插入DOM)、resize(调整浏览器窗口大小)、scroll(元素滚动)、unload(离开页面)、click(右击元素)、dbclick(双击元素)、mousedown(按下鼠标)、mouseup(放开鼠标)、mousemove(移动鼠标)、mouseover(移入鼠标)、mouseout(移出鼠标)、mouseenter(鼠标进入)、mouseleave(鼠标离开)、change(元素值改变)、select(被选中时)、submit(提交表单)、keydown(键盘按下)、keypress(键盘按下)、keyup(键盘放开)、error(遇到错误)等
    [selector]: 一个选择器字符串用于过滤器的触发事件的选择器元素的后代。如果选择的< null或省略，当它到达选定的元素，事件总是触发。
    [data]: 当一个事件被触发时要传递event.data给事件处理函数
    fn: 该事件被触发时执行的函数
### 4.1.3 合成事件
    hover()
    toggle()
### 4.1.4 事件冒泡
    stopPropagation()   停止事件冒泡
    preventDefault()    阻止默认行为
### 4.1.5 事件对象的属性
    event.type      获取事件类型
    event.stopPropagation() 停止事件冒泡
    event.preventDefault()  阻止默认行为
    event.target    获取触发事件的元素
    event.relatedTarget     访问相关元素(?)
    event.pageX/event.pageY 获取光标相对于页面的坐标
    event.which     获取鼠标/键盘的按键
    event.metaKey   获取键盘<ctrl>键
### 4.1.6 移除事件
    off()
    one()
### 4.1.7 模拟操作
    trigger()
    triggerHandler()
## 4.2 jQuery动画效果
	1.基本效果
		show/hide/toggle
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