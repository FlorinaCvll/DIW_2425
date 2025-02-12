const playlist = [
    "audio/cancion1.mp3",
    "audio/cancion2.mp3",
    "audio/cancion3.mp3"
];

let currentSongIndex = 0;
const audio = document.getElementById('audioPrincipal'); // Usa el mismo elemento audio

function playNextSong() {
    audio.src = playlist[currentSongIndex];
    audio.play();

    audio.onended = () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length; // Avanza a la siguiente canción (circular)
        playNextSong();
    };
}

playNextSong(); // Inicia la reproducción de la playlist
// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    AOS.init();

    const welcomeCard = document.getElementById("welcome-card");

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;

        if (scrollY > 100) {
            welcomeCard.style.opacity = "0";
            welcomeCard.style.transform = "translateY(-100%)";
        } else {
            welcomeCard.style.opacity = "1";
            welcomeCard.style.transform = "translateY(0)";
        }
    });
});


