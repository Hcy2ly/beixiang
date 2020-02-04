/*
 * @Author: ly
 * @Date: 2020-02-04 10:33:03
 * @LastEditTime : 2020-02-04 18:37:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang\LY_Restart\mongoDB\nodejs-mongodb-demo1.js
 */

// 还是要先启动mongod服务
var MObject = require('mongodb').MongoClient; //先创建一个 MongoClient对象(也算是MongoClient类的实例（一个带有内部连接池的MongoDB客户端）)

// var url = "mongodb://localhost:27017/runoob"; //确定url
var url = "mongodb://localhost:27017/";

//连接数据库
MObject.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;

  var dbase1 = db.db('runoob');//存在该数据库就连接到该数据库，不存在就创建再连接到高数据库
  // 插入一条数据
  // var data1 = { name: "runoob", url: "www.runoob" };//数据1
  // dbase1.collection("site").insertOne(data1, function (err, res) {
  //   if (err) throw err;
  //   console.log("文档插入成功");
  //   db.close();
  // });

  // // 插入多条数据
  // var datas1 =[{ name: "a"}, {name: "b"}, {name: "c"}];//数据1
  // dbase1.collection("site").insertMany(datas1, function (err, res) {
  //   if (err) throw err;
  //   console.log("文档插入数量："+ res.insertedCount);//insertedCount 为插入条数
  //   db.close();
  // });


  // find无条件 查询数据
  // dbase1.collection('site').find({}).toArray(function(err, result) {
  //   if(err) throw err;
  //   console.log("查询所有"+ JSON.stringify(result));
  //   db.close();
  // });

  // find条件查询
  // var condition1 = {name: "runoob"}; //条件1
  // dbase1.collection('site').find(condition1).toArray(function(err, result) {
  //   if(err) throw err;
  //   console.log("查询{name：runoob}的所有数据"+ result);
  //   db.close();
  // });


  // 更新数据 updateOne更新一条，updateMany()更新多条
  // var condition1 = {name: "runoob"}; //查询条件1
  // var updateCon1 = {$set: {url: "https://www.runoob.com"}}//更新的数据1

  // 这里的updateOne() 只会更新搜索所有数据的第一条
  // dbase1.collection('site').updateOne(condition1, updateCon1, function(err, res) {
  //   if(err) throw err;
  //   console.log("查询{name：runoob}的所有数据更新其中一条数据的url 为 https://www.runoob.com ： "+ res);
  //   db.close();
  // });

  // 更新多条updateMany()
  // dbase1.collection('site').updateMany(condition1, updateCon1, function(err, res) {
  //   if(err) throw err;
  //   // console.log("查询{name：runoob}的所有数据更新其中一条数据的url 为 https://www.runoob.com ： "+ res);
  //   console.log("更新的条数：" + res.result.nModified)
  //   db.close();
  // });


  // 删除文档数据（一条/多条）
  // var condition1 = { name: "runoob" }; //查询条件1
  //删除一条
  // dbase1.collection('site').deleteOne(condition1, function (err, doc) {
  //   if (err) throw err;
  //   console.log("查询{name：runoob}的所有数据更新其中一条数据的url 为 https://www.runoob.com ： " + doc);
  //   db.close();
  // });
  //删除多条
  // dbase1.collection('site').deleteMany(condition1, function (err, doc) {
  //   if (err) throw err;
  //   console.log(doc.result.n); //result.n 删除的条数
  //   db.close();
  // });


  // 排序（升序(1)，降序(-1)）
  // var sortType1 = { name: -1 }; //排序方式
  // dbase1.collection('site').find().sort(sortType1).toArray(function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });


  // limit() 指定的返回条数 
  // dbase1.collection('site').find().limit(2).toArray(function(err, result) {
  //   if(err) throw err;
  //   console.log("展示2条数据："+ result);
  //   db.close();
  // });

  // skip() 指定跳过的条数
  // dbase1.collection('site').find({}).limit(1).skip(1).toArray(function (err, result) { // 跳过1条展示1条，所以就是展示第二条。
  //   if (err) throw err;
  //   console.log("展示第2条数据：" + JSON.stringify(result));
  //   db.close();
  // });


  // 连接操作
  // dbase1.collection('site1').insertOne({ name: "d" , num: 1, _name: "a"}, function (err, res) {
  //   if (err) throw err;
  //   console.log("插入" + res);
  //   db.close();
  // });
  // // $lookup 实现左连接
  // dbase1.collection('site1').aggregate([
  //   {
  //     $lookup:
  //     {
  //       from: 'site1',            // 右集合
  //       localField: 'name',        // 左集合 join 字段
  //       foreignField: '_name',      // 右集合 join 字段
  //       as: 'nums'           // 新生成字段（类型array）
  //     }
  //   }
  // ]).toArray(function (err, res) {
  //   if (err) throw err;
  //   console.log(JSON.stringify(res));
  //   db.close();
  // });


  // 删除集合
  // dbase1.collection("site1").drop(function(err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
  //   if (err) throw err;
  //   if (delOK) console.log("集合已删除");
  //   db.close();
  // });

});
