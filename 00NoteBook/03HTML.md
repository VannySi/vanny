#HTML—— Hyper Text Markup Language，超文本标记语言
## 语法
    纯文本+标签(双标记/单标记)
    标签可嵌套不可交叉
    标签声明属性时属性值需要用单/双引号括起来
    公共属性
        id：声明唯一ID号
        style：指定CSS样式
        class：指定元素类型
        title：指定标签提示语
## 基本结构
    文档类型声明：html1.0 html2.0 html3.0 html4.0(strict/transitional) xhtml(strict/transitional/frameset) html5，不同版本的HTML中可以使用标签的数量以及标签的属性是不同的，且会影响到浏览器对CSS和JavaScript的解释执行。
## meta data 元数据——描述数据的数据
## link：设置DNS预解析，提高后续访问页面的效率
## 转义字符
    `<		&lt;
    >		&gt;
    空格  	&nbsp;
    &		&amp;
    ©		&copy;
    ®		&reg;
    ™		&trade;`
## 元素类型
    区块元素(block)：<h1>~<h2><div><ul><li><dl><dt><dd><p><address><pre>
    内联元素(inline)：<strong><b><a><span><sub><sup><img><i><em><u><s>
## 图片格式
	bmp：未经压缩的bit图，一般不用于Web开发
	psd：photoshop doc原始文档，支持层，页面中不直接使用
	tiff：出版印刷
	raw：太大
	jpeg：经过压缩的图片，保真度高，色彩丰富，适用于Web中的照片，1024*768压缩到100k甚至更小完全可以接受
	png：色彩没有jpeg丰富，但透明度支持的好，压缩比例大，适合于图标
	gif：色彩比较丰富，支持动画效果，也在一定程度上支持透明度
## 资源路径
	1)绝对路径：以协议名开头的路径
	2)相对路径：不以协议名开头的路径
	3)根相对路径：以/开头的路径，相对于当前站点的根路径，与当前页面所在路径无关
	base标签用于指定当前页面的相对地址资源的URL基准值
## 列表
	1)无序列表：ul，UnorderedList
	2)有序列表：ol，OrderedList
	3)定义列表：dl，DefinitionList
## 表单
	用于收集用户的数据，提交给服务器上某个页面，该页面可以对表单中提交的数据进行保存或查询(由php/jsp/aspx来担当)。
	实现文件上传
		使用<input type = "file" name=""/>选择文件
		表单必须使用POST提交method="POST"
		表单的编码类型必须声明为enctype="multipart/form-data"
	属性
		action	指定表单数据的处理页面(动态页面)
		method	GET/POST，前者把请求数据追加在地址栏查询字符串中(有长度限制)；后者把数据以单独的数据包发送给服务器(无长度限制且可用于文件上传)
		enctype:EncodedType 表单中提交数据的编码类型，可取值
			text/plain	表单数据不做任何编码直接上传
			application/x-www-form-urlencoded	把表单中的数据(中文/特殊符号)编码后再上传，只能对字符进行编码
			multipart/form-data	以一种特殊的格式上传字符/字节数据
## 按钮
	1)<button></button>				在表单外调用一个JS函数时使用
	2)<input type="button" value=""/>	在表单内调用一个JS函数时使用
	3)<input type="submit" value=""/>	在表单内提交表单
	4)<input type="reset" value=""/>		在表单内重置所有输入域为初始值
	5)<input type="image" src=""/>		在表单内显示一个图片按钮，可用于提交表单，作用于<input type="submit"/>一样
	<!-- Sublime Server 不要Stop,直接退出 -->
	NVDA