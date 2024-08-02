// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

export function calcularAprovacao(numero1: number, numero2: number) {
    let media = (numero1 + numero2) / 2
    let aprovacao = media >= 6
    return { media, aprovacao }
}

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

export type Notas = {
    nota: number;
    peso: number;
};

export function calcularNotas(lista: Notas[]): number {
    let somaNotas = 0;
    let somaPesos = 0;

    for (let i = 0; i < lista.length; i++) {
        // Multiplicar a nota pelo peso e adicionar à soma das notas ponderadas
        somaNotas += lista[i].nota * lista[i].peso;

        // Adicionar o peso à soma dos pesos
        somaPesos += lista[i].peso;
    }

    return somaNotas / somaPesos;
}

//   3. Crie um programa que simule uma carteira de dinheiro. Este
//   programa vai precisar ter uma carteira contendo saldo, transações
//   de entrada e saídas. Ou seja, será um objeto com estas
//   propriedades. Depois crie uma função para lançar uma entrada e
//   uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
//   um erro ou avisar.

export type Carteira = {
    saldo: number;
    transacoes: Transacao[];
}

type Transacao = {
    tipo: 'entrada' | 'saida';
    valor: number;
}

// ENTRADA
export function entrada(carteira: Carteira, valor: number): void {
    const novaTransacao: Transacao = {
        tipo: 'entrada',
        valor: valor
    };

    carteira.transacoes.push(novaTransacao);
    carteira.saldo += valor;
}

// SAÍDA
export function saida(carteira: Carteira, valor: number): void {
    if (carteira.saldo < valor) {
        console.log('Saldo insuficiente');
        return; // Impede a continuação se o saldo for insuficiente
    }

    const novaTransacao: Transacao = {
        tipo: 'saida',
        valor: valor
    };

    carteira.transacoes.push(novaTransacao);
    carteira.saldo -= valor;
}

// // 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

type Produto = {
    nome: string,
    preco: number
}

const listaProdutos: Produto[] = []

// Adicionar
export function adicionar(produto: Produto): void {
    listaProdutos.push(produto)
}

// Ver lista completa
export function todosProdutos(): Produto[] {
    return listaProdutos
}

// Deletar item
export function deletar(nome: string): void {

    //    Encontrar índice do produto para deletar
    const index = listaProdutos.findIndex((p) => p.nome === nome)

    // Se não retornar -1, ou seja, encontrou o nome, o splice remove 1 elemento a partir do íncice do index
    if (index !== -1) {
        listaProdutos.splice(index, 1)
    }

}

// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. 

// Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

export type Usuarios = {
    nome: string,
    idade: number,
    ocupacao: string,
    salario?: number
}

export function infoUsuarios(usuarios: Usuarios): string {
    // Ternário = condição ? expressão_se_verdadeira : expressão_se_falsa;
    const infoSalario = usuarios.salario ? `R$ ${usuarios.salario}` : 'N/A'

    return `Nome: ${usuarios.nome}, Idade: ${usuarios.idade}, Ocupação: ${usuarios.ocupacao}, Salário: ${infoSalario}`
}

// 6. Usando o contexto do exercício 5, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

export type Diretor = Usuarios & {
    comissionamento: number
}

export function infoDiretor(diretor: Diretor): string {
    const infoSalarioDiretor = diretor.salario ? `R$ ${diretor.salario}` : 'N/A'

    return `Diretora: ${diretor.nome}, Idade: ${diretor.idade}, Comissão nível: ${diretor.comissionamento}, Salário: ${infoSalarioDiretor}`
}

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:

// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

export type UsuarioDiretor = Usuarios | Diretor

export function informacoes(lista: UsuarioDiretor[]): void {

    lista.forEach(item => {

        if ('comissionamento' in item) {
            console.log(infoDiretor(item));
        } else {
            console.log(infoUsuarios(item));
        }

    })
}