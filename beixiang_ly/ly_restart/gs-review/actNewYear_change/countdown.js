/*
 * @Descripttion: 倒计时组件
 * @Version: 1.0.0
 * @Author: Li Yong
 * @Date: 2019-12-12 10:20:46
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-28 13:07:42
 */

let cdTimers = [];
const _countdown = (target, fmt, counting = () => { }, end = () => { }) => {
  cdTimers.forEach(element => element && clearInterval(element));
  cdTimers = [];
  const __countdown = () => {
    target.forEach((element, index) => {
      cdTimers.push(setInterval(() => {
        const time = parseInt($(element).data('cdTime'));
        if (time <= 0) {
          clearInterval(cdTimers[index]);
          end();
        } else {
          counting();
          _setCountTimeText($(element), fmt, time - 1);
        }
      }, 1000));
    });
  };
  if (target.length <= 0) {
    throw new Error('容器不能为空');
  }
  __countdown();
};
const _setCountTimeText = (target, fmt, date) => {
  if (target.length <= 0) {
    throw new Error('容器不能为空');
  }
  target.length === 1
    ? target.data('cdTime', date).text(_formateTime(fmt, date))
    : target.forEach((element, index) => {
      $(element).data('cdTime', date[index]).text(_formateTime(fmt, date[index]));
    });
};
const _formateTime = (fmt = 'HH:MM:SS', date) => {
  const days = parseInt(date / 3600 / 24);
  const hours = parseInt(date / 3600);
  const minus = parseInt((date - hours * 3600) / 60);
  const seconds = date - hours * 3600 - minus * 60;
  let ret;
  let opt = {
    "D+": days,            // 日
    "H+": hours,           // 时
    "M+": minus,           // 分
    "S+": seconds          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length === 1 ? (opt[k]) : opt[k] < 10 ? (opt[k].toString().padStart(ret[1].length, "0")) : (opt[k]));
    }
  }
  return fmt;
};
const countdown = {
  init: (options) => {
    const {
      container,
      timeStamp,
      formate,
      counting,
      end
    } = options;
    _setCountTimeText(container, formate, timeStamp);
    _countdown(container, formate, counting, end);
  }
};

module.exports = countdown;
