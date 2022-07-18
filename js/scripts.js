//creating functions for closing the window
function closeWindow(){
    res = confirm("Are you sure, you want to close this app? ")

    if(res==true)
    {
        window.close();
    }
    else
    {
        alert("You click Cancle so click Ok to continue with is page. ")
    }
}

function currentDate(){
    date = new Date();
        today = date.getDay(); //for sunday to saturday
        month = date.getMonth() //for january to december
        tdate = date.getDate() //for current date ie 18
        year = date.getFullYear() // 2022
        /* Month Array */
        monthname = new Array("January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        day = "";
        switch(today){
            case 0:
                {
                    day = "Sunday";
                    break;
                }
                case 1:
                {
                    day = "Monday";
                    break;
                }
                case 2:
                {
                    day = "Tuesday";
                    break;
                }
                default:
                {
                    day ="";
                    break;
                }
        }

        //DOM manipulation for displaying the current date in to div
        document.getElementById("currentDate").innerHTML = day + ",  " + tdate + " "+ monthname[month] + ", "+year;
}


var timerId; // current timer if started
function clockStart() {
if (timerId)
return;
timerId = setInterval(update, 1000);
update(); // (*)
}


function update() {
    var date = new Date();
    var hours = date.getHours();
    if (hours < 10)
    hours =
    '0'+hours;
    document.getElementById('hour').innerHTML = hours;
    var minutes = date.getMinutes();
    if (minutes < 10)
    minutes =
    '0'+minutes;
    document.getElementById('min').innerHTML = minutes;
    var seconds = date.getSeconds();
    if (seconds < 10)
    seconds =
    '0'+seconds;
    document.getElementById('sec').innerHTML = seconds;
}


    var btn = document.querySelector('button');
function random(number) {
return Math.floor(Math.random() * (number+1));
}
function changeBgColor() {
var rCol = 'rgb(' + random(255) + ',' + random(255) 
+ ',' + random(255) + ') ';
document.body.style.backgroundColor = rCol;

}


function validate() { 
    if( document.myForm.Name.value == "" ) {
    alert( "Please provide your name!" ); document.myForm.Name.focus() ; return false;
    }
    if( document.myForm.EMail.value == "" ) {
    alert( "Please provide your Email!" ); document.myForm.EMail.focus() ; return false;
    }
    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
    document.myForm.Zip.value.length != 5 ) { 
    alert( "Please provide a zip in the format #####." ); document.myForm.Zip.focus() ; return false;
    }
    if( document.myForm.Country.value == "-1" ) {
    alert( "Please provide your country!" ); return false;
    }
    return( true );
    }
    
