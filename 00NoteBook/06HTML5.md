# HTML5——HTML/CSS/JavaScript
## HTML
### 新标签：语义化标签
    新属性
        1. 链接关系描述
        2. ARIA 无障碍富互联网应用程序属性
        3. 自定义属性 data-
            - 可以给HTML里的所有dom对象都可以添加一些data-xxx的属性
            - 用来记录与当前DOM强相关的数据
### 智能表单
    1. 新的表单类型
        - 功能型的表单类型
    2. 虚拟键盘适配
        - 通过type方式指定弹出键盘
### 网页多媒体
    1. 之前强依赖于Flash
    2. 音频
    3. 多媒体的dom对象有一些新的方法可以去做播放暂停
    4. 视频
    5. 了解字幕
### SVG文件基本使用
    1. iframe
    2. ajax 直接可以修改样式
## JavaScript API
### 基础API提升
    1. 新选择器
        - document.querySelector(selector); 返回第一个满足选择器条件的元素，即一个DOM对象
        - document.querySelectorAll('.item'); 返回所有满足该条件的元素，即一个元素类型为DOM的数组
        - $('.item'); 返回一个jQuery对象(DOM元素的数组)
        - 本质上jQuery方式和querySelector方式都是获取DOM数组，只不过jQuery会多一些其他成员
        - DOM数组的每个成员注册事件不能像jQuery一样直接注册，需要分别注册
        - H5就是将我们经常需要的操作又包装了一层
    2. ELement.classList
        - DOM对象多了一个classList属性，数组
        - add 添加类名
        - remove 删除类名
        - contains 判断是否包含类名
        - toggle 切换类名
    3. 访问历史API
    4. 全屏API
### 网页存储
    1. Application Cache
    2. localSrotage
    3. sessionStorage
        - getItem方式获取一个不存在的键，返回空字符串；[]返回 undefined
    4. WebSQL
    5. IndexedDB
### 设备信息访问
    1. 网络状态
    2. 硬件访问
    3. 设备方向
    4. 地理围栏
### 拖放操作
    1. 网页内拖放
    2. 桌面拖入
    3. 桌面拖出
### 文件
    1. 文件系统API
    2. FileReader
### 网络访问
    1. XMLHttpReque
    2. fetch
    3. WebSocket
### 多线程
### 桌面通知
## CSS
### ID选择器命名规范
	1.只允许出现字母(区分大小写)、下划线、数字。
	2.只允许以字母开头。
	3.命名不建议太长。
	4.不允许出现标签名。
### ID与类选择器的区别
	1.相同上午class属性值，可以在HTML中出现多次。ID属性在页面中只能出现一次。
	2.一个class属性可以有多个值，即一个标签可以有多个类。
### CSS复合选择器
	1.标签指定式选择器，如h3.one
	2.后代选择器(包含选择器)，如.one h3
	3.并集选择器，如.one,h3
	4.子元素选择器，如.one>h3
	5.属性选择器
		1)简单属性选择，如h3[class]
		2)根据属性值选择，如p[id="aside"]
		3)属性名全包含，如p[class~="a"]
		4)属性模糊选择，如E[alt^="val"]/E[alt$="val"]
		5)属性模糊匹配包含，如E[alt*="val"]
### 高级布局技巧
    1.:empty 区分空元素
    2.:*-of-Type 选择元素
    3.calc 流式布局
    4.vw/vh 全屏滚动效果
    5.unset CSS Reset
    6.column 响应式的列布局
### display的区别
				    宽高	    边距	    独占行
	inline 			X		左右	    X
	block 			V 		上右      	V
	inline-block	V 		左右	    X
### IE6盒模型BUG：背景色不能穿透边框