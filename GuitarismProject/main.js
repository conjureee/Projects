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

document.addEventListener('DOMContentLoaded', function() {
   const images = document.querySelectorAll('.images img');
   let currentImageIndex = 0;
   setInterval(() => {
     images[currentImageIndex].classList.remove('active');
     currentImageIndex = (currentImageIndex + 1) % images.length;
     images[currentImageIndex].classList.add('active');
   }, 4500);
 });

const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.content');
const allSliders = document.querySelectorAll('.logos-slider');
tabs.forEach((tab, index) => {
   tab.addEventListener('click', (e) => {
     tabs.forEach(tab => {
       tab.classList.remove('active');
     });
     tab.classList.add('active');
 
     var line = document.querySelector('.line');
     line.style.width = tab.offsetWidth + 'px';
     line.style.left = tab.offsetLeft + 'px';
 
     allContent.forEach(content => content.classList.remove('active'));
     allContent[index].classList.add('active');
 
     allSliders.forEach(slider => slider.classList.remove('active'));
     const activeSlider = allContent[index].querySelectorAll('.logos-slider');
     activeSlider.forEach(slider => slider.classList.add('active'));
   });
});

