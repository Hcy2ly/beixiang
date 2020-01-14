var domain;
(function () {
  const domainLink = {
    getParams: function (name) {
      var regexS = "[\\?&]" + name + "=([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(location.href);

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
  } 

  else if (domainLink.getParams("state") == "test") {
    domain = domainLink.test;
  } 

  else if (domainLink.getParams("iType") == "dev") {
    domain = domainLink.dev;
  } else if (domainLink.getParams("iType") == "online") {
    domain = domainLink.online;
  } else if (domainLink.getParams("iType") == "pre") {
    domain = domainLink.pre;
  } 
  // ly- 0917
  //建科说为了满足当域名被封时链接仍然需要//web.iwangzha.com域名去满足一个链接跳转 用一个参数的存在来帮助跳转。（也不知道这样表达对不对）
  //建科建议我下次遇到这种情况的时候，可以直接在链接后面添加一个 state 用state参数去装我们的域名部分
  else if (_domain.indexOf(".iwangzha.com") == -1) { 
    domain = _domain.indexOf("-test") == -1 ? domainLink.online : domainLink.test;
  }
  else {
    domain = domainLink.local;
  }
  // eslint-disable-next-line no-console
  console.log(domain);
})();

export { domain };