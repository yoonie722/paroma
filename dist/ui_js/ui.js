/**
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