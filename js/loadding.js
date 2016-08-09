//初始动画
function loadding(ele,callback) {
	var line = document.getElementsByClassName("loadding")[0]; //加载进度条
	var wrap = document.getElementById("wrap"); //初始页面
	var wrapImg = wrap.getElementsByClassName("wrapimg")[0]; //初始页面的文字
	var timer = null;
	var num = 10;

	document.body.onload = function() {
		timer = setInterval(function() {

			num++;
			line.style.width = num * 30 + 'px';
			if(parseInt(line.style.width) >= document.documentElement.clientWidth) {
				line.style.width = document.documentElement.clientWidth + 'px';
				ele.style.display = "block";
				wrapImg.style.display = "none";
				wrap.style.background = "#999"
				wrap.style.height = 0 + 'px';
				document.body.style.overflowY = "auto";
				document.body.style.overflowX = "hidden";
				clearInterval(timer);
				if(!callback){
					return;
				}
				callback();//回调函数
			}
		}, 30);
	}
}