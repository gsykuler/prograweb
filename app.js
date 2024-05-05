// Seleccionar todos los elementos con la clase 'faq'
const faqs = document.querySelectorAll(".faq"); // Usar querySelectorAll para seleccionar múltiples elementos

// Agregar un evento de clic a cada elemento 'faq'
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active"); // Alternar la clase 'active'
  });
});
