const imageFiles = {
    w: "images/tom1.png",
    a: "images/tom2.png",
    s: "images/tom3.png",
    d: "images/tom4.png",
    j: "images/kick.png",
    k: "images/snare.png",
    l: "images/crash.png"
};

const soundFiles = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/kick-bass.mp3",
    k: "sounds/snare.mp3",
    l: "sounds/crash.mp3"
};

function playSound(key) {
    const audio = new Audio(soundFiles[key]);
    audio.play();
}

function handleClick(event) {
  const button = event.target;
  const key = button.textContent;
  button.classList.add('pressed');
  setTimeout(() => {
      button.classList.remove('pressed');
  }, 100);
  console.log(key);
  console.log(soundFiles[key]);
  playSound(key);
}

document.querySelectorAll('.drum').forEach(button => {
    const key = button.textContent;
    console.log(`url(${imageFiles[key]})`);
    button.style.backgroundImage = `url(${imageFiles[key]})`;
    button.addEventListener('click', handleClick);
});

document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (soundFiles[key]) {
        playSound(key);
    }
});