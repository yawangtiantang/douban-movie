// pages/post/post.js
var postsData=require("../../data/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postkey:[]
  },
  onPostTap:function(event){
    // console.log(event)
    var postId=event.currentTarget.dataset.postid;
    // console.log(postId)
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
      
    })
  },
  onSwiperTap: function (event) {
    // console.log(event)
    var swiperid = event.target.dataset.swiperid;
    
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + swiperid

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var postData = [
    //   {
    //     date: "Sep 18 2016",
    //     title: "正是虾肥蟹壮时",
    //     imgSrc: "/images/post/crab.png",
    //     avatar: "/images/avatar/1.png",
    //     content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
    //     reading: "112",
    //     collection: "96",
       
    //   },
    //   {
    //     title: "比利·林恩的中场故事",
    //     content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
    //     imgSrc: "/images/post/bl.png",
    //     reading: 62,
    //     collection: 92,
    //     date: "Nov 20 2016",
    //     avatar: "/images/avatar/1.png",
       
    //   },
    //   {
    //     //按住alt + shift + F 可以格式化代码样式
    //     title: "当我们在谈论经济学时，我们在谈论什么?",
    //     content: "引言在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：...",
       
    //     imgSrc: "/images/post/sls.jpg",
       
    //     reading: 62,
    //     collection: 92,
        
    //     date: "Nov 12 2016",
      
    //     avatar: "/images/avatar/3.png",
        
    //   },
    //   {
    //     title: "微信·小程序开发工具安装指南",
    //     content: "这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序",
    //     imgSrc: "/images/post/xiaolong.jpg",
    //     reading: 102,
        
    //     collection: 92,
        
    //     date: "Nov 20 2016",
    //     avatar: "/images/avatar/5.png",
        
    //   },
    //   {
    //     title: "从视觉到触觉 这款VR手套能给你真实触感",
    //     content: "8月29日消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品",
    //     imgSrc: "/images/post/vr.png",
    //     reading: 102,
       
    //     collection: 26,
        
    //     date: "Nov 20 2016",
    //     avatar: "../../../images/avatar/3.png",
       
    //   },
    //   {
    //     title: "爱奇艺创维开展战略合作，合力布局开放娱乐生态",
    //     content: "爱奇艺和创维分别作为国内领先的在线视频品牌",
    //     imgSrc: "/images/iqiyi.png",
    //     reading: 96,
       
    //     collection: 26,
        
    //     date: "Nov 20 2016",
    //     avatar: "../../../images/avatar/5.png",
        
    //   },
    // ]
    this.setData({postkey:postsData.postList})

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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