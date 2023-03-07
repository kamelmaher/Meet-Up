let bullets = document.querySelectorAll(".menu li");
let links = document.querySelectorAll(".menu a");
let date = document.querySelectorAll(".day li");
bullets.forEach((e , index)=> {
    e.addEventListener("mouseenter" , ()=> {
        links[index].style.cssText = `
        opacity: 1 !important;
        `
    })
    e.addEventListener("mouseleave" , ()=> {
        links[index].style.cssText = `
        opacity: 0;
        `
    })
})
date.forEach(e=> {
    e.addEventListener("click" , () => {
        date.forEach(e=> {
            e.classList.remove("active");
        })
        e.classList.add("active");
    })
})