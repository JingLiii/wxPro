//自动聊天界面

var app = getApp();

Page({
    //设置舒适化数据
    data: {
        //获取用户昵称
        myName: "",
        //用来存储信息.
        //每一个数组表示一此会话过程
        message: [],
        inputValue: "",
        placeholder: "请在这里输入咨询信息",
    },


    //根据用户输入的更新输入框中保存的数据
    bindKeyInput: function(event) {
        this.setData({
            inputValue: event.detail.value
        })
    },

    //注册点击发送事件
    submitForm: function(event) {
        var that = this;
        //判断用户是否输入数据
        if (this.data.inputValue) {
            //创建临时数组
            var tempArr = [];
            //将用户输入的数据放到临时数组
            tempArr.push(this.data.inputValue);
            //发送http请求
            wx.request({
                url: "http://www.tuling123.com/openapi/api",
                method: "get",
                data: {
                    //获取用户输入的数据
                    info: that.data.inputValue,
                    key: '5933dd27ecd84599a8045202d22bc1da'
                },
                success: function(data) {
                    //将接受到的数组放到临时数组
                    tempArr.push(data.data.text);
                    that.data.message.push(tempArr);
                    //设置数据,重新渲染
                    that.setData({
                        message: that.data.message,
                        //清空输入框
                        inputValue: "",
                    });
                }
            });
        } else {
            //提示请输入信息
            wx.showToast({
                title: "提示请输入信息"
            });
        }
    },

    //获取用户名称
    onLoad: function() {
        var that = this;
        app.getUserInfo(function(data) {
            that.setData({
                myName: data.nickName
            });
        })
    }

})