// =================== Show Menu ===================
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the vertical scroll is greater than or equal to 50
    this.scrollY >= 50
        ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

const scrollHeader = () => {
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 
    ? header.classList.add('scroll-header') 
    : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 
    ? scrollUp.classList.add('show-scroll') 
    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*===== scroll animation ======= */

const sr = ScrollReveal({
  origin:'top',
  distance: '80px',
  duration: 2500,
  delay:200,
  reset:true,
})

sr.reveal('.home_img,new_data, .care_img, .contact_content, .footer')
sr.reveal('.home_data, ,care_list, .contact_img', {delay: 250})
sr.reveal('.new_card',{delay: 250, interval: 50})
sr.reveal('.shop_card', {interval: 50})