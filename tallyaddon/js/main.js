var swiper1 = new Swiper(".main-slider", {
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay:{
    delay: 3000,
  },
  effect: "fade"

});
// ================================================
var swiper2 = new Swiper(".aboutswiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay:{
    delay: 3000,
  },
});
// =====================================================

let li = document.querySelectorAll("nav ul.links li");


let open = document.querySelector("nav .logo .open");

let close = document.querySelector("nav .logo .close");

let menulinks = document.querySelector("header nav ul.links");

if(window.innerWidth < 991.5){
for(let i=0; i< li.length; i++){
  li[i].addEventListener("click",()=>{
    li[i].classList.toggle("active");
  });
}  
open.classList.add("active");
menulinks.classList.add("hidden");
}

open.addEventListener("click",()=>{
close.classList.add("active");
open.classList.remove("active");
menulinks.classList.remove("hidden");
});
close.addEventListener("click",()=>{
open.classList.add("active");
menulinks.classList.add("hidden");
close.classList.remove("active");
})
// ===============================================================================

let animation = document.querySelectorAll(".animete");

let header = document.querySelector("header");

let main = document.querySelector("main");


window.addEventListener("scroll",()=>{

for(let i=0; i < animation.length; i++){
  if((((animation[i].offsetTop + 100) - window.innerHeight / 2 ) < window.pageYOffset )  || (main.offsetHeight - 60 - window.innerHeight) < window.pageYOffset ){
    animation[i].classList.add("start");

    if(animation[i].querySelectorAll(".delay")){
      delay = animation[i].querySelectorAll(".delay");
      for(let j=0; j<delay.length; j++){
        delay[j].style.setProperty("--sec",(0.2 + (0.2 * j))+"s");
      }
    }

  }
  else{
    animation[i].classList.remove("start");
  }
};
// ==========================================================================


if((header.offsetTop + header.offsetHeight) < window.pageYOffset ){

  header.classList.add("sticky");
}
else{
  header.classList.remove("sticky");

}


});

// ===========================================================================================================
let onpagelinks = document.querySelectorAll(".onpage");


for(let i=0; i< onpagelinks.length; i++){
  onpagelinks[i].addEventListener("click",(e)=>{

    e.preventDefault();

    seclink = e.target.href.split("#");  

     let sectop = document.getElementById(seclink[1]);

     window.scrollBy(0, (sectop.offsetTop - header.offsetHeight ) - window.pageYOffset );

  });
}

// ===========================================================================================

let allfaq = document.querySelectorAll(".faq-container .faq-box");

for(let i=0; i< allfaq.length; i++){
  allfaq[i].addEventListener("click",()=>{
    removefaq();
    allfaq[i].classList.add("active");
  });
}

function removefaq(){
  allfaq.forEach(item => {
    item.classList.remove("active");
 });
}

// ==================================================================================================


let formbutton = document.querySelector("form button");
let waitingtext = document.querySelector("form .waiting");

formbutton.addEventListener("click",()=>{
  formbutton.style.transform = "scale(0)";
  waitingtext.textContent = "Please wait...";
});