# https://www.runoob.com/vue2/vue-install.html

由于 npm 安装速度慢，本教程使用了淘宝的镜像及其命令 cnpm，安装使用介绍参照：使用淘宝 NPM 镜像。
1. 使用淘宝 NPM 镜像 
大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。
淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。
你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

  $ npm install -g cnpm --registry=https://registry.npm.taobao.org
  这样就可以使用 cnpm 命令来安装模块了：

  $ cnpm install [name]
  更多信息可以查阅：http://npm.taobao.org/。

- 如果你遇到了使用 npm 安 装node_modules 总是提示报错：报错: npm resource busy or locked.....。
可以先删除以前安装的 node_modules :
  npm cache clean
  npm install

2. NPM 方法 
- npm 版本需要大于 3.0，如果低于此版本需要升级它：
  # 查看版本
    $ npm -v
  # 升级 npm
    cnpm install npm -g

  # 升级或安装 cnpm
    npm install cnpm -g
- 在用 Vue.js 构建大型应用时推荐使用 NPM 安装：
  # 最新稳定版
    cnpm install vue

- Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。
  # 全局安装 vue-cli 
    cnpm install --global vue-cli
  # 创建一个基于webpack模板的新项目
    vue init webpack my-project
# 这里需要进行一些配置，默认回车即可
This will install Vue 2.x version of the template.

For Vue 1.x use: vue init webpack#1.0 my-project

? Project name my-project
? Project description A Vue.js project
? Author runoob <test@runoob.com>
? Vue build standalone
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? Yes

   vue-cli · Generated "my-project".

   To get started:
   
     cd my-project
     npm install
     npm run dev
   
   Documentation can be found at https://vuejs-templates.github.io/webpack


* VUe.js模板语法
  - vue.js使用基于html的模板语法，允许开发者声明式的将dom绑定至底层Vue实例的数据
  - vue.js的核心是允许拟采用简洁的模板与发来声明式的将数据渲染进DOM的系统。
  - 结合响应系统，在应用状态改变时， Vue 能够智能地计算出重新渲染组件的最小代价并应用到 DOM 操作上。

# 指令 v-  （带有 v- 前缀的特殊属性）
- 指令用于在表达式的值改变时，将某些行为应用到 DOM 上。
  * 文本插入
    1. {{ message }}
    2. <div v-html="message"></div>

  * v-bind 被用来响应地更新 HTML 属性
  以下实例判断 class1 的值，如果为 true 使用 class1 类的样式，否则不使用该类： <div v-bind:class="{'class1': use}">v-bind:class 指令</div>

  * v-if <p v-if="seen">现在你看到我了</p>
  v-if 指令将根据表达式 seen 的值(true 或 false )来决定是否插入 p 元素。

  * v-on 用于监听 DOM 事件
（修饰符是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。）
  <form v-on:submit.prevent="onSubmit"></form> 
    - .prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
    - 参数onSubmit为监听事件名

  *  v-model 用户输入 
  - 在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定： <input v-model="message">
  - v-model 指令用来在 input、select、textarea、checkbox、radio 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值。
  - 按钮的事件我们可以使用 v-on 监听事件，并对用户的输入进行响应。

  * Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。 由"管道符"指示，过滤器函数接受表达式的值作为第一个参数。
  过滤器可以串联：{{ message | filterA | filterB }}
  过滤器是 JavaScript 函数，因此可以接受参数：{{ message | filterA('arg1', arg2) }}
  这里，message 是第一个参数，字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数。
  
  * 缩写
    - <a v-bind:href="url"></a>  =>  <a :href="url"></a>
    - <a v-on:click="doSomething"></a>  =>  <a @click="doSomething"></a>

  * v-if / v-else / v-else-if 
    - 也可以使用 v-show 指令来根据条件展示元素：<h1 v-show="ok">Hello!</h1>
    - v-else 、v-else-if 必须跟在 v-if 或者 v-else-if之后。
    
  * Vue.js 计算属性
    - 计算属性关键词: computed。
    - 计算属性在处理一些复杂逻辑时是很有用的。
    - 提供的函数将用作属性 vm.reversedMessage 的 getter 。vm.reversedMessage 依赖于 vm.message，在 vm.message 发生改变时，vm.reversedMessage 也会更新。
    - 可以说使用 computed 性能会更好，但是如果你不希望缓存，你可以使用 methods 属性。

  * computed vs methods [test4]
    - 我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
  

* 样式的覆盖规则：
  - 根据引入方式确定优先级: 优先级由高到低依次为：“内联属性”——>“写在 style标签里”——>“外部链接”
  - 后写的覆盖先写的（同一级别: 即就是在文件上代码行号更靠下的优先级更高)
  - 加有“！important”的样式，优先级最高: 即无论哪一种情况，只要在样式上加了important,那么该样式的优先级最高。加了important的代码如下：
  - 选择器优先级: 在选择器不同的情况下，给每种选择器制定一个权值，计算命中一个元素的所有选择器的总权值，值高者获胜
    元素选择器： 1
    类选择起器： 10
    ID选择器： 100
    内联选择器： 1000