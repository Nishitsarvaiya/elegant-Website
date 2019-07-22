function animateElements(delay) {
    TweenMax.from(".logo", 1, {
          delay: delay + 0.4,
          opacity: 0,
          y: 20,
          ease: Cubic.easeInOut
    })

    TweenMax.staggerFrom("nav ul li", 1, {
          delay: delay + 0.4, opacity: 0, y: 20, ease: Quint.easeInOut
    }, 0.2)

    TweenMax.staggerFrom(".social-media ul li", 1, {
          delay: delay + 0.6, opacity: 0, y: 20, ease: Quint.easeInOut
    }, 0.2)

    TweenMax.from(".side-quote", 2, {
          delay: delay + 0.6,
          opacity: 0,
          y: 40,
          ease: Quint.easeInOut
    })

    TweenMax.from(".header h1", 2, {
          delay: delay + 0.8,
          opacity: 0,
          y: 20,
          ease: Quint.easeInOut
    })

    TweenMax.from(".header p", 2, {
          delay: delay + 1.2,
          opacity: 0,
          y: 20,
          ease: Quint.easeInOut
    })

    TweenMax.from(".header button", 2, {
          delay: delay + 1.6,
          opacity: 0,
          y: 20,
          ease: Quint.easeInOut
    })

    TweenMax.from(".container", 2, {
          delay: delay + 1.8,
          opacity: 0,
          x: 40,
          ease: Quint.easeInOut
    })

    TweenMax.from(".container h6", 2, {
          delay: delay + 2,
          opacity: 0,
          y: 40,
          ease: Expo.easeInOut
    })

    TweenMax.from(".container p", 2, {
          delay: delay + 2.2,
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut
    })
}

var delay = 0;

if ($(window).width() > 439) {
    delay = 4;
    TweenMax.fromTo(".splash h1", 2, {
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
        }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut
    });

    TweenMax.to(".splash h1", 2, {
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut,
        delay: 2
    })

    TweenMax.to(".splash", 2, {
          delay: 3,
          top: "-100%",
          ease: Expo.easeInOut
    })

    animateElements(delay);

}   else {
    animateElements(delay);
}
