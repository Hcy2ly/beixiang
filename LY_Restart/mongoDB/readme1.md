<!--
 * @Author: ly
 * @Date: 2020-02-04 10:35:41
 * @LastEditTime : 2020-02-04 18:38:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang\LY_Restart\mongoDB\readme1.md
 -->
0. 先启动mongod 服务: mongod --dbpath C:\tools\mongodb\data\db
1. 淘宝定制的 cnpm 命令进行安装 cnpm install mongodb
2. 接下来我们来实现增删改查功能:
  1. 创建数据库
    - 要在 MongoDB 中创建一个数据库，首先我们需要创建一个 MongoClient 对象，
      var obj = reqiure('mongodb').MongoClient; //创建一个嗲有内部连接池的MongoClient（类）对象的（对象）实例。
    - 然后配置好指定的 URL 和 端口号。如果数据库不存在，MongoDB 将创建数据库并建立连接。
      var url = "...";
      //数据库存在 连接， 数据库不存在 创建并连接。
      obj.connect(url, {userNewUrlParser: true}, function(err, db) {
        if(err) throw err;
        console.log("db数据库已创建并连接");
        db.close(); //关闭数据库。
      });
      
      ps: {userNewUrlParser: true} 不建议使用当前的URL字符串解析器，并将在以后的版本中将其删除。要使用新的解析器，请将选项{useNewUrlParser：true}传递给MongoClient.connect。

  2. 创建集合
    - 使用createCollection()方法创建集合。
      obj.connect(url, {userNewUrlParser: true}, function(err, db) {
        if(err) throw err;
        var dbase1 = db.db("runoob"); //创建一个名叫 runoob 的数据库赋值给变量dbase1
        dbase1.createCollection("site", function(err, res) { //创建一个名叫site的集合。
          if(err) throw err;
          console.log("集合已创建");
          db.close();
        });
      });

  3. 插入数据
  以下实例我们连接数据库 runoob 的 site 表
    - 并插入一条数据条数据，使用 insertOne()：
    var obj = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/"; //该链接可以启动mongod服务
    //连接数据库
    obj.connect(url, { useNewUrlParser: true }, function(err,db) {
      if(err) throw err;
      var dbase1 = db.db('runoob');//存在该数据库就连接到该数据库，不存在就创建再连接到高数据库
      var data1 = {name: "runoob", url: "www.runoob"};//数据1
      dbase1
      .collection('site') //存在就切换到集合site 不存在就创建再切换到集合site
      .insertOne(data1, funcrion(err, res) { //插入一条数据data1
        if(err) throw err;
        console.log("文档插入成功");
        db.close();
      })
    })
    - 插入多条数据 insertMany()
      var datas1 =[{ name: "a"}, {name: "b"}, {name: "c"}];//数据1
      dbase1.collection("site").insertMany(datas1, function (err, res) {
        if (err) throw err;
        console.log("文档插入数量："+ res.insertedCount);//insertedCount 为插入条数
        db.close();
      });

  4. 查询数据
  可以用find() 返回匹配条件的所有数据。如果未指定条件，find() 返回集合中的所有数据。
    - find无条件 查询数据 .find({}).toArray(function(err,res) {})
      dbase1.collection('site').find({}).toArray(function(err, result) {
        if(err) throw err;
        console.log("查询所有"+ JSON.stringify(result));
        db.close();
      });
    - find条件查询 .find(条件).toArray(function(err,res) {})
      var condition1 = {name: "runoob"}; //条件1
      dbase1.collection('site').find(condition1).toArray(function(err, result) {
        if(err) throw err;
        console.log("查询{name：runoob}的所有数据"+ result);
        db.close();
      });

  5. 更新数据
  我们也可以对数据库的数据进行修改，以下实例将 name 为 "runoob" 的 url 改为 https://www.runoob.com：
    - 修改
      var condition1 = {name: "runoob"}; //查询条件1
      var updateCon1 = {$set: {url: "https://www.runoob.com"}}
      //修改满足条件查询到的第一条数据
      dbase1.collection('site').updateOne(condition1, updateCon1, function(err, res) {
        if(err) throw err;
        console.log("查询{name：runoob}的所有数据更新其中一条数据的url 为 https://www.runoob.com ： "+ res);
        db.close();
      });
    - 修改满足条件查询到的全部数据
      updateOne 修改成 updateMany
        console.log("更新的条数：" + res.result.nModified) //result.nModified 为更新的条数。

  6. 删除数据
  将满足{name: "runoob"}的文档删除
    - deleteOne()删除一条 / deleteMay()删除多条:
      dbase1.collection('site').deleteOne(condition1, updateCon1, function(err, res) {
        if(err) throw err;
        console.log("查询{name：runoob}的所有数据更新其中一条数据的url 为 https://www.runoob.com ： "+ res);
        db.close();
      });
    * [注意：删除的插入的第一条数据，所以所有数据的查询都是按照插入的数据查询的。先进先出]

  7. 排序
  排序 使用 sort() 方法，该方法接受一个参数，规定是升序(1)还是降序(-1)。
    - { type: 1 }  // 按 type 字段升序
    - { type: -1 } // 按 type 字段降序
    var sortType1 = {name: -1};
    dbase1.collection('site').find().sort(sortType1).toArray(function(err, result) {
      if(err) throw err;
      console.log(result);
      db.close();
    })
    //排序结果： c-b-a

  8. 查询分页
    - limit() 指定返回的条数
      dbase1.collection('site').find().limit(2).toArray(function(err, result) {
        if(err) throw err;
        console.log("指定返回2条：" + result);
        db.close();
      });
    - skip() 指定跳过的条数
        dbase1.collection('site').find({}).limit(1).skip(1).toArray(function (err, result) { // 跳过1条展示1条，所以就是展示第二条。
          if (err) throw err;
          console.log("展示第2条数据：" + JSON.stringify(result));
          db.close();
        });

  9. 连接操作
  mongoDB 不是一个关系型数据库，但我们可以使用 $lookup 来实现左连接。
  例如我们有两个集合数据分别为：
    - 集合1：orders
      [
        { _id: 1, product_id: 154, status: 1 }
      ]
    - 集合2：products
      [
        { _id: 154, name: '笔记本电脑' },
        { _id: 155, name: '耳机' },
        { _id: 156, name: '台式电脑' }
      ]
  
  10. 删除集合，我们可以使用 drop() 方法来删除集合：
    - drop() 删除 test 集合
      dbbase1.collection("site1").drop(function(err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
        if (err) throw err;
        if (delOK) console.log("集合已删除");
        db.close();
      });