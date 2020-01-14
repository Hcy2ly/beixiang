

# js 有几种语言类型？ 【7种，6种原始类型: Undefined、Null、Boolean、Number、String、Symbol, 1种引用类型: Object。】
  * 原始类型： 
      1. 又被称为基本类型，原始类型保存的变量和值直接保存在栈内存(Stack)中,且空间相互独立,通过值来访问。
      2. var person = 'Messi'; var person1 = person; // 虽然 person === persion1; 但是两个变量并没有指向同一个值,而是person1自己单独建立一个内存空间,虽然两个变量的值和类型相等,但却是相互独立的存在。
          - code： 
              var person = 'Messi';
              var person1 = person;
              var person = 1;
              console.log(person); //1
              console.log(person1); //'Messi' 说明person1是独立存储，不会被person的改变影响;
      3. 值得一提的是,虽然原始类型的值是储存在相对独立空间,但是它们之间的比较是按值比较的。当我们 var person='Messi'; var person1=person; 显然 person === persion1 为true，是按值比较的。
  * 引用类型： 
      1. 即Object 类型,再往下细分，还可以分为：Object 类型、Array 类型、Date 类型、Function 类型 等。
      2. 与原始类型不同的是,引用类型的内容是保存在堆内存中,而栈内存(stack)中会有一个堆内存地址,通过这个地址变量被指向堆内存中Object真正的值,因此 引用类型 是按照 引用 访问的。
          - code：
              var a = {name:"liaoying"};
              var b;
              b = a; //浅拷贝 如果是原始类型的话,b会在栈内自己独自创建一个内存空间保存值,但是引用类型内存地址不会改变,会指向堆内存中的Object。
              a.name = "lz"; //修改a的姓名 liaoying 为 lz  object的name属性更新。但是a,b对象的内存地址没有改变。
              console.log(b.name);    //lz  变量a,b 
              b.age = 21; //给对象添加年龄属性并给值21
              console.log(a.age);     //22
              var c = { name: "lz", age: 22b}; //声明新对象c，会开辟一个新的内存空间保存该对象c的所有相关属性值和方法。【类似于深拷贝 d = JSON.parse(JSON.stringify(b)); 值相同，但是内存地址不一样了。】
              console.log(a === c); //false  引用类型是按照引用比较【进行“指针地址”比较】,由于a，c 引用的是不同的Object，所以得到的结果是false.
              
  * 7种
      - 第一种 undefined (等同于(===) void 0)问：为什么有的编程规范要求用 void 0 代替 undefined？
          * undefined
              - undefined类型表示未定义，它的值只有一个：undefined；
              - 任何变量赋值都是undefined类型，值为undefined（而不是null）
              - undefined是一个变量，而非一个关键字
              - 需要表达着这个值，可以用全局变量undefined，或者void运算。
          * so 因为undefined是一个变量，我们避免无意中被篡改，建议使用void 0 来获取undefined（等价于void(0)）。
              - 我们一般不会把变量赋值为undefined，这样可以保证所有的值为undefined的变量，都是从未赋值的自然状态。
          * void 运算
              - void express 或者 void（express） 
              - void运算符所做的是，执行表达式express，然后不论表达式是否有返回值，一律返回undefined。
              - void 运算符如果使用括号，括号内必须有表达式，如果是void（） 会被视为执行名void的函数，报错：SynataxError。
          * 死链接 我们有时候会用href="#"来表示死链接，但是这样会导致页面跳到最上面的视图，#包含了一个位置信息，默认的锚是#top，也就是网页的上端。在页面很长的时候会使用#来定位页面的具体位置，格式为： #+id
              - href=javascript: void(0)用来禁止a标签的跳转行为，javascript： 是伪协议， 表示url的内容通过javascript执行，void(0)表示不做任何操作
              - <a href="javascript: void(0)" onClick="window.open()"><!--点击链接页面不动，只打开链接-->
              - <a href="#" onClick="javascript: return false"><!--点击链接页面不动，只打开链接-->

      - 第二种 NUll  
          1. 只有一个值，就是null表示空值
          2. 是关键字，可以放心使用null关键字来获取null值

      - 第三种 String
          1. String 的意义并非"字符串"，而是字符串的UTF16编码, 字符串的最大长度实际上是受字符串编码长度影响的。最大长度2^53 -1。
          2. 字符串是永远无法变更的，一旦字符串被构造出来，无法用任何方式改变字符串的内容。
              * ??? 为啥说字符串是无法变更的？replace不是可以改变字符串的值吗？
                  - 答案：字符串是永远无法变更的，一旦字符串被构造出来，无法用任何方式改变字符串的内容，像String.toUpperCase()这样的方法，是返回一个新的字符串，而不是修改原字符串。（***）
                  - 这个是约定，因为字符串改变会有很多问题，所以在java中就把字符串变成不可变的。你乱改会出事，所以我和你订好了，你别改，你要改的话，创建一个新的。
                  - java里字符串有个常量池，会做拷贝。如果你想修改某个字符串，那你就把它拷贝出来（借用一下）做相应代码处理，成为一个新的字符串，去赋值给你想要指向的变量，这个时候变量指向的内存地址改变了。
                      1. var str="abc"; //str 指向 "abc"内存地址
                      2. str = str.replace("b", "-"); // 这时候str 指向 新字符串"a-c"内存地址
                      * 字符串常量池：
                          - 即为了避免多次创建字符串对象,而将字符串在jvm中开辟一块空间,储存不重复的字符串.
                          - 在直接使用双引号""声明字符串的时候, java都会去常量池找有没有这个相同的字符串,如果有,则将常量池的引用返回给变量. 如果没有,会在字符串常量池中创建一个对象,然后返回这个对象的引用
                          - 使用new关键字创建,比如String a = new String("hello");, 这里可能创建两个对象. 一个是用双引号括起来的hello,按照上面的逻辑, 如果常量池没有,创建一个对象. 另一个是必须会创建的,new 关键字必然会在堆中创建一个新对象. 最终返回的是new 关键词创建的对象的地址
          3. 字符串把UTF16单元当作一个字符来处理，所以处理非BMP（超出 U+0000 - U+FFFF 范围）的字符时，应该格外小心。这个设计继承来自java，现实中很少用到BMP之外的字符。
          4. 字符串方法和属性：原始值，比如“Bill Gates”，无法拥有属性和方法（因为它们不是对象）。但是通过 JavaScript，方法和属性也可用于原始值，因为在执行方法和属性时 JavaScript 将原始值视为对象。

      - 第四种 Number
          * 问： 为什么在js中 0.1+0.2 != 0.3  ? //输出0.30000000000000004
              - number类型有 2^64-2^53 + 3 个值。
              - 基本符合IEEE754-2008规定的的双精度浮点数规则，但也有额外几个表达的语言场景（比如不让除以0出错，引入了无穷大）。
                  1. NaN 占用了 9007199254740990，这原本是符合 IEEE 规则的数字.
                  2. Infinity，无穷大
                  3. -Infinity， 负无穷大
              - 有+0 和 -0，加法运算中没有区别，但是除法要区分，‘忘记检测除以-0，而得到负无穷大’的情况经常会导致错误，而区分 +0 和 -0 的方式，正是检测 1/x 是Infinity还是-Infinity
              - 根据双精度浮点数定义，有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，无法精确表示此范围外的整数。
              - 非整数的Number类型无法用双等号（==）来比较，三等号（===）也不行，正确的比较方法是用JavaScript提供的最小精度值：
                  1. console.log( 0.1 + 0.2 == 0.3);//false 
                  2. console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);//true  es6出现的
                  * 最小精度值 Number.EPSILON
                      - 表示1与大于1的最小浮点数之间的差，实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。
                      - 对于64位浮点数来说， 大于1的最小浮点数相当于二进制的1.00...00[这中间有51个0]1,该值减去1之后，就等于2^-52次方。
                          1. Number.EPSILON === Math.pow(2, -52) // true
                          2. Number.EPSILON // 2.220446049250313e-16
                          3. Number.EPSILON.toFixed(20) // "0.00000000000000022204"
                      - 引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的。
                      function withinErrorMargin (left, right) { //误差检查函数。
                          return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);   // Math.abs(数值) 求绝对值
                      } 
                      0.1 + 0.2 === 0.3; // false 
                      withinErrorMargin(0.1 + 0.2, 0.3) // true
                      1.1 + 1.3 === 2.4 // false
                      withinErrorMargin(1.1 + 1.3, 2.4) // true

      - 第五种 Symbol
          1. 表示独一无二的值，它是一切非字符串的对象key的集合。
          2. Symbol值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的Symbol类型
          3. 凡是属性名属于Symbol类型的，就都是独一无二的，可以保证不会与其他属性名产生冲突。
          4. Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的藐视，但是即使描述相同，Symbol值也不相等。
              let s1 = Symbol('foo');
              let s2 = Symbol('foo');
              s1 === s2 // false
          5. 一些标准中提到的Symbol，可以在全局的Symbol函数的属性中找到。
              例子： 我们可以使用 Symbol.iterator 来自定义 for…of 在对象上的行为：
              var o = new Object
              o[Symbol.iterator] = function() {
                  var v = 0
                  return {
                      next: function() {
                          return { value: v++, done: v > 10 }
                      }
                  }        
              };
              for(var v of o) 
                  console.log(v); // 0 1 2 3 ... 9

      - 第六种 Boolean （ture/false）

      - 第七种 Object 
          * js Object
              - js对象的定义是“属性的集合”。属性分为数据属性和访问器属性，二者都是key-value结构，key可以是字符串或者Symbol类型。
              - js的“类”仅仅是运行时对象的一个私有属性，而javaScript中是无法自定义类型的。
              - Number，String 和 Boolean,三个构造器是两用的，当跟new搭配时，他们产生对象，当直接调用时，他们表示强制类型转换。
              - Symbol 函数比较特殊，直接用new调用它会抛出错误，但它仍然是Stymbol对象的构造器。
              - 我们在原型上添加方法，都可以应用于基本类型。
                  Symbol.prototype.hello = () => console.log("hello"); //仍然是Symbol对象的构造器
                  var a = Symbol("a"); //a 为 symbol类型 
                  console.log(typeof a); //symbol，a 并非对象（object）
                  a.hello(); //hello，有效 a 为symbol 类型 所以a可以调用Symbol函数原型上的方法。
          * 为什么给对象添加的方法能用在基本类型上？
              - 运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得能够在基础类型上调用对应对象的方法。
          * 装箱和拆箱： 
              - 装箱转换： 基本类型 -> 对象
                  1. 每一种基本类型，都在对象中有对应的类，装箱机制会频繁产生临时对象。
                  2. 使用object函数，可以显示调用装箱能力。
                  3. 每一类装箱对象皆有私有的Calss属性，这些属性可以Object.prototype.toString获取。
                  4. 在javaScript中，没有任何方法可以更改私有的Calss属性，因此Object.prototype.toString实可以准确识别对象对应的基本类型方法，它比instanceof 更加准确。
                      * typeof & instanceof & Object.prototype.toString() 区别
                          - typeof
                              1. typeof 是一个一元运算，放在一个运算数之前，运算数可以是任意类型。
                              2. 主要用于判断数据是不是基本数据类型： String，Number，Object，Null，Undefined，Boolean，但是无法判断function，array，regExp；
                              3. typeof 一般只能返回这几个结果： number, boolean, string, function, object, undefined。我们可以用typeof 判断一个变量是否存在，如：
                              if(typeof a == "undefined") {document.write('hello world');} //用if(a)，如果a未声明则会出错
                              4. 对于Array，Null等特殊对象使用typeof 一律返回object，这正是typeof的局限性。 
                                  - var a = null; typeof a; //object  
                                  - var b = new Array(); typeof b; //"object"
                                  - var c = Array; typeof c; //"function"  //类的数据类型就是函数，且指向构造函数；
                                  - Array; //ƒ Array() { [native code] }  
                                  // Array是Array基类（父类）的构造函数，可以理解为数组所有的的访问方法都在这个Array构造函数的原型上。
                                  // 基类是类似 java 里的概念  JS里可以理解为构造器或构造函数
                          - instanceof 
                              1. 
                          - Object.prototype.toString()


  * js Object
      1. typeof & instanceof
      2. document & window
      3. iframe