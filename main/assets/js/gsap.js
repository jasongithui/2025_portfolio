 // use a script tag or an external JS file
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

 

  document.addEventListener("DOMContentLoaded", (event) => {
        // gsap code here!
        gsap.to(".jason", {
          x: "-50vw",
          ease: "power2.out",
          duration: 1,
          stagger: { amount: 0.2 },
          scrollTrigger: {
            trigger: ".section-home-intro",
            start: "top 100%", 
            end: "top ", 
            scrub: true, // Link animation to scroll progress
            markers: false, // Set to true for debugging
          },
        });

        gsap.to(".githui", {
          x: "50vw",
          ease: "power2.out",
          duration: 1,
          stagger: { amount: 0.2 },
          scrollTrigger: {
            trigger: ".section-home-intro",
            start: "top 100%", 
            end: "top ", 
            scrub: true, // Link animation to scroll progress
            markers: false, // Set to true for debugging
          },
        });

        gsap.to(".c-copyright", {
          x: "95vw",
          ease: "power2.out",
          
          stagger: { amount: 0.2 },
          scrollTrigger: {
            trigger: ".section-home-intro",
            start: "top 100%", 
            end: "top ", 
            scrub: true, // Link animation to scroll progress
            markers: false, // Set to true for debugging
          },
        });
        // //  Selected projects section
        // gsap.to(".gsap-selected", {
        //   x: "0%",
        //   rotation: 360,
        //   ease: "power1.out",
        //   duration: 0.6,
        //   stagger: { amount: 0.2 },
        //   scrollTrigger: {
        //     trigger: ".section-home-projects",
        //     start: "top 65%", // When section top hits bottom of viewport
        //     end: "top ", // When section center hits center of viewport
        //     scrub: true, // Link animation to scroll progress
        //     markers: false, // Set to true for debugging
        //   },
        // });

        // gsap.to(".gsap-projects", {
        //   x: "0%",
        //   rotation: -360,
        //   ease: "power1.out",
        //   duration: 0.6,
        //   stagger: { amount: 0.2 },
        //   scrollTrigger: {
        //     trigger: ".section-home-projects",
        //     start: "top 60%", // When section top hits bottom of viewport
        //     end: "top ", // When section center hits center of viewport
        //     scrub: true, // Link animation to scroll progress
        //     markers: false, // Set to true for debugging
        //   },
        // });
});
const tl = gsap.to;
/* Progress Event */

window.addEventListener("progressEvent", (e) => {
  const { progress } = e.detail;

  /* Update timeline progress */
  tl.progress(progress);
});

  // ScrollTrigger.create({
  //   trigger: ".section-home-intro",
  //   scrub: true,
  //   start: "top 50%", // when section-home reaches the very top
  //   onEnter: () => gsap.set(".header-image-block", { display: "none" }),
  //   onLeaveBack: () => gsap.set(".header-image-block", { display: "block" }) // restore when scrolling back up
  // });

      Splitting();

      //negative Y Smooth entrance of each character with opacity fade and randomized stagger as the section hits the top of the viewport.
      document.querySelectorAll(".fade-in-random").forEach((el) => {
        const chars = el.querySelectorAll(".word");

        gsap.from(chars, {
          scrollTrigger: {
            trigger: ".fade-in-random",
            start: "top 50%", // start animation when section hits top
            toggleActions: "play none none none",
          },
          y: -50,
          opacity: 0,
          duration: 0.4,
          ease: "power1.out",
          stagger: {
            amount: 0.5,
            from: "random",
          },
        });
      });
      //Positive Y Smooth entrance of each character with opacity fade and randomized stagger as the section hits the top of the viewport.
      document.querySelectorAll(".fade-about-text").forEach((el) => {
        const aboutWords = el.querySelectorAll(".word");

        gsap.from(aboutWords, {
          scrollTrigger: {
            trigger: ".button-scroll",
            start: "top 100%", // start animation when section hits top
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
          stagger: {
            amount: 0.5,
            from: "random",
          },
        });
     
    });

   
      
    