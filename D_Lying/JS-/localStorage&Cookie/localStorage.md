
#Window localStorage 属性
* 使用 localStorage 创建一个本地存储的 name/value 对，name="lastname" value="Smith", 然后检索 "lastname" 的值，并插入到 id="result" 的元素上:
// 存储  localStorage.setItem("lastname", "Smith");
// 检索  document.getElementById("result").innerHTML = localStorage.getItem("lastname");

* 定义和使用
  - localStorage 和 sessionStorage 属性允许在浏览器中存储 key/value 对的数据。
  - localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去删除。
  - localStorage 属性是只读的。

* 语法   window.localStorage
  - 保存数据语法： localStorage.setItem("key", "value");
  - 读取数据语法： var lastname = localStorage.getItem("key");
  - 删除数据语法： localStorage.removeItem("key");

* sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。
  * 语法 window.sessionStorage
    - 保存数据语法：sessionStorage.setItem("key", "value");
    - 读取数据语法：var lastname = sessionStorage.getItem("key");
    - 删除指定键的数据语法：sessionStorage.removeItem("key");
    - 删除所有数据：sessionStorage.clear();