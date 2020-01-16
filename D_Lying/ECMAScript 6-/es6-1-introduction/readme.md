# ECMAScript 6
1. ECMAScript 和 JavaScript 的关系
 
1996年11月，Javascript 的创造者 Netscape公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。
1997年，ECMA 发布 262号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，版本为1.0。

所以，其实该标准从一开始就是针对JavaScript语言制定的，但是之所以不叫JavaScript,其实有两个原因: 1) 商标问题，Java是sun公司的商标，根据协议，只有Netscape公司可以合法地使用JavaScript这个名字，而且JavaScript 本身以及已经被Netscape公司注册为商标了。 2） 想体现这门语言的制定者是ECMA（标准化组织），而非Netscape，这样有利于保证保证这门语言的开放性和中立性。

总之，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种原生（另外 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。


2. ES6 与 ECMAScript2015（简称 ES2015）的关系  【ES6 和 ES2015 实际上是同一个东西： ES6 = ES2015;】
2011年，ECMAScript 5.1 发版后，就开始指定 6.0版 了，因此，ES6 的原意其实就是指下一个版本。
但是，因为这个版本引入的语言功能太多，而且制定过程中，还有很多组织和个人不断提交功能。事情很快就变得很清楚了，不可能在一个版本里面包括所有想要引入的功能，常规的做法就是先发布6.0版 然后再6.1 /6.2/ 6.3版等。但是，标准的制定者并不像这样做，他想让标准的升级变成常规操作，任何人在任何时候，都可以向标准委员会提交新语法的提案，然后标准委员会每个月开一次会，评估这些天是否可以接受，需要哪些改进。如果说经过多次会议以后，一个提案足够成熟了，就可以正式进入标准了，也就是说，标准的版本升级成为了一个不断滚动的流程，每个月都有可能会有变动。
于是，标准委员会最终决定，标准在每年的6月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的6月份，这一年积累下来的所以改动，草案的积累自然就变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

- 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015），是ECMAScript 的第 6 个版本。
- 2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016），是ECMAScript 的第 7 个版本。
- 2017 年 6 月发布 《ECMAScript 2017 标准》（简称 ES2017），是ECMAScript 的第 8 个版本。
- 2018 年 6 月发布，正式名称为ECMA 2018(简称ES2018) ，是ECMAScript 的第 9 个版本。

so ES6 既是一个历史名词，也是一个泛指，含义是5.1版本以后的JavaScript的下一代标准，涵盖的ES2015，ES2016，ES2017 等等


3. 语法提案的批准流程
任何人都可以向标准委员会（又叫TC39委员会）提案，要求修改语言标准。
一种新的语法从提案变成正式标准，需要经历五个阶段。每个阶段的变动都需要由TC39委员会批准。
 - Stage 0 - Strawman（展示阶段）
 - Stage 1 - Proposal（征求意见阶段）
 - Stage 2 - Draft（草案阶段）
 - Stage 3 - Candidate（候选人阶段）
 - Stage 4 - Finished（定案阶段）
 一般一提案只要能进入Stage 2, 就差不多了。


 4. ECMAScript 的历史
 ES6 从开始指定到最后发布，整整用了15年。
  - 1997 年， ECMAScript 1.0
  - 1998 年 6 月， ECMAScript 2.0
  - 1999 年 12 月， ECMAScript 3.0  
  【3.0 版是一个巨大的成功，在业界得到广泛支持，成为通行标准，奠定了 JavaScript 语言的基本语法，以后的版本完全继承。直到今天，初学者一开始学习 JavaScript，其实就是在学 3.0 版的语法。】
  - 2000 年，ECMAScript 4.0 开始酝酿。这个版本最后没有通过，因为这个版本太激进了，对 ES3 做了彻底升级，导致标准委员会的一些成员不愿意接受。但是它的大部分内容被 ES6 继承了！！！因此，ES6 制定的起点其实是 2000 年 【*******ES6起点********】
  - 2007.10-2008.7 因分歧中止 ECMAScript 4.0 的开发。
  - 2009 年 12 月，ECMAScript 5.0 版正式发布。
  - 2011 年 6 月，ECMAScript 5.1 版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）。
  - 2013 年 3 月，ECMAScript 6 草案冻结，不再添加新功能。新的功能设想将被放到 ECMAScript 7。
  - 2013 年 12 月，ECMAScript 6 草案发布。然后是 12 个月的讨论期，听取各方反馈。
  - 2015 年 6 月，ECMAScript 6 正式通过，成为国际标准。从 2000 年算起，这时已经过去了 15 年


5. 部署进度
随着时间的推移，各大浏览器的最新版本对ES6 支持度已经越来越高了，超过 90%的 ES6 语法特性都实现了。
Node 是 JavaScript 的服务运行环境（runtime）。它对ES6 的支持度更高，除了那些默认打开的功能，还有一些语法功能已经实现了，只是没有默认打开。使用 node --v8-options | findstr harmony 命令，可以查看 Node 已经实现的 ES6 特性。 http://ruanyf.github.io/es-checker/ 点击这个可以查看你的浏览器对ES6 的支持度。

6. Babel 转码器
Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转化成 ES5 ，从而在现有环境执行。这意味着，你可以用ES6 的方式编写程序，又不用担心现有环境是否支持。
- 例如： 
    // 转码前
    input.map(item => item + 1);

    // 转码后
    input.map(function (item) {
      return item + 1;
    });

- 安装命令： npm install --save-dev @babel/core
- 最新转码规则安装： npm install --save-dev @babel/preset-env
- react转码规则安装： npm install --save-dev @babel/preset-react
- Babel 提供命令行工具@babel/cli，用于命令行转码： npm install --save-dev @babel/cli
  - 基本用法如下。
    # 转码结果输出到标准输出
    $ npx babel example.js

    # 转码结果写入一个文件
    # --out-file 或 -o 参数指定输出文件
    $ npx babel example.js --out-file compiled.js
    # 或者
    $ npx babel example.js -o compiled.js

    # 整个目录转码
    # --out-dir 或 -d 参数指定输出目录
    $ npx babel src --out-dir lib
    # 或者
    $ npx babel src -d lib

    # -s 参数生成source map文件
    $ npx babel src -d lib -s

- @babel/node模块的babel-node命令，提供一个支持 ES6 的 REPL 环境： npm install --save-dev @babel/node    ctrl+D退出

- 运行文件 npx babel-node babel.js / node bable.js [babel.js]

- @babel/register模块改写require命令，为它加上一个钩子。此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用 Babel 进行转码。: npm install --save-dev @babel/register
  /*需要注意的是，@babel/register只会对require命令加载的文件转码，而不会对当前文件转码。另外，由于它是实时转码，所以只适合在开发环境使用。*/ [index.js]

- babel API
    如果某些代码需要调用 Babel 的 API 进行转码，就要使用@babel/core模块。
    var babel = require('@babel/core');

    // 字符串转码
    babel.transform('code();', options);
    // => { code, map, ast }

    // 文件转码（异步）
    babel.transformFile('filename.js', options, function(err, result) {
      result; // => { code, map, ast }
    });

    // 文件转码（同步）
    babel.transformFileSync('filename.js', options);
    // => { code, map, ast }

    // Babel AST转码
    babel.transformFromAst(ast, code, options);
    // => { code, map, ast }

  * 配置对象options，可以参看官方文档http://babeljs.io/docs/usage/options/。

- Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，举例来说，ES6 在Array对象上新增了Array.from方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。[index.js]  
 * Babel 默认不转码的 API 非常多

- Babel 也可以用于浏览器环境，使用@babel/standalone模块提供的浏览器版本，将其插入网页。
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
  // Your ES6 code
  </script>
  注意，网页实时将 ES6 代码转为 ES5，对性能会有影响。生产环境需要加载已经转码完成的脚本。

babel 在线转码器 ： https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Ces2016%2Creact%2Cstage-2%2Ces2015-loose&prettier=false&targets=&version=7.6.4&externalPlugins=


7. Traceur 转码器 Google 公司的Traceur转码器，也可以将 ES6 代码转为 ES5 代码。