const auto = require("../../utils/auto");
const routes = require("../../utils/routes");

// pages/home/index.js
Page(auto.checkLogin({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    userinfo: wx.getStorageSync('userInfo') || null,
    images: './images/mpp1.png',
    avatar: './images/mpp2.png',
    list: routes.items()
  },
  tabChange(e) {
    const {detail = {}} = e || {}
    const {index} = detail || {}
  
    this.setData({index});
  },
  onLoad:function() {
    console.log(routes.items())
    this.setData({
      nbTitle: '首席MYG',
      nbLoading: false,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
      console.log(e)
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
}))