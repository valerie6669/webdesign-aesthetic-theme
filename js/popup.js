console.log("hello form popup")

// $('#button1').on("click", function() {

// 	chrom.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		chrome.tabs.sendMessage(tabs[0].id, {message:"hello"}
// 	})
// })


var $one = $("#button1");
// var $two = $("#button2");

$one.on("click", function() {
	$(this).show();
	$("html").css("background", "#395F7F");
})

// $two.on("click", function() {
// 	$(this).show();
	// $("html").css("background", "#F29E4C, #F1C453");
	// $("html").css("cursor: url(../images/sunmouse32.png), auto");
// })
