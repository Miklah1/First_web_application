// Harjoitteluohjeet //

document.addEventListener("DOMContentLoaded", function () {
    const lihasryhmaValinta = document.getElementById("lihasryhma");
    const naytaLiikeButton = document.getElementById("naytaLiike");
    const liikkeenKuvausDiv = document.getElementById("liikkeenKuvaus");

    naytaLiikeButton.addEventListener("click", function () {
        const valittuLihasryhma = lihasryhmaValinta.value;

        
        fetch('https://miklah1.github.io/Server//liikkeet.json')
            .then(response => response.json())
            .then(data => {
                const liikeOhjeet = data[valittuLihasryhma];

                if (liikeOhjeet) {
                    liikkeenKuvausDiv.innerHTML = `
                        <p>Kehonpainoharjoitus:</p>
                        <p>${liikeOhjeet.kehonpaino}</p>
                        <ul>
                            <li>${liikeOhjeet.tarkemmatHuomiot[0]}</li>
                            <li>${liikeOhjeet.tarkemmatHuomiot[1]}</li>
                            <li>${liikeOhjeet.tarkemmatHuomiot[2]}</li>
                        </ul>
                        <p>Kuntosalilla:</p>
                        <p>${liikeOhjeet.kuntosalilla}</p>
                        <ul>
                            <li>${liikeOhjeet.tarkemmatHuomiot[0]}</li>
                            <li>${liikeOhjeet.tarkemmatHuomiot[1]}</li>
                            <li>${liikeOhjeet.tarkemmatHuomiot[2]}</li>
                        </ul>
                    `;
                } else {
                    liikkeenKuvausDiv.textContent = "Valitse oikea lihasryhmä.";
                }
            })
            .catch(error => {
                console.error("Virhe: " + error);
            });
    });
});


/*document.addEventListener("DOMContentLoaded", function () {
    const lihasryhmaValinta = document.getElementById("lihasryhma");
    const naytaLiikeButton = document.getElementById("naytaLiike");
    const liikkeenKuvausDiv = document.getElementById("liikkeenKuvaus");

    // Tietokanta liikkeille
    const liikkeet = {
        rinta: {
            kehonpaino: "Tee punnerruksia kehonpainolla. Aseta kädet lattialle olkapäiden leveydelle ja laske rintaa kohti maata.",
            kuntosalilla: "Voit tehdä penkkipunnerrusta kuntosalilla. Käytä penkkiä ja tankoa painojen kanssa.",
            tarkemmatHuomiot: [
                "Pidä selkä suorana punnerruksen aikana.",
                "Hengitä ulos, kun työnnät ylös.",
                "Vältä kyynärpäiden liian voimakasta taivuttamista sivulle."
            ]
        },
        selka: {
            kehonpaino: "Tee leuanvetoja selkälihasten treenaamiseksi.",
            kuntosalilla: "Käytä vetokonetta tai tee ylätaljaa kuntosalilla selkälihasten vahvistamiseksi.",
            tarkemmatHuomiot: [
                "Käytä leveää otetta leuanvetoihin selän yläosan treenaamiseksi.",
                "Pidä selkä suorana liikkeen aikana.",
                "Vedä olkapäät taaksepäin ja alas liikkeen yläosassa."
            ]
        },
        jalat: {
            kehonpaino: "Sisällytä kyykkyjä ja askelkyykkyjä jalkalihasten vahvistamiseksi.",
            kuntosalilla: "Voit tehdä kyykkyjä kuntosalilla käyttämällä kyykkypenkkiä tai vapaapainoja.",
            tarkemmatHuomiot: [
                "Käytä oikeaa tekniikkaa pitäen polvet linjassa varpaiden kanssa.",
                "Säilytä tasapaino ja ryhti koko liikkeen ajan.",
                "Älä anna polvien mennä liian eteenpäin kyykkyjä tehdessäsi."
            ]
        },
        olkapaat: {
            kehonpaino: "Tee pystypunnerruksia kehonpainolla. Ota sopiva asento ja työnnä käsipainoja ylöspäin.",
            kuntosalilla: "Käytä kuntosalilla pystypunnerruskonetta olkapäiden treenaamiseen.",
            tarkemmatHuomiot: [
                "Pidä selkä suorana pystypunnerruksen aikana.",
                "Hengitä ulos, kun työnnät ylöspäin.",
                "Vältä liiallista taivuttamista alaselässä."
            ]
        },
        ojentaja: {
            kehonpaino: "Tee punnerruksia kehonpainolla ojentajien treenaamiseksi.",
            kuntosalilla: "Voit käyttää taljaa tai tee käsipainojen avulla ojentajaliikkeitä kuntosalilla.",
            tarkemmatHuomiot: [
                "Pysy vakaana punnerruksen aikana.",
                "Hengitä ulos, kun työnnät ylös.",
                "Pidä kyynärpäät lähellä kylkiäsi liikkeen aikana."
            ]
        },
        hauis: {
            kehonpaino: "Tee punnerruksia kehonpainolla hauisten treenaamiseksi.",
            kuntosalilla: "Käytä hauistangon tai käsipainojen kanssa tehtäviä hauisliikkeitä kuntosalilla.",
            tarkemmatHuomiot: [
                "Pysy vakaana punnerruksen aikana.",
                "Hengitä ulos, kun työnnät ylös.",
                "Pidä kyynärpäät lähellä kylkiäsi liikkeen aikana."
            ]
        },
        vatsa: {
            kehonpaino: "Tee vatsalihasliikkeitä, kuten istumaannousuja, kehonpainolla.",
            kuntosalilla: "Käytä kuntosalilla vatsalaitetta vatsalihasten treenaamiseen.",
            tarkemmatHuomiot: [
                "Tukevuus on tärkeää vatsalihasliikkeissä.",
                "Hengitä ulos, kun nostat ylävartaloa ylös.",
                "Pidä selkä suorana liikkeen aikana."
            ]
        }
        // Lisää muita liikkeitä tarvittaessa
    };

    naytaLiikeButton.addEventListener("click", function () {
        const valittuLihasryhma = lihasryhmaValinta.value;
        const liikeOhjeet = liikkeet[valittuLihasryhma];
        
        if (liikeOhjeet) {
            liikkeenKuvausDiv.innerHTML = `
                <p>Kehonpainoharjoitus:</p>
                <p>${liikeOhjeet.kehonpaino}</p>
                <ul>
                    <li>${liikeOhjeet.tarkemmatHuomiot[0]}</li>
                    <li>${liikeOhjeet.tarkemmatHuomiot[1]}</li>
                    <li>${liikeOhjeet.tarkemmatHuomiot[2]}</li>
                </ul>
                <p>Kuntosalilla:</p>
                <p>${liikeOhjeet.kuntosalilla}</p>
                <ul>
                    <li>${liikeOhjeet.tarkemmatHuomiot[0]}</li>
                    <li>${liikeOhjeet.tarkemmatHuomiot[1]}</li>
                    <li>${liikeOhjeet.tarkemmatHuomiot[2]}</li>
                </ul>
            `;
        } else {
            liikkeenKuvausDiv.textContent = "Valitse oikea lihasryhmä.";
        }
    });
});*/