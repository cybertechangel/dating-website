document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;


    if (path.includes("events.html")) {
        const container = document.getElementById("events-container");
        if (!container) return;

        events.forEach(event => {
            container.innerHTML += event.renderCard();
        });
    }


    else if (path.includes("event.html")) {
        const container = document.getElementById("event-container");
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get("id"));

        if (!container || isNaN(id)) return;

        const event = events.find(e => e.id === id);
        if (!event) {
            container.innerHTML = "<p>Événement introuvable.</p>";
            return;
        }

        container.innerHTML = event.renderFullEvent();

        const form = container.querySelector("form");
        if (form) {
            form.addEventListener("submit", e => {
                e.preventDefault();

                const nom = form.querySelector("#nom").value.trim();
                const email = form.querySelector("#email").value.trim();

        
                const inscriptions = JSON.parse(localStorage.getItem("eventInscriptions")) || {};
                if (!inscriptions[id]) inscriptions[id] = [];
                inscriptions[id].push({ nom, email });
                localStorage.setItem("eventInscriptions", JSON.stringify(inscriptions));

            
                const confirmation = document.createElement("p");
                confirmation.textContent = "Inscription enregistrée !";
                confirmation.style.color = "black";
                confirmation.style.marginTop = "1rem";
                form.after(confirmation);
                form.reset();
            });
        }
    }
});
