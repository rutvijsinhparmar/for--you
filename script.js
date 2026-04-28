function playMusic() {
    const audio = document.getElementById("myAudio");
    const btn = document.getElementById("playBtn");
    
    if (audio.paused) {
        audio.play();
        btn.innerText = "Now Playing... 🎵";
    } else {
        audio.pause();
        btn.innerText = "▶ Resume Song";
    }
}
