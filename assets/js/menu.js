document.addEventListener("DOMContentLoaded", () => {
    const currentUserId = parseInt(localStorage.getItem("userId"));
    const currentUser = profils.find(p => p.id === currentUserId);
    if (!currentUser) return;


    const notif = document.getElementById("menu-notifications-container");
    const lastMessage = messages.filter(m => m.to === currentUser.name).at(-1);
    const latestEvent = events.at(0);
    const compatible = profils.find(p => p.id !== currentUserId);

    notif.innerHTML = `
    <div class="notifications-box">
      <h3><i class="bi bi-bell-fill"></i> Notifications</h3>
      <ul class="notifications-list">
        ${lastMessage ? `<li><i class="bi bi-chat-dots"></i> Nouveau message de <a href="message.html?id=${profils.find(p => p.name === lastMessage.from)?.id}">${lastMessage.from}</a></li>` : ""}
        ${latestEvent ? `<li><i class="bi bi-calendar-event"></i> Événement : <a href="event.html?id=${latestEvent.id}">${latestEvent.title}</a></li>` : ""}
        ${compatible ? `<li><i class="bi bi-person-heart"></i> Profil suggéré : <a href="profil.html?id=${compatible.id}">${compatible.name}</a></li>` : ""}
      </div>
      </div>
    `;


    const msgContainer = document.getElementById("menu-messages-container");
    const lastMsgs = messages.filter(m => m.to === currentUser.name).slice(-1).reverse();
    if (lastMsgs.length === 0) {
        msgContainer.innerHTML = "<p>Aucun message pour le moment.</p>";
    } else {
        lastMsgs.forEach(m => {
            const senderProfil = profils.find(p => p.name === m.from);
            const senderId = senderProfil ? senderProfil.id : "";
            msgContainer.innerHTML += `
            <div class="card-box">
                <h3><i class="bi bi-chat-dots"></i> Nouveau message</h3>
                <p><strong>${m.from}</strong> : ${m.content}</p>
                <span class="chat-date">${m.date}</span>
                ${senderId !== "" ? `<a href="message.html?id=${senderId}" class="btn-1" style="margin-top: 0rem;">Voir la conversation</a>` : ""}
            </div>
            `;
        });
    }



    const evContainer = document.getElementById("menu-events-container");
    events.slice(0, 1).forEach(e => {
        evContainer.innerHTML += `
            <div class="menu-card">
            <img src="${e.image}" alt="${e.title}" class="menu-img"/>
            <h3>Événement à venir</h3>
            <div class="menu-info">
                <h4>${e.title}</h4>
                <p><strong>${e.date}</strong> – ${e.time}</p>
                <p>${e.location}</p>
                <a href="event.html?id=${e.id}" class="btn-1">Voir évènement</a>
            </div>
            </div>
        `;
    });


    const prContainer = document.getElementById("menu-profils-container");
    profils.filter(p => p.id !== currentUserId).slice(0, 1).forEach(p => {
        prContainer.innerHTML += `
            <div class="menu-card">
            <img src="${p.image}" alt="${p.name}" class="menu-img" />
            <h3>Nouveau profil compatible</h3>
            <div class="menu-info">
                <h4>${p.name}, ${p.age} ans</h4>
                <p>${p.city}</p>
                <p>${p.bio.length > 100 ? p.bio.slice(0, 100) + "..." : p.bio}</p>
                <a href="profil.html?id=${p.id}" class="btn-1">Voir profil</a>
            </div>
            </div>
        `;
    });


});
