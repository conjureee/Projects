/* 1-rd section - Greeting Screen */

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.greet-screen .slide');
    const dotsContainer = document.querySelector('.greet-screen .dots');
    let currentSlideIndex = 0;
    let autoSlideInterval;

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.greet-screen .dots div');

    function updateActiveSlide(newIndex) {
        slides[currentSlideIndex].classList.remove('active');
        dots[currentSlideIndex].classList.remove('active');

        currentSlideIndex = newIndex;

        slides[currentSlideIndex].classList.add('active');
        dots[currentSlideIndex].classList.add('active');

        startTextAnimation(slides[currentSlideIndex]);
    }

    function autoSlide() {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        updateActiveSlide(nextIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(autoSlide, 20000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            const newIndex = parseInt(dot.dataset.index, 10);
            updateActiveSlide(newIndex);
        });
    });

    updateActiveSlide(0);
    startAutoSlide();

    function startTextAnimation(slide) {
        const paragraphs = slide.querySelectorAll('.content p');
        let currentParagraphIndex = 0;

        if (slide._animationTimeouts) {
            slide._animationTimeouts.forEach((timeout) => clearTimeout(timeout));
        }
        slide._animationTimeouts = [];

        const displayWords = (paragraph, isLast) => {
            const words = paragraph.querySelectorAll('.text');
            let wordIndex = 0;

            words.forEach((word) => word.classList.remove('visible'));

            const interval = setInterval(() => {
                if (wordIndex < words.length) {
                    words[wordIndex].classList.add('visible');
                    wordIndex++;
                } else {
                    clearInterval(interval);

                    if (!isLast) {
                        slide._animationTimeouts.push(
                            setTimeout(() => {
                                paragraph.style.display = 'none';
                                currentParagraphIndex++;

                                if (currentParagraphIndex < paragraphs.length) {
                                    const nextParagraph = paragraphs[currentParagraphIndex];
                                    nextParagraph.style.display = 'block';
                                    displayWords(nextParagraph, currentParagraphIndex === paragraphs.length - 1);
                                }
                            }, 1000)
                        );
                    }
                }
            }, 500);
        };

        paragraphs.forEach((p) => {
            p.style.display = 'none';
        });

        if (paragraphs.length > 0) {
            paragraphs[0].style.display = 'block';
            displayWords(paragraphs[0], paragraphs.length === 1);
        }
    }
});

/* 3-rd section - Products */

const sliderContainer = document.querySelector('.slider-container');
const cardWidth = sliderContainer.offsetWidth * 0.231;
const cardGap = (2 / 100) * window.innerWidth;
const scrollAmount = 2 * (cardWidth + cardGap);

const totalScrollWidth = sliderContainer.scrollWidth;
const visibleWidth = sliderContainer.offsetWidth;

document.querySelector('.left-arrow').addEventListener('click', () => {
    sliderContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
    });
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    const currentScroll = sliderContainer.scrollLeft;
    const remainingScroll = totalScrollWidth - visibleWidth - currentScroll;
    
    if (remainingScroll > scrollAmount) {
        sliderContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    } else {
        sliderContainer.scrollBy({
            left: remainingScroll,
            behavior: 'smooth',
        });
    }
});

/* 4-th section - FAQ */

document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});

/* 6-th section - Ticket Carousel */

document.addEventListener("DOMContentLoaded", () => {
    const tickets = [
        { 
            band: "Slipknot",
            date: "June 4 - June 28, 2025", 
            description: "Slipknot: Anniversary Tour", 
            tourType: "European Tour" 
        },
        { 
            band: "Alice in Chains", 
            date: "May 10 - May 16, 2025", 
            description: "Alice in Chains", 
            tourType: "North American Tour" 
        },
        { 
            band: "Metallica", 
            date: "April 12 - November 15, 2025", 
            description: "Metallica: 72 Seasons Tour", 
            tourType: "Worldwide Tour" 
        },
        { 
            band: "Pantera", 
            date: "April - June 2025", 
            description: "Pantera", 
            tourType: "No Repeat Weekends Tour" 
        },
        { 
            band: "Guns N' Roses", 
            date: "May 23 - July 31, 2025", 
            description: "Guns N' Roses: Not in This Lifetime Tour", 
            tourType: "World Tour" 
        }
    ];

    const backgrounds = [
        "images/bands/Slipknot.jpg",
        "images/bands/AliceInChains.jpg",
        "images/bands/Metallica.webp",
        "images/bands/Pantera.jpg",
        "images/bands/GunsNRoses.jpg"
    ];

    const logos = [
        "images/mini-logos/slipknot.png",
        "images/mini-logos/aliceInChains.png",
        "images/mini-logos/metallica.png",
        "images/mini-logos/Pantera.png",
        "images/mini-logos/gunsNRoses.jpg"
    ];

    const sliderTrack = document.querySelector(".slider-track");

    tickets.forEach((ticket, index) => {
        const ticketDiv = document.createElement("div");
        ticketDiv.classList.add("ticket");
        if (index === 0) ticketDiv.classList.add("active");

        ticketDiv.innerHTML = `
            <div class="ticket-left">
                <div class="barcode">
                    <img src="images/icons/Barcode.png" alt="Barcode">
                </div>
            </div>
            <div class="ticket-right" style="background-image: url(${backgrounds[index]}); background-size: cover;">
                <div class="gradient"></div>    
                <div class="ticket-info">
                    <div class="band-mini-logo">
                        <a href="#"><img src="${logos[index]}" alt="${ticket.band} Logo"></a>
                    </div>
                    <div class="band-description">
                        <div class="band-name">${ticket.description}</div>
                        <div class="tour-type">${ticket.tourType}</div>
                        <div class="tour-date">${ticket.date}</div>
                    </div>
                </div>
            </div>
        `;

        sliderTrack.appendChild(ticketDiv);
    });

    const ticketsElements = document.querySelectorAll(".ticket");
    let currentIndex = 0;

    document.querySelector(".left-arrow").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + tickets.length) % tickets.length;
        updateSlider();
    });

    document.querySelector(".right-arrow").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % tickets.length;
        updateSlider();
    });

    function updateSlider() {
        const sliderWidth = document.querySelector(".slider").offsetWidth;
        const ticketWidth = ticketsElements[0].offsetWidth;
        const offset = (sliderWidth - ticketWidth) / 2;

        const translateValue = currentIndex * ticketWidth - offset;
        sliderTrack.style.transform = `translateX(-${translateValue}px)`;

        ticketsElements.forEach((ticket, index) => {
            ticket.classList.toggle("active", index === currentIndex);
        });
    }

    updateSlider();
});
