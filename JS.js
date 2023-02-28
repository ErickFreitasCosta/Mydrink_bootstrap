// TÔ selecionando o elemento do html e quando clicar nele vai acontecer algum evento


document.querySelector('#menu').addEventListener('click',(event) =>{
    event.preventDefault();  //Serve para não mandar para outra página

    //console.log(event);
    document.body.classList.toggle('dark'); //O toggle ativa e desativa


})