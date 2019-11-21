$(".card-wrapper").on("click", ".card", function() {
    alert("Ios & Android 均可以监听")
})
$("body").on("click", ".card-wrapper .card", function() {
    alert("苹果手机无法监听到后面的两个类名 BUT Android可以")
})