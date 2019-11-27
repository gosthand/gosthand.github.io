if (typeof(swfobject) != "object") {
	LoadingScript(load.swf + "swfobject.js", "javascript", "gb2312");
};

function MyPlayer() {
	var $ = function(x) {
			return document.getElementById(x)
		};
	var get = function(a) {
			var b = document.getElementById('zdy_wz0').getElementsByTagName("div");
			var c = null;
			for (var i = 0; i < b.length; i++) {
				if (b[i].className == "z_bt") {
					if (new RegExp(a, "i").test(b[i].innerHTML.replace(/<[^>]+>/g, ""))) {
						c = b[i + 1].id;
						break
					}
				}
			}
			return c
		};
	if (typeof(swfobject) == "object" && swfobject.expressInstallCallback.toString().length > 145) {
		swfobject.embedSWF("http://player.56.com/v_NzUzMjIzNDU.swf", get("style江南"), 300, 200, "9.0.0", null, {
			image: "a.jpg",
			file: ".flv",
			skin: "http://xiaoquan888.com/video/beelden.zip",
			backcolor: "0xffffff",
			frontcolor: "0x000000",
			lightcolor: "0x000000",
			stretching: "exactfit",
			autostart: "none",
			repeat: "always",
			volume: "80"
		}, {
			allowfullscreen: "true",
			allowscriptaccess: "always",
			wmode: "opaque"
		}, {
			style: "border:1px solid #666666;background-color:black;"
		}, function() {});
		swfobject.embedSWF("http://xiaoquan888.com/video/JwPlayer.swf", get("爱情买卖"), 300, 200, "9.0.0", null, {
			image: "http://xiaoquan888.com/video/b.jpg",
			file: "http://xiaoquan888.com/video/aiqingmaimai.flv",
			skin: "http://xiaoquan888.com/video/beelden.zip",
			backcolor: "0xffffff",
			frontcolor: "0x000000",
			lightcolor: "0x000000",
			stretching: "exactfit",
			autostart: "none",
			repeat: "always",
			volume: "80"
		}, {
			allowfullscreen: "true",
			allowscriptaccess: "always",
			wmode: "opaque"
		}, {
			style: "border:1px solid #666666;background-color:black;"
		}, function() {});
		swfobject.embedSWF("http://xiaoquan888.com/video/JwPlayer.swf", get("错错错"), 300, 200, "9.0.0", null, {
			image: "http://xiaoquan888.com/video/c.jpg",
			file: "http://xiaoquan888.com/video/cuo.flv",
			skin: "http://xiaoquan888.com/video/beelden.zip",
			backcolor: "0xffffff",
			frontcolor: "0x000000",
			lightcolor: "0x000000",
			stretching: "fill",
			autostart: "false",
			repeat: "always",
			volume: "10"
		}, {
			allowfullscreen: "true",
			allowscriptaccess: "always",
			wmode: "opaque"
		}, {
			style: "border:1px solid #666666;background-color:black;"
		}, function() {});
		swfobject.embedSWF("http://xiaoquan888.com/video/JwPlayer.swf", get("The-Boys"), 300, 200, "9.0.0", null, {
			image: "http://xiaoquan888.com/video/The Boys.jpg",
			file: "http://xiaoquan888.com/video/The-Boys.flv",
			skin: "http://xiaoquan888.com/video/beelden.zip",
			backcolor: "0xffffff",
			frontcolor: "0x000000",
			lightcolor: "0x000000",
			stretching: "fill",
			autostart: "false",
			repeat: "always",
			volume: "10"
		}, {
			allowfullscreen: "true",
			allowscriptaccess: "always",
			wmode: "opaque"
		}, {
			style: "border:1px solid #666666;background-color:black;"
		}, function() {});
		swfobject.embedSWF("http://xiaoquan888.com/video/JwPlayer.swf", get("江南style"), 300, 200, "9.0.0", null, {
			image: "http://xiaoquan888.com/video/style.jpg",
			file: "http://xiaoquan888.com/video/jn(style).flv",
			skin: "http://xiaoquan888.com/video/beelden.zip",
			backcolor: "0xffffff",
			frontcolor: "0x000000",
			lightcolor: "0x000000",
			stretching: "fill",
			autostart: "false",
			repeat: "always",
			volume: "10"
		}, {
			allowfullscreen: "true",
			allowscriptaccess: "always",
			wmode: "opaque"
		}, {
			style: "border:1px solid #666666;background-color:black;"
		}, function() {});
		swfobject.embedSWF("http://xiaoquan888.com/video/JwPlayer.swf", get("Saka"), 300, 200, "9.0.0", null, {
			image: "http://xiaoquan888.com/video/Saka.jpg",
			file: "http://xiaoquan888.com/video/Saka.flv",
			skin: "http://xiaoquan888.com/video/beelden.zip",
			backcolor: "0xffffff",
			frontcolor: "0x000000",
			lightcolor: "0x000000",
			stretching: "fill",
			autostart: "false",
			repeat: "always",
			volume: "10"
		}, {
			allowfullscreen: "true",
			allowscriptaccess: "always",
			wmode: "opaque"
		}, {
			style: "border:1px solid #666666;background-color:black;"
		}, function() {});
		swfobject.embedSWF("http://xiaoquan888.com/video/JwPlayer.swf", get("小苹果"), 300, 200, "9.0.0", null, {
			image: "http://xiaoquan888.com/video/xiaopingguo.jpg",
			file: "http://xiaoquan888.com/video/xiaopingguo.flv",
			skin: "http://xiaoquan888.com/video/beelden.zip",
			backcolor: "0xffffff",
			frontcolor: "0x000000",
			lightcolor: "0x000000",
			stretching: "fill",
			autostart: "false",
			repeat: "always",
			volume: "10"
		}, {
			allowfullscreen: "true",
			allowscriptaccess: "always",
			wmode: "opaque"
		}, {
			style: "border:1px solid #666666;background-color:black;"
		}, function() {});
		setTimeout(function() {
			IsZdyWidth(300)
		}, 1000)
	} else {
		setTimeout(function() {
			MyPlayer()
		}, 1000)
	}
};
MyPlayer();
FlvPlayer();
//LoadingScript(GetFileName("MyPlayer.js"),"javascript","gb2312");
