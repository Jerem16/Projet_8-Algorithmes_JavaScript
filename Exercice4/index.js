const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    document.body.appendChild(messageParagraph);
});
