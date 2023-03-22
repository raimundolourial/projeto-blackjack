/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo BlackJAck");

let go = confirm("Deseja Iniciar mais uma rodada?");

while (go) {
  console.log("Iniciando uma nova rodada!");

  let carta1 = comprarCarta();

  let carta2 = comprarCarta();

  let carta1Cpu = comprarCarta();

  let carta2Cpu = comprarCarta();

  while (carta1.valor === 11 && carta2.valor === 11) {
    carta1 = comprarCarta();
  }

  while (carta1Cpu.valor === 11 && carta2Cpu.valor === 11) {
    carta1Cpu = comprarCarta();
  }

  const cartaUser = [carta1, carta2];
  const cartaCpu = [carta1Cpu, carta2Cpu];
  let textoUser = "";
  let textoCpu = "";
  let valorUser = 0;
  let valorCpu = 0;

  cartaUser.forEach(function (carta) {
    textoUser = textoUser + carta.texto + " ";
    valorUser = valorUser + carta.valor;
  });
 
  cartaCpu.forEach(function (carta) {
    textoCpu = textoCpu + carta.texto + " ";
    valorCpu = valorCpu + carta.valor;
  });

  console.log("suas cartas são: " + textoUser);
  console.log("a primeira carta do computador é: " + cartaCpu[0].texto);

  let pergunta = confirm("Deseja comprar mais uma carta?");

  while (pergunta) {
    valorUser = 0;
    textoUser = " ";
    cartaUser.push(comprarCarta());
    cartaUser.forEach(function (carta) {
      textoUser = textoUser + carta.texto + " ";
      valorUser = valorUser + carta.valor;
    });
    console.log("suas cartas são: " + textoUser);

    if (valorUser > 21) {
      pergunta = false;
    } else {
      pergunta = confirm("Deseja comprar mais uma carta?");
    }
  }
  //cartaUser[0].valor
  while (valorUser >= valorCpu) {
    cartaCpu.push(comprarCarta());
    valorCpu = 0;
    textoCpu = " ";

    cartaCpu.forEach(function (carta) {
      textoCpu = textoCpu + carta.texto + " ";
      valorCpu = valorCpu + carta.valor;
    });
  }

  if (valorUser > 21) {
    console.log("o usuário estourou! O COMPUTADOR ganhou");
    console.log(`Usuário:
          ${textoUser}
    `);
  } else if (valorCpu > 21) {
    console.log("O computador Estourou! O USUÁRIO Ganhou");
    console.log(`Usuário:
          ${textoUser}
Computador:
          ${textoCpu}`);
  } else if (valorUser <= 21 && valorUser > valorCpu) {
    console.log("Você Ganhou");
    console.log(`Usuário:
          ${textoUser}
    
Computador:
          ${textoCpu}`);
  } else if (valorCpu <= 21 && valorCpu > valorUser) {
    console.log("Você perdeu");
    console.log(`Usuário:
          ${textoUser}
    
Computador:
          ${textoCpu} `);
  } else if (valorCpu === valorUser) {
    console.log("DEU EMPATE");
    console.log(`Usuário:
          ${textoUser}
Computador:
          ${textoCpu}`);
  }

  go = confirm("Deseja Iniciar mais uma rodada?");
}

console.log("fim do jogo");
