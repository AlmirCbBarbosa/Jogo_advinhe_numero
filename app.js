import {numeroAleatorio} from './js/numeroAleatorio.js';

let numeroSecreto;
let valorMinimo = 0;
let valorMaximo = 100;
let palpiteUsuario;

alert("Bem vindo ao jogo: Advinhe o Número Secreto");



numeroSecreto = numeroAleatorio(valorMinimo, valorMaximo); // cria um valor aleatório e amarzena na variavel

console.log(`O número secreto é ${numeroSecreto}`);// pode apagar

palpiteUsuario = prompt(`Tente adivinhar, informando um valor entre ${valorMinimo} e ${valorMaximo}`); // armazena o numero do usuário na variavel

console.log(`O palpite do usuario é ${palpiteUsuario}`)// pode apagar

