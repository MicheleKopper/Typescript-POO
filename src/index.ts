import { calcularAprovacao, calcularNotas, Notas, entrada, saida, Carteira, adicionar, todosProdutos, deletar, Usuarios, infoUsuarios, infoDiretor, UsuarioDiretor, informacoes } from "./atividades";

// // ------ Atividade 01 ------
// console.log(calcularAprovacao(9, 8));



// // ------ Atividade 02 ------
// const lista: Notas[] = [
//     { nota: 7, peso: 2 },
//     { nota: 8, peso: 3 },
// ]

// console.log(`A média ponderada é: ${calcularNotas(lista)}`);



// // ------ Atividade 03 ------
// const carteira: Carteira = {
//     saldo: 0,
//     transacoes: []
// }

// // Entrada
// entrada(carteira, 1000)
// console.log(carteira);

// // Saída
// saida(carteira, 250)
// console.log(carteira);



// // ------ Atividade 04 ------
// // Adicionar
// adicionar({ nome: 'Maça', preco: 10 });
// adicionar({ nome: 'Pitaya', preco: 50 });
// adicionar({ nome: 'Melancia', preco: 15 });


// // Deletar
// deletar('Pitaya')

// console.log('Lista de produtos:');
// console.log(todosProdutos());



// ------ Atividade 05 ------
const usuarios: Usuarios = {
    nome: 'Michele Kopper',
    idade: 30,
    ocupacao: 'Programadora',
    salario: 15000
}

console.log(infoUsuarios(usuarios));



// ------ Atividade 06 ------
const diretor = {
    nome: 'Michele Kopper',
    idade: 30,
    ocupacao: 'Diretora',
    comissionamento: 5,
    salario: 25000
};

console.log(infoDiretor(diretor));



// ------ Atividade 07 ------
const usuario: Usuarios = {
    nome: 'Mi Kopper',
    idade: 30,
    ocupacao: 'Programadora',
    salario: 15000
}

const diretora = {
    nome: 'Mi Kopper',
    idade: 30,
    ocupacao: 'Diretora',
    comissionamento: 5,
    salario: 25000
};

const lista: UsuarioDiretor[] = [diretora, usuario];

informacoes(lista)
