let pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

let novoPokemon = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Agua"
}

pokemon1.ataques = []

const ataquePokemon = {
   nome: "Investida",
   dano: 40,
   tipo: "Normal",
   precisao: 100
}

pokemon1.ataques.push(ataquePokemon)


novoPokemon ['ataques'] = [...pokemon1.ataques]

pokemon1.ataques.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
})

novoPokemon.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
})
console.log(pokemon1)
console.log(novoPokemon)



