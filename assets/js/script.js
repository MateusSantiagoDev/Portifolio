const img_clique = document.querySelector("#img_clique");

img_clique.addEventListener("click", function(){
    
    if(img_clique.src.includes("clique.png")){
        img_clique.src ="./assets/img/codificacao.png"
    }else if(img_clique.src.includes("codificacao.png")){
        img_clique.src ="./assets/img/css-icone.png"
    }else if(img_clique.src.includes("css-icone.png")){
        img_clique.src ="./assets/img/html-icone.png"
    }else if(img_clique.src.includes("html-icone.png")){
        img_clique.src = "./assets/img/javascript-icone.png"
    }else if(img_clique.src.includes("javascript-icone.png")){
        img_clique.src = "./assets/img/clique.png"
    }
    if(img_clique.src.includes("clique.png")){
        img_clique.src = "./assets/img/clique.png"
    }
   
});



