TweenMax.to("#overlay h1", 2, {
  opacity: 0,
  y: -60,
});

TweenMax.to("#overlay", 1, {
  delay: 0.2,
  top: "-100%",
  ease: Expo.easeInOut
});

TweenMax.from("#heading", 0.2, {
  delay: 0.6,
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from("#originalStr", 1, {
  delay: 1.05,
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from("#reversedStr", 0.7, {
  delay: 1.3,
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from("#input", 0.7, {
  delay: 1.1,
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from("#resText", 0.7, {
  delay: 1.35,
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from("button", 0.5, {
  delay: 1.4,
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from(".divider", 1, {
  delay: 1.4,
  opacity: 0,
  height: 0,
  ease: Expo.easeInOut
});
