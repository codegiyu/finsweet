let btn = $('#back-to-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});


let slideIndex = 1;
let myTimer;
let viewportWidth = document.documentElement.clientWidth;


if (viewportWidth <= 950) {
    window.addEventListener("load", function() {
        showSlides(slideIndex);
        myTimer = setInterval(function(){plusSlides(1)}, 5000);
    })

    function plusSlides(n) {
        clearInterval(myTimer);

        if(n < 0){
            showSlides(slideIndex += -1);
        } else {
            showSlides(slideIndex += 1);
        }

        if(n === -1){
            myTimer = setInterval(function() {plusSlides(n+2)}, 5000);
        } else {
            myTimer = setInterval(function() {plusSlides(n+1)}, 5000);
        }
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("feedback-slide");
        let lines = document.getElementsByClassName("feedback-slide-marker-line");

        if(n > slides.length) {
            slideIndex = 1;
        }

        if(n < 1) {
            slideIndex = slides.length;
        }

        for(i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for(i = 0; i < lines.length; i++) {
            lines[i].className = lines[i].className.replace(" active-slide-marker", " ");
        }

        slides[slideIndex - 1].style.display = "block";
        lines[slideIndex - 1].className += " active-slide-marker";
    }

    function currentSlide(n) {
        clearInterval(myTimer);
        myTimer = setInterval(function() {plusSlides(n + 1)}, 5000);
        showSlides(slideIndex = n);
    }
}

if (viewportWidth > 950) {
    let slides = document.getElementsByClassName("feedback-slide");
    let lines = document.getElementsByClassName("feedback-slide-marker-line");
    let slideArray = [];

    window.addEventListener("load", function() {
        showSlides(slideIndex);
        myTimer = setInterval(function(){plusSlides(1)}, 5000);
    })

    function plusSlides(n) {
        clearInterval(myTimer);

        if(n < 0){
            showSlides(slideIndex += -1);
        } else {
            showSlides(slideIndex += 1);
        }

        if(n === -1){
            myTimer = setInterval(function() {plusSlides(n+2)}, 5000);
        } else {
            myTimer = setInterval(function() {plusSlides(n+1)}, 5000);
        }
    }
    
    function showSlides(n) {
        let i;

        if (n == 1) {
            slideArray = [slides[0], slides[1]];
        } else if (n == 2) {
            slideArray = [slides[1], slides[2]];
        } else if (n == 3) {
            slideArray = [slides[2], slides[3]];
        } else if (n == 4) {
            slideArray = [slides[3], slides[0]];
        } else if (n > 4) {
            slideIndex = 1;
        } else if (n > 1) {
            slideIndex = 4;
        }

        for(i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for(i = 0; i < lines.length; i++) {
            lines[i].className = lines[i].className.replace(" active-slide-marker", " ");
        }

        for(i = 0; i < slideArray.length; i++) {
            slideArray[i].style.display = "block";
        }
        
        lines[slideIndex - 1].className += " active-slide-marker";
    }

    function currentSlide(n) {
        clearInterval(myTimer);
        myTimer = setInterval(function() {plusSlides(n + 1)}, 5000);
        showSlides(slideIndex = n);
    }
}


let menuTrigger = document.getElementsByClassName("menu-btn")[0];
let menu = document.getElementsByClassName("menu-modal")[0];
let bars = document.getElementsByClassName("bars");

function removeActive() {
    menu.classList.remove("active");
    menuTrigger.classList.remove("change-color");
    for (x = 0; x < bars.length; x++) {
        bars[x].classList.remove("rotate");
        bars[x].style.background = "black";
    }

    menuTrigger.style.background = "white";
    menuTrigger.style.border = "1px solid black";
}

function addActive() {
    menu.classList.add("active");
    menuTrigger.classList.add("change-color");
    for (x = 0; x < bars.length; x++) {
        bars[x].classList.add("rotate");
        bars[x].style.background = "white";
    }

    menuTrigger.style.background = "rgb( var(--clr-orange) )";
    menuTrigger.style.border = "none";
}

menuTrigger.addEventListener( "click" , function(el){
    if(menu.classList.contains("active")){
        removeActive();
    }else{
        addActive();
    }
});


let menuButtons = document.getElementsByClassName("modal-close");

for (y = 0; y < menuButtons.length; y++) {
    menuButtons[y].addEventListener( "click" , function(ra){
        removeActive();
});
}