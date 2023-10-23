document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const pauseButton = document.getElementById('pause');
    const progressContainer = document.getElementById('progress-container');
    const progress = document.getElementById('progress');

    let isPlaying = false;

    playPauseButton.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            playPauseButton.textContent = 'Play';
            isPlaying = false;
        } else {
            audio.play();
            playPauseButton.textContent = 'Pause';
            isPlaying = true;
        }
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
        playPauseButton.textContent = 'Play';
        isPlaying = false;
    });

    audio.addEventListener('timeupdate', function() {
        const duration = audio.duration;
        const currentTime = audio.currentTime;
        const percentage = (currentTime / duration) * 100;
        progress.style.width = percentage + '%';
    });
});
