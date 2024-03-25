$(function () {
    function Music_On() {
        var audio = $(".control-util audio")[0]
        if (audio.paused) {
            audio.play();
            $("#music-img").attr("src", "../images/pause.png")
        } else {
            audio.pause();
            $("#music-img").attr("src", "../images/play-btn_03.png")
        }

        var total_time = audio.duration
        var total_time_s = parseInt(total_time % 60)
        var total_time_min = parseInt(total_time / 60)

        var music_timer = null
        $("#total-time").html(total_time_min + ":" + total_time_s)
        music_timer = setInterval(() => {
            if (audio.paused) {
                clearInterval(music_timer)
                console.log("music stop")
            }
            var current_time = audio.currentTime
            var current_s = parseInt(current_time % 60)
            var current_min = parseInt(current_time / 60)
            if (current_s < 10) {
                current_s = "0" + current_s
            }
            if (current_min < 10) {
                current_min = "0" + current_min
            }
            $("#pass-time").html(current_min + ":" + current_s)

            // setting the progress bar
            var progress = current_time / total_time
            if (total_time - current_time > 0) {
                $(".progress-bar-passed").width(progress * 100 + "%")
                console.log($(".progress-bar-passed").width)
            } else {
                $(".progress-bar-passed").width("0%")
                console.log($(".progress-bar-passed").width)
            }
        }, 1);
    }

    $("#music-play").on("click", function () {
        Music_On()
    })
    $(".blog-content").html(decodeURI($(".blog-content")[0].innerText))

    // $.ajax(
    //     {
    //         type: "get",
    //         url: "http://localhost/BlueBerry/BlueBerry_Server/music_blog_content.php",
    //         success: function (data) {
    //             data = JSON.parse(data)
    //             $(".article-title h3").text(data.artical.artical_title)
    //             $(".blog-content").html(decodeURI(data.artical.artical_cont))

    //         }
    //     }
    // )
})