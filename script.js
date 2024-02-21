let aux = 0;
function menu(){
    
    if(aux===0){
        aux = aux+1;
        document.getElementById("menu").style.display = 'block'
        document.getElementById("botaoMenu").style.display = 'none'
        document.getElementById("boasvindas").style.display = 'none'
    }else{
        aux = 0;
        document.getElementById("menu").style.display = 'none'
    }
}
function VoltarDemenu(){
    window.location.href = 'index.html'
}
function pescados(){
    AbrirJanela("opcoes","index");
    const op1 = 'op1'
    const img1 = 'imagens/pescados/salmao.jpg'
    const op2 = 'op2'
    const img2 = 'imagens/pescados/atum.jpg'
    const op3 = 'op3'
    const img3 = 'imagens/pescados/robalo.jpg'
    const op4 = 'op4'
    const img4 = 'imagens/pescados/bonito.jpg'
    carregarimagens(op1,img1,op2,img2,op3,img3,op4,img4);
    const id0 = "opcoes_h2"
    const id1 = "opcaoP1"
    const id2 = "opcaoP2"
    const id3 = "opcaoP3"
    const id4 = "opcaoP4"
    const titulo = "Opções de Peixes";
    const opcao1 = "Filé Grelhado de Salmão";
    const opcao2 = "Filé Grelhado de Atum";
    const opcao3 = "Filé Grelhado de Robalo ";
    const opcao4 = "Posta Grelhada de Bonito";
    carregarTextos(id0, id1, id2, id3, id4, titulo, opcao1, opcao2, opcao3, opcao4);
    const descricoes = {
        d1:"desccria do salmão",
        d2:"descricao da atum",
        d3:"descricao do robalo",
        d4:"descricao do bonito"
    }
    atualizarDetalhes(opcao1,opcao2,opcao3,opcao4,img1,img2,img3,img4,descricoes);
}
function arroz(){
    AbrirJanela("opcoes","index");
    const op1 = 'op1'
    const img1 = 'imagens/arroz/morango.jpg'
    const op2 = 'op2'
    const img2 = 'imagens/arroz/grega.jpg'
    const op3 = 'op3'
    const img3 = 'imagens/arroz/crocante.jpg'
    const op4 = 'op4'
    const img4 = 'imagens/arroz/branco.jpg'
    carregarimagens(op1,img1,op2,img2,op3,img3,op4,img4);
    const id0 = "opcoes_h2"
    const id1 = "opcaoP1"
    const id2 = "opcaoP2"
    const id3 = "opcaoP3"
    const id4 = "opcaoP4"
    const titulo = "Opções de Arroz";
    const opcao1 = "Arroz de Morango";
    const opcao2 = "Arroz a Grega";
    const opcao3 = "Arroz Crocante";
    const opcao4 = "Arroz Branco";
    carregarTextos(id0, id1, id2, id3, id4, titulo, opcao1, opcao2, opcao3, opcao4);
    const descricoes = {
        d1:"desccria do arroz de morango",
        d2:"descricao da arroz a grega",
        d3:"descricao do arroz crocante",
        d4:"descricao do arroz branco"
    }
    atualizarDetalhes(opcao1,opcao2,opcao3,opcao4,img1,img2,img3,img4,descricoes);
}function massas(){
    AbrirJanela("opcoes","index");
    const op1 = 'op1'
    const img1 = 'imagens/massas/alhoeoleo.jpg'
    const op2 = 'op2'
    const img2 = 'imagens/massas/molhobranco.jpg'
    const op3 = 'op3'
    const img3 = 'imagens/massas/tomate.jpg'
    const op4 = 'op4'
    const img4 = 'imagens/massas/pesto.jpg'
    carregarimagens(op1,img1,op2,img2,op3,img3,op4,img4);
    const id0 = "opcoes_h2"
    const id1 = "opcaoP1"
    const id2 = "opcaoP2"
    const id3 = "opcaoP3"
    const id4 = "opcaoP4"
    const titulo = "Opções de Massas";
    const opcao1 = "Macarrão ao Alho e óleo";
    const opcao2 = "Macarrão ao Molho Branco";
    const opcao3 = "Macarrão ao Molho Vermelho";
    const opcao4 = "Macarrão ao Pesto de Ervas";
    carregarTextos(id0, id1, id2, id3, id4, titulo, opcao1, opcao2, opcao3, opcao4);
    const descricoes = {
        d1:"desccria do macarrão alho e óleo",
        d2:"descricao do macarrão ao molho branco",
        d3:"descricao do macarrão ao molho vermelho",
        d4:"descricao do macarrão ao pesto de ervas"
    }
    atualizarDetalhes(opcao1,opcao2,opcao3,opcao4,img1,img2,img3,img4,descricoes);
}
function salada(){
    AbrirJanela("opcoes","index");
    const op1 = 'op1'
    const img1 = 'imagens/saladas/berinjela.jpg'
    const op2 = 'op2'
    const img2 = 'imagens/saladas/roxa.jpg'
    const op3 = 'op3'
    const img3 = 'imagens/saladas/tomate.jpg'
    const op4 = 'op4'
    const img4 = 'imagens/saladas/pesto.jpg'
    carregarimagens(op1,img1,op2,img2,op3,img3,op4,img4);
    const id0 = "opcoes_h2"
    const id1 = "opcaoP1"
    const id2 = "opcaoP2"
    const id3 = "opcaoP3"
    const id4 = "opcaoP4"
    const titulo = "Opções de Saladas";
    const opcao1 = "Confitado de Berinjela";
    const opcao2 = "Salada Roxa";
    const opcao3 = "Confitado de Tomates";
    const opcao4 = "Salada Verde com Pesto de Ervas";
    carregarTextos(id0, id1, id2, id3, id4, titulo, opcao1, opcao2, opcao3, opcao4);
    const descricoes = {
        d1:"desccria do confitado de berinjela",
        d2:"descricao da salada roxa",
        d3:"descricao do confitado de tomates",
        d4:"descricao da salada verde"
    }
    atualizarDetalhes(opcao1,opcao2,opcao3,opcao4,img1,img2,img3,img4,descricoes);
}
function frutosDoMar(){
    AbrirJanela("opcoes","index"); 
    const op1 = 'op1'
    const img1 = 'imagens/frutosdomar/polvo.jpg'
    const op2 = 'op2'
    const img2 = 'imagens/frutosdomar/lula.jpg'
    const op3 = 'op3'
    const img3 = 'imagens/frutosdomar/camarao.jpg'
    const op4 = 'op4'
    const img4 = 'imagens/frutosdomar/arraia.jpg'
    carregarimagens(op1,img1,op2,img2,op3,img3,op4,img4);
    const id0 = "opcoes_h2"
    const id1 = "opcaoP1"
    const id2 = "opcaoP2"
    const id3 = "opcaoP3"
    const id4 = "opcaoP4"
    const titulo = "Opções de Mariscos";
    const opcao1 = "Polvo";
    const opcao2 = "Lula";
    const opcao3 = "Camarão";
    const opcao4 = "Arraia";
    carregarTextos(id0, id1, id2, id3, id4, titulo, opcao1, opcao2, opcao3, opcao4);
    const descricoes = {
        d1:"desccria do polvo",
        d2:"descricao da lula",
        d3:"descricao do camarao",
        d4:"descricao da arraia"
    }
    atualizarDetalhes(opcao1,opcao2,opcao3,opcao4,img1,img2,img3,img4,descricoes);
}
function atualizarDetalhes(opcao1, opcao2, opcao3, opcao4, img1, img2, img3, img4, descricoes) {
    var but1 = document.getElementById("but1");
    var but2 = document.getElementById("but2");
    var but3 = document.getElementById("but3");
    var but4 = document.getElementById("but4");

    but1.addEventListener("click", function () {
        const nome = opcao1;
        const img = img1;
        const texto = descricoes.d1;
        carregarDetalhes(nome, img, texto);

        
    });

    but2.addEventListener("click", function () {
        const nome = opcao2;
        const img = img2;
        const texto = descricoes.d2;
        carregarDetalhes(nome, img, texto);
    });

    but3.addEventListener("click", function () {
        const nome = opcao3;
        const img = img3;
        const texto = descricoes.d3;
        carregarDetalhes(nome, img, texto);
    });

    but4.addEventListener("click", function () {
        const nome = opcao4;
        const img = img4;
        const texto = descricoes.d4;
        carregarDetalhes(nome, img, texto);
    });
}

function carregarDetalhes(nome, img, texto){
    document.getElementById("nome").textContent = nome;
    document.getElementById("img").src = img;
    document.getElementById("texto").textContent = texto;
    AbrirJanela("detalhes","opcoes");

}
function VoltarDeOpcoes(){
    AbrirJanela("index","opcoes");

}
function VoltarDeDetalhes(){
    AbrirJanela("opcoes","detalhes");

}
function fazerPedido(){
    window.location.href = 'pedido.html'
    
}

function AbrirJanela(janelaAbrir, janelaFechar) {
   
    document.getElementById(janelaFechar).style.display = 'none';
    document.getElementById(janelaAbrir).style.display = 'block';
    /*document.querySelector('[onclick="openTab(\'' + janela + '\')"]').style.backgroundColor = '#ccc';*/
}

function carregarimagens(op1, img1, op2, img2, op3, img3, op4, img4){
   
    document.getElementById(op1).src = img1;
    document.getElementById(op2).src = img2;
    document.getElementById(op3).src = img3;
    document.getElementById(op4).src = img4;

}
function carregarTextos(id0, id1, id2, id3, id4, titulo, opcao1, opcao2, opcao3, opcao4) {
    document.getElementById(id0).textContent = titulo
    document.getElementById(id1).textContent = opcao1
    document.getElementById(id2).textContent = opcao2
    document.getElementById(id3).textContent = opcao3
    document.getElementById(id4).textContent = opcao4


}