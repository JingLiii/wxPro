//about 业务逻辑
Page({
    //数据
    data: {
        title: "北京弘钰博物古文物鉴定中心",
        content: ["北京石渠雅集文物鉴定中心是经国家有关部门核准注册，成立于2004年3月，是全国真正具备文物鉴定的机构之一，具有法人地位的文物鉴定单位，是国家正规的文物鉴定中心，第三方的文物鉴定机构，具有严格的鉴定与审核程序。"],
        images: ["../../images/product.jpg"]
    },
    //分享
    onShareAppMessage: function() {
        return {
            title: "古物鉴定中心",
            path: "/pages/about/about"
        }
    }
})