

$(function () {
    // async function getData() {
    //     await $.ajax(
    //         {
    //             type: "get",
    //             url: "http://localhost/BlueBerry/blueberry_server/listen.php",
    //             success: function (data) {
    //                 var data = JSON.parse(data)
    //                 for (var i = 0; i < data.data.length; i++) {
    //                     $(".listen-container").append("<div class='card'>\
    //         <div class='card-top' > \
    //         <img class='card-icon' src = '"+ data.data[i].icon + "' alt = '' >\
    //             <span class='card-name'>\
    //                 <p>"+ data.data[i].title + "</p>\
    //                 <em>"+ data.data[i].name + "</em>\
    //             </span>\
    //             <i class='listen-tag'>"+ data.data[i].tag + "</i>\
    //         </div >\
    //         <img src='"+ data.data[i].img + "' alt=''>\
    //             <div class='card-foot'>\
    //                 <p>"+ data.data[i].desc + "</p>\
    //                 <span class='cardfoot-icon'>\
    //                     <b class='card-icon-1'></b><i>"+ data.data[i].zan + "</i>\
    //                     <b class='card-icon-2'></b><i>"+ data.data[i].wechat + "</i>\
    //                 </span>\
    //             </div>\
    //         </div>\
    //     ")
    //                 }
    //             }
    //         }
    //     )
    //     await waterflow()
    // }

    // getData()

    function waterflow() {
        var allChild = $(".card")
        var rowNo = 4
        var colHeight = []
        allChild.map(function (index, element) {
            // push 0,1,2,3 ele into the height
            if (index < rowNo) {
                colHeight.push(
                    Math.round($(element).height())
                )


            } else {
                //putting the new img into lowest height row
                var minHeihgtCol = Math.min.apply(null, colHeight)
                var minIndex = colHeight.indexOf(minHeihgtCol)
                allChild[index].style.position = "absolute"
                allChild[index].style.top = minHeihgtCol + 10 + "px"
                allChild[index].style.left = allChild.eq(minIndex).position().left + "px"
                colHeight[minIndex] = colHeight[minIndex] + allChild[index].offsetHeight + 10
                $(".listen-container").height(Math.max.apply(null, colHeight));
            }
        })
    }

    $(".foot-btn2").click(function () {
        $(".listen-container").append("<div class='card'>\
            <div class='card-top' > \
            <img class='card-icon' src = '../images/listenSpeak/touxiang.png' alt = '' >\
                <span class='card-name'>\
                    <p>Why dont we start from the beginning again</p>\
                    <em>yifeng</em>\
                </span>\
                <i class='listen-tag'>school</i>\
            </div >\
            <img src='../images/listenSpeak/zhanshi.jpg' alt=''>\
                <div class='card-foot'>\
                    <p>The happiest time in childhood</p>\
                    <span class='cardfoot-icon'>\
                        <b class='card-icon-1'></b><i>22</i>\
                        <b class='card-icon-2'></b><i>33</i>\
                    </span>\
                </div>\
            </div>\
        ")
        waterflow()
    })
    $(".foot-btn1").click(function () {
        $(".listen-container").append("<div class='card'>\
            <div class='card-top' > \
            <img class='card-icon' src = '../images/listenSpeak/touxiang.png' alt = '' >\
                <span class='card-name'>\
                    <p>Why dont we start from the beginning again</p>\
                    <em>yifeng</em>\
                </span>\
                <i class='listen-tag'>school</i>\
            </div >\
            <img src='../images/listenSpeak/zhanshi2.jpg' alt=''>\
                <div class='card-foot'>\
                    <p>The happiest time in childhood</p>\
                    <span class='cardfoot-icon'>\
                        <b class='card-icon-1'></b><i>22</i>\
                        <b class='card-icon-2'></b><i>33</i>\
                    </span>\
                </div>\
            </div>\
        ")
        waterflow()
    })

})
