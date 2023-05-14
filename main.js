const year_tag = document.getElementById('year_tag');
const date = new Date();
let y = date.getFullYear();
year_tag.textContent = y;

AOS.init();


const navbar = document.querySelector('.navbar')
let lastScrollY = window.scrollY;

window.addEventListener('scroll',()=>{
  if(lastScrollY < window.scrollY){
    navbar.classList.add('nav-hidden')
  }else{
    navbar.classList.remove('nav-hidden')
  }
  lastScrollY = window.scrollY
})
