console.log("extension is running!")


//for some reason none of my attempts at giving my cursor a custom look worked, I scavanged far
//and wide across coding forums in search for a way to have cursors show up on websites and but
//every code I tried recieved errors I couldn't fix. I do still want to try though

var	imgURL	=	chrome.runtime.getURL("images/sunmouse32.png");
$("html").on("<img	src="	+	imgURL	+	"	class='banner'>")
var	imgURL	=	chrome.runtime.getURL("images/moonmouse32.png");
$("html").on("<img	src="	+	imgURL	+	"	class='banner'>")

