let obj = {

}
let arrOfObject = [];

let count = 0;
let arr = JSON.parse(localStorage.getItem("key"));
if (arr == null) {
    arrOfObject = [];
}
else {
    arrOfObject = arr;
}
console.log(arrOfObject);
let nameid = document.getElementById('name');
let male = document.getElementById('male');
let female = document.getElementById('female');
let other = document.getElementById('other');
let genderVal;
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phonenumber');
let image = document.getElementById('image');
let img;
let imgSrc;
let date = document.getElementById('date');
let time = document.getElementById('time');
let url = document.getElementById('url');
let state = document.getElementById('state');
let warn = document.querySelectorAll('.warn');
let warnEmail = document.querySelectorAll('.warn-em');
let termCheck = document.getElementById('terms');
let table = document.getElementById('table');
let tbody = document.getElementById('tbody');
let flag;
let rg1 = /@/;
let rg2 = /./;
let i, j;
function validation() {

    
    

    // name name name

    if (nameid.value == "" || nameid.value.match(/\d+/)) {
        warn[0].style.display = "flex";
    }
    else {
        warn[0].style.display = "none";

    }

    // gender gender gender gender gender

    if (male.checked == false && female.checked == false && other.checked == false) {
        warn[1].style.display = "flex";
    }
    else {
        warn[1].style.display = "none";

    }

    // email email email emailemail

    if (email.value == "") {
        warn[2].style.display = "flex";
    }
    else {
        warn[2].style.display = "none";

    }
    if (email.value.match(rg1) && email.value.match(rg2)) {
        warnEmail[0].style.display = "none";


    } else {
        warn[2].style.display = "flex";
        warnEmail[0].style.display = "flex";

    }

    // call call call call
    if (phoneNumber.value == "") {
        warn[3].style.display = "flex";
    }
    else {
        warn[3].style.display = "none";

    }

    // date of birth date of birth date of birth
    if (date.value == "") {
        warn[5].style.display = "flex";
    }
    else {
        warn[5].style.display = "none";

    }
    if (time.value == "") {
        warn[6].style.display = "flex";
    }
    else {
        warn[6].style.display = "none";

    }

    // url url url
    if (url.value[0] == 'h' && url.value[1] == 't' && url.value[2] == 't' && url.value[3] == 'p' && url.value[4] == ':' && url.value[5] == '/' && url.value[6] == '/') {
        warn[7].style.display = "none";

    }
    else if (url.value[0] == 'h' && url.value[1] == 't' && url.value[2] == 't' && url.value[3] == 'p' && url.value[4] == 's' && url.value[5] == ':' && url.value[6] == '/' && url.value[7] == '/') {
        warn[7].style.display = "none";

    }
    else if (url.value == "") {
        warn[7].style.display = "flex";

    }
    else {
        warn[7].style.display = "flex";

    }
    // state state
    if (state.value == "") {
        warn[8].style.display = "flex";

    }
    else {
        warn[8].style.display = "none";

    }
    // term term term
    if (termCheck.checked == true) {
        warn[9].style.display = "none";

    }
    else {
        warn[9].style.display = "flex";

    }


    if (male.checked == true) {
        genderVal = male.value;
    }
    else if (female.checked == true) {
        genderVal = female.value;

    }
    else {
        genderVal = other.value;

    }


    for (i = 0; i < warn.length; i++) {
        if (warn[i].style.display == "none") {
            flag = "done";
        }
        else {
            flag = "not done";


        }
    }

    if (flag == "done") {


        
            imgSrc = image.value.slice(12);
        obj = {
            id : count++,
            "name": nameid.value,
            "Gender": genderVal,
            "Email": email.value,
            "number": phoneNumber.value,
            "img" : imgSrc,
            "date": date.value,
            "time": time.value,
            "url": url.value,
            "state": state.value
        }
console.log(obj.img);
        arrOfObject.push(obj);
        console.log(arrOfObject);
        save();
        tbody.innerHTML = " ";
        
        for (i = 0; i < arrOfObject.length; i++) {
            console.log(i);
            img = document.createElement('img');
            let edit = document.createElement('button');
            let delet = document.createElement('button');
            edit.setAttribute('value', obj.id);
            delet.setAttribute('value', obj.id);
            edit.innerHTML = "Edit";
            edit.classList.add('edit');
            editBtn = document.querySelectorAll(".edit");
            delet.innerHTML = "Delete";
            delet.classList.add("delete");
            deletBtn = document.querySelectorAll(".delete");
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.innerHTML = arrOfObject[i].name;
            tr.appendChild(td);
            let td1 = document.createElement('td');
            td1.innerHTML = arrOfObject[i].Gender;
            tr.appendChild(td1);
            let td2 = document.createElement('td');
            td2.innerHTML = arrOfObject[i].Email;
            tr.appendChild(td2);
            let td3 = document.createElement('td');
            td3.innerHTML = arrOfObject[i].number;
            tr.appendChild(td3);

            let td4 = document.createElement('td');
            img.src = arrOfObject[i].img;
            td4.appendChild(img);
            tr.appendChild(td4);

            let td5 = document.createElement('td');
            td5.innerHTML = arrOfObject[i].date;
            tr.appendChild(td5);
            let td6 = document.createElement('td');
            td6.innerHTML = arrOfObject[i].time;
            tr.appendChild(td6);
            let td7 = document.createElement('td');
            td7.innerHTML = arrOfObject[i].url;
            tr.appendChild(td7);
            let td8 = document.createElement('td');
            td8.innerHTML = arrOfObject[i].state;
            tr.appendChild(td8);
            let td9 = document.createElement('td');
            td9.appendChild(edit);
            tr.appendChild(td9);
            let td10 = document.createElement('td');
            td10.appendChild(delet);
            tr.appendChild(td10);
            tbody.appendChild(tr);
        }



        obj = {

        }
    }
}

tbody.onclick = function (e) {
    
    if (e.target.innerHTML == "Edit") {
        
        let tr = e.target.parentNode.parentNode;
        nameid.value = tr.children[0].innerHTML;
        if(tr.children[1].innerHTML == "male"){
            male.checked =true;
        }
        else if(tr.children[1].innerHTML == "female"){
            female.checked = true;
        }
        else{
            other.checked = true;
        }
        email.value = tr.children[2].innerHTML;
        phoneNumber.value = tr.children[3].innerHTML;
        date.value = tr.children[5].innerHTML;
        time.value = tr.children[6].innerHTML;
        url.value = tr.children[7].innerHTML;
        state.value = tr.children[8].innerHTML;
        
        for(i = 0; i < tbody.children.length; i++){
            

            if(tbody.children[i].innerHTML == tr.innerHTML){
                   console.log(i);

                   console.log("matched");
                
            }
            else{
                console.log("nope");
            }
        }
        arrOfObject = arrOfObject.filter( (item) => {
            return item.id != e.target.value;
       })
       console.log(arrOfObject);
       tr.remove();


        save();
    }
    else if(e.target.innerHTML == "Delete"){

        let tr = e.target.parentNode.parentNode;
        console.log(arrOfObject);
        // for(i = 0; i < tbody.children.length; i++){
            
        //         console.log(i);

        //     if(tbody.children[i].innerHTML == tr.innerHTML){

        //            console.log("match");
        //            arrOfObject[i];
        //     }
        //     else{
        //     }
        // }
        arrOfObject = arrOfObject.filter( (item) => {
            console.log(item.id != e.target.value);
            console.log(e.target.value);
             return item.id != e.target.value;
        })
        console.log(arrOfObject);
        tr.remove()

        save();
        
    }
}

window.onload = load();

function save() {
    localStorage.setItem("key", JSON.stringify(arrOfObject));

}
function load() {
    let i;

    if (arrOfObject == null) {
        console.log("fghj");
    }
    else {
        
    for (i = 0; i < arrOfObject.length; i++) {
        console.log(i);
        img = document.createElement('img');

        let edit = document.createElement('button');
        let delet = document.createElement('button');
        edit.setAttribute('value', arrOfObject[i].id);
        delet.setAttribute('value',  arrOfObject[i].id);
        edit.innerHTML = "Edit";
        edit.classList.add('edit');
        editBtn = document.querySelectorAll(".edit");
        delet.innerHTML = "Delete";
        delet.classList.add("delete");
        deletBtn = document.querySelectorAll(".delete");
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = arrOfObject[i].name;
        tr.appendChild(td);
        let td1 = document.createElement('td');
        td1.innerHTML = arrOfObject[i].Gender;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = arrOfObject[i].Email;
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = arrOfObject[i].number;
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        img.src = arrOfObject[i].img;
        td4.appendChild(img);
        tr.appendChild(td4);

        let td5 = document.createElement('td');
        td5.innerHTML = arrOfObject[i].date;
        tr.appendChild(td5);
        let td6 = document.createElement('td');
        td6.innerHTML = arrOfObject[i].time;
        tr.appendChild(td6);
        let td7 = document.createElement('td');
        td7.innerHTML = arrOfObject[i].url;
        tr.appendChild(td7);
        let td8 = document.createElement('td');
        td8.innerHTML = arrOfObject[i].state;
        tr.appendChild(td8);
        let td9 = document.createElement('td');
        td9.appendChild(edit);
        tr.appendChild(td9);
        let td10 = document.createElement('td');
        td10.appendChild(delet);
        tr.appendChild(td10);
        tbody.appendChild(tr);
    }

    }


}
// localStorage.clear();