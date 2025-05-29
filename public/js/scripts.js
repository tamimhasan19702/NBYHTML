/** @format */

// Year at the bottom
document.getElementById("year").innerHTML = new Date().getFullYear();

gsap.from("#hero-video", {
  y: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".hero-line", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  delay: 0.8,
  ease: "power3.out",
});
