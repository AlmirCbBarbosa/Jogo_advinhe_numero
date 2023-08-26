import {numeroAleatorio} from './js/numeroAleatorio.js';

let numeroSecreto;
let valorMinimo = 0;
let valorMaximo = 100;
let palpiteUsuario;
let numeroTentativa = 10;

alert("Bem vindo ao jogo: Advinhe o Número Secreto");



numeroSecreto = numeroAleatorio(valorMinimo, valorMaximo); // cria um valor aleatório e amarzena na variavel

do{

    palpiteUsuario = prompt(`Tente adivinhar, informando um valor entre ${valorMinimo} e ${valorMaximo}, você possui ${numeroTentativa}`); // armazena o numero do usuário na variavel

    if(palpiteUsuario == numeroSecreto){
        alert(`Parabéns você acertou o número secreto!`);
        
    } else if( palpiteUsuario < numeroSecreto){
        alert(`O número ${palpiteUsuario} é menor que o número secreto.`);
        
    } else if(palpiteUsuario > numeroSecreto){
        alert(`O número ${palpiteUsuario} é maior que o número secreto.`);
        
    }

    --numeroTentativa;

} while( palpiteUsuario != numeroSecreto && numeroTentativa != 0);

if(numeroTentativa == 0) alert(`Suas tentativas se esgotaram. O número secreto é ${numeroSecreto}!`);