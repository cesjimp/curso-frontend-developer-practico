const naveEmailOver=document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

console.log(desktopMenu, naveEmailOver)

naveEmailOver.addEventListener("click", toogleDesktoMenu)

function toogleDesktoMenu()
{
    desktopMenu.classList.toggle("inactive");
}
 

 console.log({naveEmailOver})