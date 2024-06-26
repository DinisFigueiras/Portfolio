/*--------------Dropdown Jobs------------------------------------------------------*/
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter) =>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex =0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () =>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i) =>{
        setTimeout(() =>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity ="1";
    Array.from(nextWord.children).forEach((letter, i) =>{
        letter.className = "letter behind";
        setTimeout(() =>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

/*--------------Read More About------------------------------------------------------*/
var div =document.getElementById('more');
var btn = document.getElementById('btn-test');
var display = 1;

function hideShow() {
    var div =document.getElementById('more');
    if (display == 1) {
        div.style.display = 'block';
        btn.textContent = "Read Less";
        display = 0;
    } else {
        div.style.display = 'none';
        display = 1;
        btn.textContent = "Read More";
        btn
    }
}

/*--------------Open tab link About------------------------------------------------------*/
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


/*--------------Circle Skill------------------------------------------------------*/
const circles = document.querySelectorAll('.circle');
circles.forEach(elem =>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i=0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsmarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsmarked[i].classList.add('marked')
        
    }
})



// mix it up portfolio
var mixer = mixitup('.portfolio-gallery');


/*--------------Active menu------------------------------------------------------*/
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
    
}

activeMenu();
window.addEventListener("scroll", activeMenu);


/*--------------sticky menu------------------------------------------------------*/
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY > 50)
})

/*--------------navbar mobile------------------------------------------------------*/
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open");
}


window.onscroll = () =>{
    menuIcon.classList.remove("bx-x")
    navlist.classList.remove("open");
}

/*-------------- parallax ------------------------------------------------------*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=> observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=> observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=> observer.observe(el));