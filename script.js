const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const seekBar = document.getElementById('seek-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

let isPlaying = false;

audio.addEventListener('loadedmetadata', () => {
    console.log('Audio Duration: ', audio.duration);  
    if (audio.duration) {
        durationEl.textContent = formatTime(audio.duration);
        seekBar.max = Math.floor(audio.duration);
        console.log('SeekBar Max Value: ', seekBar.max);  
    } else {
        console.error('Audio duration is not available');
    }
});

audio.addEventListener('canplaythrough', () => {
    console.log('Audio can play through');
    durationEl.textContent = formatTime(audio.duration);
    seekBar.max = Math.floor(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    seekBar.value = Math.floor(audio.currentTime);
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

seekBar.addEventListener('input', () => {
    audio.currentTime = seekBar.value;
});

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? '⏸' : '▶';
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const introductionChapter = document.getElementById('chapter-1');
    introductionChapter.classList.add('active');
    introductionChapter.style.display = 'block';

    document.getElementById('homepage').style.display = 'none';
});


seekBar.max = 1320; 
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove active class from all menu items
            menuItems.forEach(menu => menu.classList.remove("active-menu"));
            // Add active class to clicked item
            this.classList.add("active-menu");
        });
    });
});
