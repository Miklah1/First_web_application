const images = ["food11.jpg", "food22.jpg", "food33.jpg"]; // Luodaan taulukko kuvien tiedostonimillä
const imageElement = document.querySelector('header img'); // Etsi kuvan elementti
let currentImageIndex = 0; // Alustetaan nykyisen kuvan indeksi

// Määritetään aikaväli kuvan vaihtamiselle
const interval = 5000; // 5000 millisekuntia = 5 sekuntia

// Funktio vaihtaa kuvan
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length; 
  const imagePath = "assets/pictures/" + images[currentImageIndex];
  imageElement.src = imagePath; 
}

// Käynnistä ajastin kuvan vaihtamiselle
setInterval(changeImage, interval);