const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");
const overlay = document.querySelector(".menu-overlay");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    navMenu.classList.toggle("active");

    overlay.classList.toggle("active");

    document.body.classList.toggle("no-scroll");

});
overlay.addEventListener("click", () => {

    menuToggle.classList.remove("active");

    navMenu.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("no-scroll");

});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const reveals = document.querySelectorAll(".reveal");

function revealSection() {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

const preloader=document.getElementById("preloader");
const logo = document.querySelector(".logo");

window.addEventListener("load",()=>{

    setTimeout(()=>{

        preloader.classList.add("hide");

        logo.classList.add("show");

    },1000);

});

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll("#nav-menu a");

links.forEach(link => {

    const href = link.getAttribute("href");

    if(href === currentPage){
        link.classList.add("active");
    }

});


/* ==========================
        MENU FILTER
========================== */

const filterBtns = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        // Active Button
        filterBtns.forEach((b) => {
            b.classList.remove("active");
        });

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        menuItems.forEach((item) => {

            if (filter === "all") {

                item.style.display = "block";

            } else if (item.classList.contains(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

/* ==========================
        TEAM MOBILE CARD
========================== */

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach((card) => {

    card.addEventListener("click", () => {


        if (window.innerWidth > 1024) return;


        const isActive = card.classList.contains("active");


        teamCards.forEach(c => c.classList.remove("active"));

        if (!isActive) {
            card.classList.add("active");
        }

    });

});

/* ==========================
        GALLERY MOBILE CARD
========================== */

const galleryCards = document.querySelectorAll(".gallery-item");


galleryCards.forEach(card => {

    card.addEventListener("click", (e) => {

        e.stopPropagation();

        if(window.innerWidth > 768) return;


        const isActive = card.classList.contains("actives");


        galleryCards.forEach(item => {
            item.classList.remove("actives");
        });


        if(!isActive){
            card.classList.add("actives");
        }

    });

});


document.addEventListener("click",()=>{

    galleryCards.forEach(card=>{
        card.classList.remove("actives");
    });

});