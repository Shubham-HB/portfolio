const hamburgerButton = document.querySelector("#hamburger");


hamburgerButton.addEventListener('click', function showMenu(){
    let menu = document.getElementById('menu');
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
    else menu.style.display = "block";
})