$(function () {
    var mySwiper = new Swiper('.swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        pagination: {
            el: '.swiper-pagination',
        },
    })

    $.ajax({
        type: "get",
        url: "http://localhost/blueberry/BlueBerry_Server/",
        success: function (data) {
            data = JSON.parse(data)
            $(".swiper .s1 h3").html(data["banner"][0].title)
            $(".swiper .s2 h3").html(data["banner"][1].title)
            $(".swiper .s3 h3").html(data["banner"][2].title)
            $(".swiper .s1 p").html(data["banner"][0].content)
            $(".swiper .s2 p").html(data["banner"][1].content)
            $(".swiper .s3 p").html(data["banner"][2].content)
            // The text can be change if the server change its json data
        },
        error: function (err) {
            console.log(err)
        }
    })
})