  record(params = {}) {
    const source = utils.isIOS() ? 4 : 5;
    const reqParams = Object.assign
      ? Object.assign({}, {version: this.version, source, page: 9, pageId: 20, token: this.token , deviceId: this.deviceId}, params)
      : $.extend({}, {version: this.version, source, page: 9, pageId: 20, token: this.token , deviceId: this.deviceId}, params);
    $.ajax({
      url: `${domain}/userLog/action`,
      type: 'post',
      dataType: 'json',
      data: reqParams
    });
  }

  author:liyong