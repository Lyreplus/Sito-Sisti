let images = [0,0,0,0,0]
for(let i=0; i<document.getElementsByClassName("img").length; i++) {
    images[i] = document.getElementsByClassName("img")[i];
}

// set default values of imgs
function setImgClasses() {
    for(let i=0; i<images.length; i++) {
        if (images[i].classList.contains("img-alt-before")) {
            images[i].classList.remove("img-alt-before")
        }
        else if (images[i].classList.contains("img-alt-after")) {
            images[i].classList.remove("img-alt-after")
        }
        else {
            images[i].classList.add("img-alt")
        }
    }
    images[0].classList.remove("img-alt")
    images[1].classList.add("img-alt-after")
    images[images.length-1].classList.add("img-alt-before")

}

// function to move the array right
function goRight() {
    images[images.length-1].removeEventListener("click", goLeft)
    images[1].removeEventListener("click", goRight)

    let temp1;
    let temp2;

    temp1 = images[images.length-1]
    images[images.length-1] = images[0]

    for(let i=(images.length-2); i>=1; i--) {
        temp2 = images[i]
        images[i] = temp1;
        temp1 = temp2;
    }
    
    images[0] = temp1;

    setImgClasses();

    images[images.length-1].addEventListener("click", goLeft)
    images[1].addEventListener("click", goRight)
}

// function to move the array left
function goLeft() {
    images[images.length-1].removeEventListener("click", goLeft)
    images[1].removeEventListener("click", goRight)
    let temp1;
    let temp2;

    temp1 = images[0]
    images[0] = images[images.length-1]

    for(let i=1; i<(images.length-1); i++) {
        temp2 = images[i]
        images[i] = temp1;
        temp1 = temp2;
    }
    
    images[images.length-1] = temp1;

    setImgClasses();
    images[images.length-1].addEventListener("click", goLeft)
    images[1].addEventListener("click", goRight)
}


// bind the functions to the needed html elements
document.getElementById("rightArrow").addEventListener("click", goRight);
document.getElementById("leftArrow").addEventListener("click", goLeft);

//run first time setImgClasses
setImgClasses();
images[images.length-1].addEventListener("click", goLeft)
images[1].addEventListener("click", goRight)