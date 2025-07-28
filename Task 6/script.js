const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.querySelector("#lightbox");
    const lightboxImage = lightbox.querySelector("img");

    galleryImages.forEach( (img) => {
        img.addEventListener("click", () => {
            lightboxImage.src = img.src;
            lightbox.classList.add("active");
        });
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });