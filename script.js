/* === 1. COMPONENTES COMPARTIDOS (Menú y Footer) === */
const components = {
    navbar: `
    <nav class="navbar">
        <a href="index.html" class="logo">LUIS<span>MEX</span></a>

        <div class="header-socials desktop-only">
            <a href="https://wa.me/5214776772422" target="_blank" class="brand-wa">
                <i class="fab fa-whatsapp"></i> 477 677 2422
            </a>
            <span class="divider">|</span>
            <a href="#" class="brand-fb"><i class="fab fa-facebook"></i></a>
            <a href="#" class="brand-ig"><i class="fab fa-instagram"></i></a>
        </div>

        <div class="menu-toggle"><i class="fas fa-bars"></i></div>

        <ul class="nav-links">
            <li><a href="index.html" data-link="home">Inicio</a></li>
            <li><a href="dj.html" data-link="dj">DJ & Eventos</a></li>
            <li><a href="av.html" data-link="av">Audio/Video</a></li>
            <li><a href="web.html" data-link="web">Web</a></li>
            <li><a href="design.html" data-link="design">Diseño</a></li>
        </ul>
    </nav>
    `,
    footer: `
    <footer class="main-footer">
        <div class="footer-content">
            <div class="footer-col">
                <h3>LUIS<span>MEX</span></h3>
                <p>MultiServicios Digitales.<br>Calidad, Creatividad y Tecnología.</p>
                <div class="footer-socials">
                    <a href="#" class="social-btn fb"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-btn ig"><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/5214776772422" class="social-btn wa"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>

            <div class="footer-col">
                <h4>Explora</h4>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="dj.html">DJ & Eventos</a></li>
                    <li><a href="web.html">Páginas Web</a></li>
                    <li><a href="av.html">Audio & Video</a></li>
                    <li><a href="design.html">Diseño Gráfico</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Contacto</h4>
                <ul>
                    <li><i class="fab fa-whatsapp brand-wa"></i> 477 677 2422</li>
                    <li><i class="fab fa-telegram" style="color:#0088cc"></i> 477 677 2422</li>
                    <li><i class="fas fa-map-marker-alt"></i> León, Guanajuato</li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>Derechos Reservados 2026 &copy; Elaborado por <strong>LUISMEX MultiServicios Digitales</strong></p>
        </div>
    </footer>
    `
};

/* === 2. BASE DE DATOS DE CONTENIDOS === */
const db = {
    // === AUDIOS ===
    audio: [
        {
            t: "El Pollo Azteca",
            d: "Incluye: Jingle cantado y realizado a 2 voces.",
            i: "fa-bullhorn",
            src: "audios/elpolloazteca.mp3"
        },
        {
            t: "Tortillería La Esperanza",
            d: "Elaborado a 2 voces (masculina y femenina).",
            i: "fa-landmark",
            src: "audios/tortilleriaesperanza.mp3"
        },
        {
            t: "Purificadora de Agua La Gotita",
            d: "Voces masculina y femenina y Jingle Cantado.",
            i: "fa-compact-disc",
            src: "audios/purificadora.mp3"
        },
        {
            t: "Intro Banda",
            d: "Voz potente estilo grupero.",
            i: "fa-car",
            src: "audios/introbanda.mp3"
        },
        {
            t: "Spot Baile Popular",
            d: "Con voz potente masculina estilo grupero.",
            i: "fa-microchip",
            src: "audios/baile.mp3"
        },
        {
            t: "Dr. Battery Center",
            d: "Voz masculina institucional.",
            i: "fa-compact-disc",
            src: "audios/drbatery.mp3"
        }
    ],

    // === VIDEOS (Tus videos personalizados) ===
    video: [
        {
            t: "Video Navidad",
            d: "Cliente: Dr. Battery Center.",
            src: "videos/batterynavidad.mp4"
        },
        {
            t: "Pastelería",
            d: "Cliente:  Dulce Momento.",
            src: "videos/pasteleria.mp4"
        },
        {
            t: "Purificadora de Agua",
            d: "Cliente: Eco Agua.",
            src: "videos/ecoagua.mp4"
        },
        {
            t: "Tortillería y Rosticería",
            d: "Cliente: Los Pinos.",
            src: "videos/lospinos.mp4"
        },
        {
            t: "Pollos Rostizados",
            d: "Cliente: Rancho Yebra",
            src: "videos/ranchoyebra.mp4"
        },
        {
            t: "Pollo Fresco",
            d: "Cliente: Mi Guerita.",
            src: "videos/pollofresco.mp4"
        }
    ],

    // === WEB (PORTAFOLIO) - Aquí está el cambio de enlaces ===
    web: [
        {
            t: "Agencia de Viajes",
            d: "Galería de destinos y botón a WhatsApp.",
            img: "images/web_viajes.jpg",
            url: "viajes.html"  // <--- ¡AQUÍ ESTÁ TU ENLACE!
        },
        {
            t: "Restaurant Familiar",
            d: "Menú digital simple y ubicación.",
            img: "images/web_restaurante.jpg",
            url: "restaurante.html"
        },
        {
            t: "Servicios de Mudanza",
            d: "Sitio informativo con contacto rápido.",
            img: "images/web_mudanza.jpg",
            url: "mudanzas.html"
        },
        {
            t: "Despacho de Abogados",
            d: "Perfil profesional y servicios.",
            img: "images/web_abogados.jpg",
            url: "abogados.html"
        },
        {
            t: "Purificadora de Agua",
            d: "Formulario de pedido a domicilio.",
            img: "images/web_agua.jpg",
            url: "aguapuri.html"
        },
        {
            t: "Florería Boutique",
            d: "Catálogo visual de arreglos.",
            img: "images/web_floreria.jpg",
            url: "flores.html"
        }
    ],

    // === DISEÑO GRÁFICO ===
    flyers: [
        { t: "Flyer Apertura", d: "Colores vibrantes.", i: "fa-store" },
        { t: "Flyer Oferta", d: "Diseño agresivo de venta.", i: "fa-tag" },
        { t: "Flyer Concierto", d: "Estilo artístico.", i: "fa-guitar" }
    ],
    logos: [
        { t: "Minimalista", d: "Isotipo limpio.", i: "fa-vector-square" },
        { t: "Ilustrativo", d: "Mascota vectorizada.", i: "fa-hamburger" },
        { t: "Rediseño", d: "Modernización de marca.", i: "fa-paint-brush" }
    ],
    cards: [
        { t: "vCard Abogado", d: "Botones de llamada.", i: "fa-gavel" },
        { t: "vCard Médico", d: "Citas directas.", i: "fa-user-md" },
        { t: "vCard Ventas", d: "Catálogo integrado.", i: "fa-shopping-bag" }
    ],
    invites: [
        { t: "Boda Web", d: "Con RSVP y Mapa.", i: "fa-rings-wedding" },
        { t: "XV Años Web", d: "Galería y Confirmación.", i: "fa-crown" }
    ],

    // === DJ ===
    dj: [
        {
            t: "Paquete Vintage",
            d: "3-5 Hrs. horario corrido, Sonido profesional, Cabina madera tipo Vintage, Micrófono inalámbrico",
            img: "images/vintage.jpg",
            icon: "fa-music"
        },
        {
            t: "Paquete Vintage Plus",
            d: "3-5 Hrs. horario corrido, Sonido profesional, Cabina madera tipo Vintage, 1 Pantalla 50plgs., Micrófono inalámbrico",
            img: "images/vintageplus.jpg",
            icon: "fa-record-vinyl"
        },
        {
            t: "Paquete Led",
            d: "3-5 Hrs. horario corrido, Sonido profesional, Cabina iluminada, Micrófono inalámbrico",
            img: "images/led.jpg",
            icon: "fa-bolt"
        },
        {
            t: "Paquete Led Plus",
            d: "3-5 Hrs. horario corrido, Sonido profesional, Pantalla 50 plgs., Cabina iluminada, Micrófono inalámbrico",
            img: "images/ledplus.jpg",
            icon: "fa-star"
        },
        {
            t: "Tributo Alejandro Fdz",
            d: "Cantante repertorio de Alejandro Fernández 1-2 hrs. Paquete completo 1 hra. cantante + Paquete Led Plus (total 5 horas).",
            img: "images/tributo.jpg",
            icon: "fa-microphone",
            spec: true
        },
        {
            t: "Paquete PRO",
            d: "3-5 Hrs. horario corrido, Sonido profesional, 2 Pantallas 50 plgs., Cabina iluminada, Micrófono inalámbrico",
            img: "images/pro.jpg",
            icon: "fa-crown"
        }
    ]
};

/* === 3. INICIALIZACIÓN === */
document.addEventListener('DOMContentLoaded', () => {

    // Inyectar Menú y Footer
    const navContainer = document.getElementById('navbar-inject');
    const footContainer = document.getElementById('footer-inject');
    if(navContainer) navContainer.innerHTML = components.navbar;
    if(footContainer) footContainer.innerHTML = components.footer;

    // Activar Enlace del Menú
    const page = document.body.getAttribute('data-page');
    const activeLink = document.querySelector(`.nav-links a[data-link="${page}"]`);
    if(activeLink) activeLink.classList.add('active-link');

    // Configurar Menú Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // Cargar Contenido Específico
    if (page === 'av') loadAV();
    if (page === 'web') loadWeb();
    if (page === 'design') loadDesign();
    if (page === 'dj') loadDJ();
});

/* === FUNCIONES DE CARGA === */
function loadAV() {
    const ac = document.getElementById('audio-container');
    const vc = document.getElementById('video-container');
    if(ac) ac.innerHTML = db.audio.map(i => cardHTML(i, 'audio')).join('');
    if(vc) vc.innerHTML = db.video.map(i => cardHTML(i, 'video')).join('');
}

function loadWeb() {
    const wc = document.getElementById('web-container');
    if(wc) wc.innerHTML = db.web.map(i => cardHTML(i, 'web')).join('');
}

function loadDesign() {
    const ids = ['flyer-container', 'logo-container', 'card-container', 'invite-container'];
    const sources = [db.flyers, db.logos, db.cards, db.invites];
    ids.forEach((id, index) => {
        const el = document.getElementById(id);
        if(el) el.innerHTML = sources[index].map(i => cardHTML(i, 'design')).join('');
    });
}

function loadDJ() {
    const dc = document.getElementById('dj-container');
    if(dc) dc.innerHTML = db.dj.map(i => `
        <div class="dj-card ${i.spec ? 'tribute-card' : ''}">
            <div class="dj-img-wrapper">
                <img src="${i.img}" alt="${i.t}">
            </div>
            <div class="dj-icon-overlay"><i class="fas ${i.icon}"></i></div>
            <div class="dj-content">
                ${i.spec ? '<div class="badge-gold">SHOW ESTELAR</div>' : ''}
                <h4>${i.t}</h4>
                <p>${i.d}</p>
                <button class="btn-whatsapp-float" onclick="cotizar('${i.t}')">
                    <i class="fab fa-whatsapp"></i> Cotizar
                </button>
            </div>
        </div>
    `).join('');
}

/* === PLANTILLA GENERADORA DE TARJETAS (CORREGIDA) === */
function cardHTML(item, type) {
    let media = '';
    let showDetailsButton = true;

    // CASO 1: WEB (PORTAFOLIO) - ¡AQUÍ ESTABA EL DETALLE!
    // Ahora toda la imagen y el título son clicables
    if(type === 'web') {
        return `
        <div class="service-card web-portfolio-card">
            <div class="web-thumb">
                <a href="${item.url}" target="_blank">
                    <img src="${item.img}" alt="${item.t}">
                </a>
                <div class="web-overlay">
                    <a href="${item.url}" target="_blank" class="btn-glass">
                        <i class="fas fa-eye"></i> Ver Ejemplo
                    </a>
                </div>
            </div>
            <div class="web-info">
                <h4><a href="${item.url}" target="_blank" style="text-decoration:none; color:inherit;">${item.t}</a></h4>
                <p>${item.d}</p>
            </div>
        </div>
        `;
    }

    // CASO 2: VIDEO (Reproductor)
    if(type === 'video') {
        media = `
        <video controls class="std-video">
            <source src="${item.src}" type="video/mp4">
            Tu navegador no soporta video.
        </video>`;
        showDetailsButton = false;
    }
    // CASO 3: AUDIO (Reproductor)
    else if(type === 'audio') {
        media = `
        <i class="fas ${item.i || 'fa-music'} service-icon"></i>
        <audio controls style="width:100%; margin-top:10px;">
            <source src="${item.src}" type="audio/mpeg">
            Tu navegador no soporta audio.
        </audio>`;
        showDetailsButton = false;
    }
    // CASO 4: OTROS (Icono y Botón)
    else {
        media = `<i class="fas ${item.i} service-icon"></i>`;
    }

    return `
        <div class="service-card">
            ${media}
            <h4>${item.t}</h4>
            <p>${item.d}</p>
            ${showDetailsButton ? `<button class="btn-text" onclick="cotizar('${item.t}')">Ver Detalles</button>` : ''}
        </div>
    `;
}

/* === FUNCIONES DE WHATSAPP === */
function cotizar(servicio) {
    const tel = "5214776772422";
    const txt = `Hola LUISMEX, me interesa cotizar: ${servicio}`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(txt)}`, '_blank');
}

function sendToWhatsApp(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const serv = document.getElementById('service').value;
    const msg = document.getElementById('message').value;
    const tel = "5214776772422";
    const txt = `Hola, soy ${name}. Interés: ${serv}. ${msg}`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(txt)}`, '_blank');
}
