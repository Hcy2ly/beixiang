# input 输入框输入小写字母自动转换成大写字母有两种方法

- html 里 input 加上

 <input type="text" id="txt1" value="" onkeyup="toUpperCase(this)"/>

js 写函数

function toUpperCase(obj)
{
    obj.value = obj.value.toUpperCase()
}

这种方法虽然可以，但是输入汉字的时候会受到干扰，还有一种更好的方法

- 加 css

 <input type="text" id="txt1" value="" style="text-transform:uppercase"/>
转换不同元素中的文本：

h1 {text-transform:uppercase;}
h2 {text-transform:capitalize;}
p {text-transform:lowercase;}

屏蔽中文和空格：οnkeyup="value=value.replace(/[^\w\.\/]/ig,'')"

1 <input  name="username" type="text" value="" placeholder="数字字母组合" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')" style="text-transform:lowercase;"/>


# 输入框输入字数限制