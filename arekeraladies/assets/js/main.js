var swiper1 = new Swiper(".mainslider", {
    speed: 1500,
    effect: "fade",
    autoplay: {
        delay: 3000,
     
    },
    loop: true
});
// =================================================
var swiper2 = new Swiper(".mypgs", {
    speed: 1500,
    autoplay: {
        delay: 3000,
     
    },
    loop: true
});

// ==========================================================
var swiper3 = new Swiper(".testimonial", {
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
});

// =====================================================================

let faq = document.querySelectorAll(".faq .faq-item");

for(let i=0; i< faq.length; i++ ){
    faq[i].addEventListener("click",()=>{
        removefaq();
        faq[i].classList.add("active");
    });
}

function removefaq(){
    for(let i=0; i< faq.length; i++ ){
        faq[i].classList.remove("active");
    }
}

// =====================================================================================

let whatsappbtn = document.querySelector("a#whatsappbtn");
let wanumber = "7871751238";

window.addEventListener("load",()=>{
    whatsappbtn.href = `https://api.whatsapp.com/send?phone=91${wanumber}&text=Hi`
})