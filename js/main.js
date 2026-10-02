/* =====================================================
   GSAP SETUP
===================================================== */

gsap.registerPlugin(ScrollTrigger);


/* =====================================================
   HEADER
===================================================== */

const header = document.querySelector(".site-header");

ScrollTrigger.create({

    start: "top -100",

    onEnter: () => {
        header.classList.add("scrolled");
    },

    onLeaveBack: () => {
        header.classList.remove("scrolled");
    }

});


/* =====================================================
   MAIN CINEMATIC TIMELINE
===================================================== */

const timeline = gsap.timeline({

    scrollTrigger: {

        trigger: ".anime-hero",

        start: "top top",

        end: "bottom bottom",

        scrub: 1.2,

        pin: ".anime-stage",

        anticipatePin: 1,

        invalidateOnRefresh: true

    }

});


/* =====================================================
   0% → BACKGROUND START
===================================================== */

timeline.to(
    ".scene-bg",
    {
        scale: 1.15,

        xPercent: -3,

        yPercent: -3,

        duration: 1
    },
    0
);


/* =====================================================
   0% → 20%
   INTRO TEXT DISAPPEARS
===================================================== */

timeline.to(
    ".hero-copy",
    {
        opacity: 0,

        y: -120,

        scale: 0.9,

        duration: 1
    },
    0.2
);


/* =====================================================
   0% → 35%
   SWORD MOVEMENT
===================================================== */

timeline.fromTo(

    ".sword",

    {
        x: 0,

        y: 0,

        rotation: -30,

        scale: 1,

        opacity: 1
    },

    {
        x: 180,

        y: 190,

        rotation: -8,

        scale: 0.72,

        duration: 2
    },

    0.3

);


/* =====================================================
   20% → 55%
   TANJIRO ENTERS
===================================================== */

timeline.fromTo(

    ".tanjiro",

    {
        opacity: 0,

        y: 180,

        scale: 0.65
    },

    {
        opacity: 1,

        y: 0,

        scale: 1.12,

        duration: 2
    },

    1

);


/* =====================================================
   40% → 60%
   SWORD GOES TOWARD HAND
===================================================== */

timeline.to(

    ".sword",

    {
        x: 270,

        y: 270,

        rotation: 4,

        scale: 0.58,

        duration: 1.2
    },

    2.2

);


/* =====================================================
   50%
   TANJIRO BECOMES MAIN HERO
===================================================== */

timeline.to(

    ".tanjiro",

    {
        scale: 1.25,

        y: -25,

        duration: 1
    },

    2.5

);


/* =====================================================
   65% → 95%
   HASHIRA ENTER
===================================================== */

const hashiras =
    gsap.utils.toArray(".hashira");


timeline.to(

    hashiras,

    {
        opacity: 1,

        y: 0,

        scale: 1,

        stagger: 0.15,

        duration: 1.8,

        ease: "power2.out"
    },

    3.1

);


/* =====================================================
   HASHIRA GROUP MOVEMENT
===================================================== */

timeline.to(

    ".hashira-wrapper",

    {
        scale: 1.05,

        y: -10,

        duration: 1
    },

    4

);


/* =====================================================
   FINAL HERO POSITION
===================================================== */

timeline.to(

    ".tanjiro",

    {
        scale: 1,

        y: 10,

        duration: 1
    },

    4

);


/* =====================================================
   BACKGROUND FINAL
===================================================== */

timeline.to(

    ".scene-bg",

    {
        scale: 1.25,

        xPercent: 0,

        yPercent: -5,

        duration: 1
    },

    4

);


/* =====================================================
   REFRESH AFTER IMAGES LOAD
===================================================== */

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});