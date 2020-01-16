//防抖 短时间内多次触发同一个事件，只执行最后一次，或者在开始时执行，中间不执行。比如搜索要等最后一个字结束（结束的判断是键盘停止输入的事件长为delay秒后）才能去执行搜索事件  所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
// 主要应用场景有：input验证、搜索联想、resize
// 防抖 表示延迟执行 比如你输入搜索词的时候 当你的键盘停止输入时间长达300s来判断你输入结束 然后执行事件
// function debounce(fn, delay, context) {
//   let timer = null
//   return () => {
//       clearTimeout(timer)
//       timer = setTimeout((...args) => {
//           fn.call(context, ...args)
//           // console.log({...args})
//       }, delay)
//   }
// }
// function say() {
//   console.log('Hello World')    
// }
// const debounceSay = debounce(say,1000);
// debounceSay();


// 思路：首次运行时把定时器赋值给一个变量，第二次执行时，如果间隔没超过定时器设定的时间则会清除掉定时器，重新设定定时器，依次反复，当我们停止下来时，没有执行清除定时器，超过一定时间后触发回调函数。

// // 代码一：首次不执行
// function debounce(fn,delay=200){
// 	let timer = null;
// 	return function(){
// 		if(timer) clearTimeout(timer);
// 		timer = setTimeout(()=>{
// 			fn.apply(this,arguments);
// 			timer = null;
// 		},delay);
// 	}
// }
// // 代码二：首次执行  
// function debounce2(fn, delay = 200, atBegin = true) {
// 	let timer = null, last = 0,during;
// 	return function () {
// 		let self = this, args = arguments;
// 		var exec = function () {
// 			fn.apply(self, args);
// 		}
// 		if (atBegin && !timer) {
// 			exec();
// 			atBegin = false;
// 		} else {
// 			during = Date.now() - last;
// 			if (during > delay) {
// 				exec();
// 			} else {
// 				if (timer) clearTimeout(timer);
// 				timer = setTimeout(function () {
// 					exec();
// 				}, delay);
// 			}
// 		}
// 		last = Date.now();
// 	}
// }



// !!!!!
// 防抖函数分为非立即执行版和立即执行版。
// 1. 非立即执行版：  非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
function debounce(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait);
    }
}
// 立即执行版：立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。

function debounce(func,wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);

        let callNow = !timeout;
        timeout = setTimeout(() => {
            timeout = null;
        }, wait)

        if (callNow) func.apply(context, args)
    }
}	

// 但我们也可以将非立即执行版和立即执行版的防抖函数结合起来，实现最终的双剑合璧版的防抖函数。
// 双剑合璧版：

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func,wait,immediate) {
    let timeout;

    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}

