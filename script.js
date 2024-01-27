function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotive();



function moveCursor(){
    let page1Content = document.querySelector('#page1-content');
    let cursor = document.querySelector('#cursor_reel');
    
    page1Content.addEventListener('mousemove', function(dets){
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    });
    
    page1Content.addEventListener('mouseenter', function(dets){
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    });
    page1Content.addEventListener('mouseleave', function(dets){
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    });
}

moveCursor();

t1 = gsap.timeline();
t1.from('#page1-content>nav>h3, #page1-content>nav>h4', {
    y: -100,
    delay: 5,
    duration: 1,
    stagger: 0.5,
    opacity: 0
});

gsap.from('.hero_heading', {
    y: 200,
    delay: 6,
    opacity: 0
});

gsap.from('.page2Contentheader, .page2_hr, .page2header2', {
    y: 120,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '#page2',
        scroller: '#main',
        start: 'top 30%',
        end: 'bottom bottom',
        markers: false,
        scrub: 2
        }
});

gsap.from('#page3-top > h4, #page3-top > h1, #page3-elems>h3', {
    y: 60,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '#page3',
        scroller: '#main',
        start: 'top 65%',
        end: 'bottom bottom',
        markers: false,
        scrub: 2
        }
});

gsap.from('#page4 > p, .page4header2, #page4 > hr', {
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '#page4',
        scroller: '#main',
        start: 'top 50%',
        end: 'bottom bottom',
        markers: false,
        scrub: 2
        }
});

gsap.from('#page6 > p, #page6 > hr, .page6header2', {
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '#page6',
        scroller: '#main',
        start: 'top 65%',
        end: 'bottom bottom',
        markers: false,
        scrub: 2
        }
});


gsap.from('#page7 > h1, #page7 > hr', {
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '#page7',
        scroller: '#main',
        start: 'top 65%',
        end: 'bottom bottom',
        markers: false,
        scrub: 2
        }
});

gsap.from('#page8 > p, #page8 > h1', {
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '#page8',
        scroller: '#main',
        start: 'top 65%',
        end: 'bottom bottom',
        markers: false,
        scrub: 2
        }
});

gsap.from('.page9box1 > h3, .page9box1 > button, .page9box1 > p, .page9box3 > a, .page9box3 > p, .page9box4 > a, .page9box4 > p', {
    x: -120,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '#page9',
        scroller: '#main',
        start: 'top 65%',
        end: 'bottom bottom',
        markers: false,
        scrub: 2
        }
});

gsap.from('.footer_heading', {
    y: -120,
    duration: 0.5,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '#page9',
        scroller: '#main',
        start: 'top 10%',
        end: 'bottom bottom',
        markers: false,
        scrub: 1
        }
});

// tl = gsap.timeline();
// tl.from('.page2Contentheader, .page2_hr, .page2header2>span', {
//     opacity: 0,
//     scale: 0,
//     delay: 1,
//     duration: 1,
//     stagger: 0.5,
//     y: 120,
//     scrollTrigger: {
//         trigger: '#page2',
//         scroller: '#main',
//         start: 'top 30%',
//         end: 'bottom bottom',
//         markers: false,
//         scrub: 2
//     }
// });

let t2 = gsap.timeline();
t2.from('#loader>h3', {
    x: 40,
    stagger: 0.5,
    opacity: 0,
    duration: 1,
    delay: 1
});
t2.to('#loader>h3', {
    x: -40,
    stagger: 0.5,
    opacity: 0,
    duration: 1
});
t2.to('#loader', {
    // delay: 1,
    opacity: 0,
    display: 'none'
})


// gsap.from('.page2header2>span', {
//     x: 400,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.5,
//     // delay: 1,   
// });


// swiper code starts here
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  
// swiper code ends here


