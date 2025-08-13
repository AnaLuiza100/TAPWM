function validar() {
            const form = document.contatoForm;

            // Validação do nome
            if (form.elements["nome"].value.trim().length < 10) {
                alert("O nome deve ter no mínimo 10 caracteres.");
                form.elements["nome"].focus();
                return false;
            }

            // Validação do email
            if (form.elements["email"].value.trim() === "") {
                alert("Informe um email válido.");
                form.elements["email"].focus();
                return false;
            }

            // Validação do comentário
            if (form.elements["comentario"].value.trim().length < 20) {
                alert("O comentário deve ter no mínimo 20 caracteres.");
                form.elements["comentario"].focus();
                return false;
            }

            // Validação da pesquisa
            const pesquisa = form.elements["pesquisa"];
            let selecionado = false;
            for (let i = 0; i < pesquisa.length; i++) {
                if (pesquisa[i].checked) {
                    selecionado = true;
                    break;
                }
            }

            if (!selecionado) {
                alert("Que bom que você voltou a visitar esta página!");
            } else {
                alert("Volte sempre à esta página!");
            }

            return false; // impede envio real para teste
        }

        function limparFormulario() {
            const form = document.contatoForm;
            form.reset(); // reseta todos os campos
        }