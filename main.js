const naveEmailOver=document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuMobile = document.getElementById('menuHamburguesa')
const mobileMenu = document.querySelector(".mobile-menu")
const btnShoping = document.querySelector(".navbar-shopping-cart")
const contCarritoCompras=document.querySelector(".product-detail")
let isMenuDesktopClosed;
let ismobileMenuClosed;
let iscontCarritoComprasClosed;




naveEmailOver.addEventListener("click", clickMenuDesktop)
menuMobile.addEventListener("click", clickMenuMobile)
btnShoping.addEventListener("click", cickCarritoCompras)


function clickMenuDesktop()
{

    if (!iscontCarritoComprasClosed)
    {
        contCarritoCompras.classList.add("inactive")
        desktopMenu.classList.toggle("inactive");
    }
    else if (isMenuDesktopClosed && iscontCarritoComprasClosed)
    {
        desktopMenu.classList.toggle("inactive");
    }
    
    else
    {
        desktopMenu.classList.toggle("inactive");
    }
    guardarVariables()

}

function clickMenuMobile()
{
    
    if (iscontCarritoComprasClosed &&   ismobileMenuClosed){
        mobileMenu.classList.toggle("inactive");  
    }
    else if (!iscontCarritoComprasClosed)
    {
        contCarritoCompras.classList.add("inactive")
        mobileMenu.classList.toggle("inactive");  
    }
    else
    {
        mobileMenu.classList.toggle("inactive");  
    }
    
    
guardarVariables()
}

function cickCarritoCompras()
{
    if (iscontCarritoComprasClosed&&ismobileMenuClosed && isMenuDesktopClosed)
    {
        contCarritoCompras.classList.toggle("inactive");
    }
        
    else if (!isMenuDesktopClosed || !ismobileMenuClosed)
    {
        desktopMenu.classList.add("inactive")
        mobileMenu.classList.add("inactive")
        contCarritoCompras.classList.toggle("inactive");
    }
    else
    {
        contCarritoCompras.classList.toggle("inactive");
    }  
    guardarVariables()



}

function guardarVariables()

{
    isMenuDesktopClosed=desktopMenu.classList.contains("inactive")
    ismobileMenuClosed=mobileMenu.classList.contains("inactive")
    iscontCarritoComprasClosed=contCarritoCompras.classList.contains("inactive")
    console.log(isMenuDesktopClosed, ismobileMenuClosed, iscontCarritoComprasClosed )
}