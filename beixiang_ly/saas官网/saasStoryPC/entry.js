import "./entry.less";
import "../../lib/zepto";

var saasStory = {
  init: function () {
    let self = saasStory;
    self.renderPage();
    self.bind();
  },
  renderPage: function () {
    $.ajax({
      type: "get",
      url: "http://saas.himeidian.com/book/getShowColumnBookList",
      dataType: "json",
      success: function (res) {
        if (res.code != 0) {
          alert("网络资源崩溃，请刷新页面");
        } else {
          if (res.data) {
            saasStory.renderBooks(res.data);
          }
        }
      }
    });
  },
  renderBooks: function (result) {
    let dom = "";
    result.forEach(item => {
      let _dom = `
            <div class="book">
              <div class="bookCover" style="background: url(${item.bookCover}) center/100% no-repeat"></div>
              <div class="bookInformation">
                <div class="book-name">${item.bookName}</div>
                <div class="book-infos"><span>${item.serialized == 1 ? "未加载" : "完结"}</span>|<span>${item.author}</span>|<span>${item.categoryName}</span></div>
                <p class="book-container">${item.bookDescribe}</p>
              </div>
            </div>
      `;
      dom += _dom;
    });
    $(".lists").append(dom);
  },
  bind: function () {
    $(".c2-more")
      .off("click")
      .on("click", function () {
        window.location.href = "https://10002.sxxsw.net/index.html#/library";
      });

    $(".c1-btn")
      .off("click")
      .on("click", function () {
        window.location.href =
          "https://10002.sxxsw.net/novel-h5?appKey=ysmt_bcpwmb";
      });
  }

  //serialized 连载中 bookName 小说名字  author 作者    接口数据
};
saasStory.init();
