/* Hamburger */

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
    });

    document.querySelectorAll(".hamburger-link").forEach((link) =>
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            hamburgerMenu.classList.remove("active");
        })
    );
});

/* Customisation of play buttons */

document.addEventListener('DOMContentLoaded', function() {
    const songs = [
        {
            artist: "Slipknot",
            title: "Sulfur",
            cover: "images/album-covers/all-hope-is-gone.jpg",
            audio: "images/audios/Sulfur.mp3"
        },
        {
            artist: "Slipknot",
            title: "(sic)",
            cover: "images/album-covers/slipknot.jpg",
            audio: "images/audios/sic.mp3"
        },
        {
            artist: "Slipknot",
            title: "People = Shit",
            cover: "images/album-covers/iowa.jpg",
            audio: "images/audios/People-Shit.mp3"
        }
    ];

    function selectRandomSong() {
        const randomIndex = Math.floor(Math.random() * songs.length);
        return songs[randomIndex];
    }

    function updateSongDetails(song) {
        document.getElementById('album-cover').src = song.cover;
        document.getElementById('song-title').textContent = song.title;
        document.getElementById('artist-name').textContent = song.artist;
        document.getElementById('audio-source').src = song.audio;
        document.getElementById('audio-player').load();
    }

    const selectedSong = selectRandomSong();
    updateSongDetails(selectedSong);

    const audioPlayer = document.getElementById('audio-player');
    const progressBar = document.getElementById('progress');
    const progressContainer = document.getElementById('progress-bar');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');
    const playPauseBtn = document.getElementById('play-pause');
    const playIcon = document.getElementById('play-icon');
    const likeButton = document.getElementById('like-button');
    const volumeSlider = document.getElementById('volume-slider');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    audioPlayer.addEventListener('loadedmetadata', function() {
        durationElement.textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('timeupdate', function() {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
    });

    playPauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playIcon.src = 'images/icons/pause-button.svg';
            playIcon.alt = 'Pause';
        } else {
            audioPlayer.pause();
            playIcon.src = 'images/icons/play-button.svg';
            playIcon.alt = 'Play';
        }
    });

    likeButton.addEventListener('click', function() {
        const likeIcon = document.getElementById('like-icon');
        const likedIcon = document.getElementById('liked-icon');
        
        if (likeIcon.style.display === 'none') {
            likeIcon.style.display = '';
            likedIcon.style.display = 'none';
        } else {
            likeIcon.style.display = 'none';
            likedIcon.style.display = '';
        }
    });

    volumeSlider.addEventListener('input', function() {
        audioPlayer.muted = false;
        audioPlayer.volume = volumeSlider.value;
        const volumePercent = volumeSlider.value * 100;
        volumeSlider.style.background = `linear-gradient(to right, white ${volumePercent}%, rgba(255, 255, 255, 0.2) ${volumePercent}%)`;
    });

    progressContainer.addEventListener('click', function(event) {
        const containerWidth = progressContainer.offsetWidth;
        const clickPosition = event.offsetX;
        const newTime = (clickPosition / containerWidth) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    });

    hamburgerMenu.addEventListener('click', function() {
        if (hamburgerMenu.classList.contains('menu-open')) {
            audioPlayer.pause();
            playIcon.src = 'images/icons/play-button.svg';
            playIcon.alt = 'Play';
        }
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secondsRemaining = Math.floor(seconds % 60);
        return `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
    }
});

/* Dynamic Popup */

function showSuccessMessage(title, description) {
    const existingMessage = document.querySelector(".message-container");
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageContainer = document.createElement("section");
    messageContainer.classList.add("message-container");

    messageContainer.innerHTML = `
        <section class="success-message">
            <div class="left-section">
                <h1>${title}</h1>
                <h5>${description.replace("{days}", getRandomDays())}</h5>
            </div>
            <div class="right-section">
                <div class="dot-section">
                    <div class="dotted-border"></div>
                    <div class="dotted-border"></div>
                    <div class="dotted-border"></div>
                </div>
                <img src="images/icons/green-checkmark.svg" alt="Green Checkmark">
            </div>
            <div class="triangle-left"></div>
            <div class="triangle-right"></div>
        </section>
    `;

    document.body.appendChild(messageContainer);

    setTimeout(() => {
        messageContainer.classList.add("message-container-show");
    }, 100);

    setTimeout(() => {
        messageContainer.classList.remove("message-container-show");
        setTimeout(() => messageContainer.remove(), 600);
    }, 3000);
}

function getRandomDays() {
    return Math.floor(Math.random() * 13) + 2;
}

// Header Hide and Show

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Before the end of the project

const selectedItems = ["", "postersAndArt", "aboutUs", "joinUs"];
const links = document.querySelectorAll('.hamburger-link');

links.forEach(link => {
    const camelCaseText = link.textContent
        .toLowerCase()
        .split(' ')
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    if (selectedItems.includes(camelCaseText)) {
        link.style.color = 'greenyellow';
    }
});

