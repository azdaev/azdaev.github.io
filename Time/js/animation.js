TweenMax.to("#overlay h1", 1, {
  delay: 0.6,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
});

TweenMax.to("#overlay", 1, {
  delay: 0.7,
  top: "-100%",
  ease: Expo.easeInOut
});

TweenMax.from("#timeHeading", 1, {
  delay: 0.8,
  y: 40,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from("#dateParagraph", 1, {
  delay: 0.8,
  y: 40,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".bg", 1, {
  delay: 1.1,
  bottom: "-100%",
  ease: Expo.easeInOut
})
