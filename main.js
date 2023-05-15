const year_tag = document.getElementById('year_tag');
const date = new Date();
let y = date.getFullYear();
year_tag.textContent = y;








window.addEventListener('load',()=>{
  const loader = document.querySelector('.loader')

  loader.classList.add('loader-hidden')

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
  

  loader.addEventListener('transitionend',()=>{
    document.body.removeChild('loader')
  })


})