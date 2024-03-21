$(function () {
    $(".talk-header .nav a").on("click", function () {
        $(this).addClass("on").siblings().removeClass("on")
    })
    waterflow()
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
})