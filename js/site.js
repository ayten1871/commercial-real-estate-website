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
  let move=(e.pageX*-1/4)
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

