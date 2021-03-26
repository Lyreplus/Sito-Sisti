window.onscroll = function (e) {  
    if (document.documentElement.scrollTop > 5) {
      document.getElementById("nav").style.backgroundColor = "#232323";
      document.getElementById("nav").style.boxShadow = "0px 0px 25px #000000";
    }
    if (document.documentElement.scrollTop <= 5) {
      document.getElementById("nav").style.backgroundColor = "transparent";
      document.getElementById("nav").style.boxShadow = "0px 0px 25px transparent";
    }
  }