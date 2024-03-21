function waterFlowCompoenent(url, tag) {
    waterflow()
    pushData()

    function pushData() {
        $.ajax({
            type: "get",
            url: url,
            success: async function (data) {
                await adapter(JSON.parse(data))
                await waterflow()
            }
        })
    }


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

    function adapter(data) {
        if (tag === "listen") {
            for (var i = 0; i < data.data.length; i++) {
                $(".listen-container").append("<div class='card'>\
            <div class='card-top' > \
            <img class='card-icon' src = '"+ data.data[i].icon + "' alt = '' >\
                <span class='card-name'>\
                    <p>"+ data.data[i].title + "</p>\
                    <em>"+ data.data[i].name + "</em>\
                </span>\
                <i class='listen-tag'>"+ data.data[i].tag + "</i>\
            </div >\
            <img src='"+ data.data[i].img + "' alt=''>\
                <div class='card-foot'>\
                    <p>"+ data.data[i].desc + "</p>\
                    <span class='cardfoot-icon'>\
                        <b class='card-icon-1'></b><i>"+ data.data[i].zan + "</i>\
                        <b class='card-icon-2'></b><i>"+ data.data[i].wechat + "</i>\
                    </span>\
                </div>\
            </div>\
        ")
            }
        }
        if (tag === "talk") {
            for (var i = 0; i < data.data.length; i++) {
                $(".listen-container").append("<div class='card'>\
            <div class='card-top' > \
            <img class='card-icon' src = '"+ data.data[i].icon + "' alt = '' >\
                <span class='card-name'>\
                    <p>"+ data.data[i].title + "</p>\
                    <em>"+ data.data[i].name + "</em>\
                </span>\
                <i class='listen-tag'>"+ data.data[i].tag + "</i>\
            </div >\
             <p class='ts-content'>"+ data.data[i].content + "</p> \
                <div class='card-foot'>\
                    <p>"+ data.data[i].desc + "</p>\
                    <span class='cardfoot-icon'>\
                        <b class='card-icon-1'></b><i>"+ data.data[i].zan + "</i>\
                        <b class='card-icon-2'></b><i>"+ data.data[i].wechat + "</i>\
                    </span>\
                </div>\
            </div>\
        ")
            }
        }
    }
}
export { waterflow }