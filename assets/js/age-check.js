document.addEventListener("DOMContentLoaded", () => {
    const ageInput = document.getElementById("age");
    const formSections = document.getElementById("form-sections");
    const errorMessage = document.getElementById("error-message");

    if (!ageInput || !formSections) return;

    function toggleSections() {
        const age = parseInt(ageInput.value);
        if (age >= 50) {
        formSections.style.display = "block";
        errorMessage.textContent = "";
        } else {
        formSections.style.display = "none";
        errorMessage.textContent = "Ce site est réservé aux personnes de 50 ans et plus.";
        }
    }

    ageInput.addEventListener("input", toggleSections);
    toggleSections(); 
});
