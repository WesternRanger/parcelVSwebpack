const elBody = document.querySelector('body');
var textStartX = 0;
var textStartY = 0;
elBody.addEventListener("touchstart", function (e) {
	textStartX = e.touches[0].pageX;
	textStartY = e.touches[0].pageY;
}, false);

elBody.addEventListener("touchmove", function(e) {
	var textMoveEndX = e.changedTouches[0].pageX;
    var textMoveEndY = e.changedTouches[0].pageY;
    var X = textMoveEndX - textStartX;
    var Y = textMoveEndY - textStartY;
	if ((Math.abs(Y) > Math.abs(X) && Y > 0) || (Math.abs(Y) > Math.abs(X) && Y < 0)) {
		e.stopPropagation();
		console.log('wocao')
		import(/* webpackChunkName: "codeSplit" */ './codeSplit.js').then(function (page) {
	  		// 渲染页面
	  		page.default();
		});
	}
}, false);
