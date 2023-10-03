
/*1*/ 

var a = 100;
var b = 52;
var c = 30;                            
var d = 30;                            
var e = 10;                            
var f = 50;                            
var g = 30;                            
var h = 30;                            
var i = 30;                            
var j = 30;                            



function calc() {
   return (a+b+c+d+e+f+g+h+i+j) * 10
}
console.log(calc()) 


/*2*/



var l = 10;
var w = 50;
function calc(){
    return (.5*l*w);
}
console.log(calc())


/*3*/


function age( age , constant ){
    return age*constant
}
console.log(age(5,60))



/*4*/


function name( n1 , n2 ) {
    return n1 + n2 ; 
}
console.log(name(15,20))



/*5*/

var names = ["ahmed" , "mahmoud" , "mostafa" , "yossef" , "alaa" , "doha"]

function nemo(){
  console.log(names[ 0 , 1])  
}
nemo()


/*6*/



function myName(){
  return document.getElementById("name").innerHTML="Ahmed Abdelraof" 
}
myName()


/*7*/



function hour( number , constant1 , constant2){
  return number * constant1 *constant2;
}
console.log(hour( 5 ,60 ,60 ))



/*8*/


function lol(n1,n2,n3,n4){
  if(n1+n2+n3+n4 > 350 ){
    document.getElementById("nummer").innerHTML="true"}
    else{document.getElementById("nummer").innerHTML="false"}
}
lol(50,100,50,20)

/*9*/


function ahmed(num){
 if(num==0){
        console.log("true")
    } 
    else{ console.log("false")}
}
ahmed(0) 


/*10*/ 















/*11*/

function too(n3,n4){
    if(n3>n4){
        console.log(n3)
    } else{
        console.log(n4)
    }
}
too(10,6)



/*12*/



function rebo(){
    if(rebo==Number){
        console.log("number")
    }else{console.log("fname")}
}
rebo("ahmed")


/*13*/


var date = DataView
document.getElementById("date").innerHTML=date;


