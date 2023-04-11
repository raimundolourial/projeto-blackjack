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
      const cartaUser = [comprarCarta(), comprarCarta()];
      const cartaCpu = [comprarCarta(), comprarCarta()];
      let textoUser = "";
      let textoCpu = "";
      let valorUser = 0;
      let valorCpu = 0;
    
      cartaUser.forEach(function (carta) {
        textoUser = textoUser + carta.texto + " ";
        valorUser = valorUser + carta.valor;
      });
    
      /*for(let i=0;i <cartaUser.length; i = i + 1){
          //let texto = cartaUser[i].texto
          textoUser = textoUser + cartaUser[i].texto + " "
          //console.log("suas cartas são: " +texto)
          valorUser= valorUser + cartaUser[i].valor;
          
        }*/
    
      cartaCpu.forEach(function (carta) {
        textoCpu = textoCpu + carta.texto + " ";
        valorCpu = valorCpu + carta.valor;
      });
    
      /*for(let i=0;i<cartaCpu.length;i++){
         // console.log("as cartas do computador são: " + cartaCpu[i].texto)
          valorCpu= valorCpu+cartaCpu[i].valor;
          textoCpu = textoCpu + cartaCpu[i].texto + " "
       }*/
    
      console.log("suas cartas são: " + textoUser);
      console.log("as cartas do computador são: " + textoCpu);
    
      console.log(valorUser);
      console.log(valorCpu);
    
      if (valorUser > 21) {
        console.log("Você perdeu");
      } else if (valorCpu > 21) {
        console.log("Você Ganhou");
      } else if (valorUser > valorCpu) {
        console.log("Você Ganhou");
      } else if (valorCpu > valorUser) {
        console.log("Você perdeu");
      } else {
        console.log("deu empate");
      }
    
      go = confirm("Deseja Iniciar mais uma rodada?");
    }
    
    console.log("fim do jogo");
    