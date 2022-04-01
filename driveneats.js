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