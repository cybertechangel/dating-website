document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".menu-burger");
    if (!container) return;

    const isConnected = localStorage.getItem("userId") !== null;

    const linksConnected = [
        ["menu.html", "Menu"],
        ["profils.html", "Profils compatibles"],
        ["profils-favorites.html", "Favoris"],
        ["messages.html", "Messagerie"],
        ["events.html", "Évènements"],
        ["my-profil.html", "Mon profil"],
        ["settings.html", "Paramètres"],
        ["help.html", "Aide"],
        ["logout.html", "Déconnexion"]
    ];

    const prefix = window.location.pathname.includes("/pages/") ? "../" : "";

    const linksGuest = [
        [`${prefix}index.html`, "Accueil"],
        [`${prefix}pages/about.html`, "À propos"],
        [`${prefix}pages/signup.html`, "Inscription"],
        [`${prefix}pages/login.html`, "Connexion"]
    ];


    const burgerHTML = `
        <button id="burger-toggle">☰</button>
        <div id="burger-panel" class="burger-panel hidden">
        ${(isConnected ? linksConnected : linksGuest)
            .map(([href, label]) => `<a href="${href}">${label}</a>`)
            .join("\n")}
        </div>
    `;

    container.innerHTML = burgerHTML;

    const toggle = document.getElementById("burger-toggle");
    const panel = document.getElementById("burger-panel");

    toggle.addEventListener("click", () => {
        panel.classList.toggle("hidden");
    });
});
