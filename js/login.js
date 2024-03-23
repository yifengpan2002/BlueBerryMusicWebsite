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

    $("#login_btn").click(function () {
        var username = $('#login-account').val()
        var password = $('#pwd-account').val()
        console.log(username, password)
        if (username && password) {
            $.ajax({
                type: 'post',
                url: 'http://localhost/blueberry/blueberry_server/login.php',
                data: {
                    username: username,
                    password: password
                },
                success: function (data) {
                    data = JSON.parse(data)
                    // 存储到本地
                    localStorage.setItem("username", data[0].username)
                    if (data) {
                        window.location.href = "../index.html"
                    }
                }
            })
        } else {
            alert("Your haven't enter username or password")
        }
    })

    $('#reg-btn').click(function () {
        var username = $('#reg-username').val()
        var password = $('#reg-password').val()
        var password2 = $('#reg-password2').val()
        if (username && password) {
            $.ajax({
                type: 'post',
                url: 'http://localhost/blueberry/blueberry_server/register.php',
                data: {
                    username: username,
                    password: password
                },
                success: function (data) {
                    alert("you have successfully register ", data)
                }
            })
        } else {
            if (password !== pasword2) {
                alert("passwords are not matching")
            } else {
                alert("Your haven't enter username or password")
            }
        }
    })
})

// create database
/*
1. create database blueberrypie
2.create table User( id int not null auto_increment, username text, password text, primary key(id) );
3.insert into user VALUES(null, 'yifeng', 'christine');
*/