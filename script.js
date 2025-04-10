document.addEventListener('DOMContentLoaded', function() {
  const backgroundVideo = document.getElementById('background-video');
  if (backgroundVideo) {
    function updateVideoSource() {
      const width = window.innerWidth;
      const sourceElement = backgroundVideo.querySelector('source');

      if (width > 1500) {
        sourceElement.src = "video.mp4";
      } else if (width >= 769 && width <= 1500) {
        sourceElement.src = "tablet.mp4";
      } else {
        sourceElement.src = "vid2.mp4";
      }
      backgroundVideo.load();
    }

    updateVideoSource();
    window.addEventListener('resize', updateVideoSource);

    backgroundVideo.addEventListener('ended', function() {
      backgroundVideo.currentTime = 0;
      backgroundVideo.play();
    });
  }

  const countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    function updateCountdown() {
      const targetDate = new Date("February 22, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        countdownElement.innerHTML = "Event has started!";
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});
