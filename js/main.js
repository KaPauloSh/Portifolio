var rellax = new Rellax(".rellax");

typeWriter = (elemento) => {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i); //tempo
  });
};
//letras digitadas
const subtitulo = document.querySelector("h2");
typeWriter(subtitulo);
typeWriter(document.querySelector("h1"));

//mudar cor da navbar ao rolar
const menu = document.querySelector("header");

activedScroll = () => {
  //olhar a classe e adicionar uma nova
  menu.classList.toggle("ativo", scrollY > 0);
};

window.addEventListener("scroll", activedScroll);

//hamburguer
$(document).ready(function () {
  $(".hamburguer").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });
});

//Formulário

//validador
validador = () => {
  //validar nome
  if (document.dados.name.value == "" || document.dados.name.value.length < 3) {
    alert("Preencha o campo nome corretamente!");
    document.dados.name.focus();
    return false;
  }
  //validar email
  if (
    document.dados.email.value == "" ||
    document.dados.email.value.indexOf("@") == -1 ||
    document.dados.email.value.indexOf(".") == -1
  ) {
    alert("Preencha o campo com um email válido!");
    document.dados.email.focus();
    return false;
  }
  //validar assunto
  if (
    document.dados.subject.value == "" ||
    document.dados.subject.value.length < 3
  ) {
    alert("Preencha o campo assunto!");
    document.dados.subject.focus();
    return false;
  }
  //validar mensagem
  if (document.dados.message.value == "") {
    alert("Preencha o campo mensagem!");
    document.dados.message.focus();
    return false;
  } else {
    alert("Mensagem enviada com sucesso!");
  }
};

//pegar o email e por numa variável
const div = document.querySelector(".gmail");
//aparecer o gmail
div.style.display = "none";
//função de mudar de estado
mudarEstado = (item) => {
  //pegar o valor do display do gmail
  var display = document.querySelector(item).style.display;

  switch (display) {
    case "none" || "null":
      div.style.display = "flex";
      break;
    case "flex":
      div.style.display = "none";
      break;
    default:
      div.style.display = "none";
  }
};

//copiar o texto para área de transferência
copiarTexto = (texto) => {
  navigator.clipboard.writeText(texto);
  navigator.clipboard.readText().then((texto) => {
    alert(texto + " copiado para a área de transferência");
  });
};
