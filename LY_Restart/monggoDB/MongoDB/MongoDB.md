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



# MongoDB概念解析

******

## MongoDB 概念解析

不管我们学习什么数据库都应该学习其中的基础概念，在mongodb中基本的概念是文档、集合、数据库，下面我们挨个介绍。

下表将帮助您更容易理解Mongo中的一些概念：

| SQL术语/概念 | MongoDB术语/概念 | 解释/说明                           |
| ------------ | ---------------- | ----------------------------------- |
| database     | database         | 数据库                              |
| table        | collection       | 数据库表/集合                       |
| row          | document         | 数据记录行/文档                     |
| column       | field            | 数据字段/域                         |
| index        | index            | 索引                                |
| table joins  |                  | 表连接,MongoDB不支持                |
| primary key  | primary key      | 主键,MongoDB自动将_id字段设置为主键 |

通过下图实例，我们也可以更直观的的了解Mongo中的一些概念：

![img](https://atts.w3cschool.cn/attachments/day_160812/201608121717378222.png)



## 数据库

一个mongodb中可以建立多个数据库。

MongoDB的默认数据库为"db"，该数据库存储在data目录中。

MongoDB的单个实例可以容纳多个独立的数据库，每一个都有自己的集合和权限，不同的数据库也放置在不同的文件中。

**"show dbs"** 命令可以显示所有数据的列表。

```
$ ./mongo
MongoDB shell version: 3.0.6
connecting to: test
> show dbs
local  0.078GB
test   0.078GB
> 
```

执行 **"db"** 命令可以显示当前数据库对象或集合。

```
$ ./mongo
MongoDB shell version: 3.0.6
connecting to: test
> db
test
> 
```

运行"use"命令，可以连接到一个指定的数据库。

```
> use local
switched to db local
> db
local
> 
```

以上实例命令中，"local" 是你要链接的数据库。

在下一个章节我们将详细讲解MongoDB中命令的使用。

**数据库也通过名字来标识。数据库名可以是满足以下条件的任意UTF-8字符串。**

- 不能是空字符串（"")。
- 不得含有' '（空格)、.、$、/、\和\0 (空宇符)。
- 应全部小写。
- 最多64字节。

有一些数据库名是保留的，可以直接访问这些有特殊作用的数据库。

- **admin**： 从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。

- **local:** 这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合

- **config**: 当Mongo用于分片设置时，config数据库在内部使用，用于保存分片的相关信息。

  

## 文档

文档是一个键值(key-value)对(即BSON)。MongoDB 的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，这与关系型数据库有很大的区别，也是 MongoDB 非常突出的特点。

一个简单的文档例子如下：

```
{"site":"www.w3cschool.cn", "name":"W3Cschool教程"}
```

下表列出了 RDBMS 与 MongoDB 对应的术语：

| RDBMS              | MongoDB                           |
| ------------------ | --------------------------------- |
| 数据库             | 数据库                            |
| 表格               | 集合                              |
| 行                 | 文档                              |
| 列                 | 字段                              |
| 表联合             | 嵌入文档                          |
| 主键               | 主键 (MongoDB 提供了 key 为 _id ) |
| 数据库服务和客户端 |                                   |
| Mysqld/Oracle      | mongod                            |
| mysql/sqlplus      | mongo                             |

需要注意的是：

1. 文档中的键/值对是有序的。
2. 文档中的值不仅可以是在双引号里面的字符串，还可以是其他几种数据类型（甚至可以是整个嵌入的文档)。
3. MongoDB区分类型和大小写。
4. MongoDB的文档不能有重复的键。
5. 文档的键是字符串。除了少数例外情况，键可以使用任意UTF-8字符。

文档键命名规范：

- 键不能含有\0 (空字符)。这个字符用来表示键的结尾。
- .和$有特别的意义，只有在特定环境下才能使用。
- 以下划线"_"开头的键是保留的(不是严格要求的)。



## 集合

集合就是 MongoDB 文档组，类似于 RDBMS （关系数据库管理系统：Relational Database Management System)中的表格。

集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。



比如，我们可以将以下不同数据结构的文档插入到集合中：

```
{"site":"www.baidu.com"}
{"site":"www.google.com","name":"Google"}
{"site":"www.w3cschool.cn","name":"W3Cschool教程","num":5}
```

当第一个文档插入时，集合就会被创建。

### 合法的集合名

- 集合名不能是空字符串""。
- 集合名不能含有\0字符（空字符)，这个字符表示集合名的结尾。
- 集合名不能以"system."开头，这是为系统集合保留的前缀。
- 用户创建的集合名字不能含有保留字符。有些驱动程序的确支持在集合名里面包含，这是因为某些系统生成的集合中包含该字符。除非你要访问这种系统创建的集合，否则千万不要在名字里出现$。　

如下实例：

```
db.col.findOne()
```

### capped collections

Capped collections 就是固定大小的collection。

它有很高的性能以及队列过期的特性(过期按照插入的顺序). 有点和 "RRD" 概念类似。

Capped collections是高性能自动的维护对象的插入顺序。它非常适合类似记录日志的功能 和标准的collection不同，你必须要显式的创建一个capped collection， 指定一个collection的大小，单位是字节。collection的数据存储空间值提前分配的。



要注意的是指定的存储大小包含了数据库的头信息。



```
db.createCollection("mycoll", {capped:true, size:100000})
```

- 在capped collection中，你能添加新的对象。
- 能进行更新，然而，对象不会增加存储空间。如果增加，更新就会失败 。
- 数据库不允许进行删除。使用drop()方法删除collection所有的行。
- 注意: 删除之后，你必须显式的重新创建这个collection。
- 在32bit机器中，capped collection最大存储为1e9( 1X109)个字节。

## 元数据

数据库的信息是存储在集合中。它们使用了系统的命名空间：

```
dbname.system.*
```

在MongoDB数据库中名字空间 <dbname>.system.* 是包含多种系统信息的特殊集合(Collection)，如下:

| 集合命名空间             | 描述                                      |
| ------------------------ | ----------------------------------------- |
| dbname.system.namespaces | 列出所有名字空间。                        |
| dbname.system.indexes    | 列出所有索引。                            |
| dbname.system.profile    | 包含数据库概要(profile)信息。             |
| dbname.system.users      | 列出所有可访问数据库的用户。              |
| dbname.local.sources     | 包含复制对端（slave）的服务器信息和状态。 |

对于修改系统集合中的对象有如下限制。

在{{system.indexes}}插入数据，可以创建索引。但除此之外该表信息是不可变的(特殊的drop index命令将自动更新相关信息)。

{{system.users}}是可修改的。 {{system.profile}}是可删除的。



## MongoDB 数据类型

下表为MongoDB中常用的几种数据类型。

| 数据类型           | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| String             | 字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。 |
| Integer            | 整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。 |
| Boolean            | 布尔值。用于存储布尔值（真/假）。                            |
| Double             | 双精度浮点值。用于存储浮点值。                               |
| Min/Max keys       | 将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。 |
| Arrays             | 用于将数组或列表或多个值存储为一个键。                       |
| Timestamp          | 时间戳。记录文档修改或添加的具体时间。                       |
| Object             | 用于内嵌文档。                                               |
| Null               | 用于创建空值。                                               |
| Symbol             | 符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。 |
| Date               | 日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。 |
| Object ID          | 对象 ID。用于创建文档的 ID。                                 |
| Binary Data        | 二进制数据。用于存储二进制数据。                             |
| Code               | 代码类型。用于在文档中存储 JavaScript 代码。                 |
| Regular expression | 正则表达式类型。用于存储正则表达式。                         |



***

​	每一个你不满意的现在，都有一个你没有努力的曾经。

****



# MongoDB 连接

******

## 描述

在本教程我们将讨论MongoDB的不同连接方式。

------

## 启动 MongoDB服务

在前面的教程中，我们已经讨论[了如何启动MongoDB服](https://www.w3cschool.cn/mongodb/mongodb-window-install.html)务，你只需要在MongoDB安装目录的bin目录下执行'mongod'即可。

执行启动操作后，mongodb在输出一些必要信息后不会输出任何信息，之后就等待连接的建立，当连接被建立后，就会开始打印日志信息。

你可以使用MongoDB shell 来连接 MongoDB 服务器。你也可以使用PHP来连接mongodb。本教程我们会使用 MongoDB shell来连接Mongodb服务，之后的章节我们将会介绍如何通过php 来连接MongoDB服务。

默认情况下，MongoDB的启动端口为27017。比MongoDB启动端口大1000的端口为MongoDB的web用户界面，你可以再浏览器中输入http://localhost:28017 来访问MongoDB的web用户界面。

ps：

1. 第一步  管理员打开powershell 
2. 第二步  cd C:\tools\mongodb\bin  
3. 第三步  ./mongod --dbpath C:\tools\mongodb\data（data里面没有数据）

------

## 通过shell连接MongoDB服务

你可以通过执行以下命令来连接MongoDB的服务。

**注意：**localhost为主机名，这个选项是必须的：

- 使用默认端口来连接 MongoDB 的服务。

```linux
		mongodb://localhost
```

- 通过 shell 连接 MongoDB 服务：

```linux
        $ ./mongo
        MongoDB shell version: 4.0.9
        connecting to: test
        ... 
```

当你执行以上命令时，你可以看到以下输出结果：

​	![连接MongoDB服务](C:\Users\lz\Documents\笔记\restart\images\mongod_localhost.png)

这时候你返回查看运行 **./mongod** 命令的窗口，可以看到是从哪里连接到MongoDB的服务器，您可以看到如下信息：

```
……省略信息……
2020-01-23T23:56:07.135+0800 I -        [conn3] end connection 127.0.0.1:56872 (1 connection now open)
2020-01-23T23:56:10.581+0800 I NETWORK  [thread1] connection accepted from 127.0.0.1:56966 #4 (1 connection now open)
2020-01-23T23:56:10.582+0800 I NETWORK  [conn4] received client metadata from 127.0.0.1:56966 conn4: { application: { name: "MongoDB Shell" }, driver: { name: "MongoDB Internal Client", version: "3.4.16-26-g315d49ee78" }, os: { type: "Windows", name: "Microsoft Windows 8", architecture: "x86_64", version: "6.2 (build 9200)" } } # 该行表明一个来自本机的连接

……省略信息……
```

------

## MongoDB连接命令格式

使用用户名和密码连接到MongoDB服务器，你必须使用 'username:password@hostname/dbname' 格式，'username'为用户名，'password' 为密码。

使用用户名和密码连接登陆到默认数据库：<、p>

mongodb://mongo_admin:AxB6_w3r@localhost/

以上命令中，用户 mongo_admin使用密码AxB6_w3r连接到本地的MongoDB服务上。输出结果如下所示：<、p> ![mongodb-connect-with-username-and-password-to-default-database](https://7n.w3cschool.cn/statics/images/course/2013/10/mongodb-connect-with-username-and-password-to-default-database.png)

使用用户名和密码连接登陆到指定数据库：

连接到指定数据库的格式如下：

mongodb://mongo_admin:AxB6_w3r@localhost/w3r

------

## 更多连接实例

连接本地数据库服务器，端口是默认的。

mongodb://localhost

使用用户名fred，密码foobar登录localhost的admin数据库。

mongodb://fred:foobar@localhost

使用用户名fred，密码foobar登录localhost的baz数据库。

mongodb://fred:foobar@localhost/baz

连接 replica pair, 服务器1为example1.com服务器2为example2。

mongodb://example1.com:27017,example2.com:27017

连接 replica set 三台服务器 (端口 27017, 27018, 和27019):

mongodb://localhost,localhost:27018,localhost:27019

连接 replica set 三台服务器, 写入操作应用在主服务器 并且分布查询到从服务器。

mongodb://host1,host2,host3/?slaveOk=true

直接连接第一个服务器，无论是replica set一部分或者主服务器或者从服务器。

mongodb://host1,host2,host3/?connect=direct;slaveOk=true

当你的连接服务器有优先级，还需要列出所有服务器，你可以使用上述连接方式。

安全模式连接到localhost:

mongodb://localhost/?safe=true

以安全模式连接到replica set，并且等待至少两个复制服务器成功写入，超时时间设置为2秒。

mongodb://host1,host2,host3/?safe=true;w=2;wtimeoutMS=2000

------

## 参数选项说明

标准格式：

mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]

标准的连接格式包含了多个选项(options)，如下所示：

| 选项                | 描述                                                         |
| :------------------ | :----------------------------------------------------------- |
| replicaSet=name     | 验证replica set的名称。 Impliesconnect=replicaSet.           |
| slaveOk=true\|false | true:在connect=direct模式下，驱动会连接第一台机器，即使这台服务器不是主。在connect=replicaSet模式下，驱动会发送所有的写请求到主并且把读取操作分布在其他从服务器。false: 在 connect=direct模式下，驱动会自动找寻主服务器. 在connect=replicaSet 模式下，驱动仅仅连接主服务器，并且所有的读写命令都连接到主服务器。 |
| safe=true\|false    | true: 在执行更新操作之后，驱动都会发送getLastError命令来确保更新成功。(还要参考 wtimeoutMS).false: 在每次更新之后，驱动不会发送getLastError来确保更新成功。 |
| w=n                 | 驱动添加 { w : n } 到getLastError命令. 应用于safe=true。     |
| wtimeoutMS=ms       | 驱动添加 { wtimeout : ms } 到 getlasterror 命令. 应用于 safe=true. |
| fsync=true\|false   | true: 驱动添加 { fsync : true } 到 getlasterror 命令.应用于 safe=true.false: 驱动不会添加到getLastError命令中。 |
| journal=true\|false | 如果设置wie true, 同步到 journal (在提交到数据库前写入到实体中). 应用于 safe=true |
| connectTimeoutMS=ms | 可以打开连接的时间。                                         |
| socketTimeoutMS=ms  | 发送和接受sockets的时间。                                    |

# MongoDB 创建数据库

## MongoDB 创建数据库

### 语法

MongoDB 创建数据库的语法格式如下：

```
use DATABASE_NAME
```

如果数据库不存在，则创建数据库，否则切换到指定数据库。

### 实例

以下实例我们创建了数据库 youj:

```
> use youj
switched to db youj
> db
youj
> 
```

如果你想查看所有数据库，可以使用 **show dbs** 命令：

```
> show dbs
local  0.078GB
test   0.078GB
> 
```

可以看到，我们刚创建的数据库 youj 并不在数据库的列表中， 要显示它，我们需要向 youj 数据库插入一些数据。

```
> db.youj.insert({"name":"W3Cschool教程"})
WriteResult({ "nInserted" : 1 })
> show dbs
local   0.078GB
youj  0.078GB
test    0.078GB
> 
```

MongoDB 中默认的数据库为 test，如果你没有创建新的数据库，集合将存放在 test 数据库中。

