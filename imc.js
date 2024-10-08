document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtendo os valores de peso e altura
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Validando os valores
    if (peso <= 0 || altura <= 0) {
        document.getElementById('result').innerText = "Peso e altura devem ser maiores que zero.";
        return;
    }

    // Calculando o IMC
    const imc = peso / (altura * altura);

    // Exibindo o resultado
    document.getElementById('result').innerText = `Seu IMC é: ${imc.toFixed(2)}`;

    // Interpretando o IMC
    let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    document.getElementById('result').innerText += ` (${categoria})`;
});