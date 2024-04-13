const date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let i = 0 , j = 0;
let hoursId = document.getElementById("select1");
let minId = document.getElementById('min');
let hourCon = document.getElementById('hourscon');
let minCon = document.getElementById('mincon');
let amPmCon = document.getElementById('am-pm');
let amPm;
   
    for(i = hour; i < 24; i++){

                 let option = document.createElement('option');
                 option.innerHTML = i;
                 hoursId.appendChild(option);

    }

   for(j = min; j < 60; j++){

                 let option = document.createElement('option');
                 option.innerHTML = j;
                 minId.appendChild(option);
   }

   hourCon.innerHTML = hour;
   minCon.innerHTML  = min;

   if(hour > 12){
        amPmCon.innerHTML =  hour - 12 +":" + min + "PM"
   }
   else{
    amPmCon.innerHTML = hour +":" + min + " " + "AM"
   }

   function change(){

    if(hoursId.value == hour){ 
        minId.innerHTML = "";

        for(j = min; j < 60; j++){

                 let option = document.createElement('option');
                 option.innerHTML = j;
                 minId.appendChild(option);
        }
    }
    else if (hoursId.value > hour) {
        minId.innerHTML = "";
        for(j = 0; j < 60; j++){
         
                 let option = document.createElement('option');
                 option.innerHTML = j;
                 console.log(option.innerHTML);
                 minId.appendChild(option);
        }
    }
    if(hoursId.value == hour){ 
        
        for(j = min; j < 60; j++){

                 let option = document.createElement('option');
                 option.innerHTML = j;
                 minId.appendChild(option);

        }

    }
    
hourCon.innerHTML = hoursId.value ;
minCon.innerHTML  = 0;   

if(hoursId.value > 12){
        amPmCon.innerHTML =  hoursId.value - 12 +":" + "0" + "PM";
   }
   else{
    amPmCon.innerHTML = hour +":" + "0" + " " + "AM";
   }
}
minId.onchange = function (){
    
   minCon.innerHTML  = minId.value;
   
if(hoursId.value > 12){
        amPmCon.innerHTML =  hoursId.value - 12 +":" + minId.value + "PM";
   }
   else{
    amPmCon.innerHTML = hour +":" + minId.value + " " + "AM";
   }
}


// time selector time selector time selector

let start = document.getElementById('time1');
let end = document.getElementById('time2');

        for(i = hour; i < 24; i++){

             for(j = min; j < 60; j++){

                let option = document.createElement('option');
                option.innerHTML = i + " " + j;
                start.appendChild(option);
           }
        }
        start.onchange = function (){
            end.innerHTML = "";
            
        }
        