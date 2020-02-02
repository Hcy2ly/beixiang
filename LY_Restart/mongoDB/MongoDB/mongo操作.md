插入文档：–––

\1.      Mongo 连接数据库

\2.      使用use database1 切换到需要添加文档的数据库（如果没有该数据库则先添加再切换）

Show dbs  显示所有数据库

Use database1 因为没有添加数据所以不在数据库列表中

Db 查看当前数据库

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

\3.      插入数据

db.col.find() 查询col集合里面的数据（文档）

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg)

也可以用变量的方式：

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image006.jpg)

可以定义一个 

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image008.jpg)

 

也可以定义多个：

 

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image010.jpg)

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image012.jpg)

 

\4.      显示添加删除集合 collections 类似于 tables

Show tables;

 

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image014.jpg)    

 

\5.      更新保存：update

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image016.jpg)

 

\6.      更新或者添加保存： save

 

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image018.jpg)

 

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image020.jpg)

 

\7.      >db.COLLECTION_NAME.find() 

\>db.col.find().pretty()pretty() 方法以格式化的方式来显示所有文档。

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image022.jpg)

 

 

\8.      条件查询： 

比较运算符：【（>[=]） 大于[等于] - $gt[e]  |  (<[=]) 小于[等于] - $lt[e] 】

$type 条件运算符： db.col.find({"title" : {$type : 2}})表示类型为字符串

 

\9.      Limit() 与 skip()

a)       db.col.find().limit(1)  - 显示集合中的一条数据

ps: 如果你们没有指定limit()方法中的参数则显示集合中的所有数据。

b)       skip（）同样接受一个数字参数作为跳过的记录条数。

下面这个实例为limit（1） 只显示1条，skip（1）跳过一条，所以该实例只会显示第二条文档数据： 

\>db.mycol.find({},{"title":1,_id:0}).limit(1).skip(1) {"title":"NoSQL Overview"} 

\> 

**注:**skip()方法默认参数为 0 。

\10.   sort（） 排序

 

 

\11.   索引 MongoDB使用 ensureIndex() 方法来创建索引。

db.mycol.ensureIndex({"title":1}) >

 

 

 

\12.   聚合 aggregate() 方法

MongoDB中聚合的方法使用aggregate()。

MongoDB中聚合(aggregate)主要用于处理数据(诸如统计平均值,求和等)，并返回计算后的数据结果。有点类似sql语句中的 count(*)。

1） 切换数据库use database1

2） 清空数据库中col集合中的所有数据（文档）

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image024.jpg)

3） 插入有同一条信息的不同数据，便于计算总和（这里我用变量的形式插入）而后使用db.col.find() 查看插入数据

4） 使用aggregate()方法计算聚合（这里计算相同name下的数据总和）

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image026.jpg)

 

 

\13.   复制（副本集）

MongoDB副本集设置

1、关闭正在运行的MongoDB服务器。

现在我们通过指定 --replSet 选项来启动mongoDB。--replSet 基本语法格式如下：

```
mongod --port "PORT" --dbpath "YOUR_DB_DATA_PATH" --replSet "REPLICA_SET_INSTANCE_NAME"
```

### 实例

```
mongod --port 27017 --dbpath "D:\set up\mongodb\data" --replSet rs0
```

以上实例会启动一个名为rs0的MongoDB实例，其端口号为27017。

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image028.jpg)

\2. 启动后打开命令提示框并连接上mongoDB服务。

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image030.jpg)

\3. 在Mongo客户端使用命令rs.initiate()来启动一个新的副本集。

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image032.jpg)

\4. 我们可以使用rs.conf()来查看副本集的配置

​       ![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image034.jpg)

\5. 查看副本集姿态使用 rs.status() 命令

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image036.jpg)

 

 

\14.   添加成员

![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image038.jpg)

\15.   MongoDB中你只能通过主节点将Mongo服务添加到副本集中， 判断当前运行的Mongo服务是否为主节点可以使用命令db.isMaster() 。

\16.   ![img](file:///C:/Users/lz/AppData/Local/Temp/msohtmlclip1/01/clip_image040.jpg)

