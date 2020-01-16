# 浮点数运算不准确原因：
计算机是二进制的。浮点数没有办法是用二进制进行精确表示。我们的CPU表示浮点数由两个部分组成：指数和尾数，这样的表示方法一般都会失去一定的精确度，有些浮点数运算也会产生一定的误差。

#substr()语法
  * stringObject.substr(start,length) => 【看好了，只适用于字符串对象！！！！】
   - start	必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
   - length	可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
  * 返回值 => 一个新的字符串，包含从 stringObject 的 start（包括 start 所指的字符） 处开始的 length 个字符。如果没有指定 length，那么返回的字符串包含从 start 到 stringObject 的结尾的字符。

#parseInt()语法
  * parseInt(string, radix)
    - string	必需。要被解析的字符串。
    - radix   可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
  * 返回值 => 返回解析后的数字。
  * 说明
    当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。
    举例，如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。
  * 提示和注释
    - 注释：只有字符串中的第一个数字会被返回。
    - 注释：开头和结尾的空格是允许的。
    - 提示：如果字符串的第一个字符不能被转换为数字，那么 parseFloat() 会返回 NaN。
#实例
parseInt("10");			//返回 10
parseInt("19",10);		//返回 19 (10+9)
parseInt("11",2);		//返回 3 (2+1)
parseInt("17",8);		//返回 15 (8+7)
parseInt("1f",16);		//返回 31 (16+15) A10 B11 C12 D13 E14 F15 G16
parseInt("010");		//未定：返回了 10

# return break continue
1、return 语句的作用
      (1) return 从当前的方法中退出,返回到该调用的方法的语句处,继续执行。 
      (2) return 返回一个值给调用该方法的语句，返回值的数据类型必须与方法的声明中的返回值的类型一致，可以使用强制类型转换来是数据类型一致。 
      (3) return 当方法说明中用void声明返回类型为空时，应使用这种格式，不返回任何值。
举例说明：return 是跳出整个方法
  for (int i = 0; i < 3; i++){
    if (i==2) { return; }
    console.WriteLine(i);
  }
//调用该方法时，结果是 0 1 说明当i==2时方法体return后面代码都不执行，直接跳出方法体。（注意：不管嵌套几层循环遇到return直接跳出整个方法体）

2、break语句的作用 
      (1) 只能在循环体内和switch语句体内使用break语句。 
      (2) 当break出现在循环体中的switch语句体内时，其作用只是跳出该switch语句体。 
      (3) 当break出现在循环体中，但并不在switch语句体内时，则在执行break后，跳出本层循环体。 
      (4) 在循环结构中，应用break语句使流程跳出本层循环体，从而提前结束本层循环。
举例说明：break是结束整个循环体
  for (int i = 0; i < 10; i++){
    if (i==3) { break; }
    console.WriteLine(i);
  }
//结果是输出 0 1 2 就退出了整个for循环，即当i==3时循环体内break后面的代码都不会执行，结束本层整个循环体(注意：嵌套循环时，退出本层循环)

3、continue语句作用 
      (1) continue语句的一般形式为：contonue; 
      (2) 其作用是结束本次循环，即跳过本次循环体中余下尚未执行的语句，接着再一次进行循环的条件判定。 
      (3) 注意：执行continue语句并没有使整个循环终止。在while和do-while循环中，continue语句使得流程直接跳到循环控制条件的测试部分 ，然后决定循环是否继续进行。 
      (4) 在for 循环中，遇到continue后，跳过循环体中余下的语句，而去对for语句中的“表达式3”求值，然后进行“表达式2”的条件测试，最后根据“表达式2”的值来决定for循环是否执行。在循环体内，不论continue是作为何种语句中的语句成分，都将按上述功能执行，这点与break有所不同。
举例说明：continue结束单次循环
  for (int i = 0; i < 10; i++){
    if (i==3) { continue; }
    console.WriteLine(i);
  }
//结果是：0 1 2 4 5 6 7 8 9 可见他仅仅是不输出3，因为他结束了本次循环，即当i==3时循环体内continue后面的代码不执行直接进行下一次循环

#indexOf()
  * indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
  * stringObject.indexOf(searchvalue,fromindex)   => 【看好了，只适用于字符串对象！！！！】
    - searchvalue	必需。规定需检索的字符串值。
    - fromindex	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
  * 注释：indexOf() 方法对大小写敏感！
  * 注释：如果要检索的字符串值没有出现，则该方法返回 -1。
#forEach()
    function myFunction(item, index) {
        console.log(item,"--------",index)
    }
    var numbers = [4, 9, 16, 25];
    numbers.forEach(myFunction); //输出 4 "--------" 0 ,9 "--------" 1 ,16 "--------" 2 ,25 "--------" 3
* forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
* 注意: forEach() 对于空数组是不会执行回调函数的。
* 语法: array.forEach(function(currentValue, index, arr), thisValue)
* 参数-描述
  - function(currentValue, index, arr)	必需。 数组中每个元素需要调用的函数。
  - 函数参数:
    1. currentValue	必需。当前元素
    2. index	可选。当前元素的索引值。
    3. arr	可选。当前元素所属的数组对象。
    4. thisValue	可选。传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值
* 实例:计算数组所有元素相加的总和：
    var sum = 0;
    var numbers = [65, 44, 12, 4];
    function myFunction(item) {
      sum += item; //sum = sum + item
    }
    numbers.forEach(myFunction)
#Math.pow()
* Math.pow(x,y) 返回 x 的 y 次幂。
* 返回 4 的 3 次幂 (4*4*4): Math.pow(4,3); //输出64
#数据类型转换
  * 数值类型转化成字符串类型
    1. 和空字符串相加 
       var a = 15;
       a = a +'';//将数值型数据转换成字符串
    2. 使用String函数强制转换
       var a = 15;
       a = String(a);
    3. toString方法转换
       a.toString();
    4. toFixed：将数字转换成字符串，并指定小数点后的位数。
       var n = 123456.789; 
       n.toFixed(0); // "123457" 
       n.toFixed(1); // "123456.79"
    5. toExponential()使用 指数表示法 把一个数字转换为字符串，小数点前面有1位数，而小数点后面有特定的位数。  
       var n = 123456.789; 
       n.toExponential(1); // "1.2e+5" 
       n.toExponential(3); // "1.235e+5"
    6. toPrecision()使用指定的 有意义 的位数来显示一个数字，如果有意义的位数还 不够显示数字的整个整数部分，它就使用指数表示法.
       var n = 123456.789; 
       n.toPrecision(4); // "1.235e+5" 有意义的四位不够显示数字的整个整数 so用指数表示法
       n.toPrecision(7); // "123456.8" 有意义的七位够
       
  * parseInt() 转换成整数，parseFloat()转换成浮点数
