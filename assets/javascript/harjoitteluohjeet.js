const errorMessage = document.getElementById("error-message"); // Etsi virheilmoituksen elementti   
// Harjoitteluohjeet //

document.addEventListener("DOMContentLoaded", function () {
    const lihasryhmaValinta = document.getElementById("lihasryhma");
    const naytaLiikeButton = document.getElementById("naytaLiike");
    const liikkeenKuvausDiv = document.getElementById("liikkeenKuvaus");

    naytaLiikeButton.addEventListener("click", function () {
        const valittuLihasryhma = lihasryhmaValinta.value;

        // Haetaan ohjeet JSON-tiedostosta
        fetch('https://miklah1.github.io/Server//liikkeet.json')
            .then(response => response.json())
            .then(data => {
                const liikeOhjeet = data[valittuLihasryhma];

                if (valittuLihasryhma ==="") {
                    lihasryhmaValinta.style.borderColor = "red";
                    lihasryhmaValinta.style.borderWidth = "2px";
                    return;
                }
                else if (liikeOhjeet) {
                    lihasryhmaValinta.style.borderColor = "";
                    lihasryhmaValinta.style.borderWidth = "";
                    liikkeenKuvausDiv.innerHTML = `
                        <p>Kehonpainoharjoitus:</p>
                        <p>${liikeOhjeet.kehonpaino}</p>
                        <ul>
                            <li>${liikeOhjeet.tarkemmatHuomiotkp[0]}</li>
                            <li>${liikeOhjeet.tarkemmatHuomiotkp[1]}</li>
                            <li>${liikeOhjeet.tarkemmatHuomiotkp[2]}</li>
                        </ul>
                        <p>Kuntosalilla:</p>
                        <p>${liikeOhjeet.kuntosalilla}</p>
                        <ul>
                            <li>${liikeOhjeet.tarkemmatHuomiotsali[0]}</li>
                            <li>${liikeOhjeet.tarkemmatHuomiotsali[1]}</li>
                            <li>${liikeOhjeet.tarkemmatHuomiotsali[2]}</li>
                        </ul>
                    `;
                } 
            })
            .catch(error => {
                console.error("Virhe: " + error);
            });
    });
});