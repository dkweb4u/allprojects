// header menu
let menutrigger = document.querySelector("header .logo .action-icon");
let nav = document.querySelector("header nav");
menutrigger.addEventListener("click",()=>{
    menutrigger.classList.toggle("active");
    nav.classList.toggle("active");
});

// =========================================================================
// show amenities
if(document.querySelector("#filter-show")){
    let amenities = document.querySelector("#filter-show");
    amenities.addEventListener("click",()=>{
        amenities.classList.toggle("active");
    });
}
// =======================================================================
// add property
if(document.querySelectorAll('.addproperty .step')){

    let addpropertysteps = document.querySelectorAll('.addproperty .step');
    let nextbtns = document.querySelectorAll(".addproperty .next");
    let backbtns =  document.querySelectorAll(".addproperty .back");

//-------------------------------- steps -----------------------------------------
    function removeSteps(){
        addpropertysteps.forEach(addpropertystep => {
            addpropertystep.classList.remove("active");
        });
    }
// ------------------------- back button -----------------------------------------------
    backbtns.forEach((backbtn) =>{
        backbtn.addEventListener('click',()=>{
            removeSteps();
            addpropertysteps[backbtn.getAttribute('val')].classList.add("active");
            return 0;
        });
    });
// ----------------------------- next button -------------------------------
    nextbtns.forEach((nextbtn) =>{
        nextbtn.addEventListener('click',()=>{
            removeSteps();
            addpropertysteps[nextbtn.getAttribute('val')].classList.add("active");
            return 0;
        });
    });

// ------------------------- input trigger --------------------------------
    
  let inputtrigger = ['otherfood','anytime','yes','no'];

  for(let i=0; i< inputtrigger.length; i++){
    document.querySelector("."+inputtrigger[i]).addEventListener("click",()=>{

        if(inputtrigger[i] =='no'){
            document.querySelector(".yes-val").classList.add("hide");
        }        
        else{
            document.querySelector("."+inputtrigger[i]+"-val").classList.toggle("hide");
        }
    });
  }

//   -----------------------------------  add rooms   ----------------------------------------------

const newRoom = `<div class="row mt-2">
                            <div class="col-lg-12">
                              <h6 class="text-center">Room</h6>
                            </div>

                            <div class="col-lg-12 mt-2 mb-2">
                              <div class="label text-center">Private room</div>
                              <div class="check sharingtype">
                                <label>
                                  <span>1 sharing</span>
                                  <input
                                    type="radio"
                                    name="bedtype[]"
                                    class="form-check-input"
                                    id=""
                                    value="1 sharing"
                                /></label>

                                <label>
                                  <span>2 sharing</span>
                                  <input
                                    type="radio"
                                    name="bedtype[]"
                                    class="form-check-input"
                                    id=""
                                    value="2 sharing"
                                /></label>

                                <label>
                                  <span>3 sharing</span>
                                  <input
                                    type="radio"
                                    name="bedtype[]"
                                    class="form-check-input"
                                    id=""
                                    value="3 sharing"
                                /></label>

                                <label>
                                  <span>4 sharing</span>
                                  <input
                                    type="radio"
                                    name="bedtype[]"
                                    class="form-check-input"
                                    id=""
                                    value="4 sharing"
                                /></label>

                                <label>
                                  <span>4+ sharing</span>
                                  <input
                                    type="radio"
                                    name="bedtype[]"
                                    class="form-check-input"
                                    id=""
                                    value="4+ sharing"
                                /></label>

                                <input
                                  type="hidden"
                                  name="bedtype[]"
                                  class="form-check-input"
                                  id=""
                                  value="endroom"
                                />
                              </div>
                            </div>

                            <!-- -------------------------------------------------------------------------------------------- -->

                            <div class="col-lg-4 col-sm-6 mt-2 mb-2">
                              <label>
                                Total beds in room <span class="cl-red">*</span>
                              </label>
                              <input
                                type="number"
                                name="numrooms[]"
                                class="form-control"
                                value="0"
                                required=""
                              />
                            </div>

                            <div class="col-lg-4 col-sm-6 mt-2 mb-2">
                              <label
                                >Rent per month
                                <span class="cl-red">*</span></label
                              >
                              <input
                                type="number"
                                name="rentroom[]"
                                class="form-control"
                                value="0"
                                required=""
                              />
                            </div>

                            <div class="col-lg-4 col-sm-6 mt-2 mb-2">
                              <label
                                >Security deposit
                                <span class="cl-red">*</span></label
                              >
                              <input
                                type="number"
                                name="depositroom[]"
                                class="form-control"
                                value="0"
                                required=""
                              />
                            </div>
                            <div class="col-lg-6 col-sm-6 mt-2 mb-2">
                              <label
                                >Maintenance charges per month
                                <span class="cl-red">*</span></label
                              >

                              <input
                                type="number"
                                name="maintenance[]"
                                class="form-control"
                                value="0"
                                required=""
                              />
                            </div>
                            <div class="col-lg-6 col-sm-6 mt-2 mb-2">
                              <label
                                >Other charges
                                <span class="cl-red">*</span></label
                              >

                              <input
                                type="number"
                                name="othercharges[]"
                                class="form-control"
                                value="0"
                                required=""
                              />
                            </div>

                            <!-- -------------------------------------------------------------------------------------------------------- -->

                            <div class="col-lg-12 mt-2 mb-2">
                              <div class="label text-center">
                                Facilities offered
                              </div>
                              <div class="check">
                                <label>
                                  <span>AC</span>
                                  <input
                                    type="checkbox"
                                    name="facilities[]"
                                    class="form-check-input"
                                    id=""
                                    value="AC"
                                /></label>

                                <label>
                                  <span>TV</span>
                                  <input
                                    type="checkbox"
                                    name="facilities[]"
                                    class="form-check-input"
                                    id=""
                                    value="TV"
                                /></label>

                                <label>
                                  <span>Cupboard</span>
                                  <input
                                    type="checkbox"
                                    name="facilities[]"
                                    class="form-check-input"
                                    id=""
                                    value="Cupboard"
                                /></label>

                                <label>
                                  <span>Table</span>
                                  <input
                                    type="checkbox"
                                    name="facilities[]"
                                    class="form-check-input"
                                    id=""
                                    value="Table"
                                /></label>

                                <label>
                                  <span>Chair</span>
                                  <input
                                    type="checkbox"
                                    name="facilities[]"
                                    class="form-check-input"
                                    id=""
                                    value="Chair"
                                /></label>

                                <label>
                                  <span>Balcony</span>
                                  <input
                                    type="checkbox"
                                    name="facilities[]"
                                    class="form-check-input"
                                    id=""
                                    value="Balcony"
                                /></label>

                                <label>
                                  <span>Attached bathroom</span>
                                  <input
                                    type="checkbox"
                                    name="facilities[]"
                                    class="form-check-input"
                                    id=""
                                    value="Attached bathroom"
                                /></label>

                                <label>
                                  <span>Common bathroom</span>
                                  <input
                                    type="checkbox"
                                    name="facilities[]"
                                    class="form-check-input"
                                    id=""
                                    value="Common bathroom"
                                /></label>

                                <label>
                                  <span>Meals</span>
                                  <input
                                    type="checkbox"
                                    name="facilities[]"
                                    class="form-check-input"
                                    id=""
                                    value="Meals"
                                /></label>

                                <input
                                  type="hidden"
                                  name="facilities[]"
                                  class="form-check-input"
                                  id=""
                                  value="endroom"
                                />
                              </div>
                            </div>
                            <div class="col-lg-12 text-center mt-2">
                              <div class="btn btn-danger delete">Delete</div>
                            </div>
                          </div>`;

let addroombtn  = document.querySelector('.addproperty .addroomformbtn');

addroombtn.addEventListener("click",()=>{
    let div = document.createElement("div");
    div.setAttribute("class","room");
    div.innerHTML = newRoom;
    document.querySelector('.addproperty .newroomsec').appendChild(div);
    roomInputNameChange();
});

function removeRoom(x){
 if(x){
    let removeRoomSharing = document.querySelectorAll('.addproperty .newroomsec .room');
    removeRoomSharing[x].remove();
    roomInputNameChange();
 }
}



function roomInputNameChange(){   

    let changeRoomSharing = document.querySelectorAll('.addproperty .newroomsec .sharingtype');
    let roomtitle = document.querySelectorAll('.addproperty .newroomsec h6');

    let deletebtn = document.querySelectorAll('.addproperty .newroomsec .delete');

    let i = 0;

    changeRoomSharing.forEach(sharinginput =>{
        roomtitle[i].innerText = "Room "+(i+1);
        deletebtn[i].setAttribute("onclick",`removeRoom(${i})`);
        i++;
        let allinput = sharinginput.querySelectorAll('input');

        allinput.forEach(input=>{

            input.setAttribute("name","bedtype"+i+"[]");
        })

    });

}
    
}
// ==============================================================================================