let tl_sd = gsap.timeline({
    scrollTrigger: {
        trigger: ".SD",
        toggleActions: "restart complete reverse resume",
        start: "top top",
        // markers: true,
        scrub: true,
        pin: true
    }
})
tl_sd.to(".p-one", {
autoAlpha: 0
});
tl_sd.from(".p-two", {
autoAlpha: 0,
// y: 20
});
tl_sd.set(
".img-one",
{
autoAlpha: 0
},
"<"
);
tl_sd.from(
".img-two",
{
autoAlpha: 0
},
">"
);