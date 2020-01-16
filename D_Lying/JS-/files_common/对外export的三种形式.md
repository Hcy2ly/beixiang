* module.exports与exports，export与export default的区别

# module.exports
Node使用CommonJS规范，定义每个模块的内部，module变量代表当前模块，exports是modules的属性，表示对外的接口。
加载某个模块，实际上是加载模块的module.exports属性。
Node为每个模块提供了一个exports变量，指向module.exports,这等同于每个模块头部有这样的一行代码：var exports = module.exports。

# export / export default
ES6使用export和import来导出/导入模块。
3.1 export与export default 均可用于导出；
3.2 在一个文件或模块中，export/import 可以有多个，export default只有一个；
3.3 通过 export 方式导出， 在导入时需要加 {} ，export default 不需要；
3.4 export 能导出变量/表达式， export default 不可以

CommonJS模块输出是一个值的拷贝，ES6模块输出是值的引用。
CommonJS模块是运行时加载，ES6模块是编译时输出接口。
CommonJs模块无论require多少次，都会在第一次加载时运行一次，然后保存到缓存中，下次在require，只会在从缓存中取。

module exports 与 exports 是CommonJs的规范，被使用于Node.js中。//现在在用的。
export 与 export default，是ES6规范，被使用于React或Vue中。