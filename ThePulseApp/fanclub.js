document.addEventListener('DOMContentLoaded', () => {

    /* Fanclub Section */

    const card = document.querySelector('.fanclub-card');
    const flipButton = document.getElementById('flip-button');
    const confirmBtn = document.querySelector(".btn");
    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const checkmarkContainer = document.querySelector(".confirm-button");
    const checkmark = document.querySelector(".checkmark");
    const formContainer = document.querySelector('.card-info');

    const nameContainer = document.querySelector('.name-container');
    const surnameContainer = document.querySelector('.surname-container');
    let isPreviewMode = false;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    const cardFront = document.querySelector('.card-front');
    if (cardFront) {
        cardFront.appendChild(buttonsContainer);
    } else {
        console.error("card-front not found");
    }

    function capitalizeFirstLetter(input) {
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    }

    function formatInputs() {
        if (nameInput.value.trim() !== "") {
            nameInput.value = capitalizeFirstLetter(nameInput.value.trim());
        }
        if (surnameInput.value.trim() !== "") {
            surnameInput.value = capitalizeFirstLetter(surnameInput.value.trim());
        }
    }

    function areInputsFilled() {
        return nameInput.value.trim() !== "" && surnameInput.value.trim() !== "";
    }

    function updateButtonsState() {
        if (isPreviewMode) {
            checkmark.classList.toggle("active-checkmark", areInputsFilled());
            confirmBtn.classList.toggle("disabled-btn", !areInputsFilled());
            confirmBtn.disabled = !areInputsFilled();

            nameContainer.classList.add("shrink-spacing");
            surnameContainer.classList.add("shrink-spacing2");
        } else {
            checkmark.classList.remove("active-checkmark");
            confirmBtn.classList.add("disabled-btn");
            confirmBtn.disabled = true;

            nameContainer.classList.remove("shrink-spacing");
            surnameContainer.classList.remove("shrink-spacing2");
        }
    }

    if (checkmarkContainer) {
        checkmarkContainer.addEventListener("click", () => {
            isPreviewMode = !isPreviewMode;
            formContainer.classList.toggle("confirmed", isPreviewMode);

            document.querySelectorAll('.card-type-button').forEach(button => {
                button.classList.toggle('hidden', isPreviewMode);
                button.classList.toggle('visible', !isPreviewMode);
            });

            formatInputs();
            updateButtonsState();
        });
    }

    confirmBtn.addEventListener("click", () => {
        if (!confirmBtn.disabled) {
            nameInput.value = "";
            surnameInput.value = "";
            isPreviewMode = false;
            formContainer.classList.remove("confirmed");

            document.querySelectorAll('.card-type-button').forEach(button => {
                button.classList.remove('hidden');
                button.classList.add('visible');
            });
            updateButtonsState();

            showSuccessMessage("Success!", "Fanclub Card has been added to the basket");
        }
    });

    nameInput.addEventListener("input", updateButtonsState);
    surnameInput.addEventListener("input", updateButtonsState);

    nameInput.addEventListener("blur", formatInputs);
    surnameInput.addEventListener("blur", formatInputs);

    updateButtonsState();

    const cardBack = document.querySelector('.card-back');
    const membershipTier = document.querySelector('.membership-tier');
    const benefitsTitle = document.querySelector('.benefits h2');
    const benefitsList = document.querySelector('.benefits ul');
    const fanclubSection = document.querySelector('.fanclub-section');

    const cardTypes = {
        phantom: {
            frontBg: "css/images/backgrounds/fanclub-phantom.jpg",
            backBg: "css/images/backgrounds/fanclub-phantom2.jpg",
            name: "Phantom",
            glowClass: "phantom-glow",
            gradient: "linear-gradient(120deg, rgba(76, 59, 207, 0.8) 0%, rgba(20, 20, 20, 1) 100%)",
            benefits: [
                "For passionate lovers of powerful music",
                "Priority access to new content",
                "5% Off for VIP tickets to events",
                "Monthly fan club newsletters with inside scoops and updates",
                "Personalized shoutouts with video messages directly from your favorite performers"
            ]
        },
        ruby: {
            frontBg: "css/images/backgrounds/fanclub-ruby.jpg",
            backBg: "css/images/backgrounds/fanclub-ruby2.jpg",
            name: "Ruby",
            glowClass: "ruby-glow",
            gradient: "linear-gradient(120deg, rgba(150, 20, 40, 0.8) 0%, rgba(60, 0, 10, 1) 100%)",
            benefits: [
                "For devoted fans seeking premium experiences",
                "Early access to limited editions",
                "Invitations to exclusive parties",
                "Meet and greet with artists",
                "10% Off for Exclusive Stuff"
            ]
        },
        emerald: {
            frontBg: "css/images/backgrounds/fanclub-emerald.avif",
            backBg: "css/images/backgrounds/fanclub-emerald.avif",
            name: "Emerald",
            glowClass: "emerald-glow",
            gradient: "linear-gradient(120deg, rgba(80, 150, 110, 0.8) 0%, rgba(20, 60, 40, 1) 100%)",
            benefits: [
                "For enthusiastic supporters who crave connection and exclusivity",
                "Exclusive content previews",
                "Special merchandise bundles",
                "Each Sunday 15% Off for Clothes of Chosen Bands",
                "Behind-the-scenes access"
            ]
        }
    };

    Object.keys(cardTypes).forEach(type => {
        const button = document.createElement('button');
        button.classList.add('card-type-button');
        button.dataset.type = type; // Dodajemy data-type dla łatwiejszego wyszukiwania
        button.style.backgroundImage = `url(css/images/backgrounds/fanclub-${type}.jpg)`;
        button.addEventListener('click', () => changeCardType(type, button));
        buttonsContainer.appendChild(button);
    });

    function changeCardType(type, clickedButton) {
        const selected = cardTypes[type];
        card.style.opacity = "0";
        setTimeout(() => {
            fanclubSection.style.transition = "background 2s ease-in-out";
            fanclubSection.style.background = selected.gradient;
            cardFront.style.backgroundImage = `url(${selected.frontBg})`;
            cardBack.style.backgroundImage = `url(${selected.backBg})`;
            membershipTier.textContent = selected.name;
            membershipTier.className = `membership-tier ${selected.glowClass}`;
            benefitsTitle.className = selected.glowClass;
            benefitsTitle.textContent = `${selected.name} Card Benefits`;
            benefitsList.innerHTML = "";
            selected.benefits.forEach(benefit => {
                const li = document.createElement("li");
                li.textContent = benefit;
                benefitsList.appendChild(li);
            });
            document.querySelectorAll('.card-type-button').forEach(btn => btn.classList.remove('selected'));
            clickedButton.classList.add('selected');
            card.style.opacity = "1";
        }, 400);
    }

    if (flipButton) {
        flipButton.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    }

    setTimeout(() => {
        if (card) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    }, 300);

    const firstButton = buttonsContainer.firstChild;
    if (firstButton) {
        firstButton.classList.add('selected');
        changeCardType(Object.keys(cardTypes)[0], firstButton);
    }

    /* Opinion Slider */

    let cardData = [
        {
            name: "Chris Fehn",
            nickname: "@RhythmicRebel",
            img: "images/customers/Chris-Fehn.jpg",
            bg: "css/images/backgrounds/fanclub-phantom.jpg",
            text: `Joining The Pulse Fan Club has been an exhilarating experience. The community here is vibrant and full of life. I've met so many fellow fans who share my passion. The events and perks offered are unmatched, making every moment memorable. The level of support and camaraderie is truly heartwarming, and it feels like a second family.`,
            rating: 4
        },
        {
            name: "Corey Taylor",
            nickname: "@SourStone",
            img: "images/customers/Corey-Taylor.png",
            bg: "css/images/backgrounds/fanclub-phantom.jpg",
            text: `This club is amazing, the perks are just too good! I've never felt more connected to a community. The exclusive content and behind-the-scenes access are truly top-notch. It's a place where fans can feel valued and appreciated. Every event is a new adventure, and the friendships formed here are priceless.`,
            rating: 5
        },
        {
            name: "Mick Thomson",
            nickname: "@ShredMaster",
            img: "images/customers/Mick-Thomson.webp",
            bg: "css/images/backgrounds/fanclub-phantom.jpg",
            text: `The best fan club I've ever been part of. Highly recommend! The level of engagement and interaction is unparalleled. I've had the chance to participate in unique events and even meet some of my idols. It's been a dream come true. The overall experience has exceeded all my expectations, and I can't imagine my life without it now.`,
            rating: 5
        },
        {
            name: "Paul Gray",
            nickname: "@BassBeast",
            img: "images/customers/Paul-Gray.webp",
            bg: "css/images/backgrounds/fanclub-emerald.jpg",
            text: `The Pulse Fan Club has exceeded all my expectations. The community is welcoming, and the benefits are fantastic. From exclusive content to special events, there's always something to look forward to. It's the ultimate fan experience. The sense of belonging and shared enthusiasm makes every moment worthwhile.`,
            rating: 5
        },
        {
            name: "Joey Jordison",
            nickname: "@PercussionPro",
            img: "images/customers/Joey-Jordison.jpg",
            bg: "css/images/backgrounds/fanclub-ruby.jpg",
            text: `Joining The Pulse Fan Club has been an exhilarating experience. The support from fellow fans is incredible, and the access to exclusive perks is unmatched. It's a place where I truly feel at home among other enthusiasts. The regular updates and special offers keep the excitement alive.`,
            rating: 5
        },
        {
            name: "Jim Root",
            nickname: "@RiffMaestro",
            img: "images/customers/Jim-Root.webp",
            bg: "css/images/backgrounds/fanclub-emerald.jpg",
            text: `The best fan club I've ever been part of. The camaraderie and sense of belonging are truly special. The club offers so many unique opportunities that make being a member an incredible experience. I couldn't be happier to be part of this community. Every interaction is filled with enthusiasm and genuine connection. I think that cooperation with The Pulse was the best idea of my life!`,
            rating: 5
        }
    ];    

    const container = document.querySelector(".card-container");
    const leftArrow = document.querySelector(".caret-left");
    const rightArrow = document.querySelector(".caret-right");

    let currentIndex = 0;
    const visibleCards = 5;

    function createCard(data, index) {
        return `
        <div class="card">
            <div class="top-section">
                <img src="${data.img}" alt="Customer" class="profile-img">
                <div class="text-section">
                    <h1 class="customer-name">${data.name}</h1>
                    <h3 class="customer-nickname">${data.nickname}</h3>
                </div>
                <div class="card-line"></div>
                <a href="#top" class="card-link" data-index="${index}">
                    <img src="${data.bg}" alt="Card Type" class="background-img">
                </a>
            </div>
            <div class="bottom-section">
                <p class="blurry-text">${data.text}</p>
                <span class="toggle-button"></span>
                <div class="star-section">${generateStars(data.rating)}</div>
            </div>
        </div>`;
    }

    function generateStars(rating) {
        let stars = "";
        for (let i = 0; i < 5; i++) {
            stars += `<svg class="star" viewBox="0 0 24 24" width="24" height="24" fill="${i < rating ? "gold" : "gray"}">
                <path d="M12 2L15 8l6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1z"/>
            </svg>`;
        }
        return stars;
    }

    function renderCards() {
        container.innerHTML = cardData.map((data, index) => createCard(data, index)).join("");
        updateCardStyles();
        setupToggleButtons();
        setupCardLinks();
    }

    function updateCardStyles() {
        const cards = document.querySelectorAll(".card");
        const totalCards = cardData.length;

        cards.forEach((card, index) => {
            let offset = index - currentIndex;

            if (offset < -Math.floor(totalCards / 2)) {
                offset += totalCards;
            } else if (offset > Math.floor(totalCards / 2)) {
                offset -= totalCards;
            }

            const absOffset = Math.abs(offset);

            if (absOffset <= 2) {
                card.style.transform = `translateX(${offset * 50}%) scale(${absOffset === 0 ? 1 : absOffset === 1 ? 0.9 : 0.8}) translateY(${absOffset === 0 ? "-10px" : absOffset === 1 ? "-20px" : "10px"})`;
                card.style.opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.8 : 0.6;
                card.style.filter = absOffset === 0 ? "none" : "blur(2px)";
                card.style.zIndex = absOffset === 0 ? 3 : absOffset === 1 ? 2 : 1;
                card.style.transition = "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease";
                
                card.style.pointerEvents = absOffset === 0 ? "auto" : "none";
                card.style.userSelect = absOffset === 0 ? "auto" : "none";
            } else {
                card.style.transform = `translateX(${offset * 50}%) scale(0.8) translateY(10px)`;
                card.style.opacity = 0;
                card.style.filter = "blur(2px)";
                card.style.zIndex = 0;
                card.style.transition = "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease";
                
                card.style.pointerEvents = "none";
                card.style.userSelect = "none";
            }
        });
    }

    function setupToggleButtons() {
        document.querySelectorAll(".toggle-button").forEach((button) => {
            const textElement = button.previousElementSibling;
            textElement.style.height = "20vh";
            textElement.style.overflow = "hidden";
            textElement.style.transition = "height 0.3s ease";

            const scrollHeight = textElement.scrollHeight;
            const clientHeight = textElement.clientHeight;

            if (scrollHeight > clientHeight) {
                button.textContent = "...";
                button.style.cursor = "pointer";
            } else {
                button.style.display = "none";
                textElement.classList.add("no-gradient");
            }

            button.addEventListener("click", function () {
                if (textElement.style.height === "20vh" || !textElement.style.height) {
                    const fullHeight = Math.min(scrollHeight, textElement.offsetHeight * 1.8);
                    textElement.style.height = `${fullHeight}px`;
                    this.textContent = "Show less";
                    textElement.classList.add("no-gradient");
                } else {
                    textElement.style.height = "20vh";
                    this.textContent = "...";
                    textElement.classList.remove("no-gradient");
                }
            });
        });
    }

    function setupCardLinks() {
        const links = document.querySelectorAll(".card-link");
        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault(); // Blokujemy domyślne przewijanie
                const index = parseInt(e.currentTarget.getAttribute("data-index"));
                const cardType = getCardTypeFromBg(cardData[index].bg);
                const button = document.querySelector(`.card-type-button[data-type="${cardType}"]`);
                if (button) {
                    changeCardType(cardType, button);
                    document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error(`No button found for type: ${cardType}`);
                    document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    function getCardTypeFromBg(bg) {
        const match = bg.match(/fanclub-(\w+)\.(jpg|avif)/i);
        return match ? match[1].toLowerCase() : "phantom";
    }

    function addNewCard(newCard) {
        cardData.push(newCard);
        renderCards();
    }

    if (leftArrow) {
        leftArrow.addEventListener("click", function () {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = cardData.length - 1;
            }
            updateCardStyles();
        });
    }

    if (rightArrow) {
        rightArrow.addEventListener("click", function () {
            currentIndex++;
            if (currentIndex >= cardData.length) {
                currentIndex = 0;
            }
            updateCardStyles();
        });
    }

    renderCards();

    /* Counter Section */
    
    const digitContainers = document.querySelectorAll(".digit-container");

    let count = parseInt([...document.querySelectorAll(".digit")].map(d => d.textContent).join(""), 10);
    
    function updateCounter() {
        let oldCountStr = count.toString().padStart(digitContainers.length, "0");
        count++;
        let newCountStr = count.toString().padStart(digitContainers.length, "0");
    
        digitContainers.forEach((container, index) => {
            let oldDigit = oldCountStr[index];
            let newDigit = newCountStr[index];
    
            if (oldDigit !== newDigit) {
                let digitElement = container.querySelector(".digit");
                let newDigitElement = document.createElement("span");
                
                newDigitElement.classList.add("digit");
                newDigitElement.textContent = newDigit;
                newDigitElement.style.transform = "translateY(100%)";
    
                container.appendChild(newDigitElement);
    
                setTimeout(() => {
                    digitElement.style.transform = "translateY(-100%)";
                    newDigitElement.style.transform = "translateY(0%)";
                }, 50);
    
                setTimeout(() => {
                    container.removeChild(digitElement);
                }, 500);
            }
        });
    }
    
    setInterval(updateCounter, 6000);
    
});