var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".mySwiper2", {
    breakpoints:{
        300:{slidesPerView: 1,
            spaceBetween: 30,},
        500:{slidesPerView: 1,
            spaceBetween: 30,},
        700:{slidesPerView: 2,
            spaceBetween: 30,},
        1000:{slidesPerView: 3,
            spaceBetween: 30,}
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


let search=document.getElementById('search')
let inputsearch=document.getElementById('inputsearch')
let user=document.getElementById('user')
let useracount=document.getElementById('useracount')
let basketproducts=document.getElementById('basketproducts')
let basket=document.getElementById('basket')
let navbar=document.getElementById('navbar')
let info=document.getElementById('info')
let buy=document.querySelectorAll('.buy')
let xmark=document.getElementById('xmark')
let quantityinput=document.getElementById('quantityinput')
let total=document.getElementById('total')
let listicon=document.getElementById('listicon')
let list=document.getElementById('list')


search.onclick=()=>{
    inputsearch.classList.toggle('active')
    useracount.classList.remove('active')
    basketproducts.classList.remove('active')
    info.style.display='none'
    list.classList.remove('active')
}

user.onclick=()=>{
    useracount.classList.toggle('active')
    inputsearch.classList.remove('active')
    basketproducts.classList.remove('active')
    info.style.display='none'
    list.classList.remove('active')
}

basket.onclick=()=>{
    basketproducts.classList.toggle('active')
    inputsearch.classList.remove('active')
    useracount.classList.remove('active')
    info.style.display='none'
    list.classList.remove('active')
}

window.onscroll=()=>{
    inputsearch.classList.remove('active')
    useracount.classList.remove('active')
    basketproducts.classList.remove('active')
    info.style.display='none'
    list.classList.remove('active')

    if(window.scrollY>100){
       navbar.style.background='rgb(0, 0, 20)'}
    else{navbar.style.background='none'}}

info.style.display='none'
buy.forEach(function(btn){
btn.onclick=()=>{
    info.style.removeProperty('display')
    useracount.classList.remove('active')
    basketproducts.classList.remove('active')
    inputsearch.classList.remove('active')
    list.classList.remove('active')
}})


xmark.onclick=()=>{
    info.style.display='none'
}

quantityinput.value='1'
function plus(){
    quantityinput.value=Number(quantityinput.value)+1
    total.innerHTML=`Price : ${Number(quantityinput.value)*99}$`
}
function minus(){
    if(Number(quantityinput.value)>1){
    quantityinput.value=Number(quantityinput.value)-1}
    total.innerHTML=`Price : ${Number(quantityinput.value)*99}$`
}
quantityinput.onkeyup=function(){
    total.innerHTML=`Price : ${Number(quantityinput.value)*99}$`
}

window.scroll(0,0)
scroll({behavior:'smooth'})

listicon.onclick=()=>{
    list.classList.toggle('active')
    inputsearch.classList.remove('active')
    useracount.classList.remove('active')
    basketproducts.classList.remove('active')
    info.style.display='none'
    
}

