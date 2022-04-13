let mostrar_contador = document.getElementById("mostrar_contador");
let egg = document.getElementById("img_face");
let contador = 0;

egg.addEventListener("click", subir_uno)

function subir_uno() {
    contador++
    mostrar_contador.innerHTML = `${contador}`

    egg.style.animation = `rotate 1s ease 0s infinite normal`;


    if (contador >= 100000000) {
        mostrar_contador.innerHTML = `Lo lograste`
        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }
}