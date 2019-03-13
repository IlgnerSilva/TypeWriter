function animacaoDoTexto(elemento){
    //Primeiro temos que pegar cada letra do elemento e colocar em uma array
    const textoArray = elemento.innerHTML.split(''); //O método Split serve para separar letra por letra ou palavra por palavra
    
    //Texto inicialmente invisivel
    elemento.innerHTML = '';
    
    //Percorre o array letra por letra e também pega os índices no caso i
    textoArray.forEach((letra, i) => {

        //Executa a função a cada 100ms * o íncice
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

//Função Anônima autoexecutável
(function(){
    const titulo = document.querySelector('h1');
    animacaoDoTexto(titulo);
})();

