/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title-as',{}); 
sr.reveal('.button-as',{delay: 200}); 
sr.reveal('.home__img-as',{delay: 400}); 
sr.reveal('.home__social-icon-as',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img-as',{}); 
sr.reveal('.about__subtitle-as',{delay: 400}); 
sr.reveal('.about__text-as',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle-as',{}); 
sr.reveal('.skills__img-as',{delay: 600});
sr.reveal('.skill__name-as',{ interval: 200}); 


/*SCROLL WORK*/
sr.reveal('.projects__img-as',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input-as',{interval: 200}); 

/*==== PROJECT ===== */
