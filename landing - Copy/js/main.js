var swiper = new Swiper(".mySwiper", {
    autoplay:{
        delay: 2000,      
    },
    loop:true,
    speed: 2000,
});

let faqs = document.querySelectorAll(".faq .faqbox");

for(let i=0; i< faqs.length; i++ ){
    faqs[i].addEventListener("click",()=>{
        removefaq();
        faqs[i].classList.add("active");
    });
}
function removefaq(){
    for(let i=0; i< faqs.length; i++ ){
        faqs[i].classList.remove("active");
    }
}