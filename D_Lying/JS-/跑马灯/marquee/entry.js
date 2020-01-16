import "./entry.less";
/*eslint-disable */
// import VConsole from "vconsole/dist/vconsole.min.js"; //import vconsole
// let vConsole = new VConsole();
import "lib/lib-zepto/1.0.0/zepto.min";
import "lib/lib-animate";
let inviteFriends = {
  init() {
    this.marquee(); //跑马灯
    this.prizeNotice();
  },
  marquee() {
    //头像链接数组
    let avatorArr = [
      "http://thirdwx.qlogo.cn/mmopen/vi_32/h1qy3Qq8Hy3qibOQT5vDeMZoibicG2ZnI5DutiaTeUmXFktFW72fz2hGCn0MZYicqjyqu1MhXmfPM1ZGXT2ABY7rgag/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj6m6P4xQyHAibqnKSncbmpmbNKHQiaZFEib57D7Gf4bbgxyk0DOnyhiaibqTWgVv2FrTES7K0CKsCURg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK11KedaicJ8FaAVC3XYrS3hCFdE1SnSnLSYTsZj1wHrAAtZ53ScqicDoOsiaG6TzF5Fs9oibriciaNYAwQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/KRCEw5V21YEz7oVIU4QBXIn7PUadet7ROMvJZPntDwXecLGMmlicoibQXeUdBCNNFLx133EH7E4oR2h5sOjCPdEw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/icT1S8Uy4lYVNmTzGsgibQ4EAoKNcI6icvvsy2ScQpI4IUbPPicw6Gka63qWuprRyiavUH4kseLdvPicx45ZB2kj7eOA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/OJib9LnpZUakQ4ke04GcdUI7ib9Aevpv8zibJeicTVdMroGAiaaeCR28iab8PiajusojGRMBvvhzNnpeianGiawqML7byag/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJttDg1ib9YUIBulrGZicp9VnwAoWc3C94oSRxP04L3ibtuxC049XYrZOd9vTaeVSNWBEPY7FIKJaQUg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTInkIjjWxBw5GjbiaY5A4SxmprtpXiarNmXkldymILop6TrJ24Nicw10Lib8O22q5nL9OdP3g8p8Qv9gA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/STn4IvlkBkk15ojibEiaAnymHCWvjL3Xteicxpic4P3VicoEFiaMTeUG1CGe4fibJUpPs7yVNQsNubk7AibOWVOicgOXPog/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/OEm0SsW3dGHJMTQdGK5yhX5Isiax4seJJKA4s0t6ExWKshHrK4ScatR46FDiaiaHK5N9pbfXOia9PFNULIIvM7XFiaQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/uebqNMfFGGt1optQVXfTUDwNapUbx9srzsTFZ2efTUS9ChiavzsB0HP9QRWWINzGndktBSZYMOUj5we0bh4w4Gw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epdx4NBfDjV3sicxqBF8RYQVgUctzthNKibAicUC6M6cAqNwjGIB6ib1R1iaaVHTQic4bH65za0rOkl9icCQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/ICaSMEO6ZOWibeiakgl6pwiaicAyIjs4tWTPsoOWzm9cNodswdX9amx3pJ7JGKlHxnXA4SfcSFUwTQrEEvPpzYd17Q/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/A9WkGiaeicmfflfRNOuzNxRagt5qrlIVZmPumdYSYriaRISyCRiaicVuhbHwrksEqe5VoMTBHaouQrPRtAtuH1KDFUA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/xiaZibPibepFriahcrWLf0BBQvmm742B43QCxM1XKWQAaiaB1HeaF0aTkibyY4c97x32082Rnk3FtZ8l1aSq5V6gkchQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep9cDhXSGwsroIVrObozWL1tz5IxSib73Fj1phANdB2ziaFYZRUZ6TjYAUAEVO6co1Oq7jwyjaQO5ag/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/ic9eoyyyicQuicqsEp77RgsDV2obTajvMVvnq6hqE9riawV4Hiav0diaW8spOBSzhg8qPzIia4ZoQcRuoAv1uQxSaznAg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/uOqs60y6uFicx0G22rcgkNno7CUsvkbDNGIibN2XaX14p9fygCAmQbpia4d9Tib6Cchlaia1kv9LBvbZ20SJsoSdsJA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/fnoNvibpSbBX4icM9VxG3FA7lnsoqB5HYpicWa9eodMn2VosrwTw5ibG7DeeHNxD3AFRRx2WaPTkdMhBatAl0s9A5g/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRFIZAykeug9EXaiaicZibAKfibC5Xox2icCkrWW4ErKA0dyAOBtX7T6ibiazlsswiaPfiaFASjbrUkmPqaew/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/SGjg6RWwHTHsKx9VE3yib3X10QuofxLEOSxqcIsWYaHryJicbgIBEcD1OUbgt00qu9bZ10EcH7XIpv7vEIglm6oQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/cFpu1nmzNVibW7VFMZMPo2mmxdIS1nJEibV1XxSIJLmeoibHQbAdpfzpiaJaeavb03ohJpx0XdDPtktwicLTibTbwfhw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/7tasQ8icvIicASx7FCVN4uqZWgltVdR9yozm6Jt9yBXQiagGENIHoQ7AzicEfOFzECESrcnkbF92wXYiciacxXz00fHw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJVbNavqRZWp0oUwEw2icFzjDgibHqTCxC6veojgHccHiaxiaOpgQOkAIh92SICfp2pKsrXTIBjrV5Jpg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/0jyiajvicYicH4NTKaGmfMw12BzDliciajibSnE4l90FFibAaia6p2icgUU5Dwy7gGUrlG18Sy0tPMoM65e4VnibPI49zdSQ/132"
    ];
    //昵称数组
    let utf8NameArr1 = [
      " ",
      " ",
      "的",
      "也",
      "为",
      "又",
      "可",
      "家",
      "学",
      "只",
      "以",
      "主",
      "会",
      "样",
      "年",
      "想",
      "能",
      "生",
      "同",
      "老",
      "中",
      "从",
      "自",
      "面",
      "前",
      "头",
      "到",
      "它",
      "后",
      "然",
      "走",
      "很",
      "像",
      "见",
      "两",
      "用",
      "她",
      "国",
      "动",
      "进",
      "成",
      "回",
      "什",
      "边",
      "作",
      "对",
      "开",
      "而",
      "已",
      "总",
      "条",
      "白",
      "话",
      "东",
      "席",
      "次",
      "亲",
      "如",
      "被",
      "花",
      "口",
      "放",
      "儿",
      "常",
      "西",
      "气",
      "五",
      "第",
      "使",
      "写",
      "军",
      "吧",
      "文",
      "运",
      "在",
      "果",
      "怎",
      "定",
      "许",
      "快",
      "明",
      "行",
      "因",
      "别",
      "飞",
      "外",
      "树",
      "物",
      "活",
      "部",
      "门",
      "无",
      "往",
      "船",
      "望",
      "時窥",
      "草莓",
      "忆",
      "勒言",
      "^千",
      "笑厌",
      "蝶",
      "浪够",
      "蒙春",
      "执着",
      "赔伴",
      "福星",
      "萧迢",
      "言己",
      "婪欲",
      "ζ挽",
      "柔侣",
      "噬丶",
      "逆の",
      "小嗲",
      "半死",
      "难拥",
      "孤i",
      "创i",
      "月棠",
      "轻佻",
      "反话",
      "泠渊",
      "雾夕",
      "淤人",
      "死≠",
      "蠕虫"
    ];
    let stringNameArr2 = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      " "
    ];
    let numNameArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let specialNameArr4 = ["*", "/", "-", "@", "！", "~", "#", "$", "￥", "%", "^", "&", "|", ".", "、", " ", " "];
    let nameArr1 = [utf8NameArr1, stringNameArr2, numNameArr3, specialNameArr4];
    for (let i = 0; i < avatorArr.length; i++) {
      // 得到随机头像链接
      let Index = Math.floor(Math.random() * avatorArr.length);
      // 得到昵称
      let someoneName = "";
      for (let j = 0; j < 3; j++) {
        let someoneFont_index = Math.floor(Math.random() * nameArr1.length);
        let someoneFontFrom = nameArr1[someoneFont_index];
        let someoneFont = someoneFontFrom[Math.floor(Math.random() * someoneFontFrom.length)];
        someoneName += someoneFont;
      }
      //push到页面上 因为只是用来展示的，所以不用担心图片不够用的情况
      let p_minutes = Math.ceil(Math.random() * 59);
      let p_price = Math.ceil(Math.random() * 7);
      let dom = `
        <div class="person">
          <img class="p-avator" src="${avatorArr[Index]}" alt="" />
          <div class="p-name">${someoneName}... ${p_minutes}分钟前提现了${p_price}元邀新奖励</div>
        </div>
    `;
      $(".marquee0").append(dom);
      $(".marquee1").append(dom);
    }
  },
  marquee0() {
    //头像链接数组
    var avatorArr = [
      "http://thirdwx.qlogo.cn/mmopen/vi_32/h1qy3Qq8Hy3qibOQT5vDeMZoibicG2ZnI5DutiaTeUmXFktFW72fz2hGCn0MZYicqjyqu1MhXmfPM1ZGXT2ABY7rgag/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj6m6P4xQyHAibqnKSncbmpmbNKHQiaZFEib57D7Gf4bbgxyk0DOnyhiaibqTWgVv2FrTES7K0CKsCURg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK11KedaicJ8FaAVC3XYrS3hCFdE1SnSnLSYTsZj1wHrAAtZ53ScqicDoOsiaG6TzF5Fs9oibriciaNYAwQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/KRCEw5V21YEz7oVIU4QBXIn7PUadet7ROMvJZPntDwXecLGMmlicoibQXeUdBCNNFLx133EH7E4oR2h5sOjCPdEw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/icT1S8Uy4lYVNmTzGsgibQ4EAoKNcI6icvvsy2ScQpI4IUbPPicw6Gka63qWuprRyiavUH4kseLdvPicx45ZB2kj7eOA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/OJib9LnpZUakQ4ke04GcdUI7ib9Aevpv8zibJeicTVdMroGAiaaeCR28iab8PiajusojGRMBvvhzNnpeianGiawqML7byag/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJttDg1ib9YUIBulrGZicp9VnwAoWc3C94oSRxP04L3ibtuxC049XYrZOd9vTaeVSNWBEPY7FIKJaQUg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTInkIjjWxBw5GjbiaY5A4SxmprtpXiarNmXkldymILop6TrJ24Nicw10Lib8O22q5nL9OdP3g8p8Qv9gA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/STn4IvlkBkk15ojibEiaAnymHCWvjL3Xteicxpic4P3VicoEFiaMTeUG1CGe4fibJUpPs7yVNQsNubk7AibOWVOicgOXPog/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/OEm0SsW3dGHJMTQdGK5yhX5Isiax4seJJKA4s0t6ExWKshHrK4ScatR46FDiaiaHK5N9pbfXOia9PFNULIIvM7XFiaQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/uebqNMfFGGt1optQVXfTUDwNapUbx9srzsTFZ2efTUS9ChiavzsB0HP9QRWWINzGndktBSZYMOUj5we0bh4w4Gw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epdx4NBfDjV3sicxqBF8RYQVgUctzthNKibAicUC6M6cAqNwjGIB6ib1R1iaaVHTQic4bH65za0rOkl9icCQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/ICaSMEO6ZOWibeiakgl6pwiaicAyIjs4tWTPsoOWzm9cNodswdX9amx3pJ7JGKlHxnXA4SfcSFUwTQrEEvPpzYd17Q/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/A9WkGiaeicmfflfRNOuzNxRagt5qrlIVZmPumdYSYriaRISyCRiaicVuhbHwrksEqe5VoMTBHaouQrPRtAtuH1KDFUA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/xiaZibPibepFriahcrWLf0BBQvmm742B43QCxM1XKWQAaiaB1HeaF0aTkibyY4c97x32082Rnk3FtZ8l1aSq5V6gkchQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep9cDhXSGwsroIVrObozWL1tz5IxSib73Fj1phANdB2ziaFYZRUZ6TjYAUAEVO6co1Oq7jwyjaQO5ag/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/ic9eoyyyicQuicqsEp77RgsDV2obTajvMVvnq6hqE9riawV4Hiav0diaW8spOBSzhg8qPzIia4ZoQcRuoAv1uQxSaznAg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/uOqs60y6uFicx0G22rcgkNno7CUsvkbDNGIibN2XaX14p9fygCAmQbpia4d9Tib6Cchlaia1kv9LBvbZ20SJsoSdsJA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/fnoNvibpSbBX4icM9VxG3FA7lnsoqB5HYpicWa9eodMn2VosrwTw5ibG7DeeHNxD3AFRRx2WaPTkdMhBatAl0s9A5g/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRFIZAykeug9EXaiaicZibAKfibC5Xox2icCkrWW4ErKA0dyAOBtX7T6ibiazlsswiaPfiaFASjbrUkmPqaew/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/SGjg6RWwHTHsKx9VE3yib3X10QuofxLEOSxqcIsWYaHryJicbgIBEcD1OUbgt00qu9bZ10EcH7XIpv7vEIglm6oQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/cFpu1nmzNVibW7VFMZMPo2mmxdIS1nJEibV1XxSIJLmeoibHQbAdpfzpiaJaeavb03ohJpx0XdDPtktwicLTibTbwfhw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/7tasQ8icvIicASx7FCVN4uqZWgltVdR9yozm6Jt9yBXQiagGENIHoQ7AzicEfOFzECESrcnkbF92wXYiciacxXz00fHw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJVbNavqRZWp0oUwEw2icFzjDgibHqTCxC6veojgHccHiaxiaOpgQOkAIh92SICfp2pKsrXTIBjrV5Jpg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/ibp87g3ic4LYsicUuBfBZaRDvQHC4qIZnLOicrbMzzLNQZZKHHnyo6tzWqm6aeKwwUEc4kp4qLZ773SzNaujKOsBMA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/0jyiajvicYicH4NTKaGmfMw12BzDliciajibSnE4l90FFibAaia6p2icgUU5Dwy7gGUrlG18Sy0tPMoM65e4VnibPI49zdSQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/h1qy3Qq8Hy3qibOQT5vDeMZoibicG2ZnI5DutiaTeUmXFktFW72fz2hGCn0MZYicqjyqu1MhXmfPM1ZGXT2ABY7rgag/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj6m6P4xQyHAibqnKSncbmpmbNKHQiaZFEib57D7Gf4bbgxyk0DOnyhiaibqTWgVv2FrTES7K0CKsCURg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK11KedaicJ8FaAVC3XYrS3hCFdE1SnSnLSYTsZj1wHrAAtZ53ScqicDoOsiaG6TzF5Fs9oibriciaNYAwQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/KRCEw5V21YEz7oVIU4QBXIn7PUadet7ROMvJZPntDwXecLGMmlicoibQXeUdBCNNFLx133EH7E4oR2h5sOjCPdEw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/icT1S8Uy4lYVNmTzGsgibQ4EAoKNcI6icvvsy2ScQpI4IUbPPicw6Gka63qWuprRyiavUH4kseLdvPicx45ZB2kj7eOA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/OJib9LnpZUakQ4ke04GcdUI7ib9Aevpv8zibJeicTVdMroGAiaaeCR28iab8PiajusojGRMBvvhzNnpeianGiawqML7byag/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJttDg1ib9YUIBulrGZicp9VnwAoWc3C94oSRxP04L3ibtuxC049XYrZOd9vTaeVSNWBEPY7FIKJaQUg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTInkIjjWxBw5GjbiaY5A4SxmprtpXiarNmXkldymILop6TrJ24Nicw10Lib8O22q5nL9OdP3g8p8Qv9gA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/STn4IvlkBkk15ojibEiaAnymHCWvjL3Xteicxpic4P3VicoEFiaMTeUG1CGe4fibJUpPs7yVNQsNubk7AibOWVOicgOXPog/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/OEm0SsW3dGHJMTQdGK5yhX5Isiax4seJJKA4s0t6ExWKshHrK4ScatR46FDiaiaHK5N9pbfXOia9PFNULIIvM7XFiaQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/uebqNMfFGGt1optQVXfTUDwNapUbx9srzsTFZ2efTUS9ChiavzsB0HP9QRWWINzGndktBSZYMOUj5we0bh4w4Gw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epdx4NBfDjV3sicxqBF8RYQVgUctzthNKibAicUC6M6cAqNwjGIB6ib1R1iaaVHTQic4bH65za0rOkl9icCQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/ICaSMEO6ZOWibeiakgl6pwiaicAyIjs4tWTPsoOWzm9cNodswdX9amx3pJ7JGKlHxnXA4SfcSFUwTQrEEvPpzYd17Q/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/A9WkGiaeicmfflfRNOuzNxRagt5qrlIVZmPumdYSYriaRISyCRiaicVuhbHwrksEqe5VoMTBHaouQrPRtAtuH1KDFUA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/xiaZibPibepFriahcrWLf0BBQvmm742B43QCxM1XKWQAaiaB1HeaF0aTkibyY4c97x32082Rnk3FtZ8l1aSq5V6gkchQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep9cDhXSGwsroIVrObozWL1tz5IxSib73Fj1phANdB2ziaFYZRUZ6TjYAUAEVO6co1Oq7jwyjaQO5ag/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/ic9eoyyyicQuicqsEp77RgsDV2obTajvMVvnq6hqE9riawV4Hiav0diaW8spOBSzhg8qPzIia4ZoQcRuoAv1uQxSaznAg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/uOqs60y6uFicx0G22rcgkNno7CUsvkbDNGIibN2XaX14p9fygCAmQbpia4d9Tib6Cchlaia1kv9LBvbZ20SJsoSdsJA/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/fnoNvibpSbBX4icM9VxG3FA7lnsoqB5HYpicWa9eodMn2VosrwTw5ibG7DeeHNxD3AFRRx2WaPTkdMhBatAl0s9A5g/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRFIZAykeug9EXaiaicZibAKfibC5Xox2icCkrWW4ErKA0dyAOBtX7T6ibiazlsswiaPfiaFASjbrUkmPqaew/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/SGjg6RWwHTHsKx9VE3yib3X10QuofxLEOSxqcIsWYaHryJicbgIBEcD1OUbgt00qu9bZ10EcH7XIpv7vEIglm6oQ/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/cFpu1nmzNVibW7VFMZMPo2mmxdIS1nJEibV1XxSIJLmeoibHQbAdpfzpiaJaeavb03ohJpx0XdDPtktwicLTibTbwfhw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/7tasQ8icvIicASx7FCVN4uqZWgltVdR9yozm6Jt9yBXQiagGENIHoQ7AzicEfOFzECESrcnkbF92wXYiciacxXz00fHw/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJVbNavqRZWp0oUwEw2icFzjDgibHqTCxC6veojgHccHiaxiaOpgQOkAIh92SICfp2pKsrXTIBjrV5Jpg/132",
      "http://thirdwx.qlogo.cn/mmopen/vi_32/0jyiajvicYicH4NTKaGmfMw12BzDliciajibSnE4l90FFibAaia6p2icgUU5Dwy7gGUrlG18Sy0tPMoM65e4VnibPI49zdSQ/132"
    ];

    //昵称数组
    var utf8NameArr1 = [
      " ",
      " ",
      "的",
      "也",
      "为",
      "又",
      "可",
      "家",
      "学",
      "只",
      "以",
      "主",
      "会",
      "样",
      "年",
      "想",
      "能",
      "生",
      "同",
      "老",
      "中",
      "从",
      "自",
      "面",
      "前",
      "头",
      "到",
      "它",
      "后",
      "然",
      "走",
      "很",
      "像",
      "见",
      "两",
      "用",
      "她",
      "国",
      "动",
      "进",
      "成",
      "回",
      "什",
      "边",
      "作",
      "对",
      "开",
      "而",
      "已",
      "总",
      "条",
      "白",
      "话",
      "东",
      "席",
      "次",
      "亲",
      "如",
      "被",
      "花",
      "口",
      "放",
      "儿",
      "常",
      "西",
      "气",
      "五",
      "第",
      "使",
      "写",
      "军",
      "吧",
      "文",
      "运",
      "在",
      "果",
      "怎",
      "定",
      "许",
      "快",
      "明",
      "行",
      "因",
      "别",
      "飞",
      "外",
      "树",
      "物",
      "活",
      "部",
      "门",
      "无",
      "往",
      "船",
      "望",
      "時窥",
      "草莓",
      "忆",
      "勒言",
      "^千",
      "笑厌",
      "蝶",
      "浪够",
      "蒙春",
      "执着",
      "赔伴",
      "福星",
      "萧迢",
      "言己",
      "婪欲",
      "ζ挽",
      "柔侣",
      "噬丶",
      "逆の",
      "小嗲",
      "半死",
      "难拥",
      "孤i",
      "创i",
      "月棠",
      "轻佻",
      "反话",
      "泠渊",
      "雾夕",
      "淤人",
      "死≠",
      "蠕虫"
    ];
    var stringNameArr2 = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      " "
    ];
    var numNameArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var specialNameArr4 = ["*", "/", "-", "@", "！", "~", "#", "$", "￥", "%", "^", "&", "|", ".", "、", " ", " "];
    var nameArr1 = [utf8NameArr1, stringNameArr2, numNameArr3, specialNameArr4];
    for (var i = 0; i < avatorArr.length; i++) {
      // 得到随机头像链接
      var Index = Math.floor(Math.random() * avatorArr.length);
      // 得到昵称
      var someoneName = "";
      for (var j = 0; j < 3; j++) {
        var someoneFont_index = Math.floor(Math.random() * nameArr1.length);
        var someoneFontFrom = nameArr1[someoneFont_index];
        var someoneFont = someoneFontFrom[Math.floor(Math.random() * someoneFontFrom.length)];
        someoneName += someoneFont;
      }
      //push到页面上 因为只是用来展示的，所以不用担心图片不够用的情况
      var p_minutes = Math.ceil(Math.random() * 59);
      var p_price = Math.ceil(Math.random() * 7);
      var dom = `
        <div class="person">
          <img class="p-avator" src="${avatorArr[Index]}" alt="" />
          <div class="p-name">${someoneName}... ${p_minutes}分钟前提现了${p_price}元邀新奖励</div>
        </div>
    `;
      $(".marquee0").append(dom);
    }
  },

  //渲染文字跑马灯
  prizeNotice() {
    !(function() {
      let prizeNotice = {
        init: () => {
          prizeNotice.createDom();
          setInterval(() => {
            $(`#prizeNotice`).empty();
            $(`#prizeNotice`).append(`<div class='desc' style="color:#fff;font-size:.1rem;animation:text 2.5s">${prizeNotice.createInfo()}</div>`);
          }, 2300);
        },
        createDom: () => {
          $("head").append(`<style>
          @keyframes text{ 
            0% {
              transform:scale(0.9) translateY(-.15rem) }
            20%{
              transform:scale(1) translateY(0rem) 
            }
            90%{
              transform:scale(1) translateY(0rem) 
            }
            100%{ 
              transform:scale(.9) translateY(.15rem)
            }
          }
        </style>`);
          const dom = `<div id="prizeNotice" style="position:absolute;overflow:hidden;top:0.05rem;left:50%;transform:translateX(-50%);width:2rem;height:0.2rem;line-height:.2rem;text-align:center;background:rgba(0,0,0,0.6);border-radius:0.05rem">
        <div class='desc' style="color:#fff;font-size:.1rem;animation:text 2.5s">${prizeNotice.createInfo()}</div>
        </div>`;
          $(".container").append(dom);
        },
        createInfo: () => {
          //头像链接数组
          var avatorArr = [
            "http://thirdwx.qlogo.cn/mmopen/vi_32/h1qy3Qq8Hy3qibOQT5vDeMZoibicG2ZnI5DutiaTeUmXFktFW72fz2hGCn0MZYicqjyqu1MhXmfPM1ZGXT2ABY7rgag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj6m6P4xQyHAibqnKSncbmpmbNKHQiaZFEib57D7Gf4bbgxyk0DOnyhiaibqTWgVv2FrTES7K0CKsCURg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK11KedaicJ8FaAVC3XYrS3hCFdE1SnSnLSYTsZj1wHrAAtZ53ScqicDoOsiaG6TzF5Fs9oibriciaNYAwQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/KRCEw5V21YEz7oVIU4QBXIn7PUadet7ROMvJZPntDwXecLGMmlicoibQXeUdBCNNFLx133EH7E4oR2h5sOjCPdEw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/icT1S8Uy4lYVNmTzGsgibQ4EAoKNcI6icvvsy2ScQpI4IUbPPicw6Gka63qWuprRyiavUH4kseLdvPicx45ZB2kj7eOA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/OJib9LnpZUakQ4ke04GcdUI7ib9Aevpv8zibJeicTVdMroGAiaaeCR28iab8PiajusojGRMBvvhzNnpeianGiawqML7byag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJttDg1ib9YUIBulrGZicp9VnwAoWc3C94oSRxP04L3ibtuxC049XYrZOd9vTaeVSNWBEPY7FIKJaQUg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTInkIjjWxBw5GjbiaY5A4SxmprtpXiarNmXkldymILop6TrJ24Nicw10Lib8O22q5nL9OdP3g8p8Qv9gA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/STn4IvlkBkk15ojibEiaAnymHCWvjL3Xteicxpic4P3VicoEFiaMTeUG1CGe4fibJUpPs7yVNQsNubk7AibOWVOicgOXPog/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/OEm0SsW3dGHJMTQdGK5yhX5Isiax4seJJKA4s0t6ExWKshHrK4ScatR46FDiaiaHK5N9pbfXOia9PFNULIIvM7XFiaQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/uebqNMfFGGt1optQVXfTUDwNapUbx9srzsTFZ2efTUS9ChiavzsB0HP9QRWWINzGndktBSZYMOUj5we0bh4w4Gw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epdx4NBfDjV3sicxqBF8RYQVgUctzthNKibAicUC6M6cAqNwjGIB6ib1R1iaaVHTQic4bH65za0rOkl9icCQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/ICaSMEO6ZOWibeiakgl6pwiaicAyIjs4tWTPsoOWzm9cNodswdX9amx3pJ7JGKlHxnXA4SfcSFUwTQrEEvPpzYd17Q/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/A9WkGiaeicmfflfRNOuzNxRagt5qrlIVZmPumdYSYriaRISyCRiaicVuhbHwrksEqe5VoMTBHaouQrPRtAtuH1KDFUA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/xiaZibPibepFriahcrWLf0BBQvmm742B43QCxM1XKWQAaiaB1HeaF0aTkibyY4c97x32082Rnk3FtZ8l1aSq5V6gkchQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep9cDhXSGwsroIVrObozWL1tz5IxSib73Fj1phANdB2ziaFYZRUZ6TjYAUAEVO6co1Oq7jwyjaQO5ag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/ic9eoyyyicQuicqsEp77RgsDV2obTajvMVvnq6hqE9riawV4Hiav0diaW8spOBSzhg8qPzIia4ZoQcRuoAv1uQxSaznAg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/uOqs60y6uFicx0G22rcgkNno7CUsvkbDNGIibN2XaX14p9fygCAmQbpia4d9Tib6Cchlaia1kv9LBvbZ20SJsoSdsJA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/fnoNvibpSbBX4icM9VxG3FA7lnsoqB5HYpicWa9eodMn2VosrwTw5ibG7DeeHNxD3AFRRx2WaPTkdMhBatAl0s9A5g/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRFIZAykeug9EXaiaicZibAKfibC5Xox2icCkrWW4ErKA0dyAOBtX7T6ibiazlsswiaPfiaFASjbrUkmPqaew/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/SGjg6RWwHTHsKx9VE3yib3X10QuofxLEOSxqcIsWYaHryJicbgIBEcD1OUbgt00qu9bZ10EcH7XIpv7vEIglm6oQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/cFpu1nmzNVibW7VFMZMPo2mmxdIS1nJEibV1XxSIJLmeoibHQbAdpfzpiaJaeavb03ohJpx0XdDPtktwicLTibTbwfhw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/7tasQ8icvIicASx7FCVN4uqZWgltVdR9yozm6Jt9yBXQiagGENIHoQ7AzicEfOFzECESrcnkbF92wXYiciacxXz00fHw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJVbNavqRZWp0oUwEw2icFzjDgibHqTCxC6veojgHccHiaxiaOpgQOkAIh92SICfp2pKsrXTIBjrV5Jpg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/ibp87g3ic4LYsicUuBfBZaRDvQHC4qIZnLOicrbMzzLNQZZKHHnyo6tzWqm6aeKwwUEc4kp4qLZ773SzNaujKOsBMA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/0jyiajvicYicH4NTKaGmfMw12BzDliciajibSnE4l90FFibAaia6p2icgUU5Dwy7gGUrlG18Sy0tPMoM65e4VnibPI49zdSQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/h1qy3Qq8Hy3qibOQT5vDeMZoibicG2ZnI5DutiaTeUmXFktFW72fz2hGCn0MZYicqjyqu1MhXmfPM1ZGXT2ABY7rgag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj6m6P4xQyHAibqnKSncbmpmbNKHQiaZFEib57D7Gf4bbgxyk0DOnyhiaibqTWgVv2FrTES7K0CKsCURg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK11KedaicJ8FaAVC3XYrS3hCFdE1SnSnLSYTsZj1wHrAAtZ53ScqicDoOsiaG6TzF5Fs9oibriciaNYAwQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/KRCEw5V21YEz7oVIU4QBXIn7PUadet7ROMvJZPntDwXecLGMmlicoibQXeUdBCNNFLx133EH7E4oR2h5sOjCPdEw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/icT1S8Uy4lYVNmTzGsgibQ4EAoKNcI6icvvsy2ScQpI4IUbPPicw6Gka63qWuprRyiavUH4kseLdvPicx45ZB2kj7eOA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/OJib9LnpZUakQ4ke04GcdUI7ib9Aevpv8zibJeicTVdMroGAiaaeCR28iab8PiajusojGRMBvvhzNnpeianGiawqML7byag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJttDg1ib9YUIBulrGZicp9VnwAoWc3C94oSRxP04L3ibtuxC049XYrZOd9vTaeVSNWBEPY7FIKJaQUg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTInkIjjWxBw5GjbiaY5A4SxmprtpXiarNmXkldymILop6TrJ24Nicw10Lib8O22q5nL9OdP3g8p8Qv9gA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/STn4IvlkBkk15ojibEiaAnymHCWvjL3Xteicxpic4P3VicoEFiaMTeUG1CGe4fibJUpPs7yVNQsNubk7AibOWVOicgOXPog/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/OEm0SsW3dGHJMTQdGK5yhX5Isiax4seJJKA4s0t6ExWKshHrK4ScatR46FDiaiaHK5N9pbfXOia9PFNULIIvM7XFiaQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/uebqNMfFGGt1optQVXfTUDwNapUbx9srzsTFZ2efTUS9ChiavzsB0HP9QRWWINzGndktBSZYMOUj5we0bh4w4Gw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epdx4NBfDjV3sicxqBF8RYQVgUctzthNKibAicUC6M6cAqNwjGIB6ib1R1iaaVHTQic4bH65za0rOkl9icCQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/ICaSMEO6ZOWibeiakgl6pwiaicAyIjs4tWTPsoOWzm9cNodswdX9amx3pJ7JGKlHxnXA4SfcSFUwTQrEEvPpzYd17Q/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/A9WkGiaeicmfflfRNOuzNxRagt5qrlIVZmPumdYSYriaRISyCRiaicVuhbHwrksEqe5VoMTBHaouQrPRtAtuH1KDFUA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/xiaZibPibepFriahcrWLf0BBQvmm742B43QCxM1XKWQAaiaB1HeaF0aTkibyY4c97x32082Rnk3FtZ8l1aSq5V6gkchQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep9cDhXSGwsroIVrObozWL1tz5IxSib73Fj1phANdB2ziaFYZRUZ6TjYAUAEVO6co1Oq7jwyjaQO5ag/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/ic9eoyyyicQuicqsEp77RgsDV2obTajvMVvnq6hqE9riawV4Hiav0diaW8spOBSzhg8qPzIia4ZoQcRuoAv1uQxSaznAg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/uOqs60y6uFicx0G22rcgkNno7CUsvkbDNGIibN2XaX14p9fygCAmQbpia4d9Tib6Cchlaia1kv9LBvbZ20SJsoSdsJA/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/fnoNvibpSbBX4icM9VxG3FA7lnsoqB5HYpicWa9eodMn2VosrwTw5ibG7DeeHNxD3AFRRx2WaPTkdMhBatAl0s9A5g/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRFIZAykeug9EXaiaicZibAKfibC5Xox2icCkrWW4ErKA0dyAOBtX7T6ibiazlsswiaPfiaFASjbrUkmPqaew/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/SGjg6RWwHTHsKx9VE3yib3X10QuofxLEOSxqcIsWYaHryJicbgIBEcD1OUbgt00qu9bZ10EcH7XIpv7vEIglm6oQ/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/cFpu1nmzNVibW7VFMZMPo2mmxdIS1nJEibV1XxSIJLmeoibHQbAdpfzpiaJaeavb03ohJpx0XdDPtktwicLTibTbwfhw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/7tasQ8icvIicASx7FCVN4uqZWgltVdR9yozm6Jt9yBXQiagGENIHoQ7AzicEfOFzECESrcnkbF92wXYiciacxXz00fHw/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJVbNavqRZWp0oUwEw2icFzjDgibHqTCxC6veojgHccHiaxiaOpgQOkAIh92SICfp2pKsrXTIBjrV5Jpg/132",
            "http://thirdwx.qlogo.cn/mmopen/vi_32/0jyiajvicYicH4NTKaGmfMw12BzDliciajibSnE4l90FFibAaia6p2icgUU5Dwy7gGUrlG18Sy0tPMoM65e4VnibPI49zdSQ/132"
          ];
          //昵称数组
          var utf8NameArr1 = [
            " ",
            " ",
            "的",
            "也",
            "为",
            "又",
            "可",
            "家",
            "学",
            "只",
            "以",
            "主",
            "会",
            "样",
            "年",
            "想",
            "能",
            "生",
            "同",
            "老",
            "中",
            "从",
            "自",
            "面",
            "前",
            "头",
            "到",
            "它",
            "后",
            "然",
            "走",
            "很",
            "像",
            "见",
            "两",
            "用",
            "她",
            "国",
            "动",
            "进",
            "成",
            "回",
            "什",
            "边",
            "作",
            "对",
            "开",
            "而",
            "已",
            "总",
            "条",
            "白",
            "话",
            "东",
            "席",
            "次",
            "亲",
            "如",
            "被",
            "花",
            "口",
            "放",
            "儿",
            "常",
            "西",
            "气",
            "五",
            "第",
            "使",
            "写",
            "军",
            "吧",
            "文",
            "运",
            "在",
            "果",
            "怎",
            "定",
            "许",
            "快",
            "明",
            "行",
            "因",
            "别",
            "飞",
            "外",
            "树",
            "物",
            "活",
            "部",
            "门",
            "无",
            "往",
            "船",
            "望",
            "時窥",
            "草莓",
            "忆",
            "勒言",
            "^千",
            "笑厌",
            "蝶",
            "浪够",
            "蒙春",
            "执着",
            "赔伴",
            "福星",
            "萧迢",
            "言己",
            "婪欲",
            "ζ挽",
            "柔侣",
            "噬丶",
            "逆の",
            "小嗲",
            "半死",
            "难拥",
            "孤i",
            "创i",
            "月棠",
            "轻佻",
            "反话",
            "泠渊",
            "雾夕",
            "淤人",
            "死≠",
            "蠕虫"
          ];
          var stringNameArr2 = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            " ",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            " "
          ];
          var numNameArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
          var specialNameArr4 = ["*", "/", "-", "@", "！", "~", "#", "$", "￥", "%", "^", "&", "|", ".", "、", " ", " "];
          var nameArr1 = [utf8NameArr1, stringNameArr2, numNameArr3, specialNameArr4];
          for (var i = 0; i < avatorArr.length; i++) {
            // 得到随机头像链接
            var Index = Math.floor(Math.random() * avatorArr.length);
            // 得到昵称
            var someoneName = "";
            for (var j = 0; j < 3; j++) {
              var someoneFont_index = Math.floor(Math.random() * nameArr1.length);
              var someoneFontFrom = nameArr1[someoneFont_index];
              var someoneFont = someoneFontFrom[Math.floor(Math.random() * someoneFontFrom.length)];
              someoneName += someoneFont;
            }
            //push到页面上 因为只是用来展示的，所以不用担心图片不够用的情况
            var p_minutes = Math.ceil(Math.random() * 59);
            var p_price = Math.ceil(Math.random() * 7);
            var dom = `
        <div class="person">
          <img class="p-avator" src="${avatorArr[Index]}" alt="" />
          <div class="p-name">${someoneName}... ${p_minutes}分钟前提现了${p_price}元邀新奖励</div>
        </div>
    `;
            return $(".marquee0").append(dom);
          }
          // let phoneNum = parseInt(Math.random() * 9000 + 1000);
          // let description = [`第${parseInt(Math.random() * 6 + 1)}次抽奖就`, `费尽洪荒之力`, `运气爆发`, `鸿运当头`, `小试身手`];
          // let prizeText = [`iPad mini4`, `4999元大奖`, `100元礼包`, `绝版信用卡`, `99元现金`, `10元现金`, `1万元免息礼包`, `iPhone一部`];
          // return `尾号${phoneNum}用户 ${description[parseInt(Math.random() * 5)]}获得${prizeText[parseInt(Math.random() * 8)]}`;
          return;
        }
      };
      window.prizeNotice = prizeNotice;
      prizeNotice.init();
    })();
  }
};
inviteFriends.init();
