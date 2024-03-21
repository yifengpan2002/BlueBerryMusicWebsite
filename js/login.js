$(function () {
    var buttons = $(".login-register-select a")
    var box = $('.account-info-box')
    buttons.map(function (index, element) {
        (function () {
            $(element).on("click", function () {
                $(this).addClass("on").siblings().removeClass("on")
                $(box[index]).addClass("on").siblings().removeClass("on")
            })
        }())
    })
})

// create database
/*
1. create database blueberrypie
2.create table User( id int not null auto_increment, username text, password text, primary key(id) );
3.insert into user VALUES(null, 'yifeng', 'christine');
*/