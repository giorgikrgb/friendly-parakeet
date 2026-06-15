const heroImages = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
];

let currentImage = 0;

const sliderImage = document.getElementById("slider-image");

setInterval(() => {

    currentImage++;

    if (currentImage >= heroImages.length) {
        currentImage = 0;
    }

    sliderImage.src = heroImages[currentImage];

}, 5000);

const aboutSection = document.querySelector(".about");

let skillsAnimated = false;

window.addEventListener("scroll", () => {

    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (
        sectionTop < window.innerHeight - 100 &&
        !skillsAnimated
    ) {

        document.querySelector(".html-bar").style.width = "90%";
        document.querySelector(".css-bar").style.width = "85%";
        document.querySelector(".js-bar").style.width = "75%";
        document.querySelector(".git-bar").style.width = "80%";

        skillsAnimated = true;
    }

});
const filterButtons =
document.querySelectorAll(".filter-btn");

const projects =
document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach(project => {

            if (
                filter === "all" ||
                project.dataset.category === filter
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});