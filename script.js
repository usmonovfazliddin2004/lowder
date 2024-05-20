const loader = document.querySelector(".loader");
const wrapper = document.querySelector(".wrapper");
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(()=>{
        loader.style.opacity = "0";
        wrapper.style.display="block";
    }, 10000);
})