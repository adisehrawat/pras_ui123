const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');

menuClose.addEventListener('click', () => sidebar.style.left = '-100%');
"use strict";
const imgCoverEl = document.getElementById("cover");
const musicTitleEl = document.getElementById("music_title");
const musicArtistEl = document.getElementById("musric_artist");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const mm = document.getElementById("myAudio");
const songs = [
    {
        path: "songs/Shape_of_You.mp3",
        displayName: "Shape of You",
        cover: "images/Shape_of_You.jpg",
        artist: "Ed Sheeran",
        time: '04:23',
    },
    {
        path: "songs/Ruth_B_Dandelions.mp3",
        displayName: "Dandelions",
        cover: "images/Ruth.jpg",
        artist: "Ruth B",
        time: "03:53",
    },
    {
        path: "songs/A_Thousand_Years.mp3",
        displayName: "A Thousand Years",
        cover: "images/A_Thousand_Years.jpg",
        artist: "Christina Perri",
        time: "04:41",
    },
    {
        path: "songs/Stay.mp3",
        displayName: "Stay",
        cover: "images/Stay.jpg",
        artist: "The Kid LAROI & Justin Bieber",
        time: "02:37",
    },
    {
        path: "songs/Beautiful_Things.mp3",
        displayName: "Beautiful Things",
        cover: "images/Beautiful_Things.jpg",
        artist: "Benson Boone",
        time: "03:12",
    },
    {
        path: "songs/Dancing_In_The_Flames.mp3",
        displayName: "Dancing In The Flames",
        cover: "images/Dancing_In_The_Flames.jpg",
        artist: "The Weeknd",
        time: "04:20",
    },
    {
        path: "songs/senorita.mp3",
        displayName: "Senorita",
        cover: "images/senorita.jpg",
        artist: "Shawn Mendes & Camila Cabello",
        time: "03:25",
    },
    {
        path: "songs/Until_I_Found_You.mp3",
        displayName: "Until I Found You",
        cover: "images/Until_I_Found_You.jpg",
        artist: "Stephen Sanchez ft. Em Beihold",
        time: "02:49",
    },
    {
        path: "songs/Hanumankind.mp3",
        displayName: "Hanumankind",
        cover: "images/Hanumankind.jpg",
        artist: "Big Dawgs Ft. Kalmi",
        time: "03:54",
    },
    {
        path: "songs/The_Lazy_Song.mp3",
        displayName: "The Lazy Song",
        cover: "images/The_Lazy_Song.jpg",
        artist: "Bruno Mars",
        time: "03:19",
    },
    {
        path: "songs/Love_The_Way_You_Lie.mp3",
        displayName: "Love The Way You Lie",
        cover: "images/Love_The_Way_You_Lie.jpg",
        artist: "Eminem ft. Rihanna",
        time: "04:27",
    },
    {
        path: "songs/We_Dont_Talk_Anymore.mp3",
        displayName: "We Dont Talk Anymore",
        cover: "images/We_Dont_Talk_Anymore.jpg",
        artist: "Charlie Puth",
        time: "03:50",
    },
    {
        path: "songs/Baby.mp3",
        displayName: "Baby",
        cover: "images/Baby.jpg",
        artist: "Justin Bieber ft. Ludacris",
        time: "03:39",
    },
    {
        path: "songs/Blank_Space.mp3",
        displayName: "Blank Space",
        cover: "images/Blank_Space.jpg",
        artist: "Taylor Swift",
        time: "04:32",
    },
    {
        path: "songs/Sorry.mp3",
        displayName: "Sorry",
        cover: "images/Sorry.jpg",
        artist: "Justin Bieber",
        time: "03:25",
    },
    {
        path: "songs/Faded.mp3",
        displayName: "Faded",
        cover: "images/Faded.jpg",
        artist: "Alan Walker",
        time: "03:32",
    },
    {
        path: "songs/See_You_Again.mp3",
        displayName: "See You Again",
        cover: "images/See_You_Again.jpg",
        artist: "Wiz Khalifa ft. Charlie Puth",
        time: "03:57",
    },
    {
        path: "songs/Despacito.mp3",
        displayName: "Despacito",
        cover: "images/Despacito.jpg",
        artist: "Luis Fonsi ft. Daddy Yankee",
        time: "04:41",
    },
    {
        path: "songs/APT.mp3",
        displayName: "APT",
        cover: "images/APT.jpg",
        artist: "ROSE & Bruno Mars",
        time: "02:53",
    },
    {
        path: "songs/birds_of_feather.mp3",
        displayName: "Birds of a Feather",
        cover: "images/birds_of_feather.jpg",
        artist: "Billie Eilish",
        time: "03:50",
    },
];

const container2 = document.getElementById("songContainer");
songs.forEach((song, index) => {
    // Create the main item div
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    // Create the info div
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";

    // Add song number
    const songNumber = document.createElement("p");
    songNumber.textContent = String(index + 1).padStart(2, '0');
    infoDiv.appendChild(songNumber);

    // Add song cover image
    const img = document.createElement("img");
    img.src = song.cover;
    infoDiv.appendChild(img);

    // Add details div
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "details";

    const songTitle = document.createElement("h5");
    songTitle.textContent = song.displayName;
    detailsDiv.appendChild(songTitle);

    const artistName = document.createElement("p");
    artistName.textContent = song.artist;
    detailsDiv.appendChild(artistName);

    infoDiv.appendChild(detailsDiv);
    itemDiv.appendChild(infoDiv);

    // Create the actions div
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    // Add duration placeholder (since duration isn't in the data)
    const duration = document.createElement("p");
    duration.textContent = song.time; // Placeholder text
    actionsDiv.appendChild(duration);

    // Add icon div for play button
    const iconDiv = document.createElement("div");
    iconDiv.className = "icon";
    const playIcon = document.createElement("i");
    playIcon.className = "bx bxs-right-arrow"; // Play button icon
    iconDiv.appendChild(playIcon);
    actionsDiv.appendChild(iconDiv);

    // Add the plus icon
    const plusIcon = document.createElement("i");
    plusIcon.className = "bx bxs-plus-square"; // Plus icon
    actionsDiv.appendChild(plusIcon);

    itemDiv.appendChild(actionsDiv);
    itemDiv.addEventListener("click", () => selectSong(index)); // Add event listener to play the song
    // Append the item div to the container
    container2.appendChild(itemDiv);
});


const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
//================== Play Song  True or False====================
function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}
//================== Play Music====================
function playMusic() {
    isPlaying = true;
    playvBtnEl.classList.replace("fa-play", "fa-pause");
    playvBtnEl.setAttribute("title", "pause");
    music.play();
}
//================== Pause Music====================
function pauseMusic() {
    isPlaying = false;
    playvBtnEl.classList.replace("fa-pause", "fa-play");
    playvBtnEl.setAttribute("pause", "title");
    music.pause();
}

function selectSong(index) {
    musicIndex = index;
    loadMusic(songs[musicIndex]);
    playMusic();
}
//================== Load Songs ====================
function loadMusic(songs) {
    music.src = songs.path;
    musicTitleEl.textContent = songs.displayName;
    musicArtistEl.textContent = songs.artist;
    imgCoverEl.src = songs.cover;
    durationEl.textContent = songs.time;
}
//================== Change Music ====================
function changeMusic(direction) {
    // Update the music index based on direction
    musicIndex += direction;
    mm.setAttribute('autoplay', 'true'); // Set autoplay
    mm.setAttribute('muted', 'true'); 
    if(isPlaying=true){
        playvBtnEl.classList.replace("fa-play", "fa-pause");
        playvBtnEl.setAttribute("title", "pause");

    }
    // Wrap around to ensure musicIndex is within bounds
    if (musicIndex < 0) {
        musicIndex = songs.length - 1; // Go to the last song
    } else if (musicIndex >= songs.length) {
        musicIndex = 0; // Go to the first song
    }
    // Load the new music and play it
    loadMusic(songs[musicIndex]); // This should set the src
    music.play().then(() => {
        console.log('Playing:', songs[musicIndex].displayName); // Optional: log the currently playing song
    }).catch(error => {
        console.error('Error trying to play the audio:', error);
    });
}
//================== Set Progress ====================
function setProgressBar(e) {
    const width = playerProgressEl.clientWidth;
    const xValue = e.offsetX;
    music.currentTime = (xValue / width) * music.duration;
}
//================== Set Progress ====================
function updateProgressBar() {
    const { duration, currentTime } = music;
    const ProgressPercent = (currentTime / duration) * 100;
    progressEl.style.width = `${ProgressPercent}%`;
    const formattime = (timeRanges) =>
        String(Math.floor(timeRanges)).padStart(2, "0");
    durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
        duration % 60,
    )}`;
    currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
        currentTime % 60,
    )}`;
}
//================= Btn Events========================
const btnEvents = () => {
    playvBtnEl.addEventListener("click", togglePlay);
    nextvBtnEl.addEventListener("click", () => changeMusic(1));
    prevBtnEl.addEventListener("click", () => changeMusic(-1));
    //========= Progressbar===========================
    music.addEventListener("ended", () => changeMusic(1));
    music.addEventListener("timeupdate", updateProgressBar);
    playerProgressEl.addEventListener("click", setProgressBar);
};
//================= Btn Events========================
document.addEventListener("DOMContentLoaded", btnEvents);
//============ Calling Load Music
loadMusic(songs[musicIndex]);