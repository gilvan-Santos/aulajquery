$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaimagem = $('#endereco-imagem-nova').val();
        console.log(enderecoDaNovaimagem);
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaimagem}"/>`).appendTo(novoItem)
        $(`<div class= "overlay-imagem-link">
                <a herf="${enderecoDaNovaimagem}" target="_blank" tittle= "ver imagem em tamanho real">
                    ver imagem em tamanho real
                </a>    
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
            $('#endereco-imagem-nova').val('')
    })
})
