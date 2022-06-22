let i = 0;
const clickIncrement = function() {
    i++;
};
const button = document.querySelector('button');
button.addEventListener('click', clickIncrement);
button.addEventListener('click', fetchPokemon);

function renderPokemon(pokemonData){

    let allPokemonContainer = document.getElementById('pokemonContainer');

    // Untuk membuat kolom
    let column = document.createElement("div");
    column.classList.add('col');

    // Untuk div card
    let card = document.createElement("div");
    card.classList.add('card');
    
    let cardBody = document.createElement("div");
    cardBody.classList.add('card-body');

    let cardBodyTitle = document.createElement("div");
    cardBodyTitle.classList.add('card-body-title');

    let cardBodyName = document.createElement("div");
    cardBodyName.classList.add('card-body-title-name');

    let cardBodyNumber = document.createElement("div");
    cardBodyNumber.classList.add('card-body-title-number');

    let cardBodyImage = document.createElement("div");
    cardBodyImage.classList.add('card-body-image');

    let cardBodyType = document.createElement("div");
    cardBodyType.classList.add('card-body-type');


    let pokemonName = document.createElement('h3');
    pokemonName.classList.add('card-title');
    pokemonName.innerText = pokemonData.name;

    let pokemonNumber = document.createElement('p');
    pokemonNumber.classList.add('card-text');
    pokemonNumber.innerText = `${pokemonData.id}`;

    let pokemonImage = document.createElement('img');
    pokemonImage.classList.add('card-img-top');
    pokemonImage.srcset = pokemonData.sprites.front_shiny;

    let pokemonTypes = document.createElement('p');
    pokemonTypes.classList.add('card-text');
    pokemonTypes.innerText = `Type: ${pokemonData.types[0].type.name}`;

    let types = pokemonData.types[0].type.name;
    console.log(types);
    switch(types){
        case "grass":
            cardBodyTitle.style.background = "#89FF6C";
            cardBodyImage.style.background = "#89FF6C";
            cardBodyType.style.background = "#9BFF83";
            break;
        case "fire":
            cardBodyTitle.style.background = "#F38500";
            cardBodyImage.style.background = "#F38500";
            cardBodyType.style.background = "#F38500";
            break;
        case "bug":
            cardBodyTitle.style.background = "#A49BAA";
            cardBodyImage.style.background = "#A49BAA";
            cardBodyType.style.background = "#A49BAA";
            break;
        case "normal":
            cardBodyTitle.style.background = "#ECD8C0";
            cardBodyImage.style.background = "#ECD8C0";
            cardBodyType.style.background = "#ECD8C0";
            break;
        case "poison":
            cardBodyTitle.style.background = "#E977EB";
            cardBodyImage.style.background = "#E977EB";
            cardBodyType.style.background = "#E977EB";
            break;        
        case "ground":
            cardBodyTitle.style.background = "#89783C";
            cardBodyImage.style.background = "#89783C";
            cardBodyType.style.background = "#89783C";
            break;
        case "water":
            cardBodyTitle.style.background = "#01D2D5";
            cardBodyImage.style.background = "#01D2D5";
            cardBodyType.style.background = "#01D2D5";
            break;
        case "electric":
            cardBodyTitle.style.background = "#F5FC0C";
            cardBodyImage.style.background = "#F5FC0C";
            cardBodyType.style.background = "#F5FC0C";
            break;
        default:
            cardBodyTitle.style.background = "#FFFFF0";
            cardBodyImage.style.background = "#FFFFF0";
            cardBodyType.style.background = "#FFFFF0";
    }

    cardBodyNumber.append(pokemonNumber);
    cardBodyName.append(pokemonName);
    cardBodyTitle.append(cardBodyNumber, cardBodyName);

    cardBodyImage.append(pokemonImage);
    cardBodyType.append(pokemonTypes);

    cardBody.append(cardBodyTitle, cardBodyImage, cardBodyType);

    card.appendChild(cardBody);
    column.appendChild(card);
    allPokemonContainer.appendChild(column);
}

function fetchPokemonData(pokemon){
    let url = pokemon.url
    fetch(url)
        .then(response => response.json())
        .then(function(pokemonData){
            renderPokemon(pokemonData)
        })
}

function fetchPokemon(){
    if(i > 1){
        document.location.reload(true);
    }
    else{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
        .then(response => response.json())
        .then(function(allpokemon){
            allpokemon.results.forEach(function(pokemon){
                fetchPokemonData(pokemon);
            })
        })
    }
}