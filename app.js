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
const testimonials = [

{
    image: "img1.jpg",
    name: "John Smith",
    job: "Web Designer",
    text: "Excellent developer and great communication skills."
},

{
    image: "img2.jpg",
    name: "Sarah Johnson",
    job: "Project Manager",
    text: "Very responsible and easy to work with."
},

{
    image: "logo.jpg",
    name: "Michael Brown",
    job: "UI Designer",
    text: "Creative and professional developer."
},

{
    image: "logo1.jpg",
    name: "Emma Wilson",
    job: "Business Owner",
    text: "Delivered the project on time and exceeded expectations."
}

];

const testimonialButtons =
document.querySelectorAll(".testimonial-btn");

const testimonialImage =
document.getElementById("testimonial-image");

const testimonialName =
document.getElementById("testimonial-name");

const testimonialJob =
document.getElementById("testimonial-job");

const testimonialText =
document.getElementById("testimonial-text");

testimonialButtons.forEach(button => {

    button.addEventListener("click", () => {

        const index = button.dataset.slide;

        testimonialImage.src =
        testimonials[index].image;

        testimonialName.textContent =
        testimonials[index].name;

        testimonialJob.textContent =
        testimonials[index].job;

        testimonialText.textContent =
        testimonials[index].text;

    });

});
const form =
document.getElementById("contact-form");

const modal =
document.getElementById("modal");

const closeModal =
document.getElementById("close-modal");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = {

        name: form.name.value,
        email: form.email.value,
        website: form.website.value,
        message: form.message.value

    };

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData)
            }
        );

        if (response.ok) {

            modal.classList.add("show");

            form.reset();

        }

    } catch (error) {

        console.error(error);

    }

});
closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});
window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

    }

});