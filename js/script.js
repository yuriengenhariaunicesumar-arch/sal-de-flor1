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
// FORMULÁRIO PARA WHATSAPP
// =========================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const evento = document.getElementById("evento").value;
        const data = document.getElementById("data").value;
        const convidados = document.getElementById("convidados").value.trim();
        const local = document.getElementById("local").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (
            nome === "" ||
            email === "" ||
            telefone === "" ||
            evento === "" ||
            data === "" ||
            convidados === "" ||
            local === "" ||
            mensagem === ""
        ) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const numeroWhatsapp = "5548996512181";

        const texto = `
Olá! Gostaria de solicitar um orçamento para a Sal de Flor - Cozinha Criativa.

Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}
Tipo de evento: ${evento}
Data do evento: ${data}
Número de convidados: ${convidados}
Local/Cidade: ${local}

Mensagem:
${mensagem}
        `;

        const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsapp, "_blank");

        form.reset();

    });

}