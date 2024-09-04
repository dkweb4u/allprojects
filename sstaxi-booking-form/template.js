class Booking{

    vechileTypes = ['Toyota Etios (4+1)','Maruti Ertiga (6+1)','Toyota Rumion (6+1)','Toyota Innova Crysta (7+1)','Tempo Traveller (12+1)','Luxury Buses (21-25)','Luxury Buses (30-35)','Luxury Buses (30-40)'];

    pickAddr='';
    destAddr=[];
    pickupDate='';
    pickupTime='';
    returnDate='';
    qty='';
    wnumber="8904235568";

    airportTrip = ['Pickup From Airport','Drop to Airport'];

    outstionTrip = ['One Way','Round Trip'];

    mindate='';


    tabs = {"Outstation":"outsationBookForm","Local":"localBookForm","Airport":"airportBookForm","Events":"eventBookForm"};

   filterDate(){
    let date = new Date().toISOString().split('T')[0];
    return date;
   }


   outsationBookForm(){
    return {
        "One Way" :  { 
          "inputs": [
            {
                "tag": "select",
                "name":"Vehicle",
                "type":"text",
                "options":this.vechileTypes
            },
            {
                "tag":"input",
                "name":"From",
                "type":"text"
            },
            {
                "tag":"input",
                "name":"To",
                "type":"text"
            },
            {
                "tag":"input",
                "name":"Pick up Date",
                "type":"date"
            },
            {
                "tag":"input",
                "name":"Pick up Time",
                "type":"time"
            }
          ]
          
        },

        "Round Trip" :  { 
            "inputs":[
                {
                    "tag": "select",
                    "name":"Vehicle",
                    "type":"text",
                    "options":this.vechileTypes
                },
                {
                    "tag":"input",
                    "name":"From",
                    "type":"text"
                },
                {
                    "tag":"input",
                    "name":"To",
                    "type":"text",
                    "duplicate":true
                },
                {
                    "tag":"input",
                    "name":"return date",
                    "type":"date"
                },
                {
                    "tag":"input",
                    "name":"pick up date",
                    "type":"date"
                },
                {
                    "tag":"input",
                    "name":"pick up time",
                    "type":"time"
                }

            ]
            
            
           
          }
  



      }
     }

    localBookForm(){
      return { 
           "inputs": [
            {
                "tag": "select",
                "name":"Vehicle",
                "type":"text",
                "options":this.vechileTypes
            },
            {
            "name":"City",
            "type":"text",
            "tag":"input"
        },
         {
            "name":"Pick up Date",
            "type":"date",
            "tag":"input"
        },
       {
            "name":"Pick up Time",
            "type":"time",
            "tag":"input"
        }]
          }
         }
     airportBookForm(){
            return { 
               "Pickup From Airport":{
                "inputs":[
                {
                    "tag": "select",
                    "name":"Vehicle",
                    "type":"text",
                    "options":this.vechileTypes
                },
                {
                    "tag":"input",
                    "name":"Pickup Airport",
                    "type":"text"
                },
                {
                    "tag":"input",
                    "name":"Drop Address",
                    "type":"text"
                },
                {
                    "tag":"input",
                    "name":"pick up date",
                    "type":"date"
                },
                {
                    "tag":"input",
                    "name":"Pick up Time",
                    "type":"time"
                }]
               },
               "Drop To Airport":{
                "inputs":[
                {
                    "tag": "select",
                    "name":"Vehicle",
                    "type":"text",
                    "options":this.vechileTypes
                },
                {
                    "tag":"input",
                    "name":"Pickup Address",
                    "type":"text"
                },
                {
                    "tag":"input",
                    "name":"Drop Airport",
                    "type":"text"
                },
                {
                    "tag":"input",
                    "name":"Pick up Date",
                    "type":"date"
                },
                {
                    "tag":"input",
                    "name":"Pick up Time",
                    "type":"time"
                }]
               }
               
              }
             }
     eventBookForm(){
                return { 
                  "inputs" : [
                    {
                        "tag": "select",
                        "name":"Vehicle",
                        "type":"text",
                        "options":this.vechileTypes
                    },
                    {
                        "tag":"input",
                        "name":"Number of Vehicle",
                        "type":"number"
                    },
                    {
                        "tag":"input",
                        "name":"pickup address",
                        "type":"text"
                    },
                    {
                        "tag":"input",
                        "name":"Event Date",
                        "type":"date"
                    },
                    {
                        "tag":"input",
                        "name":"Event Time",
                        "type":"time"
                    }
                  ]
                  
                  }
                 }


getAllEntrysForm(data){
    let url = `https://api.whatsapp.com/send?phone=91${this.wnumber}&text=Hi,%0aI want To book`;
    for (const [name, value] of data.entries()) {
        if(value !=""){
            url +=`%0a${name}: ${value}`;
        }
}
window.open(url);

}


}