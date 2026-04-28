document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const error = document.getElementById("error");
    const success = document.getElementById("success");

    error.textContent = "";
    success.textContent = "";

    const lettersOnly = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż]+$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !surname || !email || !message) {
        error.textContent = "Wypełnij wszystkie pola.";
        return;
    }

    if (!lettersOnly.test(name)) {
        error.textContent = "Imię nie może zawierać cyfr.";
        return;
    }

    if (!lettersOnly.test(surname)) {
        error.textContent = "Nazwisko nie może zawierać cyfr.";
        return;
    }

    if (!emailPattern.test(email)) {
        error.textContent = "Niepoprawny email.";
        return;
    }

    success.textContent = "Formularz wysłany poprawnie!";
});