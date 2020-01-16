/*
 * @Author: your name
 * @Date: 2020-01-07 14:56:26
 * @LastEditTime : 2020-01-07 18:07:22
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beixiang_ly\LY_Restart\dayTask\20200104\demo2.js
 */
// 宏任务与微任务
// 浏览器和nodejs 支持性不同

// setImmediate(function A() {
//     console.log(1);
//     setImmediate(function B(){console.log(2);});
//   });

//   setTimeout(function timeout() {
//     console.log('TIMEOUT FIRED');
//   }, 0);

// node1
// 1
// 2



// setTimeout(() => {
//     console.log('timer1')
//     setImmediate(function A() {
//         console.log(1);
//         setImmediate(function B() { console.log(2); });
//     });

//     Promise.resolve().then(function () {
//         console.log('promise1')
//     })
// }, 0)

// setTimeout(() => {
//     console.log('timer2')

//     Promise.resolve().then(function () {
//         console.log('promise2')
//     })
// }, 0)
//node2 输出
// timer1
// promise1
// timer2
// promise2
// 1
// 2

// var time1 = setTimeout(() => {
//     console.log('timer1');

//     Promise.resolve().then(function () {
//         console.log('promise1')
//     })
// });

// var time2 = setTimeout(() => {
//     console.log('timer2');

//     Promise.resolve().then(function () {
//         console.log('promise2')
//     })
// });
// node3
// timer1
// promise1
// timer2
// promise2

// process.nextTick(function A() {
//     console.log(1);
//     process.nextTick(function B(){console.log(2);}); //微任务
//   });
  
//   setTimeout(function timeout() { //异步宏任务
//     console.log('TIMEOUT FIRED');
//   }, 0)
// node4
// 1                                                                     104> 
// 2
// TIMEOUT FIRED


// setImmediate(function A() {
//     console.log(1);
//     setImmediate(function B(){console.log(2);});
//   });

//   setTimeout(function timeout() {
//     console.log('TIMEOUT FIRED');
//   }, 0);
//node5 输出答案不一
    // 1
    // TIMEOUT FIRED
    // 2

    // TIMEOUT FIRED
    // 1
    // 2


// setImmediate(function (){
//     setImmediate(function A() {
//       console.log(1);
//       setImmediate(function B(){console.log(2);});
//     });
    
//     setTimeout(function timeout() {
//       console.log('TIMEOUT FIRED');
//     }, 0);
//   });
//  node6 答案不一
    //   1
    //   TIMEOUT FIRED
    //   2
    
    //   TIMEOUT FIRED
    //   1
    //   2

// node5 和 node6 的问题怎么解决呢？
    // code1：确保这个循环的执行速度会超过定时器的倒计时
        // setTimeout(_ => console.log('setTimeout'))
        // setImmediate(_ => console.log('setImmediate'))
        // let countdown = 1e9;
        // while(countdown--) { } // 我们确保这个循环的执行速度会超过定时器的倒计时，导致这轮循环没有结束时，setTimeout已经可以执行回调了，所以会先执行`setTimeout`再结束这一轮循环，也就是说开始执行`setImmediate`

        // code1执行结果：
            // setTimeout
            // setImmediate

    // code2: 如果在另一个宏任务中，必然是setImmediate先执行：
        // require('fs').readFile(__dirname, _ => {
        //     setTimeout(_ => console.log('timeout'))
        //     setImmediate(_ => console.log('immediate'))
        // }); 

        // code2 执行结果：
            // immediate
            // timeout

// * process.nextTick
// 就像上边说的，这个可以认为是一个类似于Promise和MutationObserver的微任务实现，在代码执行的过程中可以随时插入nextTick，并且会保证在下一个宏任务开始之前所执行。

    // 像下面这样的递归调用process.nextTick，将会没完没了，主线程根本不会去读取"事件队列"！
        // process.nextTick(function foo() {
        //     process.nextTick(foo);
        // });

    // 由于process.nextTick指定的回调函数是在本次"事件循环"触发，而setImmediate指定的是在下次"事件循环"触发，所以很显然，前者总是比后者发生得早，而且执行效率也高（因为不用检查"任务队列"）。