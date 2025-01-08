const images = {
    pieza: ["pieza1.jpeg", "pieza2.jpeg", "pieza3.jpeg"],
    baño: ["baño1.jpeg", "baño2.jpeg", "baño3.jpeg", "baño4.jpeg", "baño5.jpeg", "baño6.jpeg"],
    closet: ["closet1.jpeg"]
};

let currentCategory = "all";

const carouselImages = document.getElementById("carousel-images");
const categoryButtons = document.querySelectorAll(".category-btn");

function loadImages(category) {
    console.log("Cargando imágenes para la categoría:", category); // Debugging
    carouselImages.innerHTML = ""; // Clear existing images
    let selectedImages = [];

    if (category === "all") {
        selectedImages = Object.values(images).flat();
    } else {
        selectedImages = images[category];
    }

    console.log("Imágenes seleccionadas:", selectedImages); // Debugging

    selectedImages.forEach((img, index) => {
        const div = document.createElement("div");
        div.className = `carousel-item${index === 0 ? " active" : ""}`;
        div.innerHTML = `<img src="assets/img/${img}" class="d-block w-100" alt="${img}">`;
        carouselImages.appendChild(div);
    });
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentCategory = button.dataset.category;
        categoryButtons.forEach(btn => btn.className = "btn btn-secondary me-2 category-btn");
        button.className = "btn btn-primary me-2 category-btn";
        loadImages(currentCategory);
    });
});

// Cargar imágenes al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    loadImages(currentCategory);
});
