fetch("data.json")
    .then(response => response.json())
    .then(data => {

        const skillsList = document.getElementById("skills");
        const projectsList = document.getElementById("projects");

        data.skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        data.projects.forEach(project => {
            const li = document.createElement("li");
            li.textContent = project;
            projectsList.appendChild(li);
        });

    })
    .catch(error => {
        console.log("Błąd:", error);
    });