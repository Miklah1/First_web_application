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

// Haetaan tarvittavat elementit
const table = document.getElementById('dietTable');

// Luodaan taulukon järjestystä seuraava muuttuja
let sortDirection = 1;

// Funktio taulukon järjestämiseen
function sortTable(columnIndex) {
    // Hae taulukon rivit, poista ensimmäinen rivi (otsikkorivi)
    const rows = Array.from(table.rows).slice(1);

    // Vaihda järjestys jokaisella klikkauksella
    sortDirection = -sortDirection;

    // Järjestä rivit valitun sarakkeen perusteella
    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent;
        const cellB = rowB.cells[columnIndex].textContent;

        // Käytä sortDirection-muuttujaa järjestyksen määrittämiseen
        return sortDirection * cellA.localeCompare(cellB);
    });

    // Asetetaan järjestetyt rivit takaisin taulukkoon
    rows.forEach((row) => table.tBodies[0].appendChild(row));
}

// Alusta taulukko järjestämistä varten
table.rows[0].cells.forEach((cell, index) => {
    // Kuuntele otsikkosarakkeen klikkausta ja kutsu sortTable-funktiota
    cell.addEventListener('click', () => sortTable(index));
});
