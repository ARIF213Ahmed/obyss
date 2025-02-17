function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loadinganimation(){
    var tl = gsap.timeline();

tl.from(".line h1",{
    y:150,
    stagger:0.3,
    duration:0.6,
    delay:0.6
})
tl.from("#line-part1, .line h2",{
    opacity:0,
    onStart:function(){
    var h1timmer = document.querySelector("#line-part1 h5");
    var count = 0;
    setInterval(function(){
    if(count<100)
    {   
        h1timmer.innerHTML = count++;
    }
    else{
        h1timmer.innerHTML = count;
    }
    
}, 35);
    }

})
tl.to("#loader", {
    opacity: 0,
    duration: 0.6,
    delay: 4,
})
tl.from(".page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4,
})
tl.to("#loader",{
    display:"none"
})


tl.from(".nav",{
    opacity:0
})
tl.from(".hero h1",{
    y:120,
    stagger:0.2,
    duration:0.6,
    delay:0.6
})



}

function cursor(){
  Shery.makeMagnet("#cur" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(1, 1, 1, 1)",

        duration: .2,
      });
    

      var videoContainer = document.querySelector(".page-video");
      var video = document.querySelector(".page-video video");
      var img1 = document.querySelector(".page-video img");
      videoContainer.addEventListener("mouseenter", function () {
        videoContainer.addEventListener("mousemove", function (dets){
            gsap.to(".mousefollower", {
                opacity: 0
              })
              gsap.to(".video_cursor", {
                left: dets.x - 485,
                y: dets.y - 100,
              })

        })
    })
    videoContainer.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
          opacity: 1
    
        });
        gsap.to(".video_cursor", {
          left: "80%",
          top: "-10%",
        });
      });
      var flag = 0
      videoContainer.addEventListener("click",function(){
        if(flag == 0){
          video.play(),
        video.style.opacity = 1,
        img1.style.opacity = 0,
        document.querySelector(".video_cursor ").innerHTML = `<i class="ri-pause-line"></i>`;
        gsap.to(".video_cursor",{
          scale:0.5
        })
        flag = 1;
        }
        else{
          video.pause(),
        video.style.opacity = 0,
        img1.style.opacity = 1,
        document.querySelector(".video_cursor ").innerHTML = `<i class="ri-play-fill"></i>`;
        gsap.to(".video_cursor",{
          scale:1
        })
        flag =0;
        }
        
      })
     


    
    
}

function sheryAnimation(){
    Shery.imageEffect(".page3-img",{
        style:5,
        config:
            {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272695760684946},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":2.05,"range":[0.1,5]},"durationIn":{"value":2.94,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}

        ,
        gooey:true,

    })
}

function flag(){
  document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      left:dets.x,
      y:dets.y
    })
  })
  document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
      opacity:1,
    })
  })
  document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
      opacity:0
    })
  })
  
}

function footerAnimation() {

  var clutter = "";
  document.querySelector(".page6-top h1").textContent.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  })
  document.querySelector(".page6-top h1").innerHTML = clutter

  document.querySelector(".page6-top h1").addEventListener("mouseenter", function () {
    gsap.to(".page6 h1 span", {
      opacity: 0,
      stagger: 0.05
    })
  })
  document.querySelector(".page6-top h1").addEventListener("mouseleave", function () {
    gsap.to(".page6 h1 span", {
      opacity: 1,
      stagger: 0.1,

    })
  })
}

cursor();
loco();
footerAnimation();
loadinganimation();
sheryAnimation();
flag();








