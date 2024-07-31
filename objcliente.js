const objetocliente={
    id:5,
    nome: "arisberto", 
    idade:26,
    cpf:"999.888.777-66"
}

console.log(`nome: ${objetocliente.nome }`)
console.log(`idade: ${objetocliente [`idade`]}`)
console.log(`cpf: ${objetocliente [`cpf`]}`)

const chaves = ["nome", "idade", "cpf"]

chaves.forEach((chave) => {
    console.log(`chave: ${chave} valor: ${objetocliente[chave]}`)
});
