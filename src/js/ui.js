/*
 * Created by GRE511 on 2019-04-16.
 */
// 하위 브라우저 호환
document.createElement("article");
document.createElement("section");
document.createElement("aside");
document.createElement("nav");
document.createElement("header");
document.createElement("footer");
document.createElement("main");

// IE 하위 브라우저에 .ie_old 클래스 추가 => 프로젝트에 따라 변경될 수 있습니다.
getInternetExplorerVersion();
function getInternetExplorerVersion() {
  var rv = -1; // Return value assumes failure.
  if (navigator.appName != "Microsoft Internet Explorer"){
    return;
  }
  else {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat(RegExp.$1);
  }
  if(rv < 8){ // IE브라우저 8버전 이하 시 ie_old 추가
    rv = 8;
    $("html").addClass("ie_old");
  }
  $("html").addClass("ie"+rv);
}
// 자주하는 질문 BEST 높이 맞춤 스크립트 추가
function setBestHeight() {
	if ($(window).width() < 1281) {
		$('.bx_list .unit strong').css('height', 'auto');
	} else {
		var hlist = [];
		$('.bx_list .unit strong').each(function() {
			hlist.push($(this).css('height').slice(0,-2));
		});
		$('.bx_list .unit strong').css('height', hlist.sort(function(a, b) {return b-a})[0] + 'px');
	}
}

// pop_up
$(function(){
  $(".close").click(function(e){
		e.preventDefault();
		if($("input[name=todayClose]").is(":checked")){ // 체크박스가 선택되어 있다면,
			setCookie("close", "yes", 1); // close cookie를 yes 값으로 저장합니다.
			// cookie 이름 : close
			// cookie 값 : yes
		}
		$(".popup").removeClass("active");
	});

	if(GetCookie("close") == "yes"){ // 화면 로딩 시에 close cookie 값이 yes이면,
		// $(".popup").hide(); // 팝업을 닫습니다.
	}else{
		// $(".popup").show(); // 아니라면 팝업을 열어줍니다.
		$(".popup").addClass("active");
	}

	function setCookie(name, value, expiredays){
		var days=expiredays;
		if(days){
			var date=new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires="; expires="+date.toGMTString();
		}else{
			var expires="";
		}
		document.cookie=name+"="+value+expires+"; path=/";
	}
	function GetCookie(name){
		var value=null, search=name+"=";
		if(document.cookie.length > 0){
			var offset=document.cookie.indexOf(search);
			if(offset != -1){
				offset+=search.length;
				var end=document.cookie.indexOf(";", offset);
				if(end == -1) end=document.cookie.length;
				value=unescape(document.cookie.substring(offset, end));
			}
		} return value;
	}

	
	var $imgMoving=$(".img_moving");
	var $controll=$(".btn_dot");

	var n=0;
	var moving;

	$controll.find("li").eq(n).addClass("active");

	$controll.find("a").click(function(e){
		e.preventDefault();
		$controll.find("li").removeClass("active");
		$(this).parent().addClass("active");

		n=$(this).parent().index();
		moving=n*-1*100+"%";
		$imgMoving.animate({left:moving}, 400);
	});

	setInterval(function(){
		if(n < 3){
			n=n+1;
		}
		else{
			n=0;
		}

		$controll.find("li").removeClass("active");
		$controll.find("li").eq(n).addClass("active");

		moving=-1*n*100+"%";

		$imgMoving.animate({"left":moving}, 400, function(){
			if(n == 3){
				n=0;
				moving=0;
				$imgMoving.animate({"left" : 0}, 0);
				$controll.find("li").eq(n).addClass("active");
			}
		});
	}, 4000);

	//dep1에 포커스를 두면 menu가 내려온다. 
	$(".dep1").focusin(function(){
		$(this).parents(".menu").stop().addClass("over");
	});
	//dep1에 포커스를 두면 menu가 내려온게 사라진다. 
	$(".dep1").focusout(function(){
		$(this).parents(".menu").stop().removeClass("over");
	});
	//li 첫번째 a / 탭 키에 대해 접근성 높이기
	$(".dep1:first-child > a").focusin(function(){
		$(".menu").addClass("over");
	});
	//li 마지막에 li 마지막 / 탭 키에 대해 접근성 높이기
	$(".dep1:last-child li:last-child").focusout(function(){
		$(".menu").removeClass("over");
	});
	// 밑에 언더바 포커스 되었을때 같이 움직이기
	$(".dep1 > a").focusin(function(){ 
		$(this).addClass("over");
	});
	// 밑에 언더바 사라지기
	$(".dep2 li:last-child").focusout(function(){ 
		$(this).parent().prev().removeClass("over");
	});

	$(".main_notice .title a").eq(0).addClass("active");
	$(".main_notice .tab_group > div").eq(0).addClass("active");

	var n=0;

	$(".main_notice .titleb a").click(function(e){
		e.preventDefault();
		n=$(this).index();
		$(".main_notice .title a").removeclass("active");
		$(this).addClass("active");
		$(".main_notice .tab_group > div").removeClass("active");
		$(".main_notice .tab_group > div").eq(n).addClass("active");
	});

	//셀렉트 박스 제어 //select 커스텀 - type1
	$('.bx_slct .nm').click(function () {
		if ($(this).parent().hasClass("over")) {
			$(this).parent().removeClass("over");
		} else {
			$(".bx_slct").removeClass("over");
			$(this).parent().addClass("over");
		}
	});

	$('.bx_slct li').click(function () {
		$('.bx_slct li').removeClass("on");
		$(".bx_slct").removeClass("over");
		$(this).addClass("on");
		$(this).parents(".bx_slct").find(".nm strong").text($(this).contents('.name').text());
	});

	//select 커스텀 - type2
	$('.bx_selc .nm').click(function () {
		if ($(this).parent().hasClass("over")) {
			$(this).parent().removeClass("over");
		} else {
			$(".bx_selc").removeClass("over");
			$(this).parent().addClass("over");
			// if(_device === 'mobile'){
			// 	_popMask.addClass('active');
			// }
		}
	});
	$('.bx_selc li').click(function () {
		var currentele = $(this).html();

		$('.bx_selc li').removeClass("on");
		$(".bx_selc").removeClass("over");
		$(this).addClass("on");
		// $(this).parents(".bx_selc").find(".nm span").text($(this).contents('.name').text());
		$(this).parents(".bx_selc").find(".nm span").html(currentele);
	});

});