// === cabeçalho ===

document.addEventListener("DOMContentLoaded", () => {
  const arrLang = {
    en: {
      header: {
        sobre_mim: "About Me",
        projetos: "Projects",
        contato: "Contact",
      },
      main: {
        titulo_bem_vindo: "Welcome to my ",
        titulo_bem_vindo_portfolio: "portfolio",
        descricao_bem_vindo:
          "This is a space to showcase my projects and skills.",
        titulo_sobre_mim: "About Me",
        descricao_sobre_mim:
          "I am an experienced web developer with 2 years of experience in the field, specializing in creating digital solutions. I have in-depth knowledge of front-end development, allowing me to work on projects comprehensively. My goal is to continue developing high-performance applications that solve complex problems and improve the user experience. I am looking for opportunities to apply my skills and knowledge to innovative projects.",
        titulo_projetos: "Projects",
        descricao_projeto1: "An e-commerce site selling perfumes of all kinds.",
        descricao_projeto2: "A website for public transportation.",
        descricao_projeto3: "e-commerce of games",
        titulo_contato: "Contact",
        label_nome: "Name:",
        label_mensagem: "Message:",
        button_enviar: "Send",
        footer_copyright: "© 2026 My Portfolio. All rights reserved.",
      },
    },
    "pt-br": {
      header: {
        sobre_mim: "Sobre Mim",
        projetos: "Projetos",
        contato: "Contato",
      },
      main: {
        titulo_bem_vindo: "Bem-vindo ao meu ",
        titulo_bem_vindo_portfolio: "portfólio",
        descricao_bem_vindo:
          "Este é um espaço para mostrar meus projetos e habilidades.",
        titulo_sobre_mim: "Sobre Mim",
        descricao_sobre_mim:
          "Sou um desenvolvedor web experiente com 2 anos de atuação no setor, especializado na criação de soluções digitais. Tenho conhecimento aprofundado no front-end, o que me permite atuar em projetos de forma integral. Meu objetivo é continuar a desenvolver aplicações de alto desempenho que resolvam problemas complexos e melhorem a experiência do usuário. Estou oportunidades para aplicar minhas habilidades e conhecimentos em projetos inovadores.",
        titulo_projetos: "Projetos",
        descricao_projeto1: "Um e-commerce de perfumes de todos os tipos.",
        descricao_projeto2: "Um site para transporte público.",
        descricao_projeto3: "e-commerce de jogos",
        titulo_contato: "Contato",
        label_nome: "Nome:",
        label_mensagem: "Mensagem:",
        button_enviar: "Enviar",
        footer_copyright: "© 2026 Meu Portfólio. Todos os direitos reservados.",
      },
    },
  };

  function traduzir(idioma) {
    document.querySelectorAll(".lang").forEach((elemento) => {
      const chave = elemento.dataset.key;

      let textoTraduzido = null;

      // Percorre os grupos (header, main, etc)
      for (let grupo in arrLang[idioma]) {
        if (arrLang[idioma][grupo][chave]) {
          textoTraduzido = arrLang[idioma][grupo][chave];
          break;
        }
      }

      if (textoTraduzido) {
        elemento.textContent = textoTraduzido;
      }
    });

    localStorage.setItem("idioma", idioma);
    document.documentElement.lang = idioma;
  }

  // Carregar idioma salvo
  const idiomaSalvo = localStorage.getItem("idioma");
  if (idiomaSalvo && arrLang[idiomaSalvo]) {
    traduzir(idiomaSalvo);
  }

  document.querySelectorAll(".btn-lingua").forEach((botao) => {
    botao.addEventListener("click", () => {
      const idioma = botao.dataset.lang;

      if (arrLang[idioma]) {
        traduzir(idioma);
      }
    });
  });
});

// alterar aparência / tema
const body = document.body;
const header = document.querySelector("header");
const header_h1_a = document.querySelector("header h1 a");
let header_as = document.querySelectorAll("header nav ul li a");
let buttons_aparencia = document.querySelectorAll(".btn-aparencia");
let btns_aparencia_icon = document.querySelectorAll(".btn-aparencia img");
// main
const apresentacao = document.querySelector(".apresentacao-section");
const titulo_bem_vindo = document.querySelector(".titulo_bem_vindo h1");
const p_apresentacao = document.querySelector(
  "main section .apresentacao-container p",
);
const sobre = document.querySelector(".sobre");
const h1_sobre = document.querySelector("main .sobre h1");
const p_sobre = document.querySelector("main section .sobre-container p");
const h1_projetos = document.querySelector("main .projetos h1");
let projetos = document.querySelectorAll(
  "main .projetos .projetos-container .projeto",
);
const contato = document.querySelector("main .contato");
const h1_contato = document.querySelector("main .contato h1");
let labels_contato = document.querySelectorAll("main section form label");
// footer
const footer = document.querySelector("footer");

function add_aparencia(elemento, css) {
  elemento.classList.add(css);
  elemento.style.transition = "all 0.5s ease-in";
}
function remove_aparencia(elemento, css) {
  elemento.classList.remove(css);
  elemento.style.transition = "all 0.5s ease-in";
}

function tema_escuro() {
  localStorage.setItem("tema_atual", "escuro");
  btns_aparencia_icon.forEach((btn_aparencia_icon) => {
    btn_aparencia_icon.src = "img/icons/sun.png";
  });
  remove_aparencia(body, "dark-body");
  remove_aparencia(header, "dark-header");
  remove_aparencia(header_h1_a, "dark-header-h1-a");
  header_as.forEach((header_a) => {
    remove_aparencia(header_a, "dark-header-a");
  });
  buttons_aparencia.forEach((button_aparencia) => {
    remove_aparencia(button_aparencia, "dark-btn-aparencia");
  });
  // main
  remove_aparencia(apresentacao, "dark-apresentacao");
  remove_aparencia(titulo_bem_vindo, "dark-h1-apresentacao");
  remove_aparencia(p_apresentacao, "dark-p-apresentacao");
  remove_aparencia(sobre, "dark-sobre");
  remove_aparencia(h1_sobre, "dark-h1-sobre");
  remove_aparencia(p_sobre, "dark-p-sobre");
  remove_aparencia(h1_projetos, "dark-h1-projetos");
  projetos.forEach((projeto) => {
    remove_aparencia(projeto, "dark-projeto");
  });
  remove_aparencia(contato, "dark-contato");
  remove_aparencia(h1_contato, "dark-h1-contato");
  labels_contato.forEach((label) => {
    remove_aparencia(label, "dark-label");
  });
  // footer
  remove_aparencia(footer, "dark-footer");
}

function tema_claro() {
  localStorage.setItem("tema_atual", "claro");
  btns_aparencia_icon.forEach((btn_aparencia_icon) => {
    btn_aparencia_icon.src = "img/icons/moon.png";
  });
  add_aparencia(body, "dark-body");
  add_aparencia(header, "dark-header");
  add_aparencia(header_h1_a, "dark-header-h1-a");
  header_as.forEach((header_a) => {
    add_aparencia(header_a, "dark-header-a");
  });
  buttons_aparencia.forEach((button_aparencia) => {
    add_aparencia(button_aparencia, "dark-btn-aparencia");
  });
  // main
  add_aparencia(apresentacao, "dark-apresentacao");
  add_aparencia(titulo_bem_vindo, "dark-h1-apresentacao");
  add_aparencia(p_apresentacao, "dark-p-apresentacao");
  add_aparencia(sobre, "dark-sobre");
  add_aparencia(h1_sobre, "dark-h1-sobre");
  add_aparencia(p_sobre, "dark-p-sobre");
  add_aparencia(h1_projetos, "dark-h1-projetos");
  projetos.forEach((projeto) => {
    add_aparencia(projeto, "dark-projeto");
  });
  add_aparencia(contato, "dark-contato");
  add_aparencia(h1_contato, "dark-h1-contato");
  labels_contato.forEach((label) => {
    add_aparencia(label, "dark-label");
  });
  // footer
  add_aparencia(footer, "dark-footer");
}

let tema_atual = localStorage.getItem("tema_atual");
if (tema_atual == "claro" || !tema_atual) {
  tema_claro();
} else if (tema_atual == "escuro") {
  tema_escuro();
} else {
  alert("esse valor é inválido.");
  tema_escuro();
}

buttons_aparencia.forEach((button_aparencia) => {
  button_aparencia.addEventListener("click", () => {
    let tema_atual = localStorage.getItem("tema_atual");
    if (tema_atual == "claro" || !tema_atual) {
      tema_escuro();
    } else if (tema_atual == "escuro") {
      tema_claro();
    } else {
      alert("esse valor é inválido.");
      tema_escuro();
    }
  });
});

// menu (Mobile)
const btn_menu = document.querySelector("header .btn-menu");
const page_menu = document.querySelector("main .page-menu");
let btns_menu = document.querySelectorAll(
  "main .page-menu .page-container button",
);
const btn_menu_close = document.querySelector("main .page-menu .btn-close");

function abrir_pagina_mobile(page) {
  page.style.left = "0";
  body.style.overflow = "hidden";
}
function fechar_pagina_mobile(page) {
  page.style.left = "2000px";
  body.style.overflow = "";
}

btn_menu.addEventListener("click", () => {
  abrir_pagina_mobile(page_menu);
  btns_menu.forEach((button) => {
    button.addEventListener("click", () => {
      fechar_pagina_mobile(page_menu);
    });
  });
});

btn_menu_close.addEventListener("click", () => {
  fechar_pagina_mobile(page_menu);
});

const btn_pref = document.querySelector("header .btn-pref");
const page_pref = document.querySelector("main .page-pref");
let btns_pref = document.querySelectorAll(
  "main .page-pref .page-container button",
);
const btn_pref_close = document.querySelector("main .page-pref .btn-close");

btn_pref.addEventListener("click", () => {
  abrir_pagina_mobile(page_pref);
  btns_pref.forEach((button) => {
    button.addEventListener("click", () => {
      fechar_pagina_mobile(page_pref);
    });
  });
});

btn_pref_close.addEventListener("click", () => {
  fechar_pagina_mobile(page_pref);
});

// === contato ===
let inputs_contato = document.querySelectorAll("main section form input");
inputs_contato.forEach((input) => {
  // Adiciona um evento de focus para os inputs
  input.addEventListener("focus", function () {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label) {
      label.style.top = "0";
      label.style.left = "0";
    }
  });
  // Adiciona um evento de blur para os inputs
  // blur é ativado quando o input perde o foco
  input.addEventListener("blur", function () {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label && !input.value) {
      label.style.top = "33px";
      label.style.left = "10px";
    }
  });
});
document.querySelectorAll("main section form textarea").forEach((textarea) => {
  // Adiciona um evento de focus para o textarea
  textarea.addEventListener("focus", function () {
    const label = document.querySelector(`label[for="${textarea.id}"]`);
    if (label) {
      label.style.top = "0";
      label.style.left = "0";
    }
  });
  // Adiciona um evento de blur para o textarea
  textarea.addEventListener("blur", function () {
    const label = document.querySelector(`label[for="${textarea.id}"]`);
    if (label && !textarea.value) {
      label.style.top = "33px";
      label.style.left = "10px";
    }
  });
});
