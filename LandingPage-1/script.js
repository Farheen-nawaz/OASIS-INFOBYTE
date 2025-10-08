// Animate text lines one by one
gsap.from("#text-div h1", {
  y: 100,   
           // slide from bottom
  opacity: 0,        // start invisible
  duration: 1.5,       // each animation duration
  stagger: 0.5,
  yoyo:true,
  ease: "sine.inOut",
  repeat:-1
  
  // delay between each line
//   ease: "linear" // smooth easing
});

gsap.to("#vertical-text h1", {
  x: -100, 
  opacity: 0,
  duration: 5,
  repeat:-1,
//   delay: 1.5,        // after main text appears
  ease: "linear"
});

// gsap.to("#text-div h1", {
//   y: -10,
//   repeat: -1,       // infinite loop
//   yoyo: true,       // go back smoothly
//   duration: 1.5,
// //   ease: "sine.inOut",
//   delay: 2          // wait until main animation finishes
// });
