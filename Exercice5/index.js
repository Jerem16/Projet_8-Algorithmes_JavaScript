const formInputs = document.querySelectorAll("input");

formInputs.forEach((input) => {
    const label = createLabel(input.placeholder, input.id);
    input.setAttribute("aria-label", input.placeholder);

    input.parentNode.insertBefore(label, input);
});

function createLabel(text, forId) {
    const label = document.createElement("label");
    label.textContent = text + " :";
    label.setAttribute("for", forId);
    return label;
}

const image = document.querySelector("img");
image.setAttribute("alt", "Une illustration représentant quelque chose");

const link = document.querySelector("a");
link.setAttribute("title", "En savoir plus sur notre service");

const images = document.querySelectorAll("img");
images.forEach(function (img) {
    img.setAttribute("alt", "Description de l'image");
});

const links = document.querySelectorAll("a");
links.forEach(function (link) {
    link.setAttribute("title", "Description du lien");
});
