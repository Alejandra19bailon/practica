function solveEquation() {
    
    const iterationsInput = document.getElementById('iterations');
    const iterations = parseInt(iterationsInput.value);

    const result = document.getElementById('result');
    result.innerHTML = '';

    const initialGuess = 5; // Suponemos un valor inicial de x

    let x = initialGuess;
    for (let i = 0; i < iterations; i++) {
        x = x - (Math.pow(x, x) - 100) / (Math.pow(x, x) * (Math.log(x) + 1));
        result.innerHTML += `Iteración ${i + 1}: x = ${x}<br>`;
    }

    result.innerHTML += `<strong>Resultado final:</strong> x = ${x}`;
}