const postsData = require('../../../data/data.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    isPlaying:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    var globalData=app.globalData
   
    var postId = option.id;
    this.data.currentPostId = postId
    console.log(postsData)
    var postData = postsData.postList[postId];
    this.setData({
      postData: postData
    })
    // 获取缓存中所有详情页的收藏状态
    var postsCollection = wx.getStorageSync('posts_collection')

    if (postCollection) {
      // 获取当前详情页的收藏状态
      var postCollection = postsCollection[postId]
      // 更新数据
      this.setData({
        collected: postCollection
      })
    } else {
      postsCollection = {}
      postsCollection[postId] = false
      wx.setStorageSync('posts_collection', postsCollection)
    }
    if (app.globalData.g_isPlaying && app.globalData.g_currentPostMusicId==postId){
      this.staData({isPlaying:true})
    }
    // 监听全局音乐播放器的状态来设置图片上音乐播放器的状态
    // wx.onBackgroundAudioPlay(CALLBACK)
    
    wx.onBackgroundAudioPlay(() =>{
      this.setData({isPlaying:true})
      app.globalData.g_isPlaying=true
      app.globalData.g_currentPostMusicId=this.data.currentPostId
    })
    wx.onBackgroundAudioPause(() =>{
      this.setData({ isPlaying: false })
      app.globalData.g_isPlaying=false
      app.globalData.g_currentPostMusicId=null
    })

    wx.onBackgroundAudioStop(() => {
      this.setData({ isPlaying: false })
      app.globalData.g_isPlaying = false
      app.globalData.g_currentPostMusicId = null
    })

  },
  onCollectionTap: function(event) {
    var postsCollection = wx.getStorageSync('posts_collection')
    var postCollection = postsCollection[this.data.currentPostId]
    // 当前状态取反
    postCollection = !postCollection
    postsCollection[this.data.currentPostId] = postCollection
    this.showModal(postsCollection, postCollection);

  },
  // 消息提示
  // showToast: function (postsCollection, postCollection){

  //   wx.setStorageSync('posts_collection', postsCollection)
  //   this.setData({ collected: postCollection })
  //   wx.showToast({
  //     title: postCollection ? '收藏成功':'取消收藏',
  //     icon: 'loading',
  //     duration: 2000
  //   })
  // },
  showModal: function(postsCollection, postCollection) {
    var that = this
    wx.showModal({
      title: '收藏',
      content: postCollection ? '收藏成功' : '取消收藏',
      cancelText: '不收藏',
      cancelColor: '#333',
      confirmText: '确认收藏',
      confirmColor: '#40508f',
      success(res) {
        if (res.confirm) {
          wx.setStorageSync('posts_collection', postsCollection)
          that.setData({
            collected: postCollection
          })
        } else {
          postCollection = false
          that.setData({
            collected: postCollection
          })
        }
      }
    })
  },

  onShareTap: function(event) {
    var itemList = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博"
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "#405f80",
      success: function(res) {
        // res.cancel 用户是不是点击了取消按钮
        // res.tapIndex 数组元素的序号，从0开始
        wx.showModal({
          title: "用户 " + itemList[res.tapIndex],
          content: "用户是否取消？" + res.cancel + "现在无法实现分享功能，什么时候能支持呢"
        })
      }
    })
  },
  onMusicTap: function(event) {
    var poscurrentPostId = this.data.currentPostId
    var isPlaying=this.data.isPlaying
    if (isPlaying){
      wx.pauseBackgroundAudio()
      this.setData({isPlaying:false})
    }else{
      wx.playBackgroundAudio({
        dataUrl: "postsData.postList[poscurrentPostId].music.url",
        title: 'postsData.postList[poscurrentPostId].music.title',
        coverImgUrl: 'postsData.postList[poscurrentPostId].music.coverImgUrl',
        
      })
      this.setData({ isPlaying: false })
    }
    
  }




})