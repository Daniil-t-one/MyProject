const menuBtn = document.querySelector('.menu_btn');
const menuList = document.querySelector('.menu-list')

menuBtn.addEventListener('click', ()=>{
  menuList.classList.toggle('menu-list--active')
})
