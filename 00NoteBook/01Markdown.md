# Markdown——用普通文本描述富文本的语法

## 学习参考
> [Markdown语法](http://wowubuntu.com/markdown/)  
> google浏览器插件 Markdown Preview  
> sublime插件 Markdown Editing/Markdown Preview

## 语法结构
1. 标题  
    `H1 H2`  
    `== --`  
    `# H1`  
    `## H2`  
    `###### h6`  
2. 区块引用  
    `> `  
    `> >`  
3. 列表  
    `无序列表 * /+ /- `  
    `有序列表 1. `
4. 代码区块(缩进4个空格/1个制表符实现)
5. 分隔线  
    `* * *`  
    `***`  
    `**********`  
    `- - -`  
    `---------------`  
6. 链接  
    `This is [an example](http://example.com/ "Title") inline link.`  
    `This is [an example][id] reference-style link.`  
    `[id]: http://example.com/  "Optional Title Here"`  
    链接内容定义的形式为：  
        方括号（前面可以选择性地加上至多三个空格来缩进），里面输入链接文字  
        接着一个冒号  
        接着一个以上的空格或制表符  
        接着链接的网址  
        选择性地接着 title 内容，可以用单引号、双引号或是括弧包着  
    `I get 10 times more traffic from [Google] [1] than from [Yahoo] [2] or [MSN] [3].`  
    `  [1]: http://google.com/        "Google"  
       [2]: http://search.yahoo.com/  "Yahoo Search"  
       [3]: http://search.msn.com/    "MSN Search"`  
    `I get 10 times more traffic from [Google][] than from [Yahoo][] or [MSN][].`  
    `  [google]: http://google.com/        "Google"  
       [yahoo]:  http://search.yahoo.com/  "Yahoo Search"  
       [msn]:    http://search.msn.com/    "MSN Search"`  
7. 强调  
    `*single asterisks*`  
    `_single underscores_`  
    `**single asterisks**`  
    `__single underscores__`  
8. 代码  
   ```  
        代码段  
   ```  
9. 图片  
    ```  
    ![Alt text](/path/to/img.jpg)  
    ![Alt text](/path/to/img.jpg "Optional title")  
      
    ![Alt text][id]  
    [id]: url/to/image  "Optional title attribute"  
    ```