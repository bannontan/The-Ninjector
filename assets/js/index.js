function togglePlay() {
    var video = document.getElementById('myVideo');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}