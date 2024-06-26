let navBar = document.querySelector("nav");
let menuBar = document.querySelector(".menuBar");
let cancelBtn = document.querySelector(".cancelBtn");






menuBar.addEventListener("click", ()=>{
    navBar.classList.add("active");

});

cancelBtn.addEventListener("click", ()=>{
    navBar.classList.remove("active");
})