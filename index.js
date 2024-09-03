document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hamburger").addEventListener("click", function(){
        document.querySelector(".wrapper").classList.toggle("collapse");
    });
});
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.classList.remove("active-slide"));
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active-slide");
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
