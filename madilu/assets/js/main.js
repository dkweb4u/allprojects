var swiper = new Swiper(".mainslider", {
    speed: 1500,
    effect: "fade",
    autoplay: {
        delay: 3000,
     
    },
    loop: true
});
// =================================================
var swiper = new Swiper(".mypgs", {
    speed: 1500,
    autoplay: {
        delay: 3000,
     
    },
    loop: true
});

// ============================================================
let menu = document.querySelector("header .menu");
let nav = document.querySelector("header nav ");
menu.addEventListener("click",()=>{

    menu.classList.toggle("active");

    nav.classList.toggle("active");

});

// =======================================================================

let submenus = document.querySelectorAll("header nav li.sub-menu");

for(let i=0; i< submenus.length; i++){
    submenus[i].addEventListener("click", ()=>{
        submenus[i].classList.toggle("active");
    })
}

// =========================================================================

let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > header.offsetHeight){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
})