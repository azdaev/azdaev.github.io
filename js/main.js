const jedi = document.querySelector("#jedi");
const sith = document.querySelector("#sith");
const saber = document.querySelector(".container");
const overflow = document.querySelector(".overflow");
const GREEN = "#2ecc71";
const RED = "#d91e18";
const audio = document.querySelector("audio");


var myShakeEvent = new Shake({
    threshold: 15
});
myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);

function shakeEventDidOccur() {
  audio.play();
  alert('shake!');
};


jedi.addEventListener("click", () => {
  saber.style.background = GREEN;
  TweenMax.to(".overflow h1", 1, {
    opacity: 0,
    y: -60,
  });
  TweenMax.to(".overflow", 1, {
    delay: 0.2,
    top: "-100%",
    ease: Expo.easeInOut
  });
  setTimeout(() => {
    overflow.style.display = "none";
  }, 1000);
});

sith.addEventListener("click", () => {
  saber.style.background = RED;
  TweenMax.to(".overflow h1", 1, {
    opacity: 0,
    y: -60,
  });
  TweenMax.to(".overflow", 1, {
    delay: 0.2,
    top: "-100%",
    ease: Expo.easeInOut
  });
  setTimeout(() => {
    overflow.style.display = "none";
  }, 1000);
});
