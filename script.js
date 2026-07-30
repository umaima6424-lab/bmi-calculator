function calculateBMI(){
let weight=parseFloat(document.getElementById("Weight").value);
let height=parseFloat(document.getElementById("Height").value);
if(weight<=0|| height<=0){
    document.getElementById("result").innerHTML="please enter valid values.";
    document.getElementById("category").innerHTML="";
}
let bmi=weight/(height*height);
bmi=bmi.toFixed(2);
document.getElementById("result").innerHTML="your BMI is:"+bmi;
if(bmi<18.5){
    document.getElementById("category").innerHTML="UnderWeight";
}
else if(bmi<25){
    document.getElementById("category").innerHTML="Normal weight";
}
else if(bmi<30){
    document.getElementById("category").innerHTML="OverWeight";
}
else{
 document.getElementById("category").innerHTML="Obese";
}
}
