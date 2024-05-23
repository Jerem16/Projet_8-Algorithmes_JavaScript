function convertToBinary() {
    const decimalInput = document.getElementById("decimalInput").value;
    const binaryResult = document.getElementById("binaryResult");

    // Vérification si l'entrée est un nombre valide
    if (isNaN(decimalInput) || decimalInput.trim() === "") {
        binaryResult.textContent = "";
        return;
    }

    let decimalNumber = parseInt(decimalInput);

    // Vérification si le nombre est positif
    if (decimalNumber < 0) {
        binaryResult.textContent = "";
        return;
    }

    // Conversion du nombre décimal en binaire
    let binaryNumber = "";
    if (decimalNumber === 0) {
        binaryNumber = "0";
    } else {
        while (decimalNumber > 0) {
            binaryNumber = (decimalNumber % 2) + binaryNumber;
            decimalNumber = Math.floor(decimalNumber / 2);
        }
    }

    // Affichage du résultat binaire
    binaryResult.textContent = `Représentation binaire: ${String(
        binaryNumber
    )}`;
}
