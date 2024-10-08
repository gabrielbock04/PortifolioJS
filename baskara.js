document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtendo os valores dos coeficientes
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Validando o valor de 'a'
    if (a === 0) {
        document.getElementById('result').innerText = "O coeficiente 'a' não pode ser zero.";
        return;
    }

    // Calculando o discriminante
    const delta = (b * b) - (4 * a * c);

    // Calculando as raízes
    let raiz1, raiz2;
    if (delta > 0) {
        raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById('result').innerText = `As raízes são: ${raiz1} e ${raiz2}`;
    } else if (delta === 0) {
        raiz1 = -b / (2 * a);
        document.getElementById('result').innerText = `A raiz dupla é: ${raiz1}`;
    } else {
        document.getElementById('result').innerText = "Não há raízes reais.";
    }
});