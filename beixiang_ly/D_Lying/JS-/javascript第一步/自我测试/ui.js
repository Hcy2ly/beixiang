document.getElementById('cn').onclick = () => {
  document.title = '笑话生成器';
  document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
  document.getElementById('lbl-cn').textContent = '中国';
  document.getElementById('lbl-us').textContent = '美国';
  document.getElementById('lbl-uk').textContent = '英国';
  document.getElementById('customname').placeholder = '李雷';
  document.querySelector('.randomize').textContent = '随机生成笑话';
};

document.getElementById('us').onclick =
document.getElementById('uk').onclick = () => {
  document.title = 'Silly story generator';
  document.getElementById('lbl-customname').textContent = 'Enter custom name:';
  document.getElementById('lbl-cn').textContent = 'CN';
  document.getElementById('lbl-us').textContent = 'US';
  document.getElementById('lbl-uk').textContent = 'UK';
  document.getElementById('customname').placeholder = 'Bob';
  document.querySelector('.randomize').textContent = 'Generate random story';
};
const customName = document.getElementById('customname');//输入自定义的名字
const randomize = document.querySelector('.randomize'); //随机生成笑话按钮
const story = document.querySelector('.story'); //存放笑话

// 取一个数组作参数，随机返回数组中的一个元素
function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText  = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = ['Willy the Goblin',' Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

// var result = 
function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  // replace() 方法用于在 字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) { //checked 属性规定在页面加载时应该被预先选定的 input 元素。 预先选定复选框或单选按钮。
    var weight = Math.round(300*0.071429) + 'stones';
    var temperature = Math.round((94-32)/1.8) + 'centigrade';
    newStory = newStory.replace('300 pounds' , weight);
    newStory = newStory.replace('94 farenheit', temperature);
  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}