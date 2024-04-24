const nav=document.querySelector("nav");
const mobilenav=document.querySelector("nav.mobile-nav");
const menuIcon=document.querySelector(".menu-icon");
const closeIcon=document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer=document.querySelector(".mobile-menu-container");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>60){
        nav.classList.add("scrolled");
        mobilenav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
        mobilenav.classList.remove("scrolled")
    }
})

menuIcon.addEventListener("click",()=>{
    mobileMenuContainer.classList.add("active");
})
closeIcon.addEventListener("click",()=>{
    mobileMenuContainer.classList.remove("active")
})