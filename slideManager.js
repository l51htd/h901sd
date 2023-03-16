const slides = document.getElementById("slides");
const slideCounter = document.getElementById("slide-counter");
let currentSlide = 0;

function updateSlideCounter() {
    slideCounter.textContent = `${currentSlide + 1}/${slides.children.length}`;
}

function switchSlide(slideNumber) {
    if (slideNumber < 0 || slideNumber >= slides.children.length) return;

    for (i in slides.children) {
        const slide = slides.children[i];
        if (!(slide instanceof HTMLElement)) continue;

        if (!slide.classList.contains("inactive")) slide.classList.add("inactive");

        if (i == slideNumber) slide.classList.remove("inactive");
    }

    currentSlide = slideNumber;
    updateSlideCounter();
}

document.body.addEventListener("click", () => {
    switchSlide(currentSlide + 1);
});

document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    switchSlide(currentSlide - 1);
});

switchSlide(0);