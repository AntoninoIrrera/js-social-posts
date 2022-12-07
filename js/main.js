/*

Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1 -
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post nel nostro feed, (rimuovendo il post di prova dall'html).
Milestone 2 -
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
BONUS
1 : Formattare le date in formato italiano (gg/mm/aaaa)
2 : Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3 : Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


*/


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const contenitoreGenerale = document.getElementById("container");

let divPost;
let divFooter;
let divLike;
let divLikeButton;

const arrayNomeCognome = [];
const arrayInizialiNomi = [];


posts.forEach(post => {
    
    const tempo = new Date(post.created).toLocaleDateString();
    
    divPost = document.createElement("div");
    divFooter = document.createElement("div");
    divLike = document.createElement("div");
    divLikeButton = document.createElement("div");

    divPost.classList.add("post");
    contenitoreGenerale.append(divPost);

    if(post.author.image == null){

        arrayNomeCognome.push(post.author.name);
        

        const nomeECognomeSeparato = (arrayNomeCognome[0].split(" "));


        nomeECognomeSeparato.forEach(elementi => {
            

            arrayInizialiNomi.push(elementi.substring(0, 1));

        });


        divPost.innerHTML =
            `
        <div class="post-meta">
            <div class="post-meta__icon">
                <span>${arrayInizialiNomi.join(" ")}</span>
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${tempo}</div>
            </div>                    
        </div>
        </div>
        <div class="post__text">${post.content}</div>
        <div class="post__image">
            <img src="${post.media}" alt="${post.content}">
        </div>
        `
    }else{

        divPost.innerHTML = 
        `
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author.name}</div>
                    <div class="post-meta__time">${tempo}</div>
                </div>                    
            </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="${post.content}">
            </div>
        `

    }


    
    
    divFooter.classList.add("post__footer");
    divLike.classList.add("likes", "js-likes");


    divPost.append(divFooter);
    divFooter.append(divLike);

    
    divLikeButton.classList.add("likes__cta")


    divLike.append(divLikeButton);

    divLikeButton.innerHTML = 
    `
        <a class="like-button  js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
        </a>
    `

    divLike.innerHTML +=
        `
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
        </div>
    
    `

    // contenitoreGenerale.innerHTML += 
    // `
    //     <div class="post">
    //         <div class="post__header">
    //             <div class="post-meta">                    
    //                 <div class="post-meta__icon">
    //                     <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
    //                 </div>
    //                 <div class="post-meta__data">
    //                     <div class="post-meta__author">${post.author.name}</div>
    //                     <div class="post-meta__time">${post.created}</div>
    //                 </div>                    
    //             </div>
    //         </div>
    //         <div class="post__text">${post.content}</div>
    //         <div class="post__image">
    //             <img src="${post.media}" alt="${post.content}">
    //         </div>
    //         <div class="post__footer">
    //             <div class="likes js-likes">
    //                 <div class="likes__cta">
    //                     <a class="like-button  js-like-button" href="#" data-postid="1">
    //                         <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    //                         <span class="like-button__label">Mi Piace</span>
    //                     </a>
    //                 </div>
    //                 <div class="likes__counter">
    //                     Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
    //                 </div>
    //             </div> 
    //         </div>            
    //     </div>

    // `


    

});


const bottoneMiPiace = document.querySelectorAll("div.likes__cta");


const miPiaceInserito = document.querySelectorAll("a.like-button");

const likePost = document.querySelectorAll("b.js-likes-counter");

const arrayPostMiPiace = [];

let prova;

bottoneMiPiace.forEach((click, index) => {
    

    click.addEventListener("click", function() {

        
        if(arrayPostMiPiace.includes(posts[index].id)){
            miPiaceInserito[index].classList.remove("like-button--liked");
            likePost[index].innerHTML = posts[index].likes - 1;
            
            
            // const prova = findIndexOf(posts[index].id,arrayPostMiPiace);

            // arrayPostMiPiace.splice(prova, 1);

            arrayPostMiPiace.forEach((like, index2) => {
                
                if(like == posts[index].id){

                    // prova = index2;
                    arrayPostMiPiace.splice(index2, 1);


                }

            });                
                
            // arrayPostMiPiace.splice(prova, 1);

            
            
            console.log(arrayPostMiPiace);
            
            
            
        }else{
            
            miPiaceInserito[index].classList.add("like-button--liked");
            likePost[index].innerHTML = posts[index].likes + 1;
            arrayPostMiPiace.push(posts[index].id);
            // arrayPostMiPiace.sort(function (a, b) { return a - b });
            
            console.log(arrayPostMiPiace);

        }


        
    
    
    
    })
        


});

// function findIndexOf(value, array) {
//     let index;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == value) {
//             index = i;
//         }
//     }
//     return index;
// }




