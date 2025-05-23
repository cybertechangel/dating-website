document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    function initLikeButtons() {
        document.querySelectorAll(".like-btn").forEach(btn => {
            const id = parseInt(btn.dataset.id);
            const icon = btn.querySelector("i");

            const favs = JSON.parse(localStorage.getItem("favorites")) || [];
            if (favs.includes(id)) {
                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");
            }

            btn.addEventListener("click", () => {
                const favs = JSON.parse(localStorage.getItem("favorites")) || [];
                const index = favs.indexOf(id);

                if (index === -1) {
                    favs.push(id);
                    icon.classList.remove("fa-regular");
                    icon.classList.add("fa-solid");
                } else {
                    favs.splice(index, 1);
                    icon.classList.remove("fa-solid");
                    icon.classList.add("fa-regular");
                }

                localStorage.setItem("favorites", JSON.stringify(favs));
            });
        });
    }

    if (path.includes("profils.html")) {
        const container = document.getElementById("profils-container");
        if (!container) return;
        container.innerHTML = "";

        profils.forEach(profil => {
            if (profil instanceof Profil && profil.id !== 0) {
                container.innerHTML += profil.renderProfileCard();
            }
        });

        initLikeButtons();
    }

    else if (path.includes("profil.html")) {
        const container = document.getElementById("profil-container");
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get("id"));
        if (!container || isNaN(id)) return;

        const profil = profils.find(p => p.id === id);
        if (!profil) {
            container.innerHTML = "<p>Profil non trouvé.</p>";
            return;
        }

        if (!(profil instanceof Profil)) {
            Object.setPrototypeOf(profil, Profil.prototype);
        }

        container.innerHTML = profil.renderFullProfile();
        initLikeButtons();
    }

    else if (path.includes("my-profil.html")) {
        const container = document.getElementById("my-profil-container");
        if (!container) return;

        const userId = parseInt(localStorage.getItem("userId"));
        let user = profils.find(p => p.id === userId);

        if (!user) {
            container.innerHTML = "<p>Profil introuvable.</p>";
            return;
        }

        if (!(user instanceof Profil)) {
            Object.setPrototypeOf(user, Profil.prototype);
        }

        container.innerHTML = user.renderMyProfile();
        initLikeButtons();
    }

    else if (path.includes("profils-favorites.html")) {
        const container = document.getElementById("favorites-container");
        if (!container) return;

        const favIds = JSON.parse(localStorage.getItem("favorites")) || [];
        container.innerHTML = "";

        profils.forEach(profil => {
            if (profil instanceof Profil && favIds.includes(profil.id)) {
                container.innerHTML += profil.renderProfileCard();
            }
        });

        initLikeButtons();
    }
});
