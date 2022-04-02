function togglePick1(elemento1){
    let x = document.querySelector(".selecionado1");
    if ( x !== null){
        elemento1.classList.toggle("selecionado1");
        x.classList.remove("selecionado1");
    }else {
        elemento1.classList.add("selecionado1");
        
    } 
    barraInferior();
}  
function togglePick2(elemento2){
    let y = document.querySelector(".selecionado2");
    if ( y !== null){
        elemento2.classList.toggle("selecionado2");
        y.classList.remove("selecionado2");
    }else {
        elemento2.classList.add("selecionado2");
    } 
    barraInferior();
}  
function togglePick3(elemento3){
    let z = document.querySelector(".selecionado3");
    if ( z !== null){
        elemento3.classList.toggle("selecionado3");
        z.classList.remove("selecionado3");
    }else {
        elemento3.classList.add("selecionado3");
    } 
    barraInferior();
}  
function barraInferior (){
    let before = document.querySelector(".bottom-before");
    let after = document.querySelector(".bottom-after");
    if ( document.querySelector(".selecionado1")!== null && document.querySelector(".selecionado2")!== null && document.querySelector(".selecionado3")!== null){
        before.classList.add("hide");
        after.classList.add("show");
    }else{
        before.classList.remove("hide");
        after.classList.remove("show");
    }
}
function whatsapp(){
    
let prato = document.querySelector(".selecionado1").querySelector("strong").innerHTML;
let bebida = document.querySelector(".selecionado2").querySelector("strong").innerHTML;
let sobremesa = document.querySelector(".selecionado3").querySelector("strong").innerHTML; 
let pratoCusto = Number(document.querySelector(".selecionado1").querySelector("span").innerHTML);
let bebidaCusto = Number(document.querySelector(".selecionado2").querySelector("span").innerHTML);
let sobremesaCusto = Number(document.querySelector(".selecionado3").querySelector("span").innerHTML);
let total = (pratoCusto + bebidaCusto + sobremesaCusto).toFixed(2);
let nome, endereco = "";
nome = prompt("Qual seu nome?");
endereco = prompt("Qual seu endereço?")


let uri = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${prato}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: R$ ${total}

Nome: ${nome}
Endereço: ${endereco}`);
document.querySelector(".bottom-after").href="https://wa.me/5544999831316?text="+uri;
}