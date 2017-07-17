//动态计算屏幕宽度
//!(function(doc, win) {
//  var docEle = doc.documentElement,
//      evt = "onorientationchange" in window ? "orientationchange" : "resize",
//      fn = function() {
//          var width = docEle.clientWidth;
//          width && (docEle.style.fontSize = 100 * (width / 640) + "px");
//      };
//   
//  win.addEventListener(evt, fn, false);
//  doc.addEventListener("DOMContentLoaded", fn, false);
// 
//}(document, window));
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);