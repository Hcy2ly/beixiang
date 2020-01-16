var domain;
(function() {
  const domainLink = {  //定义链接
    getParams: function(name) {
      var regexS = "[\\?&]" + name + "=([^&#]*)"; //匹配？&里面的任何字符
      var regex = new RegExp(regexS); 
//var patt = new RegExp(pattern,modifiers);  
// - pattern（模式） 描述了表达式的模式
// - modifiers(修饰符) 用于指定全局匹配、区分大小写的匹配和多行匹配
      var results = regex.exec(location.href);
// exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
//如果能够找到该链接就返回，不能就返回null
      if (results === null) return "";
      else return results[1];
    },
    online: "//web.iwangzha.com",
    test: "//web-test.iwangzha.com",
    dev: "//web-dev.iwangzha.com",
    pre: "//web-pre.iwangzha.com",
    local: ""
  };
  let _domain = document.domain;
  if (_domain.indexOf(".iwangzha.com") !== -1 && !domainLink.getParams("iType")) {
    domain = _domain.indexOf("-test") !== -1 ? domainLink.test : domainLink.online;
  } else if (domainLink.getParams("iType") == "test") {
    domain = domainLink.test;
  } else if (domainLink.getParams("iType") == "dev") {
    domain = domainLink.dev;
  } else if (domainLink.getParams("iType") == "online") {
    domain = domainLink.online;
  } else if (domainLink.getParams("iType") == "pre") {
    domain = domainLink.pre;
  } else {
    domain = domainLink.local;
  }
})();

export { domain };

// export const domain = () => {
//   let _dimain;
//   let __domain = document.domain;
//     if (__domain.indexOf('http://172.16.18.190') !== -1) {
//       _domain = '//web-test.iwangzha.com';
//     } else {
//       _domain = __domain.indexOf('-test') !== -1 ? '//web.iwangzha.com' : '//web-test.iwangzha.com';
//     }
//     return _domain;
// }
