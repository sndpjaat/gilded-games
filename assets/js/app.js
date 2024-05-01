const  menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".menuList");

menuIcon.addEventListener("click" , ()=>{
    menuIcon.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden")
    menuList.classList.toggle("active");

}) 