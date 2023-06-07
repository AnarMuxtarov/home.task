
  





// tapsiriq 1 function declaretion
function Printfullname(name,surname){
    return name+" "+surname
}
console.log(Printfullname("Anar","Muxtarov"))



// tapsiriq 2 arrov function  ternerary operator
 let printFullNameWithParam=(f_name,l_name)=>{
    let fullname=`${f_name}  ${l_name}  m`
  console.log(fullname);
  return fullname;
 };
 console.log(printFullNameWithParam=("Anar","Muxtarov"))





// tapsiriq 3 perimetrin hesablanmasi  2*(length+width) function declaration
perimeterofaRectangle= function(length, width) { 
    return (2*(length+width));
}
console.log(perimeterofaRectangle(6,4))




// 4 ci tapsiriq  baslangic
// basa dusemmedim



//   5 ci tapsiriq  baslangic
let getPow= function ( x , n){
    let value=x**n;
    console.log(value)
    return value
}
getPow(3,5);