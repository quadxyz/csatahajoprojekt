window.onload = function() {
   var audio = document.getElementById('background_audio');
   var speakerIcon = document.getElementById('speaker_icon');
 
   // Audio is muted by default, but starts playing in the background
   audio.volume = 1.0; // Maximum volume
   audio.muted = false; // Start unmuted
   audio.play().catch(error => {
     console.log('Audio play was prevented:', error);
   });
 
   // Handle mute/unmute toggle on button click
   speakerIcon.addEventListener('click', function() {
     // Toggle the muted state
     audio.muted = !audio.muted;
 
     // Change the icon based on the muted state
     if (audio.muted) {
       speakerIcon.innerHTML = '🔇'; // Muted icon
     } else {
       speakerIcon.innerHTML = '🔊'; // Unmuted icon
     }
   });
 };
 