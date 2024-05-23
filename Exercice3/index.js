function calculateAverage(numbers) {
    if (
        !Array.isArray(numbers) ||
        numbers.length === 0 ||
        numbers.some(isNaN) ||
        numbers.some((val) => typeof val !== "number")
    ) {
        return "No numbers to calculate average";
    } else {
        const average =
            numbers.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            ) / numbers.length;
        return average;
    }
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average
console.log(calculateAverage([])); // No numbers to calculate average
console.log(calculateAverage(10)); // No numbers to calculate average

export default calculateAverage;
