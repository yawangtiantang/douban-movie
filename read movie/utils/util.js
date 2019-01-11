const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function http(url,callBack) {
  wx.request({
    url: url,
    data: {},
    header: {
      "Content-Type": "application/"
    },
    method: 'GET',
    success: function (res) {
      callBack(res.data)
    },
    fail: function (reserror) {
      console.log('失败')
    }


  })
}

module.exports = {
  formatTime: formatTime,
  http:http
}
