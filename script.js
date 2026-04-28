function playMusic() {
    const audio = document.getElementById("myAudio");
    const btn = document.getElementById("playBtn");
    
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Playback failed. Make sure the music.mp3 file exists!");
        });
        btn.innerText = "Now Playing... 🎵";
    } else {
        audio.pause();
        btn.innerText = "▶ Resume Song";
    }
}
