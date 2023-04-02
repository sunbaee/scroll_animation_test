const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.remove('hidden');
            e.target.classList.add('show');
        } else {
            e.target.classList.remove('show');
            e.target.classList.add('hidden');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

/* scroll track */

const scrollTracker = document.querySelector('.scroll-tracker');

document.addEventListener('scroll', () => {
    const scrollPosition = document.documentElement.scrollTop,
          clientHeight = document.body.clientHeight;

    let scrollDecimal = scrollPosition / clientHeight * 5/4;
    console.log(scrollDecimal);

    scrollTracker.animate({
        transform: (`scaleY(${scrollDecimal})`)
    }, {
        duration: 1000,
        fill: "forwards"
    })
})