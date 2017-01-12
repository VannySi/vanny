# GIT

## 学习参考
> [git游戏](https://github.com/Gazler/githug/)  
> [git五分钟教程](http://www.runoob.com/w3cnote/git-five-minutes-tutorial.html)  
> [Git完整命令手册](https://git-scm.com/docs)

## 基本操作
1. 设置Git的user name和email  
    `$ git config --global user.name "Vanny"`   
    `$ git config --global user.email "diff399202@sina.cn"` 
2. 生成SSH密钥  
    `$ ssh-keygen -t rsa -C "diff399202@sina.cn"`  
    *按三个回车，密码为空*
3. 在服务器添加公钥，公钥在.ssh/in_rsa.pub里
4. 从服务器克隆一个库并上传  
    `$ git clone git@git.oschina.net:Vanny/Vanny.git`
5. 在库中添加/新增文件 *.表示当前目录*  
    `$ git add filename`
6. 提交修改/新增的文件到仓库  
    `$ git commit -m "解释说明" -a`  
    *git commit 命令的-a选项可将所有被修改或者已删除的且已经被git管理的文档提交到仓库中。*
7. 将修改后的文件推送到服务器  
    `$ git push git@git.oschina.net:Vanny/Vanny.git`
8. 取回更新  
    `$ git pull git@git.oschina.net:Vanny/Vanny.git`  
    *URL为空时当前分支自动与唯一一个追踪分支进行合并*

## 其他操作
1. 创建分支  
    `$ git branch test`
2. 修改所在分支  
    `$ git checkout test`
3. 合并分支  
    `$ git merge test`  
4. 删除分支  
    `$ git branch -d test`
5. 内建图形化  
    `$ gitk`  
6. 彩色的git输出  
    `$ git config color.ui true`
    
## 答疑解惑
> warning: push.default is unset; its implicit value is changing in Git 2.0 from 'matching' to 'simple'. 
  To squelch this message and maintain the current behavior after the default changes, use:  git config --global push.default matching
  To squelch this message and adopt the new behavior now, use:  git config --global push.default simple  
  
  这个警告并不会影响push结果。
  可以按照提示运行git config --global push.default matching或git config --global push.default simple命令解决。
  push.default matching和push.default simple的区别：
  matching：git push会把本地所有分支push到名称相对应的远程主机上。这意味着可能会在不经意间push一些原本没打算push的分支。
  simple：git push仅仅把当前所在分支push到从当初git pull下来的那个对应分支上，另外，这个过程也会同时检查各个分支的名称是否相对应。