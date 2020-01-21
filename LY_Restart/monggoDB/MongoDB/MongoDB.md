# MongoDB 简介

## 什么是MongoDB ?

MongoDB 是由C++语言编写的开源数据库系统。

在高负载的情况下，添加更多的节点，可以保证服务器性能。

MongoDB 旨在为WEB应用提供可扩展的高性能数据存储解决方案。



MongoDB 将数据存储为一个文档。MongoDB是一个基于分布式文件存储的数据库。

 FirstName="Arun", Address="St. Xavier's Road", Spouse=[{Name:"Kiran"}], Children=[{Name:"Rihit", Age:8}]. 
 FirstName="Sameer",Address="8 Gandhi Road". 

**注意：**以上数据有两个不同的文档（以"."分隔）。以这种方式存储数据即为文件存储的数据库。 MongoDB是一个面向文档的数据库。



## 主要特点

- MongoDB的提供了一个面向文档存储，操作起来比较简单和容易。

- 你可以在MongoDB记录中设置任何属性的索引 (如：FirstName="Sameer",Address="8 Gandhi Road")来实现更快的排序。

- 你可以通过本地或者网络创建数据镜像，这使得MongoDB有更强的扩展性。

- 如果负载的增加（需要更多的存储空间和更强的处理能力） ，它可以分布在计算机网络中的其他节点上这就是所谓的分片。

- Mongo支持丰富的查询表达式。查询指令使用JSON形式的标记，可轻易查询文档中内嵌的对象及数组。

- MongoDb 使用update()命令可以实现替换完成的文档（数据）或者一些指定的数据字段 。

- Mongodb中的Map/reduce主要是用来对数据进行批量处理和聚合操作。

- Map和Reduce。Map函数调用emit(key,value)遍历集合中所有的记录，将key与value传给Reduce函数进行处理。

- Map函数和Reduce函数是使用Javascript编写的，并可以通过db.runCommand或mapreduce命令来执行MapReduce操作。

- GridFS是MongoDB中的一个内置功能，可以用于存放大量小文件。

- MongoDB允许在服务端执行脚本，可以用Javascript编写某个函数，直接在服务端执行，也可以把函数的定义存储在服务端，下次直接调用即可。

- MongoDB支持各种编程语言:RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。

- MongoDB安装简单。

  

## 历史发展

* 2007年10月，MongoDB由10gen团队所发展。2009年2月首度推出。

- 2012年05月23日，MongoDB2.1 开发分支发布了! 该版本采用全新架构，包含诸多增强。

- 2012年06月06日，MongoDB 2.0.6 发布，分布式文档数据库。

- 2013年04月23日，MongoDB 2.4.3 发布，此版本包括了一些性能优化，功能增强以及bug修复。

- 2013年08月20日，MongoDB 2.4.6 发布，是目前最新的稳定版。

  

## MongoDB 下载

你可以在mongodb官网下载该安装包，地址为：[ http://www.mongodb.org/downloads](http://www.mongodb.org/downloads)。MonggoDB支持以下平台:

- OS X 32-bit

- OS X 64-bit

- Linux 32-bit

- Linux 64-bit

- Windows 32-bit

- Windows 64-bit

- Solaris i86pc

- Solaris 64

  

## MongoDB 工具

有几种可用于MongoDB的管理工具。

### 监控

* MongoDB提供了网络和系统监控工具Munin，它作为一个插件应用于MongoDB中。

* Gangila是MongoDB高性能的系统监视的工具，它作为一个插件应用于MongoDB中。

* 基于图形界面的开源工具 Cacti, 用于查看CPU负载, 网络带宽利用率,它也提供了一个应用于监控 MongoDB 的插件。

### GUI

- Fang of Mongo – 网页式,由Django和jQuery所构成。

- Futon4Mongo – 一个CouchDB Futon web的mongodb山寨版。

- Mongo3 – Ruby写成。

- MongoHub – 适用于OSX的应用程序。

- Opricot – 一个基于浏览器的MongoDB控制台, 由PHP撰写而成。

- Database Master — Windows的mongodb管理工具

- RockMongo — 最好的PHP语言的MongoDB管理工具，轻量级, 支持多国语言.

  

## MongoDB 应用案例

下面列举一些公司MongoDB的实际应用：

- Craiglist上使用MongoDB的存档数十亿条记录。
- FourSquare，基于位置的社交网站，在Amazon EC2的服务器上使用MongoDB分享数据。
- Shutterfly，以互联网为基础的社会和个人出版服务，使用MongoDB的各种持久性数据存储的要求。
- bit.ly, 一个基于Web的网址缩短服务，使用MongoDB的存储自己的数据。
- spike.com，一个MTV网络的联营公司， spike.com使用MongoDB的。
- Intuit公司，一个为小企业和个人的软件和服务提供商，为小型企业使用MongoDB的跟踪用户的数据。
- sourceforge.net，资源网站查找，创建和发布开源软件免费，使用MongoDB的后端存储。
- etsy.com ，一个购买和出售手工制作物品网站，使用MongoDB。
- 纽约时报，领先的在线新闻门户网站之一，使用MongoDB。
- CERN，著名的粒子物理研究所，欧洲核子研究中心大型强子对撞机的数据使用MongoDB。

# window/linux平台安装

<https://www.w3cschool.cn/mongodb/mongodb-window-install.html>

****

## MongoDB 下载

下载zip解压并安装，。然后在 C:\tools\mongodb下建立和bin的同级目录 data ， log，如图：

![mongodb的data目录](C:\Users\lz\Documents\笔记\restart\images\mongo-data.png)





## 命令行下运行 MongoDB 服务器

为了从命令提示符下运行MongoDB服务器，你必须从MongoDB目录的bin目录中执行mongod.exe文件。

首先用管理员方式打开powershell（Windows10）

打开方法： 直接小娜搜索powershell 然后右键管理员模式打开

然后命令行输入：

  	cd C:\tools\mongodb\bin

​	  mongod --dbpath C:\tools\mongodb\data

然后直接手动启动mongo.exe

**windows环境下启动mongodb服务方法：**

​	<https://blog.csdn.net/u011692780/article/details/81223525>



## 将MongoDB服务器作为Windows服务运行

请注意，你必须有管理权限才能运行下面的命令。执行以下命令将MongoDB服务器作为Windows服务运行：

mongod --bind_ip yourIPadress --logpath "C:\data\dbConf\mongodb.log" --logappend --dbpath "C:\data\db" --port yourPortNumber --serviceName "YourServiceName" --serviceDisplayName "YourServiceName" --install

**下表为mongodb启动的参数说明：**

| 参数                | 描述                                                         |
| :------------------ | :----------------------------------------------------------- |
| --bind_ip           | 绑定服务IP，若绑定127.0.0.1，则只能本机访问，不指定默认本地所有IP |
| --logpath           | 定MongoDB日志文件，注意是指定文件不是目录                    |
| --logappend         | 使用追加的方式写日志                                         |
| --dbpath            | 指定数据库路径                                               |
| --port              | 指定服务端口号，默认端口27017                                |
| --serviceName       | 指定服务名称                                                 |
| --serviceDisplayNam | 指定服务名称，有多个mongodb服务时执行。                      |
| --install           | 指定作为一个Windows服务安装。                                |



## MongoDB后台管理 Shell

如果你需要进入MongoDB后台管理，你需要先打开mongodb装目录的下的bin目录，然后执行mongo.exe文件，MongoDB Shell是MongoDB自带的交互式Javascript shell,用来对MongoDB进行操作和管理的交互式环境。

当你进入mongoDB后台后，它默认会链接到 test 文档（数据库）：

![run-mongo-shell](https://atts.w3cschool.cn/attachments/image/20170705/1499248504777682.png)

由于它是一个JavaScript shell，您可以运行一些简单的算术运算:

![run-mongo-shell2](https://atts.w3cschool.cn/attachments/image/20170705/1499248512594169.png)

db 命令先了当前操作的文档（数据库）：

![run-mongo-shell-db-command](https://atts.w3cschool.cn/attachments/image/20170705/1499248525334795.png)

插入一些简单的记录并查找它：

![mongo-first-find](https://atts.w3cschool.cn/attachments/image/20170705/1499248534372115.png)

第一个命令将10插入到w3r集合的x字段中

