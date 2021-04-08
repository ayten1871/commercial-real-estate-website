//first part
const TIMELINE = gsap.timeline({ defaults: { duration: 1 } })
TIMELINE
    .from('.section1__left', { y: '15%', ease: 'circ' })
    .from('.section1__right', { y: '10%', ease: 'circ' }, .2)
    .from('.highlight', { y: '5%', ease: 'circ' })


//back to top
var mybutton = document.getElementById("back-to-top");

// show the button When the user scrolls down 20px from the top of the document 
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// scroll to the top of the document when the user clicks on the button
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' }) //smooth effect
}

//second part
gsap.registerPlugin(ScrollTrigger)
gsap.from(".section2__top", {
    scrollTrigger: {
      trigger: ".section2",
      toggleActions: "restart pause resume pause"
    },
    duration: 5, 
    y: "-10vh",
    ease: "power3"
})
gsap.from(".item-list", {
    scrollTrigger: {
        start:"top center",
      trigger: ".section2",
        toggleActions: "restart pause resume pause",
    },
    duration: 7, 
    y: "-10vh",
    ease: "circ"
})


//second part
// draggable background
const el = document.querySelector(".section2");
el.addEventListener("mousemove", (e) => {
  let move=(e.pageX*-1/8)
  el.style.backgroundPositionX = move + "px ";
});

//third part
gsap.from(".section3-content", {
  scrollTrigger: {
    trigger: ".section3-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 3, 
  y: "5vh",
  ease: "power4"
})

//fourth part
gsap.from(".section4-video", {
  scrollTrigger: {
    trigger: ".section4-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 3, 
  x: "-5vw",
  ease: "power4"
})
gsap.from(".section4-content", {
  scrollTrigger: {
      start:"top center",
    trigger: ".section4-container",
      toggleActions: "restart pause resume pause",
  },
  duration: 3, 
  x: "5vw",
  ease: "power4"
})

gsap.from(".section4-2-content", {
  scrollTrigger: {
      start:"top center",
    trigger: ".section4-container",
      toggleActions: "restart pause resume pause",
  },
  duration: 3, 
  x: "-5vw",
  ease: "power4"
})
gsap.from(".section4-2-img", {
  scrollTrigger: {
    trigger: ".section4-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 3, 
  x: "5vw",
  ease: "power4"
})

//fifth part
gsap.from(".section5-content-title", {
  scrollTrigger: {
    trigger: ".section5-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 1, 
  y: "10vh",
  ease: "power3"
})
gsap.from(".section5-content-p", {
  scrollTrigger: {
    trigger: ".section5-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 1, 
  y: "15vh",
  ease: "power2"
})
gsap.from(".section5-content-bottom", {
  scrollTrigger: {
    start: "top center",
    trigger: ".section5-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 1, 
  y: "15vh",
  ease: "power1"
})
gsap.from(".section5-img", {
  scrollTrigger: {
    start: "center bottom",
    trigger: ".section5-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 1, 
  y: "15vh",
  ease: "power1"
})
gsap.from(".section5-grid-left", {
  scrollTrigger: {
    start: "center bottom",
    trigger: ".section5-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 2, 
  x: "-15vw",
  ease: "power1"
})
gsap.from(".section5-grid-right", {
  scrollTrigger: {
    start: "center bottom",
    trigger: ".section5-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 2, 
  x: "15vw",
  ease: "power1"
})

//sixth part
gsap.from(".section6", {
  scrollTrigger: {
    trigger: ".section6-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 1, 
  y: "20vh",
  ease: "power4"
})

//seventh part
gsap.from(".section7-left", {
  scrollTrigger: {
    trigger: ".section7-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 1, 
  x: "-10vw",
  ease: "power4"
})
gsap.from(".sectiion-right-title", {
  scrollTrigger: {
    trigger: ".section7-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 2, 
  y: "10vh",
  ease: "power4"
})
gsap.from(".sectiion-right-p", {
  scrollTrigger: {
    trigger: ".section7-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 3, 
  y: "15vh",
  ease: "power4"
})
gsap.from(".section7-right-down", {
  scrollTrigger: {
    trigger: ".section7-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 3, 
  y: "20vh",
  ease: "power2"
})
//eightth part
gsap.from(".section8-content-text", {
  scrollTrigger: {
    start:"top center",
    trigger: ".section8-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 2, 
  y: "10vh",
  ease: "power3"
})

//contact
gsap.from(".contact-form", {
  scrollTrigger: {
    start:"top center",
    trigger: ".contact-container",
    toggleActions: "restart pause resume pause"
  },
  duration: 2, 
  y: "10vh",
  ease: "power3"
})