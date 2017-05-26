# Markdown——用普通文本描述富文本的语法

## 学习参考
> [Markdown语法](http://wowubuntu.com/markdown/)  
> google浏览器插件 Markdown Preview  
> sublime插件 Markdown Editing/Markdown Preview

## 语法结构
1. 标题  
```markdown
    H1 H2
    == --
    # H1
    ## H2
    ###### H6
```

2. 区块引用  
```markdown
    >
    > >
```
 
3. 列表  
```markdown
    无序列表 * + -
    有序列表 1. 2. ……
```

4. 代码区块(缩进4个空格/1个制表符实现)

5. 分隔线  
```markdown
    * * *
    ***
    **************
    - - - 
    _____________
```

6. 链接  
```markdown
    This is [an example](http://example.com/ "Title") inline link.
    This is [an example][id] reference-style link.
    [id]: http://example.com/  "Optional Title Here"
```
  
链接内容定义的形式为：  
   - 方括号（前面可以选择性地加上至多三个空格来缩进），里面输入链接文字  
   - 接着一个冒号  
   - 接着一个以上的空格或制表符  
   - 接着链接的网址  
   - 选择性地接着 title 内容，可以用单引号、双引号或是括弧包着   
```markdown
    I get 10 times more traffic from [Google] [1] than from [Yahoo] [2] or [MSN] [3].
    [1]: http://google.com/        "Google"  
    [2]: http://search.yahoo.com/  "Yahoo Search"  
    [3]: http://search.msn.com/    "MSN Search"`  
    I get 10 times more traffic from [Google][] than from [Yahoo][] or [MSN][].
    [google]: http://google.com/        "Google"  
    [yahoo]:  http://search.yahoo.com/  "Yahoo Search"  
    [msn]:    http://search.msn.com/    "MSN Search" 
```

7. 强调  
```markdown
    *single asterisks*      斜体
    _single asterisks_      斜体
    **single asterisks**    粗体
    __single underscores__  粗体
    single underscores
    ---                     下划线
    ~~single asterisks~~    删除线
    ___single underscores___    斜体加粗体
```

8. 代码  
``` markdown 
    `` 代码块，内联样式
    ```javascript``` 代码段, 块级样式  
```  

9. 图片  
```markdown  
    ![Alt text](/path/to/img.jpg)  
    ![Alt text](/path/to/img.jpg "Optional title")  
      
    ![Alt text][id]  
    [id]: url/to/image  "Optional title attribute"  
```

10. 复选框
```markdown
    - [ ] 未选中
    - [X] 已选中
``` 

11. 脚注
```markdown
    hello[^hello]   

    [^hello]: hi
```


## Markdown支持以下符号加"\\"来帮助插入普通符号
```markdown
    \   反斜线
    `   反引号
    *   星号
    _   底线
    {}  花括号
    []  方括号
    ()  括弧
    #   井字号
    +   加号
    -   减号
    .   英文句点
    !   惊叹号
```
   