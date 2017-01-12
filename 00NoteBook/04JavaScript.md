# JavaScript——弱类型脚本语言
## 强制转换
### 字符串转换为数字
	Number(字符串/boolean)
		1.若转换的内容可以转成数字则返回转成的数字
		2.若转换的内容不可以转换则返回NaN
		3.若转换的内容包含浮点数则返回浮点数
		4.若转换的内容为空则返回0
	parseInt()
		1.若转换的内容可以转成数字则返回转成的数字
		2.若转换的内容不可以转换则返回NaNcy
		3.若转换的内容包含浮点数则返回整数部分
		4.若转换的内容第一个字符为数字则继续解析直到字符串解析完毕或者遇到一个非数字符号为止
	parseFloat()
		1.若转换的内容可以转成数字则返回转成的数字
		2.若转换的内容不可以转换则返回NaNcy
		3.若转换的内容包含浮点数则返回浮点数
		4.若转换的内容第一个字符为数字则继续解析直到字符串解析完毕或者遇到一个非数字符号为止
### 转换为字符串
	.toString()	//调用包装类中的方法
	String()	//直接强制转换
### 转换为boolean型
	Boolean() false、""、0、NaN、undefined转为false，否则为true
### 隐式转换
	隐式转换成Number
		使用“+”、“*”、“-”、“/”、“%”都可以隐式转换为Number
	隐式转换成String
		+“”
	隐式转换成Boolean
		a=!!a
## 数据类型
### 简单数据类型(栈>>值类型)
	Number
	String
	Boolean
	Null
	Undefined
### 复杂数据类型(堆>>引用类型)
	Date
	Object
	Array
	Function
## Array
### 常用方法
	length		返回数组长度
	instanceof	检查数据类型
	Array.isArray()	检测数组
	toString()	转换成字符串
	valueOf()	返回数组本身
	join()		返回成字符串
	JavaScript高级程序设计
	