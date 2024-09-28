let x = 23;

if (x > 0){
    console.log ( 'x is a poistive number');
}
else if(x < 0){
    console.log('x is negative number');
}
else{
    console.log('x is equal to 0');
}


var day = "4" ;

switch (day){
    case "1":
        console.log("monday");
        break;
    case "2":
        console.log("tuesday");
        break;
    case "3":
        console.log("wednesday");
        break;
    case "4":
        console.log("thursday");
        break;
    case "5":
        console.log("friday");
        break;
    case "6":
        console.log("saturday");
        break;
    case "7":
        console.log("sunday");
        break; 
    default:
        console.log("unknown day")
}

for (var number = 1; number <= 5; number++){
   if ( number === 5){
    break;}
    console.log("number"+ number);
}  

var numbers = 6;
while (numbers < 12){
console.log(numbers); numbers++;
}

var numberz = 13
do {
    console.log("What is the current count:" + (numberz+1)); numberz++;   
} while (numberz < 18);


for (var step = 20; step <=25; step++){
    if (step < 22){
        continue;
    }
    console.log((step + 1));

}

copyingthis("sorry")

function copyingthis (ouch){
    console.log(ouch);
}

let ouch = "ouch"
console.log(ouch); 