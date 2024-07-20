const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-section',
        pin: true,
        start: '50% 50%',
        end: '300% 50%',
        scrub: true,
    }
});

tl.to("#animation", {
    opacity: 1,
    filter: "blur(0px)"
})
    .to("#nam", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#nesciunt", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#elit", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#ipsum", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#quaerat", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#dolor", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#accusamus", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#consectetur", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#Lorem", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#amet", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#adipisicing", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#sit", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#doloremque", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#adipisicing2", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })