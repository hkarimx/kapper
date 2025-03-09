document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is geladen...");

    // Haal de modal-elementen op
    let appointmentButton = document.getElementById("open-appointment-modal");
    let modal = document.getElementById("appointment-modal");
    let closeButton = document.querySelector(".close");
    let form = document.getElementById("appointment-form");

    // Debugging: Log alle elementen om te checken of ze correct worden gevonden
    console.log("Knop:", appointmentButton);
    console.log("Modal:", modal);
    console.log("Sluitknop:", closeButton);

    if (!appointmentButton || !modal || !closeButton) {
        console.error("FOUT: Eén of meerdere modal-elementen ontbreken! Controleer je HTML.");
        return;
    }

    // Event listener voor het openen van de modal
    appointmentButton.addEventListener("click", function () {
        console.log("Knop 'Maak een afspraak' is geklikt!");
        modal.classList.add("show");
        console.log("Modal geopend, huidige class:", modal.className);
    });

    // Functie om modal te sluiten
    function closeModal() {
        modal.classList.remove("show");
        modal.style.display = "none"; // Extra fix
        console.log("Modal gesloten, huidige class:", modal.className);
    }

    // Event listener voor het sluiten van de modal via de sluitknop (X)
    closeButton.addEventListener("click", function () {
        console.log("Modal wordt gesloten via de sluitknop.");
        closeModal();
    });

    // Sluit de modal als er buiten de modal-content wordt geklikt
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            console.log("Modal gesloten door buiten te klikken.");
            closeModal();
        }
    });

    // ESC-toets indrukken om de modal te sluiten
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.classList.contains("show")) {
            console.log("Modal gesloten via ESC-toets.");
            closeModal();
        }
    });

    // Afspraakformulier verwerking
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let date = document.getElementById("date").value;
            let service = document.getElementById("service").value;

            if (name !== "" && date !== "" && service !== "") {
                alert(`Bedankt, ${name}! Je afspraak voor ${service} op ${date} is bevestigd.`);
                closeModal();
                form.reset();
            } else {
                alert("Vul alle velden in om een afspraak te maken!");
            }
        });
    } else {
        console.error("FOUT: Het formulier is niet gevonden! Controleer je HTML.");
    }
});
