const pessoa ={
    nome: "monica",
    profissao: "pedagoga"
}

console.log(pessoa.nome) //apresenta os dados

console.log(pessoa.telefone) //gera uma mensagem reservada

pessoa.telefone = "41 99999-9999" //atribuição de uma propriedade

console.log(pessoa.telefone) //agora vai apresentar o telefone

console.log(pessoa) //apresenta todo o objeto

const novapessoa = {
    nome:`teste`
}

pessoa = novapessoa
