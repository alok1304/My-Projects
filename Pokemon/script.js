let c=document.querySelector("#main");
let s="";

let arr = ["https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
           "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/921.png",
           "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
           "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/196.png",
           "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/134.png",
           "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/915.png"
           ]
for(let i=0;i<65;i++){
    let r=Math.floor(Math.random()*6)
    s += `<div class="card">
            <img src=${arr[r]}
                alt="">
        </div> `
}
c.innerHTML=s;