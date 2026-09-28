

// =========================
// VOLTAR AO TOPO AO RECARREGAR A HOME
// =========================

const paginaInicial =
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/index.html");

if (paginaInicial) {
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    window.addEventListener("load", function () {
        window.scrollTo(0, 0);
    });

    window.addEventListener("pageshow", function () {
        window.scrollTo(0, 0);
    });
}

// =========================
// SLIDER DA HOME
// =========================

const slides = document.querySelectorAll(".slider img");

if (slides.length > 0) {
    let atual = 0;

    setInterval(() => {
        slides[atual].classList.remove("active");

        atual++;

        if (atual >= slides.length) {
            atual = 0;
        }

        slides[atual].classList.add("active");
    }, 6000);
}


// =========================
// TELEFONE INTERNACIONAL
// =========================

const telefoneInput = document.querySelector("#telefone");
let telefoneInternacional = null;

if (telefoneInput && window.intlTelInput) {
    telefoneInternacional = window.intlTelInput(telefoneInput, {
        initialCountry: "br",
        countryOrder: ["br", "ar", "us", "pt", "es"],
        separateDialCode: true,
        matchDropdownWidth: false,
        countrySearch: false
    });
}


// =========================
// FORMULÁRIO PARA WHATSAPP
// =========================

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefoneDigitado = telefoneInput.value.trim();
        const evento = document.getElementById("evento").value;
        const data = document.getElementById("data").value;
        const convidados = document.getElementById("convidados").value.trim();
        const local = document.getElementById("local").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (
            nome === "" ||
            email === "" ||
            telefoneDigitado === "" ||
            evento === "" ||
            data === "" ||
            convidados === "" ||
            local === "" ||
            mensagem === ""
        ) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        let telefone = telefoneDigitado;

        if (telefoneInternacional) {
            const pais = telefoneInternacional.getSelectedCountry();
            const numeroLimpo = telefoneDigitado.replace(/\D/g, "");

            telefone = `+${pais.dialCode}${numeroLimpo}`;
        }

        const numeroWhatsapp = "5548996512181";

        const texto = `Olá! Gostaria de solicitar um orçamento para a Sal de Flor - Cozinha Criativa.

Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}
Tipo de evento: ${evento}
Data do evento: ${data}
Número de convidados: ${convidados}
Local/Cidade: ${local}

Mensagem:
${mensagem}`;

        const linkWhatsapp =
            `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsapp, "_blank");

        form.reset();

        if (telefoneInternacional) {
            telefoneInternacional.setSelectedCountry("br");
        }
    });
}