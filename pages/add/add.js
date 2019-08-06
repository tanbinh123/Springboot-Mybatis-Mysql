// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  formSubmit: function (e) {
    var page = this;
    var formData = e.detail.value;
    console.log(formData);
    wx.request({
      url: "http://localhost:8082/wx/superadmin/addmovie",
      data: JSON.stringify(formData),
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var result = res.data.success
        if (result != true) {
          toastText = "操作失败" + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: 'none',
            duration: 2000
          });
        }else{
          var toastText = "操作成功！";
          wx.showToast({
            title: toastText,
            icon: 'success',
            duration: 2000
          });
          setTimeout(
            page.jump,
            2000
          )
        }
      }
    })
  },
  jump: function(){
    wx.switchTab({
      url: '../index/index'
    })
  }
})