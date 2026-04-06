const toggle_button = document.getElementById("theme-toggle");

toggle_button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggle_button.textContent = "Toggle Light Mode";
    } else {
        toggle_button.textContent = "Toggle Dark Mode";
    }
});