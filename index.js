// 1. Faça uma função que receba dois parâmetros do tipo número que representa o
// tamanho de uma barra de chocolate n X m, o objetivo dessa função é quebrar a
// barra de chocolate em pedaços 1x1 e retornar o número mínimo de quebras
// necessárias, se algum dos parâmetros de entrada for 0 você deve retornar -1.
// Ex.:
// Entrada: 2,1 Saída: 1
// Entrada: 3,2 Saída: 5
// n = linha e m = coluna
function QuebrarBarra(n, m) {
    var multiplicacao = n * m;
    var contabilizar = 0;
    for (var index = 1; index < multiplicacao; index++) {
        contabilizar++;
    }
    if (n == 0 || m == 0) {
        return -1;
    }
    return contabilizar;
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
function RetornarString(palavra) {
    var _a, _b;
    var ArrayMaiusculas = [];
    var ArrayMinusculas = [];
    var palavraFinal;
    if (((_a = palavra.match(/[a-z]/g)) === null || _a === void 0 ? void 0 : _a.length) != null) {
        ArrayMinusculas = palavra.match(/[a-z]/g);
    }
    if (((_b = palavra.match(/[A-Z]/g)) === null || _b === void 0 ? void 0 : _b.length) != null) {
        ArrayMaiusculas = palavra.match(/[A-Z]/g);
    }
    if (ArrayMaiusculas.length > ArrayMinusculas.length) {
        palavraFinal = palavra.toUpperCase();
    }
    else {
        palavraFinal = palavra.toLowerCase();
    }
    return palavraFinal;
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
var Lutador = /** @class */ (function () {
    function Lutador(nome, vida, ataque) {
        this.Nome = nome;
        this.Vida = vida;
        this.Ataque = ataque;
    }
    return Lutador;
}());
var Lutador1 = new Lutador("Joelson", 100, 20);
var Lutador2 = new Lutador("Marquinhos", 80, 30);
function RetornarNomeVencedor(lutador1, lutador2, lutadorQueComeca) {
    var lutadorPrimeiro;
    var lutadorSegundo;
    if (lutadorQueComeca == lutador1.Nome) {
        lutadorPrimeiro = lutador1;
        lutadorSegundo = lutador2;
    }
    else {
        lutadorPrimeiro = lutador2;
        lutadorSegundo = lutador1;
    }
    console.log(lutadorPrimeiro);
    console.log(lutadorSegundo);
    var continuar = true;
    while (continuar == true) {
        lutadorSegundo.Vida = lutadorSegundo.Vida - lutadorPrimeiro.Ataque;
        lutadorPrimeiro.Vida = lutadorPrimeiro.Vida - lutadorSegundo.Ataque;
        if (lutador1.Vida > 0) {
            console.log(lutadorPrimeiro.Nome + " ataca " + lutadorSegundo.Nome + "; " + lutadorSegundo.Nome + " agora tem " + lutadorSegundo.Vida + " de vida");
        }
        else {
            console.log(lutadorPrimeiro.Nome + " ataca " + lutadorSegundo.Nome + "; " + lutadorSegundo.Nome + " agora tem " + lutadorSegundo.Vida + " de vida e caiu. " + lutadorPrimeiro.Nome + " ganhou!");
            continuar = false;
            return lutadorPrimeiro.Nome;
        }
        if (lutador2.Vida > 0) {
            console.log(lutadorSegundo.Nome + " ataca " + lutadorPrimeiro.Nome + "; " + lutadorPrimeiro.Nome + " agora tem " + lutadorPrimeiro.Vida + " de vida");
        }
        else {
            console.log(lutadorSegundo.Nome + " ataca " + lutadorPrimeiro.Nome + "; " + lutadorPrimeiro.Nome + " agora tem " + lutadorPrimeiro.Vida + " de vida e caiu. " + lutadorSegundo.Nome + " ganhou!");
            continuar = false;
            return lutadorSegundo.Nome;
        }
    }
}
// Cliclano ataca Fulano; Fulano agora tem 7 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 5 de vida.
// Cliclano ataca Fulano; Fulano agora tem 4 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 3 de vida.
// Cliclano ataca Fulano; Fulano agora tem 1 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 1 de vida.
// Cliclano ataca Fulano; Fulano agora tem -2 de vida e caiu. Ciclano ganhou!
