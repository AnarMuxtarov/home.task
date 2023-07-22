// 1 ci hisse



btn_colors=document.querySelector('.btn_color')
console.log(btn_colors)


btn_colors.addEventListener("click", btnChange )

var btnChange = () => {

var hexVal= Match.floor(Match.random()*0xffffff).toString(16);
document.body.style.backgroundcolor= `#$(hexVal)`;
}







//  2  ci hisse 

btn_pluss=document.querySelector('.btn_plus')
console.log(btn_pluss)

btn_minuss=document.querySelector('.btn_minus')
console.log(btn_minuss)

btn_resets=document.querySelector('.btn_reset')
console.log(btn_resets)

counts=document.getElementById('count')
console.log(counts)




let count = 0;

btn_pluss.addEventListener('click', ()=>{
    count++;
    countPage();
 })
 function countPage (){
    counts.innerHTML=count;
 }

 

 btn_minuss.addEventListener('click', ()=>{
     count--;
     countPage();
  })
  function countPage (){
     counts.innerHTML=count;
  }


  
  btn_resets.addEventListener('click', ()=>{
      count=0;
      countPage();
   })
   function countPage (){
      counts.innerHTML=count;
   }


// 3 cu hisse
imgAtribut=document.querySelector('.Java_picture');
console.log(imgAtribut.getAttribute('src'))


btnn=document.querySelector('.btn')
console.log(btnn)

btnn.addEventListener('click', function(){

btnn.style.color='red'
btnn.style.fontSize='40px'


imgAtribut.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Tuoxfv5wkBNrPO_G3_P9rOt8vffhaMdPYcoJj6p2&s')


})