let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar')

menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

var ProductImg = document.getElementById("ProductImg")
    var SmallImg = document.getElementsByClassName("small-img")
   
    SmallImg[0].onclick = function()
    {
        ProductImg.src = SmallImg[0].src;
    }

    SmallImg[1].onclick = function()
    {
        ProductImg.src = SmallImg[1].src;
    }

    SmallImg[2].onclick = function()
    {
        ProductImg.src = SmallImg[2].src;
    }

    SmallImg[3].onclick = function()
    {
        ProductImg.src = SmallImg[3].src;
    }

    SmallImg[4].onclick = function()
    {
        ProductImg.src = SmallImg[4].src;
    }

    SmallImg[5].onclick = function()
    {
        ProductImg.src = SmallImg[5].src;
    }