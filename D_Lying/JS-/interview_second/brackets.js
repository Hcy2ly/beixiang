//括号匹配

// var moduleJson = {//括号匹配模板，你可以增加别的匹配，比如“{}”，“<>”，等，只需写入moduleJson里面去
// ")":"(",   //key
// "]":"["  
// }  
// var testStr = "([()]())()()";//测试字符串

// var tempSaveArray = [];//用于存储字符串的数组

// for(var i=0; i<testStr.length; i++){//如果存在括号字符，就加入数组
//   for(var key in moduleJson){  
//     if(testStr[i] == key || testStr[i] == moduleJson[key]){//如果字符串中存在json中的key 和 value字符，就加入数组
//       tempSaveArray.push(testStr[i]);  
//     }  
//   }  
// }  
// if(tempSaveArray.length){  
//   if((tempSaveArray.length % 2) != 0){//如果括号的长度为奇数，肯定不匹配
//       console.log("括号不匹配");  
//   }else{//如果字符串括号长度为偶数，就进行遍历数组，进行判断 12345  0 4
//       for(var j=0; j<tempSaveArray.length; j++){
//           //（（（（））））
//           if(moduleJson[tempSaveArray[j]]){//如果是右括号，就和前一个进行匹配。
//               //拿到数组前一位的字符，是否与自己匹配
//               if(j>0){
//                   console.log("前一个元素："+j+tempSaveArray[j-1]+" 后一个元素"+moduleJson[tempSaveArray[j]]); 
//                   console.log(moduleJson[tempSaveArray[j]]==tempSaveArray[j-1]);
//                   if(moduleJson[tempSaveArray[j]]==tempSaveArray[j-1]){//说明两个括号进行了匹配，让其出栈
//                     tempSaveArray.splice(j-1,2);
//                     j=0;//从新遍历数组
//                   }
//               }  
//           }
//       } 
//       if(tempSaveArray.length){//没有移除完毕
//         console.log("括号不匹配");
//       }else{
//         console.log("括号匹配，恭喜你语法正确！"); 
//       }
//     }  
// }else{  
//   console.log("你输入的字符串不存在括号");  
// }

// 方法一：正则匹配  查找成对的括号，然后将成对相邻的括号替换成空字符串，也就是说删除。最后判断字符串的长度是否为0。是，则表示完全匹配，否则，比匹配。
// function validBraces(braces){
//   while(/\(\)|\[\]|\{\}/g.test(braces)){ //test()方法用于检测一个字符串是否匹配某个模式.
//     braces = braces.replace(/\(\)|\[\]|\{\}/g,"")
//   }
//   // return !braces.length;
//   if(!braces.length) {
//     console.log('true 匹配成功')
//   }else {
//     console.log('false 匹配失败')
//   }
// }
// validBraces("(){}[]")     // RETURN true 
// validBraces("(}")         // return false 
// validBraces("[(])")       // return false 
// validBraces("([{}])")     // return true

//方法二 是将左半边括号，即(、[、{存入栈stack中，当遍历到右半边括号，即)、]、}的时候，stack执行出栈操作，然后将出栈的左半边括号与遍历到的有半边括号匹配，看是否为与其相匹配的另半边括号。如果遍历完了，则判断栈的长度，为0，则匹配，否则，不匹配。
// 我们同样以{[()]}为例，前三项，即{、[、(入栈，当遍历到)的时候，位于栈顶的'('后出栈与)比较，看是否匹配。后面的]、}也是一样道理。
function validBraces(braces){
  let leftBraReg = /[\(\{\[]/;// /[abc]/
    // 栈
  let stack = [];
  let bracket; //console.log(bracket) //=>输出结果为undefined 这就是之前说的声明变量未初始化/与null类型不同，null为不存在。
  let rightBracket; //右边
  braces = braces.split('') //每个字符之间分割  
  //console.log(braces) //=> 输出["(","[","(",")","]","(",")",")","(",")","[","]"]
  for(bracket of braces) {  //console.log(bracket)  //=> 输出([()]())()[]
    if(leftBraReg.test(bracket)) { //左边匹配到了，如果存在
      // console.log(leftBraReg) // => 输出/[\(\{\[]/ *6
      stack.push(bracket) //存进去
      // console.log(stack,bracket) //=> 输出
      //[ '(' ] '('  //第一次
      // [ '(', '[' ] '[' 
      // [ '(', '[', '(' ] '('
      // [ '(', '(' ] '('
      // [ '(' ] '('
      // [ '[' ] '['
    }
    else {
      switch (bracket) {
        case ')':
          rightBracket = stack.pop() //pop() 方法用于删除并返回数组的最后一个元素。
          // console.log(rightBracket,stack) //4个 "("
          // ( [ '(', '[' ]
          // ( [ '(' ]
          // ( []
          // ( []
          if(rightBracket !=='(') {
              return false
          }
          break
        case ']':
          rightBracket = stack.pop()
          // console.log(rightBracket,stack) //2
          // [ [ '(' ]
          // [ []
          if(rightBracket !=='[') {
              return false
          }
          break
        case '}':
          rightBracket = stack.pop()
          if(rightBracket !=='{') {
            return false
          }
          break
      }
    }
  }
  return stack.length === 0 ? true : false
}
validBraces("([()]())()[]"); //return true


// 练手 方法一
// function BracketsMacth(brackets) {
//   while(/\(\)|\{\}|\[\]/g.test(brackets)) {
//     brackets = brackets.replace(/\(\)|\[\]|\{\}/g,'')
//   }
//   console.log(!brackets.length);
// }
// BracketsMacth('[({[(){}[()]]})]');//true

//方法二
// function BracketsMacth(brackets) {
//   let leftBracket = /[\(\{\[]/;// /[abc]/
//   let stack = [];
//   let bracket;
//   let rightBracket;
//   brackets = brackets.split('');
//   for(bracket of brackets) {
//     if(leftBracket.test(bracket)) {
//       stack.push(bracket)
//     }
//     else {
//       switch (bracket) {
//         case ")":
//           rightBracket = stack.pop() 
//           if(rightBracket !== "(") {
//             return false
//           }
//           break
//         case "]":
//           rightBracket = stack.pop()
//           if(rightBracket !== "[") {
//             return false
//           }
//           break
//         case "}": 
//           rightBracket = stack.pop()
//           if(rightBracket !== "{") {
//             return false
//           }
//           break
//       }
//     }
//   }
//   return stack.length === 0 ? true : false
// }
// BracketsMacth("([()](})[]"); //return false