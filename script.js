var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 125 + "px";
  blur.style.top = dets.y - 125 + "px";
});

var navh4 = document.querySelectorAll(".nav h4");
navh4.forEach(function (h4) {
  h4.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 4,
      border: "0.3px solid #fff",
      backgroundColor: "transparent",
      cursor: "pointer",
      duration: 0.3,
      ease: "power2.inOut",
    });
  });
  h4.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 1,
      border: "0px solid #95c11e",
      backgroundColor: "#95c11e",
      duration: 0.3,
      ease: "power2.inOut",
    });
  });
});

gsap.to(".nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from(".about-us img, .about-txt", {
  y: 90,
  opacity: 0,
  stagger: 0.4,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.6,
  opacity: 0,
  stagger: 0.4,
  duration: 0.3,
  scrollTrigger: {
    trigger: ".card-container",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 1,
  },
});

var cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    gsap.to(card, {
      rotationX: -12,
      rotationY: 12,
      duration: 0.2,
      ease: "power2.inOut",
    });
  });
  card.addEventListener("mouseout", function () {
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.2,
      ease: "power2.inOut",
    });
  });
});

gsap.from("#upper-quote", {
  x: -60,
  y: -60,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#upper-quote",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 3,
  },
});

gsap.from("#lower-quote", {
  x: 60,
  y: 60,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#upper-quote",
    scroller: "body",
    start: "top 50%",
    end: "top 55%",
    scrub: 3,
  },
});

gsap.from(".what-sec h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".what-sec",
    scroller: "body",
    start: "top 70%",
    end: "top 80%",
    scrub: 3,
  },
});
