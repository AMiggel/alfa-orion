import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-storage.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBVkc-5_pabpT2on8cP24UX91fjQXxBLqA",
    authDomain: "alfa-orion-2291d.firebaseapp.com",
    projectId: "alfa-orion-2291d",
    storageBucket: "alfa-orion-2291d.firebasestorage.app",
    messagingSenderId: "196471047733",
    appId: "1:196471047733:web:2f37f0c25a8daf44d5537c",
    measurementId: "G-KJNJ4EJG4R"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // ✅ Obtener Firebase Storage
window.abrirModal = function (src) {
    const modal = document.getElementById("modalImagen");
    const imgExpandida = document.getElementById("imagenExpandida");

    imgExpandida.src = src;
    modal.style.display = "block";
};

// Hacer la función de cerrar modal accesible globalmente
window.cerrarModal = function () {
    document.getElementById("modalImagen").style.display = "none";
};
// Función para cargar imágenes de una carpeta en Firebase Storage
function cargarImagenesDesdeFirebase() {
    let itemId = 0; // Inicializar el contador
    const storageRef = ref(storage, "activdades/"); // ✅ Referencia a la carpeta en Storage
    const contenedor = document.getElementById("galeria");

    listAll(storageRef).then((result) => {
        result.items.forEach((imageRef) => {
            getDownloadURL(imageRef).then((url) => {

                const divItem = document.createElement("div");
                divItem.className = "u-effect-hover-zoom u-gallery-item";

                const divBackSlide = document.createElement("div");
                divBackSlide.className = "u-back-slide";
                divBackSlide.setAttribute("data-image-width", "1280");
                divBackSlide.setAttribute("data-image-height", "853");

                const img = document.createElement("img");
                img.className = "u-back-image u-expanded";
                img.src = url;

                const divOverSlide = document.createElement("div");
                divOverSlide.className = "u-over-slide u-shading u-over-slide-1";

                divBackSlide.appendChild(img);
                divItem.appendChild(divBackSlide);
                divItem.appendChild(divOverSlide);
                contenedor.appendChild(divItem);
            }).catch((error) => console.error("Error obteniendo URL:", error));
        });
    }).catch((error) => console.error("Error al listar imágenes:", error));
}

// Ejecutar la función cuando la página cargue
document.addEventListener("DOMContentLoaded", cargarImagenesDesdeFirebase);
