
[docCookie.js]
substring() 方法用于提取字符串中介于两个指定下标之间的字符。  

JSON.parse() 方法将数据转换为 JavaScript 对象。
(语法
JSON.parse(text[, reviver])
参数说明：
text:必需， 一个有效的 JSON 字符串。
reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。)

 window.setUserId = params => {
    const { userId, token, deviceId,appversion } = params;
    activity.userId = userId;
    activity.token = token;
    activity.deviceId = deviceId;
    activity.appversion = appversion;
    activity.init();
  }; //这个方法是用来取客户端数据。
  JSB.getUserId({}, "setUserId");

都放在对象内去定义赋值。避免曝光。
setUserId:该方法去取客户端的userId token标识 diviceId设备号 appversion版本号
token：令牌 活动标识 

JSB是在客户端app内才可以去调用的方法。




姜杰讲的关于埋点的共用方法。思考一下/