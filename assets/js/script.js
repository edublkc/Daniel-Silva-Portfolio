const menuMobileIcon = document.querySelector('.menu-mobile--icon')
const menuMobile = document.querySelector('#menu-items')
const menu = document.querySelector('#navbar')
const goToTop = document.querySelector('.go-to-top')
const menuOptions = document.querySelectorAll('#menu-items a')


menuMobileIcon.addEventListener('click',function(){
    menuMobile.classList.toggle('active')
})


window.addEventListener('scroll',function(){

    if(window.pageYOffset > menu.offsetTop){
        menu.classList.add('sticky')
        goToTop.classList.add('active')
    }else{
        menu.classList.remove('sticky')
        goToTop.classList.remove('active')
    }
})

goToTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });

    removeAllActiveMenuClass()
    if(!menuOptions[0].classList.contains('active')){
        menuOptions[0].classList.add('active')
    }
})


menuOptions.forEach((link) =>{
    link.addEventListener('click',function(){
        removeAllActiveMenuClass()
        if(!link.classList.contains('active')){
            link.classList.add('active')
        }
    })
})

function removeAllActiveMenuClass(){
    menuOptions.forEach((link) =>{
        link.classList.remove('active')
    })
}