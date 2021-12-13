const menuMobileIcon = document.querySelector('.menu-mobile--icon')
const menuMobile = document.querySelector('#menu-items')
const menu = document.querySelector('#navbar')
const goToTop = document.querySelector('.go-to-top')
const menuOptions = document.querySelectorAll('#menu-items a')
const animationsElements = document.querySelectorAll('[data-anime]')
const allSectionsContent = document.querySelectorAll('section')
const englishButton = document.querySelector('#english')
const portugueseButton = document.querySelector('#portuguese')
const spanishButton = document.querySelector('#spanish')



englishButton.addEventListener('click',()=>{
    changeLangAbout('english')
})
portugueseButton.addEventListener('click',()=>{
    changeLangAbout('portuguese')
})
spanishButton.addEventListener('click',()=>{
    changeLangAbout('spanish')
})

function changeLangAbout(lang){
    const textAbout = document.querySelector('.about-text')
    
    switch(lang){
        case 'english':
        textAbout.textContent = "My name is Daniel Silva, I'm 24 years old and I currently work with illustration and sales of commissions. My trajectory with art started when I was only 9 years old when I started to copy some drawings and that's where the interest in having my own drawings. For a long time, drawing for me was just a hobby and only at the age of 22 I started to treat it as something more professional. My contact with digital drawing started very late, but it was something that changed me completely and I discovered all the possibilities that digital drawing gave me was what motivated me the most to continue and take it to a more professional side. Today I study illustration and, parallel to that, I also sell my work or create art for the client who hires me."
        break;
        case 'portuguese':
            textAbout.textContent = "Me chamo Daniel silva, tenho 24 anos e atualmente trabalho com ilustração e venda de comissions. Minha trajetória com a arte começou quando eu tinha apenas 9 anos quando eu comecei a copiar alguns desenhos e foi a partir disso que nasceu o interesse em ter meus próprios desenhos. Por muito tempo, desenhar pra mim era apenas um hobby e só com 22 anos que eu comecei a tratar como algo mais profissional.Meu contato com desenho digital começou bem tarde, mas foi algo que me mdou por completo e descobri todas as possibilidades queo desenho digital me proporcionava foi o que mais me motivou a continuar e levar isso pra um lado mais profissional.Hoje eu estudo ilustração e, paralelo a isso, eu também vendo trabalhos meus ou crio arte para o cliente que me contratar."
        break;
        case 'spanish':
            textAbout.textContent = "Mi nombre es Daniel Silva, tengo 24 años y actualmente me dedico a la ilustración y venta de comisiones. Mi trayectoria con el arte comenzó cuando tenía solo 9 años cuando comencé a copiar algunos dibujos y fue entonces cuando mi interés en tener mi Nació el propio. Dibujar mis propios dibujos. Durante mucho tiempo dibujar para mí fue solo un hobby y cuando tenía 22 años empecé a tratarlo como algo más profesional. Mi contacto con el dibujo digital empezó muy tarde, pero era algo que me cambió por completo y descubrí todas las posibilidades que me dio el dibujo digital fue lo que más me motivó a seguir y llevarlo a un lado más profesional. Hoy estudio ilustración y, paralelamente, también vendo mis obras o creo arte. para el cliente que me contrata "
        break;
        default:
            textAbout.textContent = "My name is Daniel Silva, I'm 24 years old and I currently work with illustration and sales of commissions. My trajectory with art started when I was only 9 years old when I started to copy some drawings and that's where the interest in having my own drawings. For a long time, drawing for me was just a hobby and only at the age of 22 I started to treat it as something more professional. My contact with digital drawing started very late, but it was something that changed me completely and I discovered all the possibilities that digital drawing gave me was what motivated me the most to continue and take it to a more professional side. Today I study illustration and, parallel to that, I also sell my work or create art for the client who hires me."
        break;
    }
}

menuMobileIcon.addEventListener('click',function(){
    menuMobile.classList.toggle('active')
})


function animateElements(){
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4
    animationsElements.forEach((element) =>{
        if(windowTop > element.offsetTop){
            element.classList.add('animate')
        }else{
            element.classList.remove('animate')
        }
    })
}

function changeMenuOptions(){
    const windowTop = window.pageYOffset + window.innerHeight / 4
    allSectionsContent.forEach((section,index) =>{
        if(windowTop > section.offsetTop){
            removeAllActiveMenuClass()
            menuOptions[index].classList.add('active')
        }
    })
}

window.addEventListener('scroll',function(){

    if(window.pageYOffset > menu.offsetTop){
        menu.classList.add('sticky')
        goToTop.classList.add('active')
    }else{
        menu.classList.remove('sticky')
        goToTop.classList.remove('active')
    }

    animateElements()
    changeMenuOptions()
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





