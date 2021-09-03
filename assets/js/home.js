window.onscroll = function(e) {

    if (document.documentElement.scrollTop > 5) {
        document.getElementById("nav").style.background = "#232323";
        document.getElementById("nav").style.boxShadow = "0px 0px 35px #000000";
    }
    if (document.documentElement.scrollTop <= 5) {
        document.getElementById("nav").style.background = "linear-gradient(90deg, rgba(23,23,23,0) 40%, rgba(23,23,23,0.9) 100%)";
        document.getElementById("nav").style.boxShadow = "0px 0px 35px transparent";
    }
}

const appearInfo = () => {
    let i = 0;
    while (typeof(document.querySelectorAll('.img-info')[i]) != "undefined") {
        const parentDiv = document.querySelectorAll('.img-info')[i];
        const infoDiv = document.querySelectorAll('.placeholder')[i];

        parentDiv.addEventListener('click', () => {
            infoDiv.classList.toggle('info');
        });
        i += 1;
    }
}

appearInfo();