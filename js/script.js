const slides = document.querySelectorAll(".slider img");

let atual = 0;

setInterval(() => {

    slides[atual].classList.remove("active");

    atual++;

    if(atual >= slides.length){

        atual = 0;

    }

    slides[atual].classList.add("active");

}, 6000);

// =========================
// VALIDAÇÃO DO FORMULÁRIO
// =========================

const form = document.getElementById("contactForm");

if (form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const evento = document.getElementById("evento").value;
        const mensagem = document.getElementById("mensagem").value.trim();

        if(
            nome === "" ||
            email === "" ||
            telefone === "" ||
            evento === "" ||
            mensagem === ""
        ){
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert("Solicitação enviada com sucesso!");

        form.reset();

    });

}