// pages/delete/delete.js
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
  formSubmit: function(e){
    var id = e.detail.value.id;
    var page = this;
    //console.log(id);
    wx.request({
      url: 'http://localhost:8082/wx/superadmin/removemovie?id='+id,
      success: function(res){
        //console.log(res);
        if(res.data.success == true){
          wx.showToast({
            title: '删除成功',
            duration: 2000
          })
          setTimeout(
            page.jump,
            2000
          )
        }else{
          wx.showToast({
            title: '删除失败',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function(res){
        wx.showToast({
          title: '删除失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  jump: function () {
    wx.switchTab({
      url: '../index/index'
    })
  }
})