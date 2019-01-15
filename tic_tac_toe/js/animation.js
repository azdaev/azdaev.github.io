TweenMax.to(".overlay h1", 2, {
  opacity: 0,
  y: -60,
});

TweenMax.to(".overlay", 1, {
  delay: 0.2,
  top: "-100%",
  ease: Expo.easeInOut
});

TweenMax.from(".main h1", 0.2, {
  delay: 0.75,
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from(".box", 0.4, {
  delay: 0.9,
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut
});
