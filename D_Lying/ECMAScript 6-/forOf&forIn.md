1. for...of 用于遍历一个迭代器，如数组：

  let nicknames = ['di', 'boo', 'punkeye'];
  nicknames.size = 3;
  for (let nickname of nicknames) {
    console.log(nickname);
  }
  // 结果: di, boo, punkeye



2. for...in 用来遍历对象中的属性：

  let nicknames = ['di', 'boo', 'punkeye'];
  nicknames.size = 3; //动态添加的一个属性
  for (let nickname in nicknames) {
    console.log(nickname);
  }
  Result: 0, 1, 2, size