// script.js

// Haetaan lomakkeen elementit
const treeniForm = document.getElementById('treeni-form');
const ageSelect = document.getElementById('age');
const goalSelect = document.getElementById('goal');
const levelSelect = document.getElementById('level');
const errorMessage = document.getElementById('error-message');

// Lisätään kuuntelija lomakkeen lähettämiseen
treeniForm.addEventListener('submit', validateForm);

function validateForm(event) {
    // Tarkistetaan, onko "Valitse" valittuna jossain valikossa
    if (ageSelect.value === "" || goalSelect.value === "" || levelSelect.value === "") {
        event.preventDefault(); // Estetään lomakkeen lähetys
        errorMessage.textContent = "Valitse kaikki vaihtoehdot."; // Näytetään virheilmoitus
        errorMessage.style.color = "red"; // Muutetaan tekstiväri punaiseksi

        // Korostetaan valikot punaisella reunuksella
        if (ageSelect.value === "") {
            ageSelect.style.borderColor = "red";
        }
        if (goalSelect.value === "") {
            goalSelect.style.borderColor = "red";
        }
        if (levelSelect.value === "") {
            levelSelect.style.borderColor = "red";
        }
    }
}
