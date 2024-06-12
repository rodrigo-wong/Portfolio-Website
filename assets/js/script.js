/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }

}
// Function to close the menu when a nav link is clicked
function closeMenu() {
  var menuBtn = document.getElementById("myNavMenu");
  menuBtn.className = "nav-menu";
}

// Add event listeners to nav links
document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function(link) {
    link.addEventListener("click", closeMenu);
  });
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.getElementById('darkModeToggle');
  icon.classList.toggle('uil-moon');
  icon.classList.toggle('uil-sun');
}

// Event listener to keep dark mode preference
window.onload = () => {
  const darkMode = localStorage.getItem('dark-mode');
  if (darkMode === 'enabled') {
      document.body.classList.add('dark-mode');
      document.getElementById('darkModeToggle').classList.add('uil-sun');
      document.getElementById('darkModeToggle').classList.remove('uil-moon');
  }
};

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const darkMode = document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
  localStorage.setItem('dark-mode', darkMode);
  const icon = document.getElementById('darkModeToggle');
  icon.classList.toggle('uil-moon');
  icon.classList.toggle('uil-sun');
}

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: false     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: false
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: false
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  var modals = document.getElementsByClassName("modal");
  var modalButtons = document.querySelectorAll("[id^='openModal']");
  var closeButtons = document.getElementsByClassName("close");



  // Function to open a modal
  function openModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = "block";
  }

  // Add click events to open modal buttons
  for (var i = 0; i < modalButtons.length; i++) {
      modalButtons[i].addEventListener('click', function() {
          var modalId = "myModal" + this.id.replace("openModal", "");
          openModal(modalId);
      });
  }

  // Add click events to close buttons
  for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', function() {
          var modalId = "myModal" + this.dataset.modal;
          var modal = document.getElementById(modalId);
          modal.style.display = "none";
      });
  }

  // Click outside to close
  window.onclick = function(event) {
      for (var i = 0; i < modals.length; i++) {
          if (event.target == modals[i]) {
              modals[i].style.display = "none";
          }
      }
  }
});


window.addEventListener('scroll', scrollActive)