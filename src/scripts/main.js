document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault();
        let numMax = document.getElementById('numero-maximo').value;
        numMax = parseInt(numMax);

        let numAle = Math.random() * numMax;
        numAle = Math.floor(numAle + 1);
        document.getElementById('resultado-valor').innerText = numAle;
        document.querySelector('.resultado').style.display = 'block';
    })
})