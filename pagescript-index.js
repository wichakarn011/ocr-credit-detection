'use strict';

var localVideo = document.getElementById('localVideo');
var startButton = document.getElementById('startButton');
startButton.onclick = start;

localVideo.addEventListener('loadedmetadata', function() {
  alert('Local video videoWidth: ' + this.videoWidth +
    'px,  videoHeight: ' + this.videoHeight + 'px');
});

function gotStream(stream) {
  alert('Received local stream');
  localVideo.srcObject = stream;
  localStream = stream;
}

function start() {
  alert('Requesting local stream');
  startButton.disabled = true;
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true})
  .then(gotStream)
  .catch(function(e) {
    alert('getUserMedia() error: ' + e);
  });
}
