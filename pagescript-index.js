'use strict';

var localVideo = document.getElementById('localVideo');
var startButton = document.getElementById('startButton');
startButton.onclick = start;

localVideo.addEventListener('loadedmetadata', function() {
  trace('Local video videoWidth: ' + this.videoWidth +
    'px,  videoHeight: ' + this.videoHeight + 'px');
});

function gotStream(stream) {
  trace('Received local stream');
  localVideo.srcObject = stream;
  localStream = stream;
}

function start() {
  trace('Requesting local stream');
  startButton.disabled = true;
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true})
  .then(gotStream)
  .catch(function(e) {
    alert('getUserMedia() error: ' + e);
  });
}