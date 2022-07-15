const togglebutton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('NavItems')[0];

togglebutton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})