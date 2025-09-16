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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlides(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName('mySlides');
  var thumbnails = document.getElementsByClassName('thumbnail');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    thumbnails[i].classList.remove('active');
  }
  slides[slideIndex - 1].style.display = 'block';
  thumbnails[slideIndex - 1].classList.add('active');
}

const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.content');
tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach(tab => {
      tab.classList.remove('highlighted');
    });
    tab.classList.add('highlighted');

    var line = document.querySelector('.line');
    line.style.width = e.target.offsetWidth + 'px';
    line.style.left = e.target.offsetLeft + 'px';

    allContent.forEach(content => content.classList.remove('highlighted'));
    allContent[index].classList.add('highlighted');
  });
});