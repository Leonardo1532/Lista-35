// 1. Faça uma função que receba dois parâmetros do tipo número que representa o
// tamanho de uma barra de chocolate n X m, o objetivo dessa função é quebrar a
// barra de chocolate em pedaços 1x1 e retornar o número mínimo de quebras
// necessárias, se algum dos parâmetros de entrada for 0 você deve retornar -1.
// Ex.:
// Entrada: 2,1 Saída: 1
// Entrada: 3,2 Saída: 5
// n = linha e m = coluna

function QuebrarBarra(n: number, m: number) {
    let multiplicacao: number = n * m
    let contabilizar = 0
    for (let index = 1; index < multiplicacao; index++) {
        contabilizar++
    }
    if (n == 0 || m == 0) {
        return -1
    }
    return contabilizar
}

// 2. Faça uma função que receba uma string como parâmetro, essa string pode conter
// letras maiúsculas ou minúsculas. A função deve retornar a string apenas com letras
// minúsculas ou maiúsculas de acordo com a seguinte regra: fazer o mínimo de
// alterações possíveis, se a contagem de minúsculas e maiúsculas for igual deve
// retornar apenas minúsculas.
// Ex.:
// Entrada: “coDigo” Saída: “codigo”

// Entrada: “CODiGo”  Saída: "CODIGO”

// Entrada: “CODigo” Saída: “codigo"

function RetornarString(palavra: string): string {
    let ArrayMaiusculas: string[] = []
    let ArrayMinusculas: string[] = []
    let palavraFinal: string

    if (palavra.match(/[a-z]/g)?.length != null) {
        ArrayMinusculas = palavra.match(/[a-z]/g)
    }
    if (palavra.match(/[A-Z]/g)?.length != null) {
        ArrayMaiusculas = palavra.match(/[A-Z]/g)
    }

    if (ArrayMaiusculas.length > ArrayMinusculas.length) {
        palavraFinal = palavra.toUpperCase()
    } else {
        palavraFinal = palavra.toLowerCase()
    }
    return palavraFinal
}



// 3. Crie uma função que retorne o nome do vencedor em uma luta entre dois lutadores.
// Cada lutador ataca o adversário no seu próprio turno, quem derrubar o outro
// primeiro vence, um jogador é derrubado quando sua vida for <= 0.

// Cada lutador é um objeto de uma classe Lutador, portanto você deve criá-lo com as
// seguintes propriedades: Nome: string, Vida: number, Ataque: number.
// Tanto vida como ataque devem ser valores inteiros maiores que 0 e a função além
// dos dois lutadores deve receber um terceiro parâmetro com o nome de quem vai
// começar atacando.

// DeclararVencedor(new Lutador(“Fulano”, 10, 2), new Lutador (“Ciclano”, 7, 3),
// “Ciclano)

// Cliclano ataca Fulano; Fulano agora tem 7 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 5 de vida.
// Cliclano ataca Fulano; Fulano agora tem 4 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 3 de vida.
// Cliclano ataca Fulano; Fulano agora tem 1 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 1 de vida.
// Cliclano ataca Fulano; Fulano agora tem -2 de vida e caiu. Ciclano ganhou!


class Lutador {
    Nome: string
    Vida: number
    Ataque: number

    constructor(nome: string, vida: number, ataque: number) {
        this.Nome = nome
        this.Vida = vida
        this.Ataque = ataque
    }
}

let Lutador1 = new Lutador("Joelson", 100, 20)
let Lutador2 = new Lutador("Marquinhos", 80, 30)

function RetornarNomeVencedor(lutador1: Lutador, lutador2: Lutador, lutadorQueComeca: string) {

    let lutadorPrimeiro: Lutador
    let lutadorSegundo: Lutador

    if (lutadorQueComeca == lutador1.Nome) {
        lutadorPrimeiro = lutador1
        lutadorSegundo = lutador2
    }else{
        lutadorPrimeiro = lutador2
        lutadorSegundo = lutador1
    } 
    
    let continuar = true
    while (continuar == true) {
        
        lutadorSegundo.Vida = lutadorSegundo.Vida - lutadorPrimeiro.Ataque
        lutadorPrimeiro.Vida = lutadorPrimeiro.Vida - lutadorSegundo.Ataque

        if(lutador1.Vida > 0){
            console.log(lutadorPrimeiro.Nome + " ataca " + lutadorSegundo.Nome + "; " + lutadorSegundo.Nome + " agora tem " + lutadorSegundo.Vida + " de vida")
    
        }else {
            console.log(lutadorPrimeiro.Nome + " ataca " + lutadorSegundo.Nome + "; " + lutadorSegundo.Nome + " agora tem " + lutadorSegundo.Vida + " de vida e caiu. " + lutadorPrimeiro.Nome + " ganhou!")
            continuar = false
            return lutadorPrimeiro.Nome
        }

        if(lutador2.Vida > 0){
            console.log(lutadorSegundo.Nome + " ataca " + lutadorPrimeiro.Nome + "; " + lutadorPrimeiro.Nome + " agora tem " + lutadorPrimeiro.Vida + " de vida")
        }else{
            console.log(lutadorSegundo.Nome + " ataca " + lutadorPrimeiro.Nome + "; " + lutadorPrimeiro.Nome + " agora tem " + lutadorPrimeiro.Vida + " de vida e caiu. " + lutadorSegundo.Nome + " ganhou!")
            continuar = false
            return lutadorSegundo.Nome
        }
    }
}
