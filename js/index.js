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

    $.ajax({
        type: "get",
        url: "http://localhost/BlueBerry/BlueBerry_Server/index_music.php",
        success: (data) => {
            data = JSON.parse(data)
            console.log(data)
            for (var i = 0; i < data["music"].length; i++) {
                var username = data["music"][i].username
                var img = data["music"][i].img
                var title = data["music"][i].title
                var des = data["music"][i].description
                var like = data["music"][i].like
                var comment = data["music"][i].comment
                $(".music-list").append(" \
                    <li class='music-item'> \
                        <div class='item-img'> \
                            <a href='#'> \
                                <img src='"+ img + "' alt=''> \
                            </a> \
                        </div> \
                        <div class='item-text'> \
                            <a href='#' class='text-title'>"+ title + "</a> \
                            <a href='#' class='text-author'>"+ username + "</a> \
                            <p class='text-content'>"+ des + "</p>\
                            <div class='comment'> \
                                <i class='like-number'>"+ like + "</i> \
                                <i class='like-icon'></i> \
                                <i class='comment-number'>"+ comment + "</i> \
                                <i class='comment-icon'></i> \
                            </div> \
                        </div> \
                    </li> \
                "
                )
            }
        }
    })

    $.ajax({
        type: "get",
        url: "http://localhost/blueberry/BlueBerry_Server/index_travel.php",
        success: (data) => {
            data = JSON.parse(data)
            console.log(data)
            for (var i = 0; i < data.travelnotes.length; i++) {
                var name = data["travelnotes"][i].note_author
                var title = data.travelnotes[i].note_title
                var content = data["travelnotes"][i].note_content
                var img = data["travelnotes"][i].note_img
                console.log(img, title)
                $(".travel-list").append(
                    `<li class="travel-item">
                        <a href="#">
                            <img src="${img}" alt="">
                                <p class="note-title">${title}</p>
                                <p class="note-author">${name}</p>
                                <div class="note-desc">
                                    <p class="note-desc-content">${content}</p>
                                </div>
                        </a>
                    </li>`
                )
            }
        }
    })
})