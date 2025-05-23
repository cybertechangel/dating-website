document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const userId = parseInt(localStorage.getItem("userId"));
    const currentUser = profils.find(p => p.id === userId);

    if (!currentUser) return;


    if (path.includes("messages.html")) {
        const container = document.getElementById("messages-container");
        if (!container) return;

        const received = messages.filter(m => m.to === currentUser.name);
        const senders = [...new Set(received.map(m => m.from))];

        if (senders.length === 0) {
            container.innerHTML = "<p>Aucun message reçu pour le moment.</p>";
            return;
        }

        container.innerHTML = "<h2>Messages reçus</h2>";

        senders.forEach(name => {
            const profil = profils.find(p => p.name === name);
            if (!profil) return;

            const last = received.filter(m => m.from === name).at(-1);

            container.innerHTML += `
                <div class="message-item">
                    <img src="${profil.image}" alt="${profil.name}" class="message-avatar">
                    <div class="message-box">
                        <h3>${profil.name}</h3>
                        <p>${last.content}</p>
                        <span class="chat-date">${last.date}</span>
                        <a href="message.html?id=${profil.id}" class="btn-1">Voir la conversation</a>
                    </div>
                </div>
                `;
        });
    }


    else if (path.includes("message.html")) {
        const container = document.getElementById("conversation-container");
        if (!container) return;

        const params = new URLSearchParams(window.location.search);
        const targetId = parseInt(params.get("id"));
        const target = profils.find(p => p.id === targetId);

        if (!target) {
            container.innerHTML = "<p>Profil introuvable.</p>";
            return;
        }

        container.innerHTML = `
        <h2>Conversation avec ${target.name}</h2>
        <a href="profil.html?id=${target.id}">
            <img src="${target.image}" alt="${target.name}" style="width: 180px; height: 180px; border-radius: 10px; object-fit: cover; display: block; margin: 1rem auto;">
        </a>
        `;

        const convo = messages.filter(
            m => (m.from === currentUser.name && m.to === target.name) ||
            (m.from === target.name && m.to === currentUser.name)
        );

        if (convo.length === 0) {
            container.innerHTML += "<p>Vous n’avez pas encore échangé avec ce profil.</p>";
        } else {
            convo.forEach(m => {
                container.innerHTML += m.render(m.from === currentUser.name);
            });
        }

        const form = document.createElement("form");
        form.innerHTML = `
            <textarea id="reply" rows="3" placeholder="Écrire un message..." required></textarea>
            <button type="submit" class="btn-2">Envoyer</button>
            `;
        form.addEventListener("submit", e => {
            e.preventDefault();
            const content = form.querySelector("#reply").value.trim();
            if (!content) return;
            const newMessage = new Message(currentUser.name, target.name, content, new Date().toLocaleDateString());
            messages.push(newMessage);
            
            const warning = container.querySelector("p");
            if (warning && warning.textContent.includes("pas encore échangé")) {
                warning.remove();
            }
            form.insertAdjacentHTML("beforebegin", newMessage.render(true));

            form.reset();
        });

        container.appendChild(form);

        const retour = document.createElement("a");
        retour.href = "messages.html";
        retour.textContent = "← Retour aux messages";
        retour.className = "btn-1";
        retour.style.marginTop = "1rem";
        container.appendChild(retour);
    }
});
