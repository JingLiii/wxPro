//index.js
//获取应用实例
var app = getApp()
Page({
    goAbout: function() {
        wx.navigateTo({
            url: "/pages/about/about"
        })
    }
})