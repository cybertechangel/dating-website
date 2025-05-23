let profils = [];

try {
    const stored = JSON.parse(localStorage.getItem("profils"));
    if (stored && Array.isArray(stored)) {
        profils = stored.map(p =>
            new Profil(p.id, p.name, p.age, p.city, p.bio, p.image, p.email, p.password, p.interests || [])
        );
    }
} catch (e) {
    profils = [];
}

if (profils.length === 0) {
    profils = [
        new Profil(0, "Claire", 58, "Anglet",
            `Passionnée de jardinage et de lecture, je suis une femme douce et curieuse qui aime prendre le temps d’écouter, de rire et de construire une belle complicité.
            J’apprécie les promenades en nature, les romans du soir et les petits gestes du quotidien.
            Je recherche un homme sincère, tendre et bienveillant, prêt à partager de vrais moments.`,
            "../assets/img/profils/user1.jpg",
            "admin@admin.com", "admin",
            ["lecture", "jardinage"]),
        

        new Profil(1, "Hugo", 53, "Anglet",
            `Passionné de lecture et de cuisine maison, j'adore passer du temps à créer des plats réconfortants
            et à dévorer un bon roman.
            Le partage est essentiel dans ma vie, que ce soit à travers des discussions profondes ou des moments silencieux.
            Je souhaite rencontrer une femme sensible, authentique, et ouverte à une relation basée
            sur la tendresse et la simplicité.`,
            "../assets/img/profils/user1.jpg",
            "jeandupont@example.com", "motdepasse123",
            ["jardinage", "nature", "lecture"]),
        

        new Profil(2, "Jean", 60, "Bayonne",
            `Retraité actif, j'aime la mer, les balades sur la plage, et les marchés du Pays Basque.
            Je suis un bon vivant, curieux du monde et des gens. Les moments simples comme partager
            un café en terrasse ou cuisiner à deux sont ceux que je préfère.
            Je cherche une partenaire tendre, naturelle et bienveillante, pour créer une belle complicité.`,
            "../assets/img/profils/user2.jpg",
            "jean@example.com", "pass2",
            ["randonnée", "vélo"]),
        

        new Profil(3, "Patrick", 58, "Biarritz",
            `Jardinier passionné depuis toujours, j'aime passer du temps au contact de la nature, créer un coin de verdure et prendre soin de mon potager.
            Doux et à l'écoute, je rêve de partager des moments simples, des balades au soleil
            et des conversations sincères avec une personne attentionnée.
            La tendresse et la complicité sont les piliers d'une relation durable pour moi.`,
            "../assets/img/profils/user3.jpg",
            "patrick@example.com", "pass3",
            ["lecture", "cinéma"]),
        
        new Profil(4, "Luc", 63, "Hendaye",
            `Randonneur invétéré et amoureux de nature, j'aime arpenter les sentiers côtiers,
            découvrir des paysages et m'émerveiller de la beauté simple du monde.
            Le jazz m'accompagne au quotidien, tout comme le besoin d'échanger des idées,
            des rires et des silences partagés.
            Je cherche une partenaire qui aime l'aventure douce, les soirées chaleureuses
            et les élans sincères du cœur.`,
            "../assets/img/profils/user4.jpg",
            "luc@example.com", "pass4",
            ["musique", "marche"]),
        

        new Profil(5, "André", 59, "Saint-Jean-de-Luz",
            `Homme sensible et à l'écoute, j'attache beaucoup d'importance aux émotions partagées.
            J'aime les balades en bord de mer, les discussions profondes autour d'un thé,
            et les gestes tendres du quotidien.
            Je cherche une femme sincère, posée et douce, pour construire une belle histoire
            fondée sur la complicité, le respect et la tendresse mutuelle.`,
            "../assets/img/profils/user5.jpg",
            "andre@example.com", "pass5",
            ["nature", "écoute"]),
        

        new Profil(6, "Michel", 66, "Boucau",
            `Grand voyageur dans l'âme, j'ai parcouru de nombreux pays,
            mais aujourd'hui je cherche à poser mes valises… dans le cœur de quelqu'un.
            Epicurien et bon vivant, j'aime les découvertes culinaires,
            les promenades en bord de mer, et les soirées conviviales.
            Je souhaite construire une relation pleine de complicité,
            de tendresse, et de rires partagés au quotidien.`,
            "../assets/img/profils/user6.jpg",
            "michel@example.com", "pass6", 
            ["voyages", "gastronomie"])
    ];
    
    localStorage.setItem("profils", JSON.stringify(profils));
}






const events = [
    new Event(
        1,
        "Balade sur la plage de Biarritz",
        "Dimanche 5 mai 2025",
        "10h00 - 13h00",
        "Grande Plage de Biarritz",
        `Rejoignez-nous pour une belle matinée au bord de l'océan, en marchant ensemble sur la plage de Biarritz.
        L'occasion de se rencontrer, discuter, respirer l'air marin et profiter d'un moment simple mais chaleureux.
        Nous terminerons la balade par un café dans un établissement face à la mer. Prévoir des chaussures confortables.`,
        "../assets/img/events/biarritz.avif"
    ),
    new Event(
        2,
        "Soirée guinguette à Saint-Jean-de-Luz",
        "Vendredi 17 mai 2025",
        "19h00 - 23h30",
        "Salle municipale, Saint-Jean-de-Luz",
        `Une soirée dansante, festive et chaleureuse pour tous ceux qui aiment la musique, les échanges et les bons repas.
        La guinguette ouvre ses portes pour une soirée avec animation, repas et ambiance joyeuse garantie !
        Places limitées, inscription obligatoire. Participation : 10€ (à régler sur place).`,
        "../assets/img/events/saintjean.avif"
    ),
    new Event(
        3,
        "Pique-nique au lac Mouriscot",
        "Samedi 27 avril 2025",
        "12h00 - 17h00",
        "Lac Mouriscot, Biarritz",
        `Venez partager un moment convivial autour d'un pique-nique au bord du lac Mouriscot à Biarritz.
        Au programme : détente, échanges, jeux en plein air et balade autour du lac.
        Apportez votre repas, une nappe ou couverture, votre sourire et votre curiosité.
        L'événement est gratuit et réservé aux membres de la plateforme.`,
        "../assets/img/events/pique-nique.avif"
    )
];


const messages = [
    new Message("Jean", "Claire", "Bonjour ! Aimez-vous les balades en bord de mer ?", "05/04/2025"),
    new Message("Claire", "Jean", "Oui, énormément, surtout au coucher du soleil 🌅", "05/04/2025"),
    new Message("Luc", "Claire", "Randonnée ce week-end ? 😊", "04/04/2025"),
    new Message("Claire", "Luc", "Avec plaisir ! Quel jour te conviendrait ?", "04/04/2025")
];
