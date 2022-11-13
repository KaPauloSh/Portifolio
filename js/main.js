var rellax = new Rellax('.rellax');

typeWriter = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra , 75 * i);//tempo
    })
}
//letras digitadas
const subtitulo = document.querySelector('h2');
typeWriter(subtitulo);
typeWriter(document.querySelector('h1'));

//mudar cor da navbar ao rolar
const menu = document.querySelector('header');

activedScroll = () => {
    //olhar a classe e adicionar uma nova
    menu.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', activedScroll);

//hamburguer
$(document).ready(function(){
    $('.hamburguer').click(function(){
        $(this).toggleClass('active');
        $(".menu").toggleClass('active');
    });
});

//Formulário

//validador
validador = () => {
    //validar nome
    if(document.dados.name.value == "" || document.dados.name.value.length < 3){
        alert("preencha o campo nome corretamente!");
        document.dados.name.focus();
        return false;
    }
    //validar email
    if(document.dados.email.value == "" || document.dados.email.value.indexOf('@') == -1 || document.dados.email.value.indexOf('.') == -1){
        alert("preencha o campo com um email válido!");
        document.dados.email.focus();
        return false;
    }
    //validar assunto
    if(document.dados.subject.value == "" || document.dados.subject.value.length < 3){
        alert("preencha o campo assunto!");
        document.dados.subject.focus();
        return false;
    }
    //validar mensagem
    if(document.dados.message.value == ""){
        alert("preencha o campo mensagem!");
        document.dados.message.focus();
        return false;
    }
}