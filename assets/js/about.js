window.onscroll = function (e) {  
    let a = (document.documentElement.scrollTop)*0.5-600 + "px";
    document.getElementById("parallax-img").style.marginTop = a;
}