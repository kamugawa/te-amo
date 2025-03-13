// Create floating hearts
function createHearts() {
  const container = document.querySelector('.hearts-container');
  const numHearts = 20;

  for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = `
          <svg class="heart" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
      `;
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.transform = `scale(${Math.random() * 2 + 0.5})`;
      heart.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(heart);
  }
}

// Music player functionality
const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const playIcon = playButton.querySelector('.play-icon');
const pauseIcon = playButton.querySelector('.pause-icon');

playButton.addEventListener('click', togglePlay);
audio.addEventListener('ended', () => {
  playIcon.classList.remove('hidden');
  pauseIcon.classList.add('hidden');
});

function togglePlay() {
  if (audio.paused) {
      audio.play();
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
  } else {
      audio.pause();
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
  }
}

// Initialize hearts on load
createHearts();