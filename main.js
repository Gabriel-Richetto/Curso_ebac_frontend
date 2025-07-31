const form = document.getElementById('form-campos');
const campoB = document.getElementById('campoB');
let formValido = false;

function campoBValido(campoB){
    const campoBmenor = campoB.target.value('');
    return campoBmenor.value > campoA;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagemValida = 'O valor dos campos é válido.';
    const mensagemInvalida = 'O valor dos campos é inválido.';

    const containerMensagemValida = document.querySelector('.mensagemValida');
    const containerMensagemInvalida = document.querySelector('.mensagemInvalida');

    containerMensagemValida.style.display = 'none';
    containerMensagemInvalida.style.display = 'none';

    formValido = campoA.value && campoB.value && parseFloat(campoB.value) > parseFloat(campoA.value);

    if (formValido) {
        containerMensagemValida.innerHTML = mensagemValida;
        containerMensagemValida.style.display = 'block';
    campoA.value = '';
    campoB.value = '';
    } else {
        containerMensagemInvalida.innerHTML = mensagemInvalida;
        containerMensagemInvalida.style.display = 'block';
        campoB.style.border = '1px solid red';
    campoA.value = '';
    campoB.value = '';
    }

    campoB.addEventListener('keyup', function (e) {
        console.log(e.target.value);
        formValido = campoBmenor(e.target.value)
    })
    if (!formValido) {
        campoB.classList.add('error');
        document.querySelector('.mensagemInvalida').style.display = 'block';
    } else {
        campoB.classList.remove('error');
        document.querySelector('.mensagemInvalida').style.display = 'none';
    }

});