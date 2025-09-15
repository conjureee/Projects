/* Text and Photo section */

document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".about-us-container");
    let currentIndex = 0;

    const scrollToCurrent = () => {
        containers[currentIndex].scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            if (currentIndex < containers.length - 1) {
                currentIndex++;
                scrollToCurrent();
            }
        } else if (event.key === "ArrowLeft") {
            if (currentIndex > 0) {
                currentIndex--;
                scrollToCurrent();
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const disclaimer = document.querySelector(".key-disclaimer");
    const section = document.querySelector(".about-us");

    window.addEventListener("scroll", () => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPos = window.scrollY + window.innerHeight;

        if (scrollPos > sectionTop && scrollPos < sectionTop + sectionHeight) {
            disclaimer.classList.add("active");
        } else {
            disclaimer.classList.remove("active");
        }
    });
});


/* Cooperators section */

document.querySelectorAll('.flex-item').forEach(item => {
    item.addEventListener('click', () => {
        const infoContainer = document.querySelector('.info-container');
        const activeItem = document.querySelector('.flex-item.active');

        if (activeItem === item) {
            activeItem.classList.remove('active');
            infoContainer.classList.remove('active');
            infoContainer.style.maxHeight = '0';
            return;
        }

        if (activeItem) {
            activeItem.classList.remove('active');
        }

        item.classList.add('active');
        infoContainer.innerHTML = `<p class="text">${item.dataset.info || 'More details coming soon!'}</p>`;
        infoContainer.classList.add('active');
        infoContainer.style.maxHeight = '30vh';
    });
});
