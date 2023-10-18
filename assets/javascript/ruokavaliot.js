const images = ["food11.jpg", "food22.jpg", "food33.jpg"]; // Luo taulukko kuvien tiedostonimillä
const imageElement = document.querySelector('header img'); // Etsi kuvan elementti
let currentImageIndex = 0; // Alustetaan nykyisen kuvan indeksi

// Määritä aikaväli kuvan vaihtamiselle (esimerkiksi 5 sekuntia)
const interval = 5000; // 5000 millisekuntia = 5 sekuntia

// Funktio vaihtaa kuvan
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Liikuta indeksiä ja takaisin alkuun, kun saavutetaan taulukon loppu
  const imagePath = "assets/pictures/" + images[currentImageIndex];
  imageElement.src = imagePath;
}

// Käynnistä ajastin kuvan vaihtamiselle
setInterval(changeImage, interval);