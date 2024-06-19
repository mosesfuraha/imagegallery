const galleryData = {
  gallery: [
    {
      id: 1,
      url: "images/image1.jpg",
      caption: "A juicy and vibrant watermelon slice.",
    },
    {
      id: 2,
      url: "images/image2.jpg",
      caption: "A bowl of fresh, tangy strawberries.",
    },
    {
      id: 3,
      url: "images/image3.jpg",
      caption: "A bunch of ripe and sweet bananas.",
    },
    {
      id: 4,
      url: "images/image4.jpg",
      caption: "Crisp and refreshing green apples.",
    },
    {
      id: 5,
      url: "images/image5.jpg",
      caption: "A collection of juicy, sun-ripened oranges.",
    },
    {
      id: 6,
      url: "images/image6.jpg",
      caption: "A vibrant mix of assorted berries.",
    },
    {
      id: 7,
      url: "images/image7.jpg",
      caption: "Lush and delicious red grapes.",
    },
    {
      id: 8,
      url: "images/image8.jpg",
      caption: "A perfectly ripe and fragrant pineapple.",
    },
  ],
};

let currentIndex = 0;

function showLightbox(index) {
  currentIndex = index;
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = galleryData.gallery[currentIndex].url;
  document.querySelector(".current-img").textContent = currentIndex + 1;
  document.querySelector(".total-img").textContent = galleryData.gallery.length;
  document.querySelector(".lightbox-caption").textContent =
    galleryData.gallery[currentIndex].caption;
  document.querySelector(".preview-box").style.display = "flex";
}

function hideLightbox() {
  document.querySelector(".preview-box").style.display = "none";
}

function navigateLightbox(direction) {
  if (direction === "next") {
    currentIndex = (currentIndex + 1) % galleryData.gallery.length;
  } else {
    currentIndex =
      (currentIndex - 1 + galleryData.gallery.length) %
      galleryData.gallery.length;
  }
  showLightbox(currentIndex);
}

function initializeGallery() {
  const galleryContainer = document.querySelector(".gallery");

  galleryData.gallery.forEach((image, index) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("image-wrapper");

    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = image.caption;
    imgElement.classList.add("image");
    imgElement.addEventListener("click", () => showLightbox(index));

    imgWrapper.appendChild(imgElement);
    galleryContainer.appendChild(imgWrapper);
  });

  document.querySelector(".fa-times").addEventListener("click", hideLightbox);
  document
    .querySelector(".prev")
    .addEventListener("click", () => navigateLightbox("prev"));
  document
    .querySelector(".next")
    .addEventListener("click", () => navigateLightbox("next"));
}

document.addEventListener("DOMContentLoaded", initializeGallery);
