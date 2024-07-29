const body = document.getElementById('lightDarkSwitch');
const switchContainer = document.getElementById('switchContainer');
const switchDot = document.getElementById('switchDot');
const sunGlow = document.getElementById('sunGlow');
const moonGlow = document.getElementById('moonGlow');
const clouds = document.getElementsByClassName('sky-cloud');
const skyElements = document.getElementById('skyElements');
const dotCrater = document.getElementsByClassName('dot-crater');

switchContainer.addEventListener('click', function() {
  body.classList.toggle('dark');
  switchContainer.classList.toggle('switch-container--dark');
  switchDot.classList.toggle('switch-dot--dark');
  sunGlow.classList.toggle('sun-glow--dark');
  moonGlow.classList.toggle('moon-glow--dark');
  skyElements.classList.toggle('sky-elements--dark');
  for(const cloud of clouds) {cloud.classList.toggle('sky-cloud--dark')}
  for(const crater of dotCrater) {crater.classList.toggle('dot-crater--dark')}
});
