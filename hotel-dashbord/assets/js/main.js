// tabs

let tabs = document.querySelectorAll(".updates .tabs li");
let items = document.querySelectorAll(".updates .contents .item");

tabs.forEach((tab,i)=>{

    tab.addEventListener("click",()=>{
        removetabs(tabs,items);
        tab.classList.add("active");
        items[i]?.classList.add("active");

    });

});

function removetabs(x,y){

    x.forEach(data=>{
        data.classList.remove("active");
    })

    y?.forEach(data=>{
        data?.classList.remove("active");
    })

}