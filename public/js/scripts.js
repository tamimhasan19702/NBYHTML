/** @format */

// tabs

document.querySelectorAll("[data-tab]").forEach((button) => {
  button.addEventListener("click", function () {
    const target = this.getAttribute("data-tab");

    document.querySelectorAll("[data-tab]").forEach((btn) => {
      btn.classList.remove("text-white", "bg-black", "bg-opacity-70");
      btn.classList.add("text-gray-500", "bg-gray-50");
    });

    this.classList.add("text-white", "bg-black", "bg-opacity-70");
    this.classList.remove("text-gray-500", "bg-gray-50");

    gsap.to(".tab-pane", {
      opacity: 0,
      y: 10,
      duration: 0.3,
      onComplete: () => {
        // Hide all
        document.querySelectorAll(".tab-pane").forEach((pane) => {
          pane.classList.add("hidden");
        });

        const selected = document.getElementById(target);
        selected.classList.remove("hidden");

        gsap.fromTo(selected, { opacity: 0, y: 10 }, { opacity: 1, y: 0 });
      },
    });
  });
});

document.querySelector('[data-tab="profile"]').click();

//social media

gsap.set(".social-sidebar", {
  x: -100,
  opacity: 0,
  autoAlpha: 0,
});

gsap.to(".social-sidebar", {
  x: 0,
  opacity: 1,
  autoAlpha: 1,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".social-sidebar",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

gsap.set(".social-sidebar", {
  x: -100,
  opacity: 0,
  autoAlpha: 0,
});

gsap.to(".social-sidebar", {
  x: 0,
  opacity: 1,
  autoAlpha: 1,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".social-sidebar",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".heading, .paragraph").forEach((el, i) => {
  gsap.from(el, {
    y: 60,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  });
});

gsap.from(".heading, .paragraph", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".heading",
    start: "top 85%",
    end: "top 60%",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});
