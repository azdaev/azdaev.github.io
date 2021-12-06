let hamburgerButton = document.querySelector("#hamburger");
let burgerList = document.querySelector("#burgerList");
let buttonActive = false;
hamburgerButton.addEventListener('click', () => {
    buttonActive = !buttonActive
    if (buttonActive){
        burgerList.style.display = "block";
    } else {
        burgerList.style.display = "none";
    }
})

