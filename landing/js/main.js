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

// ========================================================================================
// Time Count 
let cday = document.querySelector(".home .contentbox  .days  span.day");
let chour= document.querySelector(".home .contentbox   .hour span");
let cminute = document.querySelector(".home .contentbox   .minite span");
let csecond = document.querySelector(".home .contentbox   .sec span");

// Set the date we're counting down to
var countDownDate = new Date("Jun 30, 2024 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  console.log(days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ");

    cday.textContent = days;
    chour.textContent = hours;
    cminute.textContent = minutes;
    csecond.textContent = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);