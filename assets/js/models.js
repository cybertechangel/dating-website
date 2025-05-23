class User {
    constructor(id, name, age, city, bio, image, email, password) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.city = city;
        this.bio = bio;
        this.image = image;
        this.email = email;
        this.password = password;
    }

    renderProfileCard() {
        const shortBio = this.bio.length > 150 ? this.bio.slice(0, 150).trim() + "..." : this.bio;
        return `
        <div class="card-box card-profil">
            <img src="${this.image}" alt="${this.name}">
            <h3>${this.name}, ${this.age} ans</h3>
            <p>${this.city}</p>
            <p>${shortBio}</p>
            <button class="like-btn" data-id="${this.id}"><i class="fa-regular fa-heart"></i></button>
            <a href="profil.html?id=${this.id}" class="btn-1">Voir profil</a>
        </div>
        `;
    }

    checkCredentials(email, password) {
        return this.email === email && this.password === password;
    }
}

class Profil extends User {
    constructor(id, name, age, city, bio, image, email, password, interests = []) {
        super(id, name, age, city, bio, image, email, password);
        this.interests = interests;
    }

    renderFullProfile() {
        return `
        <section class="detail-container">
            <h2>${this.name}, ${this.age} ans</h2>
            <img src="${this.image}" alt="${this.name}">
            <p><strong>Ville :</strong> ${this.city}</p>
            <div class="profil-bio">
            <p>${this.bio.replace(/\n/g, "</p><p>")}</p>
            </div>
            <p><strong>Centres d’intérêt :</strong> ${this.interests.join(", ")}</p>
            <br>
            <div class="like-btn" data-id="${this.id}"><i class="fa-regular fa-heart"></i></div>
            <a href="message.html?id=${this.id}" class="btn-1">Envoyer un message</a>

            <br>
            <a href="profils.html" class="btn-1" style="margin-top: 1rem">← Retour aux profils</a>
        </section>
        `;
    }


    renderMyProfile() {
        return `
        <section class="detail-container">
            <h2>Mon profil</h2>
            <img src="${this.image}" alt="${this.name}">
            <p><strong>Nom :</strong> ${this.name}, ${this.age} ans</p>
            <p><strong>Ville :</strong> ${this.city}</p>
            <div class="profil-bio">
            <p>${this.bio.replace(/\n/g, "</p><p>")}</p>
            </div>
            <p><strong>Centres d’intérêt :</strong> ${this.interests.join(", ")}</p>
    
            <br>
            <div class="my-profil-links">
            <a href="settings.html" class="btn-1">Modifier mes préférences</a>
            <a href="logout.html" class="btn-1" style="margin-top: 1rem;">Se déconnecter</a>
            </div>
        </section>
        `;
    }
}

class Event {
    constructor(id, title, date, time, location, desc, image) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.time = time;
        this.location = location;
        this.desc = desc;
        this.image = image;
    }

    renderCard() {
        const shortDesc = this.desc.length > 105 ? this.desc.slice(0, 105).trim() + "..." : this.desc;
        return `
        <div class="card-box card-event">
            <img src="${this.image}" alt="${this.title}">
            <h3>${this.title}</h3>
            <p><strong>${this.date}</strong></p>
            <p>${this.time}</p>
            <p>${this.location}</p>
            <p>${shortDesc}</p>
            <a href="event.html?id=${this.id}" class="btn-1">En savoir plus</a>
        </div>
        `;
    }

    renderFullEvent() {
        return `
        <section class="detail-container">
            <h2>${this.title}</h2>
            <img src="${this.image}" alt="${this.title}">
            <p><strong>Date :</strong> ${this.date}</p>
            <p><strong>Heure :</strong> ${this.time}</p>
            <p><strong>Lieu :</strong> ${this.location}</p>
            <div class="detail-container-description">
            <p>${this.desc.replace(/\n/g, "</p><p>")}</p>
            </div>
            <div class="card-box">
            <form class="event-inscription-form">
                <h2>Je souhaite m'inscrire</h2>
                <label for="nom">Nom complet :</label>
                <input type="text" id="nom" name="nom" required>
                <label for="email">Adresse e-mail :</label>
                <input type="email" id="email" name="email" required>
                <button type="submit" class="btn-2">S'inscrire</button>
            </form>
            </div>
        </section>
        `;
    }
}

class Message {
    constructor(from, to, content, date) {
        this.from = from;
        this.to = to;
        this.content = content;
        this.date = date;
  }

    render(fromUser = false) {
        return `
        <div class="chat-message ${fromUser ? 'to' : 'from'}">
            <p>${this.content}</p>
            <span class="chat-date">${this.date}</span>
        </div>
        `;
    }
}
