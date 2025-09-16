const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
         entry.target.classList.add('show');
      } else {
         entry.target.classList.remove('show');
      }
   });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('header .navMenu');
const container = document.querySelector('header .container');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   navMenu.classList.toggle('active');
   container.classList.toggle('shifted');
 });
 
const navLinks = document.querySelectorAll('.navLink');
navLinks.forEach(n => {
   n.addEventListener('click', () => {
     hamburger.classList.remove('active');
     navMenu.classList.remove('active');
     container.classList.remove('shifted');
   });
 });