const toggleBtn = document.getElementById("toggle-theme");

function updateIcon(isDark) {
    const icon = toggleBtn.querySelector("i");

    if (isDark) {
        icon.className = "bi bi-sun";
        toggleBtn.onmouseover = () => icon.className = "bi bi-sun-fill";
        toggleBtn.onmouseout = () => icon.className = "bi bi-sun";
    } else {
        icon.className = "bi bi-moon";
        toggleBtn.onmouseover = () => icon.className = "bi bi-moon-fill";
        toggleBtn.onmouseout = () => icon.className = "bi bi-moon";
    }
}

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
    updateIcon(isDark);
}

toggleBtn.addEventListener("click", () => {
    const isCurrentlyDark = document.body.classList.contains("dark-mode");
    setTheme(!isCurrentlyDark);
});

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setTheme(isDark);
});
