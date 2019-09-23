
var area_Produtos = document.querySelector("#areaProdutos");
var requestURL = 'https://gist.githubusercontent.com/mapreuss/cccf0781ba848648d9d8a6510201a027/raw/74b72ac19728a92306b296863b5a81c8a0b3d8d7/test.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
    var infoProdutosText = request.response;
    var infoProdutos = JSON.parse(infoProdutosText);
    
    divProduto(infoProdutos);
}

function divProduto(jsonObj) {
    
    for(var i = 0; i < jsonObj.length; i++) {
    
        
        if(jsonObj[i].isActive == true){ 
        //if(true){     
            var divProduto = document.createElement('div');
            var imgProduto = document.createElement('img');
            var ulProduto = document.createElement('ul');
            var liProduto1 = document.createElement('li');
            var liProduto2 = document.createElement('li');
            var liProduto3 = document.createElement('li');
            var liProduto4 = document.createElement('li');
            var liProduto5 = document.createElement('li');
            var aProduto = document.createElement('a');
            
            divProduto.setAttribute("id", "div2");

            imgProduto.setAttribute("src", jsonObj[i].picture);
            imgProduto.setAttribute("alt", "minha imagem");
            imgProduto.setAttribute("id", "img_produtos");

            divProduto.appendChild(imgProduto);

            ulProduto.setAttribute("id", "ul_info_produtos");

            liProduto1.setAttribute("class", "nome_prod");
            liProduto1.textContent = jsonObj[i].name;

            liProduto2.setAttribute("class", "prec_velho_prod");
            liProduto2.textContent = jsonObj[i].oldPrice;

            liProduto3.setAttribute("class", "prec_novo_prod");
            liProduto3.textContent = jsonObj[i].price;

            var precoEmTexto = jsonObj[i].price.substring(1)
            var preco = Number(precoEmTexto);
            var metadePreco = preco/2;

            liProduto4.setAttribute("class", "prec_vezes_prod");
            liProduto4.textContent = "ou 2x de $" + metadePreco.toFixed(2);

            aProduto.setAttribute("class", "botao_comprar_produto");
            aProduto.setAttribute("href", "#");
            aProduto.textContent = "Comprar";

            liProduto5.appendChild(aProduto);

            ulProduto.appendChild(liProduto1);
            ulProduto.appendChild(liProduto2);
            ulProduto.appendChild(liProduto3);
            ulProduto.appendChild(liProduto4);
            ulProduto.appendChild(liProduto5);

            divProduto.appendChild(ulProduto);

            //sessaoProdutos.appendChild(divProduto);
            area_Produtos.insertBefore(divProduto, area_Produtos.childNodes[4])
        
        }
    }
    
}

