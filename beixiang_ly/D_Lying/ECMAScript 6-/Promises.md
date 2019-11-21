ES6 对 Promise 有了原生的支持，一个 Promise 是一个等待被异步执行的对象，当它执行完成后，其状态会变成 resolved 或者rejected。

var p = new Promise(function(resolve, reject) {  
  if (/* condition */) {
    // fulfilled successfully
    resolve(/* value */);  
  } else {
    // error, rejected
    reject(/* reason */);  
  }
});

每一个 Promise 都有一个 .then 方法，这个方法接受两个参数，第一个是处理 resolved 状态的回调，一个是处理 rejected 状态的回调：

p.then((val) => console.log("Promise Resolved", val),(err) => console.log("Promise Rejected", err));