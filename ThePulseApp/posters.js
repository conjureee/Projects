// THE WALL

const wallContent = document.getElementById('wall-content');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

const overlayContent = document.createElement('div');
overlayContent.className = 'overlay-content';
overlay.appendChild(overlayContent);

const overlayImage = document.createElement('div');
overlayImage.className = 'overlay-image';
overlayContent.appendChild(overlayImage);

const overlayInfo = document.createElement('div');
overlayInfo.className = 'overlay-info';
overlayContent.appendChild(overlayInfo);

const title = document.createElement('h2');
overlayInfo.appendChild(title);

const description = document.createElement('p');
overlayInfo.appendChild(description);

const button = document.createElement('button');
button.className = 'dynamic-button';
overlayInfo.appendChild(button);

const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = `
            <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#fff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <title>cross-circle</title>
                    <desc>Created with Sketch Beta.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -1087.000000)" fill="#fff">
                            <path d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z" id="cross-circle" sketch:type="MSShapeGroup">
                            </path>
                        </g>
                    </g>
                </g>
            </svg>
        `;
        overlay.appendChild(closeButton);

const postersData = [
    { 
        class: 'poster-1', 
        bgImage: 'url(css/images/posters/poster1.jpg)', 
        title: 'Iowa - Slipknot', 
        description: 'The second studio album by Slipknot, released in 2001, represents one of the most intense and raw releases in metal history. Known for its brutal honesty, dark themes, and unparalleled aggression, the album features powerful tracks like "Left Behind," "My Plague," and "The Heretic Anthem." Each song delves deep into the band’s exploration of pain, anger, and human despair, pushing the boundaries of nu-metal and earning critical acclaim worldwide. With its visceral energy and unapologetic artistry, Iowa became a landmark album, solidifying Slipknot’s status as one of the most influential bands in the genre. For fans and collectors, this is more than music—it’s an experience of catharsis and chaos.', 
        buttonText: 'Add to Basket', 
        buttonIcon: 'fas fa-shopping-basket',
    },
    {
        class: 'poster-2',
        bgImage: 'url(css/images/posters/poster2.jpg)',
        title: 'Chuck Schuldiner - Death Poster',
        description: 'This poster honors Chuck Schuldiner, the legendary guitarist and vocalist of Death, often hailed as "The Father of Death Metal." With his pioneering vision, Chuck transformed the genre by introducing technical sophistication, thought-provoking lyrics, and melodic intricacy. Albums like "Scream Bloody Gore," "Leprosy," and "The Sound of Perseverance" redefined extreme music, influencing countless artists across generations. Chuck’s profound philosophical approach to songwriting, combined with his unparalleled technical skill, elevated death metal into an art form. This image serves as a tribute to his enduring legacy—a testament to his passion, creativity, and the powerful impact he left on music fans and musicians alike. Displaying this poster is a celebration of the brilliance and spirit of a true innovator.', 
        buttonText: 'Add to Basket', 
        buttonIcon: 'fas fa-shopping-basket',
    },    
    {
        class: 'poster-3',
        bgImage: 'url(css/images/posters/poster3.jpg)',
        title: 'Eddie Van Halen - Legendary Guitarist',
        description: 'This image captures Eddie Van Halen, one of the most innovative and virtuosic guitarists in the history of rock music. Known for his groundbreaking techniques like tapping, his creative approach reshaped the way the guitar is played in modern music. As the co-founder of Van Halen, he created unforgettable tracks such as "Eruption," which has become a hallmark of technical excellence. Eddie was celebrated not only for his unique guitar design but also for his immense stage presence and passion for music. His contribution to albums such as "1984" and "Van Halen I" has left an everlasting impact on rock history. A true legend, Eddie inspired countless musicians across the globe with his extraordinary talent, boundless energy, and innovative spirit that transcends generations. Today, his legacy endures as his work continues to be celebrated and cherished by fans and musicians alike.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    },
    {
        class: 'poster-4',
        bgImage: 'url(css/images/posters/poster4.jpg)',
        title: 'Linkin Park - The Early Days',
        description: 'This photograph captures Linkin Park in their early days, a band that revolutionized the nu-metal genre with their unique blend of rap, rock, and electronic influences. The camaraderie of the group is palpable, showcasing the bond that fueled their meteoric rise with albums like "Hybrid Theory" and "Meteora." This moment reflects their determination, creativity, and synergy as they began a journey that would define a generation of music. As a team, we are honored to have had the opportunity to immortalize this image, believing wholeheartedly in the enduring legacy and passion of the band. It is through moments like these that their iconic journey comes to life, inspiring fans across the world.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    },    
    {
        class: 'poster-5',
        bgImage: 'url(css/images/posters/poster5.jpg)',
        title: 'Follow the Reaper - Children of Bodom (Vinyl)',
        description: 'The iconic third album by Children of Bodom, Follow the Reaper, marks a turning point in melodic death metal history. Released in 2000, this record blends virtuosic guitar solos, intricate keyboard melodies, and Alexi Laiho’s signature aggressive vocals. Tracks like "Hate Me!" and "Everytime I Die" solidified the band’s standing in the global metal scene. This vinyl edition preserves the raw energy and masterful production that made the album a classic, giving fans a chance to experience its dark and atmospheric brilliance in its purest form. For collectors and enthusiasts alike, it’s a gateway into the artistry and intensity of one of the genre’s most influential bands.',
        buttonText: 'Add to Basket',
        buttonIcon: 'fas fa-shopping-basket'
    },    
    {
        class: 'poster-6',
        bgImage: 'url(css/images/posters/poster6.jpg)',
        title: 'Slipknot - Iowa Era Group Photo',
        description: 'This powerful photograph captures the nine masked members of Slipknot during the legendary Iowa era. The band, known for their intense performances and raw, aggressive sound, became icons of the nu-metal movement with tracks like "People = Shit" and "Left Behind." Their masks, jumpsuits, and industrial setting reflect their distinctive aesthetic, emphasizing anonymity, unity, and pure chaos. As a team, we are proud to present this iconic moment in Slipknot’s history. We believed in the artistry and intensity they brought to the heavy metal scene, immortalizing their transformative energy in this timeless visual.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    },    
    {
        class: 'poster-7',
        bgImage: 'url(css/images/posters/poster7.jpg)',
        title: 'Fred Durst - Classic Nu-Metal Pose',
        description: 'This photo captures Fred Durst, the iconic frontman of Limp Bizkit, striking a classic metal pose. Known for blending nu-metal with rap, his energetic performances and signature style made him a defining figure of the late 1990s and early 2000s. From his distinctive red cap to his commanding stage presence, Fred represented an era of rebellion and experimentation in alternative music. As a team, we are proud to showcase this powerful moment, believing in its ability to embody the charisma and attitude that made Limp Bizkit a cultural phenomenon.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    },    
    {
        class: 'poster-8',
        bgImage: 'url(css/images/posters/poster8.jpg)',
        title: 'Queen II - Vinyl',
        description: 'The legendary Queen II album, released in 1974, stands as a masterpiece of progressive rock. Known for its iconic black-and-white cover photograph by Mick Rock, the album showcases Queen’s theatrical and experimental side. Tracks like "Ogre Battle" and "The March of the Black Queen" highlight the band’s creative ambition, blending intricate harmonies, dynamic arrangements, and Freddie Mercury’s unparalleled vocal power. This vinyl edition offers an authentic way to experience the intricate artistry and storytelling that define Queen’s legacy. A true gem for collectors and fans of one of the greatest bands in rock history.',
        buttonText: 'Add to Basket',
        buttonIcon: 'fas fa-shopping-basket'
    },    
    {
        class: 'poster-9',
        bgImage: 'url(css/images/posters/poster9.jpg)',
        title: 'Metallica - Cliff Burton Era',
        description: 'This iconic photo captures Metallica during the legendary era of their albums Ride the Lightning and Master of Puppets. The band, featuring the late and immensely talented bassist Cliff Burton, showcases their raw energy, unity, and revolutionary contribution to thrash metal. Cliff, known for his virtuosity and creative brilliance, played a pivotal role in shaping the sound of Metallica, leaving an indelible mark on tracks like "For Whom the Bell Tolls" and "Orion." As a team, we take pride in presenting this timeless moment, believing in its power to reflect the band’s spirit and the transformative impact they had on the world of metal. This image is a tribute to their legacy and enduring influence.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    },    
    {
        class: 'poster-10',
        bgImage: 'url(css/images/posters/poster10.jpg)',
        title: 'Slipknot - Iowa Poster',
        description: 'This striking poster showcases the haunting imagery of Slipknot’s iconic Iowa era, featuring the dark and symbolic image of a goat pierced on nails. The goat, a representation of raw intensity and primal power, perfectly encapsulates the tone and aggression of the album. Released in 2001, Iowa pushed the boundaries of nu-metal with tracks like "My Plague" and "The Heretic Anthem," cementing Slipknot’s place as one of the most ferocious bands in metal history. This poster serves as a visceral reminder of the album’s sheer intensity, connecting fans with its unapologetic energy and fearless artistry.',
        buttonText: 'Add to Basket',
        buttonIcon: 'fas fa-shopping-basket'
    },    
    {
        class: 'poster-11',
        bgImage: 'url(css/images/posters/poster11.jpg)',
        title: 'Dirt - Alice in Chains (Vinyl)',
        description: 'The seminal album Dirt by Alice in Chains, released in 1992, remains a cornerstone of the grunge and alternative metal movements. This record delves into themes of addiction, despair, and emotional turmoil, encapsulating the raw, haunting vocals of Layne Staley and the heavy yet melodic riffs of Jerry Cantrell. Tracks like "Would?", "Them Bones," and "Rooster" have become anthems of introspection and resilience, resonating deeply with listeners. The vinyl edition amplifies the album’s atmospheric production, offering fans an authentic experience of its layered soundscapes. A must-have for collectors and admirers of one of the most influential bands of the era.',
        buttonText: 'Add to Basket',
        buttonIcon: 'fas fa-shopping-basket'
    },    
    {
        class: 'poster-12',
        bgImage: 'url(css/images/posters/poster12.jpg)',
        title: 'Misfits - Collector’s Setbox',
        description: 'This collector’s setbox celebrates the legacy of the legendary punk rock band Misfits, featuring their iconic skull logo and a curated selection of exclusive memorabilia. Known for pioneering the horror punk subgenre, the Misfits have left an indelible mark on music and culture with their dark, rebellious themes and unforgettable tracks like "Astro Zombies" and "Die, Die My Darling." This setbox is a tribute to the band’s influence, offering fans a unique way to connect with the macabre aesthetic and raw energy that define the Misfits. As a team, we are thrilled to bring this exceptional piece to life, believing in its ability to capture the spirit of the band and resonate with dedicated fans around the world.',
        buttonText: 'Add to Basket',
        buttonIcon: 'fas fa-shopping-basket'
    },    
    {
        class: 'poster-13',
        bgImage: 'url(css/images/posters/poster13.jpg)',
        title: 'Dimebag Darrell - A Legend in His Prime',
        description: 'This breathtaking photo captures Dimebag Darrell in his glory days, epitomizing the charisma and raw talent that made him one of the greatest guitarists in heavy metal history. Known for his iconic curled locks, signature beard, and larger-than-life stage presence, Dimebag was the heart and soul of Pantera and Damageplan. His innovative riffs, crushing solos, and electrifying energy on albums like "Cowboys from Hell" and "Vulgar Display of Power" redefined the sound of groove metal. As a team, we are proud to showcase this iconic image, celebrating his enduring legacy and the indelible mark he left on the world of music. This photograph immortalizes the passion and artistry of a true metal god.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    },    
    {
        class: 'poster-14',
        bgImage: 'url(css/images/posters/poster14.jpg)',
        title: 'Rust in Peace - Megadeth Poster',
        description: 'This visually striking poster celebrates Rust in Peace, the fourth studio album by Megadeth, released in 1990. Renowned as a pinnacle of thrash metal, the album features intricate guitar work by Dave Mustaine and Marty Friedman, alongside complex rhythms and provocative lyrics. Iconic tracks like "Holy Wars... The Punishment Due" and "Hangar 18" have become cornerstones of the genre, showcasing the band’s technical prowess and fiery intensity. The poster’s artwork reflects the apocalyptic themes and political undertones that permeate the album, making it a must-have for any devoted Megadeth fan or collector. It immortalizes a moment in music history that continues to inspire metal enthusiasts worldwide.',
        buttonText: 'Add to Basket',
        buttonIcon: 'fas fa-shopping-basket'
    },    
    {
        class: 'poster-15',
        bgImage: 'url(css/images/posters/poster15.jpg)',
        title: 'The Great Southern Trendkill - Pantera (Vinyl)',
        description: 'Released in 1996, The Great Southern Trendkill is one of Pantera’s most aggressive and emotionally charged albums. Delving into themes of anger, addiction, and inner turmoil, the record features raw, intense tracks like "Drag the Waters," "Floods," and the ferocious title track. Phil Anselmo’s visceral vocals, Dimebag Darrell’s explosive guitar work, and the tight rhythm section of Rex Brown and Vinnie Paul come together to create a masterclass in groove metal. This vinyl edition captures the album’s unrelenting power and sonic depth, providing an immersive listening experience for fans and collectors alike. A testament to Pantera’s unmatched intensity and passion for pushing the boundaries of heavy music.',
        buttonText: 'Add to Basket',
        buttonIcon: 'fas fa-shopping-basket'
    },    
    {
        class: 'poster-16',
        bgImage: 'url(css/images/posters/poster16.jpg)',
        title: 'Dimebag Darrell - Icon with His Legendary Guitar',
        description: 'This iconic photograph immortalizes Dimebag Darrell with his legendary Dean ML guitar, a symbol of his unparalleled skill and electrifying presence in the world of metal. Known for its sharp design and unique tone, his guitar became an extension of his personality, delivering blistering solos and crushing riffs on tracks like "Cowboys from Hell" and "Walk." The photo reflects the energy and passion that defined Dimebag as a musician who revolutionized groove metal alongside Pantera. As a team, we’re honored to preserve and showcase this timeless moment, believing in its ability to inspire and pay tribute to his lasting legacy in the music world.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    },    
    {
        class: 'poster-17',
        bgImage: 'url(css/images/posters/poster17.jpg)',
        title: 'Jump in the Fire - Metallica (CD)',
        description: 'The Jump in the Fire CD by Metallica features one of the earliest and most explosive tracks from their debut album Kill ’Em All. This release showcases the raw power, aggression, and speed that defined the birth of thrash metal. With James Hetfield’s ferocious vocals, Kirk Hammett’s blazing guitar solos, Cliff Burton’s thundering basslines, and Lars Ulrich’s relentless drumming, this track cemented Metallica’s reputation as pioneers of a new metal era. This CD embodies the energy and spirit of their early days, making it an essential piece for collectors and fans alike.',
        buttonText: 'Add to Basket',
        buttonIcon: 'fas fa-shopping-basket'
    },    
    {
        class: 'poster-18',
        bgImage: 'url(css/images/posters/poster18.jpg)',
        title: 'Pantera - Late 90s Full Band Photo',
        description: 'This photograph captures Pantera in their prime during the late 1990s, showcasing the legendary lineup of Phil Anselmo, Dimebag Darrell, Rex Brown, and Vinnie Paul. Known for their groundbreaking contributions to groove metal, Pantera dominated the metal scene with albums like "Far Beyond Driven" and "The Great Southern Trendkill." The image reflects their raw energy, unity, and unrelenting passion for heavy music. As a team, we are honored to present this iconic moment, believing in its ability to inspire and connect fans with the band’s enduring legacy. This photo is a testament to their influence and the indomitable spirit of metal.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    },    
    {
        class: 'poster-19',
        bgImage: 'url(css/images/posters/poster19.jpg)',
        title: 'Children of Bodom - Prime Era',
        description: 'This photograph captures Children of Bodom during the height of their career, exuding the energy and charisma that made them legends in the melodic death metal genre. Fronted by the phenomenal Alexi Laiho, the band is known for blending technical guitar solos, haunting keyboard harmonies, and relentless aggression. Albums like "Hate Crew Deathroll" and "Follow the Reaper" solidified their place as pioneers of the genre, creating a unique sound that resonated deeply with fans worldwide. As a team, we proudly present this moment, believing in its ability to embody the essence of the band’s power and artistry while inspiring admiration for their enduring legacy.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    },    
    {
        class: 'poster-20',
        bgImage: 'url(css/images/posters/poster20.jpg)',
        title: 'Corey Taylor - Iowa Era Nu-Metal Pose',
        description: 'This photograph captures Corey Taylor, the iconic frontman of Slipknot, during the intense and groundbreaking Iowa era. Known for his commanding stage presence and raw vocal power, Corey embodied the spirit of nu-metal with his aggressive energy and enigmatic persona. The Iowa era marked a pivotal moment in Slipknot’s history, with tracks like "People = Shit" and "Left Behind" showcasing the band’s unrelenting ferocity and emotional depth. As a team, we are proud to present this striking image, believing in its ability to reflect the passion and artistry that defined Corey and Slipknot during this transformative period.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right',
    },    
    {
        class: 'poster-21',
        bgImage: 'url(css/images/posters/poster21.jpg)',
        title: 'Rammstein - Full Band Lineup',
        description: 'This powerful image captures Rammstein, the legendary German industrial metal band, in their full lineup. Known for their explosive stage performances, provocative lyrics, and cinematic soundscapes, the band has redefined the boundaries of modern metal. Featuring Till Lindemann, Richard Z. Kruspe, Paul Landers, Oliver Riedel, Christoph Schneider, and Christian "Flake" Lorenz, this photo showcases the unity and artistry that have made Rammstein a global phenomenon. As a team, we are proud to present this defining moment, believing in its ability to reflect the band’s unyielding spirit and unparalleled creativity in the world of music.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    },    
    {
        class: 'poster-22',
        bgImage: 'url(css/images/posters/poster22.jpg)',
        title: 'Jim Root - All Hope Is Gone Era (Unmasked)',
        description: 'This rare photograph captures Jim Root, the legendary guitarist of Slipknot, without his mask during the All Hope Is Gone era. Known for his technical prowess and dynamic stage presence, Jim played a pivotal role in shaping the band’s sound during this transformative period. The All Hope Is Gone album, released in 2008, marked a significant evolution in Slipknot’s music, blending their signature aggression with more melodic and experimental elements. As a team, we are proud to present this unique image, believing in its ability to showcase the human side of a musician who has inspired countless fans and musicians worldwide.',
        buttonText: 'See More',
        buttonIcon: 'fa-solid fa-arrow-right'
    }    
];

postersData.forEach((poster) => {
    const posterElement = document.createElement('div');
    posterElement.className = `poster ${poster.class}`;
    posterElement.style.backgroundImage = poster.bgImage;
    wallContent.appendChild(posterElement);

    posterElement.addEventListener('click', () => {
        overlayImage.style.backgroundImage = poster.bgImage;
        title.textContent = poster.title;
        description.textContent = poster.description;
        button.innerHTML = `${poster.buttonText} <span class="${poster.buttonIcon}"></span>`;

        overlay.classList.add('active');
    });
});

function hideOverlay() {
    overlay.classList.remove('active');
}

closeButton.addEventListener('click', hideOverlay);
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hideOverlay();
});

// MUSIC SECTION

const musicGenres = [
    {
        name: "Metal",
        bgImage: "css/images/backgrounds/Motorhead.jpg",
        link: "metal-posters.html"
    },
    {
        name: "Rock",
        bgImage: "css/images/backgrounds/Misfits.jpg",
        link: "rock-posters.html"
    },
    {
        name: "Posters",
        bgImage: "css/images/backgrounds/Posters.jpg",
        link: "posters.html"
    },
    {
        name: "Vinyls And CDs",
        bgImage: "css/images/backgrounds/Vinyls.png",
        link: "vinyls.html"
    }
];

function createMusicBoxes() {
    const container = document.getElementById("musicContainer");

    musicGenres.forEach(genre => {
        const box = document.createElement("a");
        box.classList.add("music-box");
        box.href = genre.link;
        box.style.backgroundImage = `url(${genre.bgImage})`;

        const title = document.createElement("span");
        title.textContent = genre.name;

        box.appendChild(title);
        container.appendChild(box);
    });
}

window.onload = createMusicBoxes;
