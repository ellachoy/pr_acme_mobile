const navbarMenu=document.querySelector('.navbar__menu');
const hamburger=document.querySelector('.navbar__toggle-btn');
const closeBtn= document.querySelector(".closeBtn");
const subLink= document.querySelector('.modal_sub');
const subMenu=document.querySelector('.dropdown-content');
hamburger.addEventListener('click',()=>{
    console.log('toggle test')
    navbarMenu.classList.toggle('open')
    // hamburger.classList.add("hidden")
})
closeBtn.addEventListener('click',()=>{
    console.log('close test');
    navbarMenu.classList.add("hidden");
    // hamburger.classList.add('open');
})