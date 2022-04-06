const homeEl = document.querySelector(".home-menu");
const payEl = document.querySelector(".payment-menu");
const budgetEl = document.querySelector(".budget-menu");
const cardEl = document.querySelector(".card-menu");
const moreEl = document.querySelector(".more-menu");

homeEl.addEventListener("click", ()=>{
     homeEl.classList.add("active")
    console.log("clicked")
})
