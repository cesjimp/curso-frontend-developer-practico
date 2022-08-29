const naveEmailOver=document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuMobile = document.getElementById('menuHamburguesa')
const mobileMenu = document.querySelector(".mobile-menu")
const btnShoping = document.querySelector(".navbar-shopping-cart")
const contCarritoCompras=document.querySelector(".product-detail")
const contenedorProductos=document.getElementById("contenedor_productos")
let isMenuDesktopClosed;
let ismobileMenuClosed;
let iscontCarritoComprasClosed;
let arrayListaProductos=[]
let productoEnLista;


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


class productlist
{
    constructor(item, price, image)
    {
        this.image=image
        this.price=price
        this.item=item
    }

}

let bike = new productlist ("Bike",120, src="./img/Bici1.jpg")
let televisor = new productlist ("TV",250, src="./img/Screen1.jpg")
let celular = new productlist ("Mobile Phone",420, src="./img/Mobile1.jpg")
let bike2 = new productlist ("Bike",190, src="./img/Bici2.jpg")
let televisor2 = new productlist ("TV",320, src="./img/Screen2.jpg")
let celular2 = new productlist ("Mobile Phone",490, src="./img/Mobile2.jpg")




arrayListaProductos.push(bike,televisor,celular,bike2,televisor2,celular2)

arrayListaProductos.forEach((productlist)=>
{
    productoEnLista=`
    <div class="product-card">
        <img src="${productlist.image}">
        <div class="product-info">
          <div>
            <p>$ ${productlist.price}</p>
            <p>${productlist.item}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
    `
    contenedorProductos.innerHTML+=productoEnLista

}
)

for (producto in arrayListaProductos)
{
    console.log(arrayListaProductos[producto].item)
}

for (producto of arrayListaProductos)
{
    console.log(producto.item)
}

