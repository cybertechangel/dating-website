document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    if (path.includes("logout.html")) {
        localStorage.removeItem("userId");
        return;
    }

    if (path.includes("login.html")) {
        const form = document.querySelector("form");
        if (!form) return;

        form.addEventListener("submit", e => {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorText = document.getElementById("login-error");

            const user = profils.find(p => p.email === email && p.password === password);
            if (user) {
                localStorage.setItem("userId", user.id);
                window.location.href = "menu.html";
            } else {
                if (errorText) {
                errorText.textContent = "Identifiant ou mot de passe incorrect.";
                }
            }
        });
    }

    if (path.includes("signup.html")) {
        const form = document.getElementById("signup-form");
        if (!form) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const prenom = document.getElementById("prenom").value.trim();
            const nom = document.getElementById("nom").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const age = parseInt(document.getElementById("age").value);

            const genre = form.querySelector('input[name="genre"]:checked')?.value;
            const recherche = form.querySelector('input[name="recherche"]:checked')?.value;

            if (!prenom || !nom || !email || !password || !genre || !recherche || isNaN(age)) {
                alert("Merci de remplir tous les champs obligatoires.");
                return;
            }

            const newId = profils.length;
            const newUser = new Profil(
                newId,
                `${prenom} ${nom}`,
                age,
                "Ville inconnue",
                "Description à compléter...",
                "../assets/img/profils/default.jpg",
                email,
                password,
                []
            );

            profils.push(newUser);
            localStorage.setItem("userId", newId);
            localStorage.setItem("profils", JSON.stringify(profils));


            window.location.href = "subscription.html";
        });
    }
});
