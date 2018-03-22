//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    startDate: null
  },
  
  quertTicket: function(){
    console.log("tap sucess");
    wx.navigateTo({
      // url: '../date/date',
    })
  },

  chooseStartDate: function(){
    console.log("tap sucess");
    wx.navigateTo({
      url: '../date/date',
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    console.log("start display");
    console.log(app.globalData.startDate);

    if (app.globalData.startDate != null) {
      console.log(app.globalData.startDate.re);
      // this.data.startCity = app.globalData.startDate.re;

    }else{
      return;
    }

    this.setData({
      startDate : app.globalData.startDate.re
    })


  },



})
