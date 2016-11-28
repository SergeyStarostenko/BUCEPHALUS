$(document).ready(function(){

	if (($(document).width()) >= 959) {
		paddingMenu();
	}
});

function paddingMenu(){
  	var screenWidth = $(document).width();
      	console.log("! screen Width = " + screenWidth);
	var navLiCount = $("#navWidth>li").length;
		console.log("! navLiCount = " + navLiCount);
	var paddingnavLiCount = navLiCount * 2;
		console.log("! paddingnavLiCount = " + paddingnavLiCount);
	var paddingMenuLi = screenWidth / paddingnavLiCount;
		console.log("! paddingMenuLi = " + paddingMenuLi);
	$(".navbar-nav>li").css({'padding': "0 " + paddingMenuLi + 'px'});
		console.log("! navWidth>l - OK");
	var NewwidthNav = $("#responsive-menu>ul").width();
	console.log(NewwidthNav);
};