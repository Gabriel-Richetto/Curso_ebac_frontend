 $(document).ready(function () {
            $('#carousel-imagens').slick({
                autoplay: true,
                arrows: false
            });
            $('#telefone').mask('(00) 00000-0000', {
                placeholder: '(__) _____-____'
            })

            $('#cpf').mask('000.000.000-00', {
                placeholder: '___.___.___-__'
            })

            $('#cep').mask('00000-000', {
                placeholder: '______-___'
            })

            $('form').validate({
                rules: {
                    nome: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true
                    },
                    endereco: {
                        required: true
                    },
                    cep: {
                        required: true
                    },
                    cpf: {
                        required: true
                    },
                },
                submitHandler: function (form) {
                    alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
                    form.reset();
                },
                invalidHandler: function (evento, validador) {
                    let camposIncorretos = validador.numberOfInvalids();
                    if (camposIncorretos) {
                        alert(`Existem ${camposIncorretos} campos incorretos`);
                    }
                    
                }
                    })
})