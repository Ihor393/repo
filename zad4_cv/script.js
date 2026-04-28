let redTheme = false;

function changeTheme() {
    if (redTheme) {
        document.body.classList.remove("red");
        redTheme = false;
    } else {
        document.body.classList.add("red");
        redTheme = true;
    }
}

function toggleProjects() {
    const section = document.getElementById("projects");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}