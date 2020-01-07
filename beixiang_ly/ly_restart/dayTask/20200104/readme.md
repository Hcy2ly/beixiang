浏览器机制 http://lynnelv.github.io/js-event-loop-browser

# 深入理解 js 事件循环机制（浏览器篇）

javascript eventloop

- 抛在前面的问题：
  * 补充一个问题： 为什么js为单线程？
  单线程如何做到异步？
  事件循环的过程是怎样的？
  macrotask 和 microtask 是什么，它们有何区别？
  
* js为单线程：  
    1. js语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么js不能有多个线程呢？这样能提高效率啊。
  js的单线程，于它的用途有关。作为浏览器的脚本语言，js 的主要用途是与用户互动，以及操作DOM。 这决定了js语言的本质只能是单线程，因为浏览器只想让他做这件简单的事情，并不想复杂化。
    2. 假设js 是多线程，假设有一个线程在某DOM节点上添加内容，另一个线程删除了这个节点，那这时候的浏览器应该以哪个线程为准呢？？所以会带来除了主次之分的各种复杂问题。

- 单线程和异步
  提到 js，就会想到单线程，异步，那么单线程是如何做到异步的呢？概念先行，先要了解下单线程和异步之间的关系。

  1. js 的任务分为 【同步】 和 【异步】 两种。
  2. 它们的处理方式也不同，同步任务是直接在主线程上排队执行，异步任务则会被放到【任务队列】中。
  3. 若有多个任务（异步任务）则要在【任务队列】中排队等待，【任务队列】类似一个缓冲区，任务完成会被移到【调用栈（call stack）】，然后由主线程执行【调用栈】的任务。
  4. 单线程是指 js 引擎中负责解析执行 js 代码的线程只有一个（主线程），即每次只能做一件事，而我们知道一个 ajax 请求，主线程在等待它响应的同时是会去做其它事的，浏览器先在【事件表】注册 ajax 的回调函数，响应回来后回调函数被添加到【任务队列】中等待执行，不会造成线程阻塞，所以说 js 处理 ajax 请求的方式是异步的。

  - 总而言之，检查【调用栈】是否为空，以及确定把哪个 task 加入调用栈的这个过程就是事件循环，而 [js 实现异步的核心就是事件循环]。

- 调用栈和任务队列

  - 调用栈是一个栈结构，函数调用会形成一个栈帧，帧中包含了当前执行函数的参数和局部变量等上下文信息，函数执行完后，它的执行上下文会从栈中弹出。

  - 任务队列 是用来存放任务的，如果存放的是异步任务，当任务完成之后（比如定时器到了时间），就会被移入到 调用栈，等待 主线程 顺序执行调用栈的每一个事件。

- 事件循环

  1. 关于事件循环，HTML 规范的介绍
     There must be at least one event loop per user agent, and at most one event loop per unit of related similar-origin browsing contexts.
     An event loop has one or more task queues.
     Each task is defined as coming from a specific task source.
     => 从规范理解，浏览器至少有一个事件循环，一个事件循环至少有一个任务队列（一个宏任务的任务队列 macrotask），每个外任务都有自己的分组，浏览器会为不同的任务组设置优先级。

- macrotask & microtask
  规范有提到两个概念，但没有详细介绍，查阅一些资料大概可总结如下：

  1. （宏任务）macrotask：包含执行整体的 js 代码，事件回调，XHR 回调，定时器（setTimeout/setInterval/setImmediate），IO 操作，UI render

  2. （微任务）microtask：更新应用程序状态的任务，包括 promise 回调，MutationObserver，process.nextTick，Object.observe

其中 setImmediate 和 process.nextTick 是 nodejs 的实现，在 nodejs 篇会详细介绍。

- 事件处理过程
  关于 macrotask 和 microtask 的理解，光这样看会有些晦涩难懂，结合事件循坏的机制理解清晰很多，下面这张图可以说是介绍得非常清楚了。
  - event-loop 事件循环机制.jpg

总结起来，一次事件循环的步骤包括：

1. 检查 macrotask 队列是否为空，非空则直接步骤 2，为空则直接步骤 3
2. 执行 macrotask 中的一个任务
3. 继续检查 microtask 队列是否为空，若有则直接步骤 4，否则直接步骤 5
4. 取出 microtask 中的任务执行，执行完成返回到步骤 3
5. 执行视图更新
   mactotask & microtask 的执行顺序 （一般事件循环执行一次浏览器会有一个 undefined）

- 看一段代码感受下：
  console.log('start')

  var time1 = setTimeout(function() {
  console.log('setTimeout')
  }, 0);

  var time2 = setTimeout(function() {
  console.log('setTimeout2')
  }, 0);

  new Promise(resolve => {
    resolve();
    console.log(1);
  }).then(function() {
  console.log('promise1')
  }).then(function() {
  console.log('promise2')
  })
  console.log('end')

console 输出的 log 顺序是什么？结合上述的步骤分析，系不系 so easy~:
    start        VM110:1 
    1            VM110:13
    end          VM110:19
    promise1     VM110:15
    promise2     VM110:17
    undefined   //其实这里就是浏览器的多线程机制 可能是ui渲染线程。
    setTimeout    VM110:4
    setTimeout2   VM110:8

* 过程详解： 
  1. 首先，全局代码（main()）压入调用栈执行，打印 start；

  2. 接下来 time1 压入 macrotask 队列，紧接着 time2 压入 macrotask 队列中；

  3. promise.resolve() 压入调用栈执行, 但是promise.then 回调放入 microtask 队列，所以浏览器会先执行 console.log(‘end’)，打印出 end；

  4. 执行完同步事件开始执行微任务，也就是promise1， promise2。解释： 调用栈中的代码被执行完成，回顾 macrotask 的定义，我们知道全局代码属于 macrotask，macrotask 执行完，那接下来就是执行 microtask 队列的任务了，执行 promise 回调打印 promise1；promise 回调函数默认返回 undefined，promise 状态变为 fullfill 触发接下来的 then 回调，继续压入 microtask 队列，event loop 会把当前的 microtask 队列一直执行完，此时执行第二个 promise.then 回调打印出 promise2；

  5. 这时 microtask 队列已经为空，从上面的流程图可以知道，接下来主线程会去做一些 UI 渲染工作（不一定会做），然后开始下一轮 event loop，执行 setTimeout 的回调，打印出 setTimeout；根据执行时间和执行顺序先后setTimeout,setTimeout2。

  6. 这个过程会不断重复，也就是所谓的事件循环。

* 视图渲染的时机
回顾上面的事件循环示意图，update rendering（视图渲染）发生在本轮事件循环的 microtask 队列被执行完之后，也就是说执行任务的耗时会影响视图渲染的时机。通常浏览器以每秒 60 帧（60fps）的速率刷新页面，据说这个帧率最适合人眼交互，大概 16.7ms 渲染一帧，所以如果要让用户觉得顺畅，单个 macrotask 及它相关的所有 microtask 最好能在 16.7ms 内完成。

但也不是每轮事件循环都会执行视图更新，浏览器有自己的优化策略，例如把几次的视图更新累积到一起重绘，重绘之前会通知 requestAnimationFrame 执行回调函数，也就是说 requestAnimationFrame 回调的执行时机是在一次或多次事件循环的 UI render 阶段。

以下代码可以验证
    setTimeout(function() {console.log('timer1')}, 0)

    requestAnimationFrame(function(){
    console.log('requestAnimationFrame')
    })

    setTimeout(function() {console.log('timer2')}, 0)

    new Promise(function executor(resolve) {
    console.log('promise 1')
    resolve()
    console.log('promise 2')
    }).then(function() {
    console.log('promise then')
    })

    console.log('end')

  * 运行结果截图如下
    1. 运行结果 1:
      promise 1       VM88:10 
      promise 2       VM88:12 
      end             VM88:17 
      promise then    VM88:14
      undefined
      requestAnimationFrame  VM88:4 
      timer1                 VM88:1 
      timer2                 VM88:7 

    2. 运行结果 2 ：（还没试出来）
      promise 1       
      promise 2       
      end             
      promise then    
      undefined //
      timer1                 
      timer2                 
      requestAnimationFrame  


  * 可以看到，结果 1 中 requestAnimationFrame()是在一次事件循环后执行，而在结果 2，它的执行则是在三次事件循环结束后。

* 总结
  - 事件循环是 js 实现异步的核心
  - 每轮事件循环分为 3 个步骤：
    a) 执行 macrotask 队列的一个任务
    b) 执行完当前 microtask 队列的所有任务
    c) UI render
  - 浏览器只保证 requestAnimationFrame 的回调在重绘之前执行，没有确定的时间，何时重绘由浏览器决定


[参考资料]
event-loops
sec-jobs-and-job-queues
Promises/A+
Tasks, microtasks, queues and schedules
HTML 系列：macrotask 和 microtask
http://www.ruanyifeng.com/blog/2014/10/event-loop.html


2020/1/7补充：（阮一峰） 
* 任务队列：
  * 同步任务和异步任务咋来的？
    - 单线程意味着，所有任务需要排队，任务一个一个执行。
    - 如果排队是因为计算量大，CPU忙不过来，倒也算了，但是很多时候CPU是闲着的，因为IO设备（输入输出设备）很慢（比如Ajax操作从网络读取数据），不得不等着结果出来，再往下执行。
    - js 设计者意识到，这时候主线程完全可以不管 I/O 这个挂起处于等待中的任务，完全可以先运行排在后面的任务，等到IO这边返回了结果再回头把挂起的任务执行。

    于是，所有任务就被分成两种： 一种 同步， 一种 异步。
      * 同步任务： 在主线程上排队执行的任务（这里会形成一个执行栈）
      * 异步任务： 不进入主线程，进入'任务队列'的任务，只有'任务队列'通知主线程，某个异步任务可以执行了，然后该任务在主线程执行完同步任务才会进入执行栈排队，等待被执行。

  * 具体来说，异步执行的运行机制如下。（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）
    1. 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
    2. 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
    3. 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，就会结束等待状态，进入执行栈，js 开始执行。
    4. 主线程不断重复上面的第三步。

  其实就是只要主线程空了，就会去读取"任务队列"，这就是JavaScript的运行机制。这个过程会不断重复。

* 事件和回调函数：
  - "任务队列"是一个事件的队列（也可以理解成消息的队列），IO设备完成一项任务，就在"任务队列"中添加一个事件，表示相关的异步任务可以进入"执行栈"了。主线程读取"任务队列"，就是读取里面有哪些事件。

  - "任务队列"中的事件，除了IO设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入"任务队列"，等待主线程读取。

  - 所谓"回调函数"（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。

  - "任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，"任务队列"上第一位的事件就自动进入主线程。但是，由于存在后文提到的"定时器"功能，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。

* Event Loop （事件循环）
主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。
  为了更好地理解Event Loop，看图：

  ![事件循环](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png)

  上面这张图中，主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码有需要异步处理的(即各种WebAPI)，它们在"任务队列"中加入需要在这些api中执行的各种回调事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行这些回调函数。

  即js主线程总是先执行栈中的代码（同步任务），再去读取执行"任务队列"（异步任务）。

* 自我理解：
  code： 
    var a = 3;
    for(var i = 0; i<1000; i++) { 
      console.log(i); //假如此处是我需要在页面出来之后才可能用到的东西，我不输出任何东西，你还会以为是我浏览器太卡了。其实我在做着准备工作呢。但是对于用户来缩，眼睛就是真相，视觉决定你的优异，所以这种时候我们就可以先耍赖我们先把她想看的展示出来告诉她我们完成了，然后我们再去准备我们还没有准备完的。这样她第一感觉就是我们做完了，等到她再去看里面的一些细节的时候，我们已经偷偷的搞定了。
    };// 按照js同步执行原则，执行完这个会输出0-999 这一千个值。然后输出后面的a值 这样的话我需要等待的输出a值的效果就会很忙显得很卡顿。

    console.log('我完成啦~ a:'+ a);

    为了达到上面说的效果，我们只需要将耗时的事件放异步执行就好了。即：

    var a = 3;
    setTimeout(() => {for(var i = 0; i<1000; i++) { 
      console.log(i);
    }},0);

    console.log('a:'+ a); //先输出a 在去执行上面的1000个数



# node 篇
Node.js也是单线程的Event Loop，但是它的运行机制不同于浏览器环境。

![node循环事件](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100803.png)

根据上图，Node.js的运行机制如下。
  1. V8引擎解析JavaScript脚本。
  2. 解析后的代码，调用Node API。
  3. libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。
  4. V8引擎再将结果返回给用户。
 
这里我要放上一张关于 浏览器和nodejs 对于 宏任务和微任务 支持与否的区别图：

  宏任务图 / 微任务图

很明显，除了setTimeout和setInterval这两个方法，Node.js还提供了另外两个与"任务队列"有关的方法：process.nextTick和setImmediate。它们可以帮助我们加深对"任务队列"的理解。
  * process.nextTick方法可以在当前"执行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。[微任务（=浏览器支持的promise.then），一定是在同步任务执行完之后执行，然后才是异步任务队列]
  * setImmediate方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次Event Loop时执行，这与setTimeout(fn, 0)很像。[宏任务（=等同于setTimeout(fn,0)），是异步任务，会在同步任务和微任务执行完后执行]

  1. 来吧，先看看process.nextTick例子：

      process.nextTick(function A() {
      console.log(1);
        process.nextTick(function B(){console.log(2);});
      });

      setTimeout(function timeout() {
        console.log('TIMEOUT FIRED');
      }, 0)
      // 1
      // 2
      // TIMEOUT FIRED
    
  上面代码中，由于process.nextTick方法指定的回调函数，总是在当前"执行栈"的尾部触发，所以不仅函数A比setTimeout指定的回调函数timeout先执行，而且函数B也比timeout先执行。这说明，如果有多个process.nextTick语句（不管它们是否嵌套），将全部在当前"执行栈"执行。

  2. 现在，再看setImmediate。
    - code1:
        setImmediate(function A() {
          console.log(1);
          setImmediate(function B(){console.log(2);});
        });

        setTimeout(function timeout() {
          console.log('TIMEOUT FIRED');
        }, 0);

        //node1 输出答案不一
            // 1
            // TIMEOUT FIRED
            // 2

            // TIMEOUT FIRED
            // 1
            // 2

    - code2:
        setImmediate(function (){
          setImmediate(function A() {
            console.log(1);
            setImmediate(function B(){console.log(2);});
          });
          
          setTimeout(function timeout() {
            console.log('TIMEOUT FIRED');
          }, 0);
        });

        // node2 答案不一
            //   1
            //   TIMEOUT FIRED
            //   2
            
            //   TIMEOUT FIRED
            //   1
            //   2

* code1 和 code2 的输出结果总是不稳定的问题怎么解决呢？
  1. 方法一：确保这个循环的执行速度会超过定时器的倒计时
        setTimeout(_ => console.log('setTimeout'))
        setImmediate(_ => console.log('setImmediate'))
        let countdown = 1e9;
        while(countdown--) { } // 我们确保这个循环的执行速度会超过定时器的倒计时，导致这轮循环没有结束时，setTimeout已经可以执行回调了，所以会先执行`setTimeout`再结束这一轮循环，也就是说开始执行`setImmediate`

        // 执行结果：一定是先输出setTimeOut
            // setTimeout
            // setImmediate

  2. 方法二: 如果在另一个宏任务中，必然是setImmediate先执行：
        require('fs').readFile(__dirname, _ => {
          setTimeout(_ => console.log('timeout'))
          setImmediate(_ => console.log('immediate'))
        }); 

        // 执行结果：
            // immediate
            // timeout

* process.nextTick
  就像上边说的，这个可以认为是一个类似于Promise和MutationObserver的微任务实现，在代码执行的过程中可以随时插入nextTick，并且会保证在下一个宏任务开始之前所执行。

    - 像下面这样的递归调用process.nextTick，将会没完没了，主线程根本不会去读取"事件队列"！
        process.nextTick(function foo() {
          process.nextTick(foo);
        });

    - 由于process.nextTick指定的回调函数是在本次"事件循环"触发，而setImmediate指定的是在下次"事件循环"触发，所以很显然，前者总是比后者发生得早，而且执行效率也高（因为不用检查"任务队列"）。
