let menuicon =  document.querySelector(".menuionbox .menuicon");
let navlink = document.querySelector("header nav .menulist");

menuicon.addEventListener("click",()=>{
    menuicon.classList.toggle("active");
    console.log(navlink.querySelector("ul").offsetHeight)
    if(menuicon.classList.contains("active")){
        navlink.style.maxHeight = "200px";
        
    }
    else{
        navlink.style.maxHeight = "0px";
    }
});
// =========================================================================================================================

let header = document.querySelector("header");
let main = document.querySelector("main");

window.addEventListener('load',()=>{
    main.style.paddingTop= header.offsetHeight+"px";
});

window.addEventListener("scroll",()=>{

    if(10 < window.pageYOffset ){
        header.classList.add('shadow');
    }
    else{
        header.classList.remove('shadow');
       
    }

});

// =================================================================================================================================

let atag = document.querySelectorAll("a");
let section =  document.querySelectorAll("section");


function removebounce(){
    for(let i=0; i< section.length; i++){
        section[i].classList.remove("bounce2");
    }
}

for(let i=0; i< atag.length; i++){
    
   if(atag[i].href.includes('#')){

    atag[i].addEventListener("click",()=>{

        removebounce();

        let link = atag[i].href.split("#");

        for(let j=0; j< section.length; j++){
    
           if(section[j].getAttribute("data-id") != null){
            
                 if(section[j].getAttribute("data-id")== link[1]){
                    
                   
                    window.scrollBy(0, (section[j].offsetTop - header.offsetHeight ) -  window.pageYOffset);
                    
                    section[j].classList.add("bounce2");
                 }
    
           }
        }

    })



   }
}