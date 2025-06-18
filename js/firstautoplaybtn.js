// <!-- First auto play at the top -->
// <!-- First auto play at the top -->

    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");

    audio.volume = 0.8;

    // Autoplay once the page is loaded
    window.addEventListener("DOMContentLoaded", () => {
      audio.muted = false;
      audio.play();
      playPauseBtn.textContent = "❚❚";
    });

    playPauseBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "❚❚"; // Pause icon
      } else {
        audio.pause();
        playPauseBtn.textContent = "▶"; // Play icon
      }
    });

    // Optional: change icon when audio ends
    audio.addEventListener("ended", () => {
      playPauseBtn.textContent = "▶";
    });