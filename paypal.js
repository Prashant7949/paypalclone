const navlink1 = document.querySelector(".navlink1-for-paypal");
const individualdropdown = document.querySelector(".individual-drop-down");
const businessdropdown = document.querySelector(".business-drop-down");
const navlink2 = document.querySelector(".navlink2-for-paypal");
const Partnerdropdown = document.querySelector(".Partner-drop-down");
const navlink3 = document.querySelector(".navlink3-for-paypal");
const usefulinfodropdown = document.querySelector(".usefulinfo-drop-down");
const navlink4 = document.querySelector(".navlink4-for-paypal");
const expandmoreall = document.querySelectorAll(".material-symbols-outlined");
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2")


let count = 0;
let count1 = 0;
setInterval(() => {
    if (count < 10) {
        span1.textContent = `${count}`;
        count++
    }
    else if (count = 10) {
        count = 0;
        count1++;
        span2.textContent = `${count1}`;
    }


}, 1000);







expandmoreall.forEach((sabkeliye) => {
    sabkeliye.style.transition = "0.4s";
})

// INDIVIDUAL
individualdropdown.addEventListener("mouseover", () => {
    navlink1.style.height = "27.5rem";
    navlink1.style.paddingTop = "18rem"
    navlink1.style.transition = "0.4s"
    navlink1.style.transitionDelay = "0.1s"
})
individualdropdown.addEventListener("mouseout", () => {
    navlink1.style.height = "0";
    navlink1.style.paddingTop = "0"
})

// PARTNER AREA**************
Partnerdropdown.addEventListener("mouseover", () => {
    navlink3.style.height = "27.4rem";
    navlink3.style.paddingTop = "18rem"
    navlink3.style.transition = "0.4s"
    navlink3.style.transitionDelay = "0.1s"
})
Partnerdropdown.addEventListener("mouseout", () => {
    navlink3.style.height = "0";
    navlink3.style.paddingTop = "0"
})


// BUSINESS AREA********

businessdropdown.addEventListener("mouseover", () => {
    navlink2.style.height = "30.4rem";
    navlink2.style.paddingTop = "18rem"
    navlink2.style.transition = "0.4s"
    navlink2.style.transitionDelay = "0.1s"
})
businessdropdown.addEventListener("mouseout", () => {
    navlink2.style.height = "0";
    navlink2.style.paddingTop = "0"
})

// USEFULL INFO AREA*******

usefulinfodropdown.addEventListener("mouseover", () => {
    navlink4.style.height = "28rem";
    navlink4.style.paddingTop = "18rem"
    navlink4.style.transition = "0.4s"
    navlink4.style.transitionDelay = "0.1s"
})
usefulinfodropdown.addEventListener("mouseout", () => {
    navlink4.style.height = "0";
    navlink4.style.paddingTop = "0"
})