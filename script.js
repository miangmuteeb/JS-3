document.getElementById("btn").onclick= function(){
    document.getElementById("result").innerHTML=" ";

}
document.getElementById("btn1").onclick= function(){
    document.getElementById("input").innerHTML=" ";

}


 function simpleAlert(){
    alert("I am Muhammad Rayyan")
}




let cities=[ "Sheikupura", "Faisalabad" ,"Abbottabad" , "Islamabad","Hyderabad", "Rawalpindi","Gujranwala","Lahore"]

document.getElementById("btn1").onclick= function PrintCities (){
    document.getElementById("result").value=""
    document.getElementById("result").innerHTML=""
for (let index = 0; index < cities.length; index++) {
    console.log('city',cities[index])
     document.getElementById("result").innerHTML+=index+1+")"+cities[index]+"</br>"


}
}

function printName() {
    let myName= document.getElementById("input-text").value;
    if(!myName){
        document.getElementById("result").innerHTML=" <h3>Please enter your name ! </h3>"

        return 
    }
    document.getElementById("result").innerHTML=myName;
}
 function table(){

 document.getElementById("result").innerHTML=""
 let table = document.getElementById("input-text").value;
 if(!table){

    document.getElementById("result").innerHTML=" <h3>Please enter your number ! </h3>"
    return 
}
 for (let i = 1; i <=10; i++) {
    ans =table* i;

    console.log(ans)
    document.getElementById("result").innerHTML+=table+"*"+i+"="+ans+"</br>"
}
document.getElementById("input-text").innerHTML=""
document.getElementById("input-text").value=""
}

function addCity (){
    document.getElementById("result").innerHTML=""
    let newCity = document.getElementById("input-text").value;
    if(!newCity){

         document.getElementById("result").innerHTML=" <h3>Please enter your city ! </h3>"
        return 
    }
    cities.push(newCity)
    for (let index = 0; index < cities.length; index++) {
        console.log('city',cities[index])
         document.getElementById("result").innerHTML+=index+1+")"+cities[index]+"</br>"


    }
    document.getElementById("input-text").value=""
    }
    document.getElementById("result").style.minHeight = "210px";
    document.getElementById("result").style.maxHeight = "210px";


 function clear0(){
    document.getElementById("input-text").value=""
 }