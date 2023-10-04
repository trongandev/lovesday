const yourDate = new Date("2023-09-10T00:00:00")

document.addEventListener(
    "DOMContentLoaded",
    function () {
        var rootTime = document.querySelector("time")

        document.querySelector("anni").textContent = `${yourDate.getDate() > 9 ? yourDate.getDate() : "0" + yourDate.getDate()}-${
            yourDate.getMonth() > 8 ? yourDate.getMonth() + 1 : "0" + (yourDate.getMonth() + 1)
        }-${yourDate.getFullYear()}`

        document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " DAYS"

        function olock() {
            var today = new Date(),
                hrs = Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60) % 24,
                min = Math.floor(Math.floor((today - yourDate) / 1000) / 60) % 60,
                sec = Math.floor((today - yourDate) / 1000) % 60
            rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${min > 9 ? min : "0" + min}:${sec > 9 ? sec : "0" + sec}`
        }
        olock()
        var timer = setInterval(function () {
            olock()
        }, 1000)

        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<div id='mask'></div>")
    },
    false
)

$("#header-plugin").load("https://vivinantony.github.io/header-plugin/", function () {
    $("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt")
})

var love = setInterval(function () {
    var r_num = Math.floor(Math.random() * 40) + 1
    var r_size = Math.floor(Math.random() * 65) + 10
    var r_left = Math.floor(Math.random() * 100) + 1
    var r_bg = Math.floor(Math.random() * 25) + 100
    var r_time = Math.floor(Math.random() * 5) + 5

    $(".bg_heart").append(
        "<div class='heart' style='width:" +
            r_size +
            "px;height:" +
            r_size +
            "px;left:" +
            r_left +
            "%;background:rgba(255," +
            (r_bg - 25) +
            "," +
            r_bg +
            ",1);-webkit-animation:love " +
            r_time +
            "s ease;-moz-animation:love " +
            r_time +
            "s ease;-ms-animation:love " +
            r_time +
            "s ease;animation:love " +
            r_time +
            "s ease'></div>"
    )

    $(".bg_heart").append(
        "<div class='heart' style='width:" +
            (r_size - 10) +
            "px;height:" +
            (r_size - 10) +
            "px;left:" +
            (r_left + r_num) +
            "%;background:rgba(255," +
            (r_bg - 25) +
            "," +
            (r_bg + 25) +
            ",1);-webkit-animation:love " +
            (r_time + 5) +
            "s ease;-moz-animation:love " +
            (r_time + 5) +
            "s ease;-ms-animation:love " +
            (r_time + 5) +
            "s ease;animation:love " +
            (r_time + 5) +
            "s ease'></div>"
    )

    $(".heart").each(function () {
        var top = $(this)
            .css("top")
            .replace(/[^-\d\.]/g, "")
        var width = $(this)
            .css("width")
            .replace(/[^-\d\.]/g, "")
        if (top <= -100 || width >= 150) {
            $(this).detach()
        }
    })
}, 500)

window.ityped.init(document.querySelector(".ityped"), {
    strings: ["Yêu Lan Thanh 💕"],
    loop: true,
})
