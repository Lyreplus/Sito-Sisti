window.onscroll = function (e) {  
    let a = (document.documentElement.scrollTop)*0.5-500 + "px";
    document.getElementById("parallax-img").style.marginTop = a;

    if (document.documentElement.scrollTop > 5) {
      document.getElementById("nav").style.backgroundColor = "#232323";
      document.getElementById("nav").style.boxShadow = "0px 0px 35px #000000";
    }
    if (document.documentElement.scrollTop <= 5) {
      document.getElementById("nav").style.backgroundColor = "transparent";
      document.getElementById("nav").style.boxShadow = "0px 0px 35px transparent";
    }
  }

const appearInfo = () => {
  let i=0;
  while (typeof(document.querySelectorAll('.img-info')[i]) != "undefined") {
    const parentDiv = document.querySelectorAll('.img-info')[i];
    const infoDiv = document.querySelectorAll('.placeholder')[i];

    parentDiv.addEventListener('click', () => {
      infoDiv.classList.toggle('info');
    });
    i += 1;
  }
}



const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navbar');

  burger.addEventListener('click', () => {
    nav.classList.toggle('navbar-active');
    document.getElementById("nav").style.backgroundColor = "#232323";
  });
}


navSlide();
appearInfo();