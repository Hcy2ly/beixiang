// 节流 如果一个函数持续的，频繁地触发，那么让它在一定的时间间隔后再触发。
// 节流是连续触发事件的过程中以一定时间间隔执行函数。节流会稀释你的执行频率，比如每间隔1秒钟，只会执行一次函数，无论这1秒钟内触发了多少次事件
// 主要应用场景有：scroll、touchmove

// 节流实现节流（throttle）
// 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。
// 思路： 第一次先设定一个变量true，第二次执行这个函数时，会判断变量是否true，是则返回。当第一次的定时器执行完函数最后会设定变量为flase。那么下次判断变量时则为flase，函数会依次运行。

// // 代码一：首次不执行    自己尝试,没执行;
// function throttle(fn,delay=100){
// 	//首先设定一个变量，在没有执行我们的定时器时为null
// 	let timer = null;
// 	return function(){
// 		//当我们发现这个定时器存在时，则表示定时器已经在运行中，需要返回
// 		if(timer) return;
// 		timer = setTimeout(()=>{
// 			fn.apply(this,arguments);
// 			timer = null;
// 		},delay);
// 	}
// }
// // 代码二：首次执行    自己尝试,也没执行啊
// function throttle2(fn,delay=100){
// 	let last = 0;
// 	return function(){
// 		let curr = +new Date();
// 		if(curr - last > delay){
// 			fn.apply(this,arguments);
// 			last = curr;
// 		}
// 	}
// }






// ******************************************************************************************************************************
// 节流有一个问题： 如果事件一直触发，那么函数将永远不会被执行
// so 我们在初始的时候定义一个begin开始时间，当时间间隔超过duration时，则执行一次函数，这样我们做到了不重复调用，又能保证500秒执行一次。

// function scrollFn(){
//   console.log(1)
// }
// function throttle(method,delay,duration){
//   var timer=null;
//   var begin=new Date();    
//   return function(){                
//       var context=this, //全局对象
//       args=arguments; //数组对象
//       var current=new Date();        
//       clearTimeout(timer);
//       if(current-begin >= duration){ //如果事件一直触发的时间
//           method.apply(context,args);
//           begin = current;
//       }else{
//           timer=setTimeout(function(){
//               method.apply(context,args);
//           },delay);
//       }
//   }
// }
// const onscroll=throttle(scrollFn,100,500);
// onscroll();
// 自练手 方法二：
// function say() {
//   console.log("fighting...  Don't let someone Down");
// }
// function throttle(method,delay,end_begin) {
//   var timer = null;
//   var begin = new Date();
//   return () => { //匿名函数
//     var context = this, args = arguments;
//     clearTimeout(timer);
//     var end = new Date();
//     console.log(parseInt(end-begin));
//     if (parseInt(end-begin) >= end_begin) {
      
//       method.apply(context,args);
//       end = begin;
//     }else {
//       setTimeout(() => {
//         method.apply(context,args);
//       },delay) 
//     }
//   }
// }
// const successly = throttle(say,300,500) ;
// successly();//函数表达式一定是在声明后执行不可以放前面和同时执行



// 20190916.
// 节流（throttle）
// 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。
// 对于节流，一般有两种方式可以实现，分别是时间戳版和定时器版。
// 时间戳版： 可以看到，在持续触发事件的过程中，函数会立即执行，并且每 1s 执行一次。
function throttle(func, wait) {
	let previous = 0;
	return function() {
			let now = Date.now();
			let context = this;
			let args = arguments;
			if (now - previous > wait) {
					func.apply(context, args);
					previous = now;
			}
	}
}

// 定时器版: 可以看到，在持续触发事件的过程中，函数不会立即执行，并且每 1s 执行一次，在停止触发事件后，函数还会再执行一次。
function throttle(func, wait) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args)
            }, wait)
        }

    }
}

// 其实时间戳版和定时器版的节流函数的区别就是，
// 时间戳版的函数触发是在时间段内开始的时候，而定时器版的函数触发是在时间段内结束的时候。

// 双剑合璧版:
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait ,type) {
    if(type===1){
        var previous = 0;
    }else if(type===2){
        var timeout;
    }
    return function() {
        let context = this;
        let args = arguments;
        if(type===1){
            let now = Date.now();

            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }else if(type===2){
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}