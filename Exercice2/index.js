function calculate(arg1, arg2, operator) {
    const nb1 = Number(arg1);
    const nb2 = Number(arg2);
    let result;

    if (nb1 === 0 || nb2 === 0 && operator === "/") {
            return "Division by zero is not allowed";
    }

    switch (operator) {
        case "+":
            result = nb1 + nb2;
            break;
        case "-":
            result = nb1 - nb2;
            break;
        case "*":
            result = nb1 * nb2;
            break;
        case "/":
            result = nb1 / nb2;
            break;
        default:
            return "Invalid operator";
    }
    return result;
}
// Exemples d'utilisation de la fonction
console.log(calculate(0, 4, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate("5", "3", "+")); // Affiche 8
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"

export default calculate;
