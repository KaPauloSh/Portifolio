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
