// 2、自定义方式实现深拷贝

/*利用递归来实现深拷贝，如果对象属性的值是引用类型（Array,Object）,那么对该属性进行深拷贝，直到遍历到属性的值是基本类型为止。 */
function deepClone(obj){    
    //因为null是基础类型，但是用typeof判断时，显示为object
    //原理是因为是使用二进制判断，前三位为0则为object，而null，所有位数均为0，故显示为object
    if(obj === null) return null;
    if(typeof obj !== 'object') return obj;
    if(obj.constructor===Date) return new Date(obj); 
    if(obj.constructor === RegExp) return new RegExp(obj);
    var newObj = new obj.constructor ();  //保持继承链
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
            var val = obj[key];
            newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
        }
    }  
    return newObj;
  }

//   tips: 该方法无法实现function的深拷贝!!!