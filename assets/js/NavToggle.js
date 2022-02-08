// **** Toggle links menu ****

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");

navToggle.addEventListener("click", function () {
    linksContainer.classList.toggle("show-links");
});

// **** Fixed Nav and Go-to-Top scroll **** 

const navbar = document.querySelector("nav");
// const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    // find how far the page has been scrolled
    const scrollHeight = window.pageYOffset;
    // find height of nav bar
    const navHeight = navbar.getBoundingClientRect().height;
    // if we have scrolled farther than the height of the nav bar then toggle the fixed-nav on
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        // otherwise toggle it off - works when we scroll back up
        navbar.classList.remove("fixed-nav");
    }
    // // if the page scrolls to a certain point, show the go-to-top link
    // if (scrollHeight > 500) {
    //     topLink.classList.add("show-link");
    // } else {
    //     topLink.classList.remove("show-link");
    // }
})

// **** Smooth scroll with fixed nav ****

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {

        // reset default to navigate to a specific spot
        if (link.textContent === "Play a game") {
            return;
        }
        e.preventDefault();
        // initialize variables using href of clicked target
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        // find heights of navbar and links container
        const navHeight = navbar.getBoundingClientRect().height;
        console.log(navHeight);
        const containerHeight = linksContainer.getBoundingClientRect().height;
        
        // check if fixed-nav is on, returns true/false
        const fixedNav = navbar.classList.contains("fixed-nav");
       
        // position is our specified spot's (distance from the top of it's parent) minus (height of nav bar)
        let position = element.offsetTop - navHeight;
       
        // position if there is no fixed-nav before scrolling
        // if (!fixedNav) {
        //     position -= navHeight;
        // }
        // check to see if menu is pulled down and adjust position accordingly
        if (navHeight > 88) {
            position += containerHeight;
        }
        // scroll to our specified position
        window.scrollTo({
            left: 0,
            top: position,
        });

        // if link menu is open this will close it
        linksContainer.classList.remove("show-links");
    })
})