//Seu JavaScript de validação aqui
const formulario = document.querySelector("[data-formulario]");
const camposDoFormulario = document.querySelectorAll("[required]");
const formReset = document.querySelector(".formcontato__form");

const mensagens = [
    "Muito curto",
    "Insira o seu nome",
    "Insira algum email",
    "Email inválido",
    "Insira o teu email",
    "Insira algum assunto",
    "Insira a sua mensagem"

]

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "assunto": e.target.elements["assunto"].value,
        "mensagem": e.target.elements["mensagem"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
    formReset.reset();
})

botaoSubmit.addEventListener("click", () => camposDoFormulario.value(""));

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("click", () => {
        if(mensagens.includes(campo.value)){
            campo.value = " ";
        }
        
    })
})
function verificaCampo(campo) {

    if(campo.id == "nome" && campo.value.length < 3 && campo.value.length > 0) {
        campo.value = "Muito Curto";
    } 
    if(campo.id == "nome" && campo.value.length == 0) {
        campo.value = "Insira o seu nome";
    }

    if(campo.id == "email" && campo.value.length == 0) {
        campo.value = "Insira algum Email";
    }

    if(campo.id == "email" && !campo.value.includes("@", ".")) {
        campo.value = "Email inválido";
    }

    if(campo.id == "email" && campo.value.length < 4) {
        campo.value = "Insira o teu email";
    }

    if(campo.id == "assunto" && campo.value.length == 0) {
        campo.value = "Insira algum assunto";
    }

    if(campo.id == "mensagem" && campo.value.length == 0) {
        campo.value = "Insira a sua mensagem";
    }

}

console.log(camposDoFormulario)