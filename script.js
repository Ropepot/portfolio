// navigation bar function
function myMenuFunction(){
    var menubtn = document.getElementById("myNavMenu");

    if(menubtn.className === "nav-menu"){
        menubtn.className += " responsive";
    } else {
        menubtn.className = "nav-menu";
    }
}

// add shadow onscroll
window.onscroll = function() {headersShadow()};

function headersShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px"
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px"
    }
}

// type animation
var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "Designer"],
    loop: true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})  

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// home
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', {delay: 100})
sr.reveal('.featured-text-info', {delay: 200})
sr.reveal('.featured-text-btn', {delay: 200})
sr.reveal('.social-icons', {delay: 200})
sr.reveal('.featured-image', {delay: 200})

// project box
sr.reveal('.project-box', {interval: 200})

// headings
sr.reveal('.top-header', {})

// about info
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})

// about skills and form box
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', {delay: 100})
srRight.reveal('.form-control', {delay: 100})

// change active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

