const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');
const volumeSlider = document.getElementById('volumeSlider');

fileInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
    audioPlayer.play();
  }
});

volumeSlider.addEventListener('input', function () {
  audioPlayer.volume = this.value;
});