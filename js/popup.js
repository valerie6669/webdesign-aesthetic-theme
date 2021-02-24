console.log("hello form popup")

//I struggled a lot with getting the buttons to toggle between themes with the demonstrations
//in class. In the popup jquery I wanted to change the colur of the poup but I couldnt figure out
//how to keep the initial gradient so for now its a gradient colour and then switches to a dark blue.

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
