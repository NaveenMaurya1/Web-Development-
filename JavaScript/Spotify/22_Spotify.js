// function createCard(thumbnail, song_name, singer_name) {

//   let html = ` <div class="cards">

//                         <img src="${thumbnail}" alt="thumbnail">
//                            <button class="play-btn">
//                            <a href="#"> <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 25 22" width="24" height="24" fill="black">
//                             <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"/>
//                           </svg></a>
//                         </button>                
//                         <div class="cards_detail">
//                          <div><a href="#">${song_name}</a></div>
//                          <span><a href="#">${singer_name}</a></span>
//                         </div>

//                        </div>
//                     `
//   document.querySelector(".cards1_section").innerHTML = document.querySelector(".cards1_section").innerHTML + html;

// }

// createCard("https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c", "Raga of Revenge (From DC)", "Anirudh Ravichander")
// createCard("https://i.scdn.co/image/ab67616d00001e022ebce2b7f609ae9c7d0bdfc2", "No shortcut", "Arjan Dhilon ,Jat Trak")
// createCard("https://i.scdn.co/image/ab67616d00001e02db055ba83d3809eec4c86527", "Rebel", "Cheema Y,Gur Sidhu")
// createCard("https://i.scdn.co/image/ab67616d00001e02d7b2aa3834b82b1cbe899a48", "On The Floor", "Jennifer Lopez,Pitbull")
// createCard("https://i.scdn.co/image/ab67616d00001e02bd164e3bbec608aedda85a22", "Mashooqa-From Cocktail 2", "Pritam,Mahmood,Amitabh Battacharya..")
// createCard("https://i.scdn.co/image/ab67616d00001e02bd164e3bbec608aedda85a22", "Mashooqa-From Cocktail 2", "Pritam,Mahmood,Amitabh Battacharya..")


function createCard(thumbnail, song_name, singer_name, section) {
    const div = document.createElement("div");
    div.classList.add("cards");
    div.innerHTML = `
    <img src="${thumbnail}" alt="thumbnail">
    <button class="play-btn">
      <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="black">
        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"/>
      </svg>
    </button>
    <div class="cards_detail">
      <div><a href="#">${song_name}</a></div>
      <span><a href="#">${singer_name}</a></span>
    </div>
  `;
    section.appendChild(div);
}

// Grab both sections
const allSections = document.querySelectorAll(".cards1_section");
const section1 = allSections[0];
const section2 = allSections[1];
const section3 = allSections[2];

// Section 1 cards
createCard("https://i.scdn.co/image/ab67616d00001e02bd164e3bbec608aedda85a22", "Mashooqa - From Cocktail 2", "Pritam, Mahmood", section1);
createCard("https://i.scdn.co/image/ab67616d00001e022ebce2b7f609ae9c7d0bdfc2", "No shortcut", "Arjan Dhilon, Jat Trak", section1);
createCard("https://i.scdn.co/image/ab67616d00001e02d7b2aa3834b82b1cbe899a48", "On The Floor", "Jennifer Lopez, Pitbull", section1);
createCard("https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c", "Raga of Revenge (From DC)", "Anirudh Ravichander", section1);
createCard("https://i.scdn.co/image/ab67616d00001e02db055ba83d3809eec4c86527", "Rebel", "Cheema Y, Gur Sidhu", section1);



const playBtn = document.querySelector(".play")
const forwardBtn = document.querySelector(".forward");
const backwardBtn = document.querySelector(".backward");
const shuffleBtn = document.querySelector(".shuffle");
const repeatBtn = document.querySelector(".repeat");
const audio = document.querySelector(".audio-player");
const seekbar = document.querySelector(".seekbar");
const songImage = document.querySelector(".now-bar img");
const songTitle = document.querySelector(".tittle_info");
const songDetails = document.querySelector(".song_info");
const playingAnimation = document.querySelector(".playingAnime svg");

// Playlist
const songs = [
    {
        name: "Mashooqa ,Kriti Sanon",
        singer: "(From Cocktail)",
        src: "songs/song1.mp3",
        image: "https://i.scdn.co/image/ab67616d00001e02bd164e3bbec608aedda85a22"
    },
    {
        name: "No Shortcut",
        singer: "- Arjan Dhillon",
        src: "songs/song2.mp3",
        image: "https://i.scdn.co/image/ab67616d00001e022ebce2b7f609ae9c7d0bdfc2"
    },
    {
        name: "On The Floor ",
        singer: "Jennifer Lopez",
        src: "songs/song3.mp3",
        image: "https://i.scdn.co/image/ab67616d00001e02d7b2aa3834b82b1cbe899a48"
    },
    {
        name: "Raga of Revenge (From DC)",
        singer: "Anirudh Ravichander",
        src: "songs/song4.mp3",
        image: "https://i.scdn.co/image/ab67616d00001e0233bc5d16517fed8db985360c"
    },
    {
        name: "Rebel (Official Audio) ",
        singer: "Cheema Y, Gur Sidhu",
        src: "songs/song5.mp3",
        image: "https://i.scdn.co/image/ab67616d00001e02db055ba83d3809eec4c86527"
    }
];

//Updating the detail of the songs
function updateSongInfo() {
    songTitle.textContent = songs[currentSong].name;
    songDetails.textContent = songs[currentSong].singer;
    songImage.src = songs[currentSong].image;
}

let isPlaying = false;

function playSong() {
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 640 640"><path d="M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"/></svg>`;
    playingAnimation.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="2" height="9" rx="1">
                        <animate attributeName="height" values="4;10;4" dur="0.8s" repeatCount="indefinite" />
                        <animate attributeName="y" values="10;4;10" dur="0.8s" repeatCount="indefinite" />
                    </rect>

                    <rect x="7" y="2" width="2" height="12" rx="1">
                        <animate attributeName="height" values="12;5;12" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="y" values="2;9;2" dur="1s" repeatCount="indefinite" />
                    </rect>

                    <rect x="12" y="6" width="2" height="8" rx="1">
                        <animate attributeName="height" values="6;11;6" dur="0.9s" repeatCount="indefinite" />
                        <animate attributeName="y" values="8;3;8" dur="0.9s" repeatCount="indefinite" />
                    </rect>
                </svg>`


}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"viewBox="0 0 640 640"><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z" /></svg>`;
    playingAnimation.innerHTML = ` <svg width="16" height="16" viewBox="0 0 16 16" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="5" width="2" height="9" rx="1"></rect>
                        <rect x="7" y="2" width="2" height="12" rx="1"></rect>
                        <rect x="12" y="7" width="2" height="7" rx="1"></rect>
                    </svg>`;

}

// addEventListener() is used to tell JavaScript:
// "When a specific event happens, run this function."

// element.addEventListener("event", function);


// play and pause
playBtn.addEventListener("click", () => {

    if (isPlaying) {
        pauseSong();
        updateGreenButtons();

    } else {
        playSong();
        updateGreenButtons();

    }

});

// seekbar update duration
audio.addEventListener("timeupdate", () => {

    const progress =
        (audio.currentTime / audio.duration) * 100;

    seekbar.value = progress;

});

// Seekbar dragging
seekbar.addEventListener("input", () => {

    audio.currentTime = (seekbar.value / 100) * audio.duration;

});

let isShuffle = false;

// shuffle activating
shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;  //it used to toggle the shuffle button between true and false

    if (isShuffle) {
        shuffleBtn.style.color = "#1DB954";
    } else {
        shuffleBtn.style.color = "white";
    }
});

let isRepeat = false;

// shuffle activating
repeatBtn.addEventListener("click", () => {
    isRepeat = !isRepeat;  //it used to toggle the shuffle button between true and false

    if (isRepeat) {
        repeatBtn.style.color = "#1DB954";
    } else {
        repeatBtn.style.color = "white";
    }
});

let currentSong = 0;
audio.src = songs[currentSong].src;
updateSongInfo()
// playing next song after clicking forward button and it will plsy rnsdom songs after activate the shuffle
forwardBtn.addEventListener("click", () => {

    if (isShuffle) {

        let randomSong;

        do {
            randomSong = Math.floor(Math.random() * songs.length);
        } while (randomSong === currentSong && songs.length > 1);

        currentSong = randomSong;

    }
    else {

        currentSong++;

        if (currentSong >= songs.length) {
            currentSong = 0;
        }
    }

    audio.src = songs[currentSong].src;
    updateSongInfo()
    audio.load();
    playSong();
    updateGreenButtons();
});


// playing next song automatically after ending the current song 
audio.addEventListener("ended", () => {

    if (isRepeat) {

        audio.currentTime = 0;
        audio.play();

    } else if (isShuffle) {

        currentSong = Math.floor(Math.random() * songs.length);

        audio.src = songs[currentSong].src;
        audio.load();
        playSong();
        updateSongInfo()
        updateGreenButtons();

    } else {

        currentSong++;

        if (currentSong >= songs.length) {
            currentSong = 0;
        }

        audio.src = songs[currentSong].src;
        audio.load();
        playSong();
        updateSongInfo()
        updateGreenButtons();

    }

});

// playing previous song after clicking the backward button
backwardBtn.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    audio.src = songs[currentSong].src;
    updateSongInfo()
    playSong();
    updateGreenButtons();

});

const volumeSlider = document.querySelector(".volume-slider");
const volumeIcon = document.querySelector(".volume svg");

audio.volume = 1;

volumeSlider.addEventListener("input", () => {

    audio.volume = volumeSlider.value / 100;

    // Muted
    if (audio.volume == 0) {

        volumeIcon.innerHTML = `
        <path d="M80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416zM399 239C389.6 248.4 389.6 263.6 399 272.9L446 319.9L399 366.9C389.6 376.3 389.6 391.5 399 400.8C408.4 410.1 423.6 410.2 432.9 400.8L479.9 353.8L526.9 400.8C536.3 410.2 551.5 410.2 560.8 400.8C570.1 391.4 570.2 376.2 560.8 366.9L513.8 319.9L560.8 272.9C570.2 263.5 570.2 248.3 560.8 239C551.4 229.7 536.2 229.6 526.9 239L479.9 286L432.9 239C423.5 229.6 408.3 229.6 399 239z"/>`;

    }

    // Low Volume
    else if (audio.volume <= 0.33) {

        volumeIcon.innerHTML = `
        <path d="M341.5 102.1C352.7 107.5 360 118.8 360 131.2L360 508.8C360 521.2 352.7 532.5 341.5 537.9C330.3 543.3 317 541.9 307.2 534.4L192 448L96 448C78.3 448 64 433.7 64 416L64 224C64 206.3 78.3 192 96 192L192 192L307.2 105.6C317 98.1 330.3 96.7 341.5 102.1ZM456.8 188.8C469.3 176.3 489.6 176.3 502.1 188.8C536.9 223.6 556.5 270.9 556.5 320C556.5 369.1 536.9 416.4 502.1 451.2C489.6 463.7 469.3 463.7 456.8 451.2C444.3 438.7 444.3 418.4 456.8 405.9C479.6 383.1 492.5 352.2 492.5 320C492.5 287.8 479.7 256.9 456.8 234.1C444.3 221.6 444.3 201.3 456.8 188.8Z" />`;

    }
    else if (audio.volume <= 0.66) {

        volumeIcon.innerHTML = `
        <path d="M112 416L160 416L294.1 535.2C300.5 540.9 308.7 544 317.2 544C336.4 544 352 528.4 352 509.2L352 130.8C352 111.6 336.4 96 317.2 96C308.7 96 300.5 99.1 294.1 104.8L160 224L112 224C85.5 224 64 245.5 64 272L64 368C64 394.5 85.5 416 112 416zM505.1 171C494.8 162.6 479.7 164.2 471.3 174.5C462.9 184.8 464.5 199.9 474.8 208.3C507.3 234.7 528 274.9 528 320C528 365.1 507.3 405.3 474.8 431.8C464.5 440.2 463 455.3 471.3 465.6C479.6 475.9 494.8 477.4 505.1 469.1C548.3 433.9 576 380.2 576 320.1C576 260 548.3 206.3 505.1 171.1zM444.6 245.5C434.3 237.1 419.2 238.7 410.8 249C402.4 259.3 404 274.4 414.3 282.8C425.1 291.6 432 305 432 320C432 335 425.1 348.4 414.3 357.3C404 365.7 402.5 380.8 410.8 391.1C419.1 401.4 434.3 402.9 444.6 394.6C466.1 376.9 480 350.1 480 320C480 289.9 466.1 263.1 444.5 245.5z"/>`;
    }

    // High Volume
    else {

        volumeIcon.innerHTML = `
        <path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z"/>`;

    }

});

let isMuted = false;
let previousVolume = 1;

volumeIcon.addEventListener("click", () => {

    isMuted = !isMuted;

    if (isMuted) {

        previousVolume = audio.volume;

        audio.volume = 0;
        volumeSlider.value = 0;

        volumeIcon.innerHTML = `
        <path d="M80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416zM399 239C389.6 248.4 389.6 263.6 399 272.9L446 319.9L399 366.9C389.6 376.3 389.6 391.5 399 400.8C408.4 410.1 423.6 410.2 432.9 400.8L479.9 353.8L526.9 400.8C536.3 410.2 551.5 410.2 560.8 400.8C570.1 391.4 570.2 376.2 560.8 366.9L513.8 319.9L560.8 272.9C570.2 263.5 570.2 248.3 560.8 239C551.4 229.7 536.2 229.6 526.9 239L479.9 286L432.9 239C423.5 229.6 408.3 229.6 399 239z"/>`;
    }

    else {

        audio.volume = previousVolume;
        volumeSlider.value = previousVolume * 100;

        if (audio.volume <= 0.33) {

            volumeIcon.innerHTML = `
        <path d="M341.5 102.1C352.7 107.5 360 118.8 360 131.2L360 508.8C360 521.2 352.7 532.5 341.5 537.9C330.3 543.3 317 541.9 307.2 534.4L192 448L96 448C78.3 448 64 433.7 64 416L64 224C64 206.3 78.3 192 96 192L192 192L307.2 105.6C317 98.1 330.3 96.7 341.5 102.1ZM456.8 188.8C469.3 176.3 489.6 176.3 502.1 188.8C536.9 223.6 556.5 270.9 556.5 320C556.5 369.1 536.9 416.4 502.1 451.2C489.6 463.7 469.3 463.7 456.8 451.2C444.3 438.7 444.3 418.4 456.8 405.9C479.6 383.1 492.5 352.2 492.5 320C492.5 287.8 479.7 256.9 456.8 234.1C444.3 221.6 444.3 201.3 456.8 188.8Z" />`;

        }
        else if (audio.volume <= 0.66) {

            volumeIcon.innerHTML = `
        <path d="M112 416L160 416L294.1 535.2C300.5 540.9 308.7 544 317.2 544C336.4 544 352 528.4 352 509.2L352 130.8C352 111.6 336.4 96 317.2 96C308.7 96 300.5 99.1 294.1 104.8L160 224L112 224C85.5 224 64 245.5 64 272L64 368C64 394.5 85.5 416 112 416zM505.1 171C494.8 162.6 479.7 164.2 471.3 174.5C462.9 184.8 464.5 199.9 474.8 208.3C507.3 234.7 528 274.9 528 320C528 365.1 507.3 405.3 474.8 431.8C464.5 440.2 463 455.3 471.3 465.6C479.6 475.9 494.8 477.4 505.1 469.1C548.3 433.9 576 380.2 576 320.1C576 260 548.3 206.3 505.1 171.1zM444.6 245.5C434.3 237.1 419.2 238.7 410.8 249C402.4 259.3 404 274.4 414.3 282.8C425.1 291.6 432 305 432 320C432 335 425.1 348.4 414.3 357.3C404 365.7 402.5 380.8 410.8 391.1C419.1 401.4 434.3 402.9 444.6 394.6C466.1 376.9 480 350.1 480 320C480 289.9 466.1 263.1 444.5 245.5z"/>`;

        }
        else {

            volumeIcon.innerHTML = `
        <path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z"/>`;

        }
    }
});

const greenPlayBtns = document.querySelectorAll(".play-btn");
const greenPlayBtnSVG = document.querySelectorAll(".play-btn svg");

const playSVG = `
     <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="black">
        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"/>
      </svg>
`;

const pauseSVG = `

    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 19 18" width="24" height="24" fill="black">>
        <rect x="3" y="2" width="3" height="12" rx="1"></rect>
        <rect x="10" y="2" width="3" height="12" rx="1"></rect>
    </svg>`;


greenPlayBtns.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        // Same song is playing → pause it
        if (isPlaying && currentSong === index) {

            pauseSong();
            btn.innerHTML = playSVG;
            return;
        }

        // Reset every button to Play
        greenPlayBtns.forEach(button => {
            button.innerHTML = playSVG;
        });

        // Play selected song
        currentSong = index;
        audio.src = songs[currentSong].src;
        audio.load();

        updateSongInfo();
        playSong();

        // Show Pause icon only on clicked card
        btn.innerHTML = pauseSVG;

    });

});

// updating the green buttun svg
function updateGreenButtons() {

    greenPlayBtns.forEach((btn, index) => {

        if (index === currentSong && isPlaying) {
            btn.innerHTML = pauseSVG;
        } else {
            btn.innerHTML = playSVG;
        }

    });

}