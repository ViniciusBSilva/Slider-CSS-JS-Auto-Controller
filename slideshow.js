let interval;

const responsiveSlider = () => {
    const slider = document.getElementById("slider");
    const slideList = document.getElementById("slideWrap");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    const items = slideList.querySelectorAll("li").length;

    let sliderWidth = slider.offsetWidth;
    let count = 1;

    window.addEventListener("resize", () => {
        sliderWidth = slider.offsetWidth;
    })

    const prevSlide = () => {
        count = (count > 1) ? count - 2 : (count == 1) ? items - 1 : 1;
        slideList.style.left = `-${count * sliderWidth}px`;
        count++;

        clearInterval(interval);
        interval = setInterval(() => nextSlide(), 5000);
    }

    const nextSlide = () => {
        if (count < items) {
            slideList.style.left = `-${count * sliderWidth}px`;
            count++;
        } else if (count == items) {
            slideList.style.left = `0px`;
            count = 1;
        }

        clearInterval(interval);
        interval = setInterval(() => nextSlide(), 5000);
    }

    prev.addEventListener("click", () => prevSlide(interval));
    next.addEventListener("click", () => nextSlide(interval));

    interval = setInterval(() => nextSlide(), 5000);

};

window.onload = () => responsiveSlider();