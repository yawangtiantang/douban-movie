// pages/movies/more-movie/more-movie.js
var app = getApp()
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigateTitle:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var category = options.category
    this.data.navigateTitle=category
    // 判断点击的是哪一个加载更多,从而获得对应的url
    switch(category){
      case"正在热映":
        dataurl = app.globalData.doubanBase +
          "/v2/movie/in_theaters"
      break;
      case "即将上映":
        dataurl = app.globalData.doubanBase +
          "/v2/movie/coming_soon" 
      break;
      case"豆瓣Top250":
        dataurl = app.globalData.doubanBase +
          "/v2/movie/top250" 
      break;
    }
    util.http(dataurl,this.callBack);
  },
  // callBack处理接收回来的数据
callBack:function(res){

},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 动态设置当前页面的导航标题
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle,
      success:function(res){

      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})