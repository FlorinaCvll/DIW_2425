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