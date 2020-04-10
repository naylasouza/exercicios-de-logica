//alert("Bom dia, o sol jaá nasceu la na fazendinha")
//const numero1= parseInt (prompt('digite um numero'));
//const numero2= parseInt (prompt('digite outro numero'));

//alert (`O resultado é ${parseInt(numero1) + parseInt(numero2)}`);

//const nome= prompt('digite seu nome');
//const endereco= prompt('digite seu endereço');
//const telefone= prompt('digite seu telefone');

//alert (`Nome: ${nome} \n\r Endereço: ${endereco} \n\r Telefone: ${telefone}`);

//const nascimento = prompt ('Digite seu ano de nascimento');
//const anoatual = parseInt(2020);

//alert (`sua idade é: ${parseInt(anoatual) - parseInt(nascimento)}`)

//const n1 = prompt('digite o primeiro numero')
//const n2 = prompt('difgite seu segundo numero');
//const n3 = prompt('digite seu segundo numero');

//const media = (parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3;

//alert (`A média é ${media}`);

//alert(parseFloat(media)/3);

//let myvar = 10;
//let soma= 15+8;
//soma += 1;
	//x + y = 24
    //soma + 1 = 24
    //soma *=3;

    //console.log();

//const preco= parseInt(prompt('digite o valor?'));
//const desconto = (preco*0.05);

//alert (`o valor do desconto eé de ${desconto}`);

//const v1 = parseInt(prompt('digite seu primeiro valor'));
//const v2 = parseInt(prompt('digite seu segundo valor'));

//const resultado= v1 / v2;
//const resto= v1%v2;

//alert(`o resultado da divisao é ${resultado} e o resto é ${resto}`);
//3-
//const idade= parseInt(prompt('digite a sua idade'));
//const diasdevida= parseInt(365)

//const resultado= idade*diasdevida;

//alert(`total de dias vividos são: ${resultado}`);

//4-
//const idadeemdias = prompt('digite quantos dias vc ja viveu');
//const anos = parseInt(idadeemdias/365);
//const meses = parseInt((idadeemdias%365)/30);
//const dias = (idadeemdias%365)%30;

//alert(`vc viveu ${anos} anos, ${meses}meses e ${dias}dias`);

//7-

//const duracaodehoras = prompt('duracao em horas');
//const duracaodeminutos= prompt('duracao em minutos');

//let duracaototal= parseInt(duracaodehoras/60);
//duracaototal+=duracaototal%60 + duracaodeminutos;

//const horas = prompt('digite a duracao(horas)');
//const minuto = prompt('digite a duracao (minutos)');
//let segundos = prompt('digite a duracao (segundos)');

//segundos += horas*3600 + minuto*60;
// segundo = segundo + hora*3600+minutos*60;

//alert(`A duracao em segundos é ${segundos}`);

//const resultadosegundos = prompt('digite o resultado em segundos');
//const horas = parseInt(resultadosegundos/3600);
//divide o resto da conta de segundos por 3600(horas), por 60 para descobrir os minutos
//const minutos = parseint((resultadosegundos%3600)/60);
//cons segundos = parseint((resultadosegundos%3600)%60);

//alert(` o resultado de horas é:${horas}:${minutos}: ${segundos}`);

//const distancia = prompt('digite a distancia percorrida');
//const litros = prompt('digite quantos litros');

//const resultado= litros/distancia;

//alert(`a media de combustivel gasto por km é: ${resultado}`);
 
//const valorpago = prompt('digite o valor pago pelo produto');
//const valorOriginal = prompt('digite o valor original');
//let desconto = valorOriginal-valorpago;
//desconto = (desconto*100)/valorOriginal;

//alert(`o seu desconto eé de ${desconto}%`);

//1.** Faça um algoritmo que receba uma letra e determine se é 
//uma vogal ou consoante (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);

//const letra = prompt('Digite uma letra do alfabeto.');

//if(letra === 'a'
//|| letra === 'e' 
//|| letra === 'i' 
//|| letra === 'o' 
//|| letra ==='u'){
//    alert (`a letra ${letra} é um vogal`);
//} else {
//   alert(`A letra ${letra} é uma consoante`);
//}

//2- Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente;

//const diaSemana = parseInt(prompt('Digite o dia da semana [1-7]'));
//switch (diaSemana) {
    //case 1:
        //alert(`Domingo`);
      //  break;
    //case 2:
      //  alert(`Segunda-Feira`);
    //    break;
  //  case 3:
       // alert(`Terça-Feira`);
     //   break;
   // case 4:
     //   alert(`Quarta-Feira`);
   //     break;
 //   case 5:
     //   alert(`Quinta-Feira`);
   //     break;
 //   case 6:
    //    alert(`Sexta-Feira`);
  //      break        
//    case 7:
        //alert(`Sábado`);
      //  break;
    //default:
  //      alert(`Dia de São Nunca`);
//}

//4- Escreva um código que receba dois número e determine qual o maior entre eles
//const num1 = prompt('Digite o primeiro número:');
//const num2 = prompt('Digite o segundo número:');
//if (num1 > num2) {
  //  alert(`${num1} é maior que ${num2}`);
//} else if (num1 === num2) {
  //  alert(`${num1} é igual a ${num2}`);
//} else {
  //  alert(`${num2} é maior que ${num1}`);
//}
//}

//switch(letra){
 //   case 'a':
 //   case 'e':
 //   case 'i':
 //   case 'o':
 //   case 'u':
 //       
 //       alert(`a letra ${letra} é uma vogal`);
 //       break;
 //   default:
 //       alert (`a letra ${letra} é uma consoante`);
//}

//const mes = prompt('digite um numero de 1 a 12');

//switch(mes){
  //  case '1':
 //   alert (`o mes ${mes} é janeiro e tem 30 dias`);
 //   case '2':
 //   alert(`o mes ${mes} é fevereiro e tem 20 dias`);
 //   case '3':
 //   alert(`o mes ${mes} é marcço e tem 45 dias`);
  //  case '4':
 //   alert (`o mes ${mes} é abril e tem 28 dias`);
 //   case '5':
 //   alert (`o mes ${mes} é maio e tem 10 dias`);
 //   case '6':
 //   alert (`o mes ${mes} é junho e tem 70 dias`);
 //   case '7':
 //   alert (`o mes ${mes} é julho e tem 19 dias`);
 //   case '8':
 //   alert (`o mes ${mes} é agosto e tem 30 dias`);
 //   case '9':
 //   alert (`o mes ${mes} é setembro e tem 32 dias`);
 //   case '10':
 //   alert (`o mes ${mes} é outubro e tem 10 dias`);
 //   case '11':
 //   alert (`o mes ${mes} é novembro e tem 30 dias`);
 //   case '12':
 //   alert (`o mes ${mes} é dezembro e tem 10 dias`);
//}

//const numero = parseInt(prompt('Digite um número'));

//if (numero%2 === 0 && numero>0){
  //  alert(`${numero} é par, e ele é positivo`)  
//}else if(numero%2 === 0 && numero<0){
  //  alert(`${numero} é par, e ele é negativo`)
//}else if(numero%2 !== 0 && numero>0){
  //  alert(`${numero} é impar, e ele é positivo`)
//}else if(numero%2 !== 0 && numero<0){
  //  alert(`${numero} é par, e ele é negativo`)
//}else{
  //  alert(`${numero} é um número neutro`)
//}

//7-Escreva um código que receba três ângulos e determine
 //se eles formam um triângulo válido. Em um triângulo válido
 //, a soma dos três ângulos é igual a 180º.

//const primeiro = prompt('Digite um ângulo');
//const segundo = prompt('Digite outro ângulo');
//const terceiro = prompt('Digite outro ângulo');
//const angulo = parseFloat(primeiro) + parseFloat(segundo) + parseFloat(terceiro);

//if(angulo == '180'){
  //alert('A soma dos três ângulo é igual a 180°');
//}else{
  //alert('A soma não forma um ângulo de 180°');
//}

//const primeirovalor = parseFloat (prompt('digite seu primeiro valor'));
//const segundovalor  = parseFloat(prompt(`digite seu segundo valor`));

//if(primeirovalor%segundovalor === 0){
  //  alert (`valores multiplos`)
//}else{
   // alert (`esse naão eé multiplo`)
//}

//const codigo = prompt("digite o codigo do cargo");
//const salario = parseFloat(prompt("digite o salario atual do trabalhador");

//let percentaumento = 0.4;
//switch(codigo){
  //  case '101':
    //   percentaumento = 0.1;
      // break;
   // case '102':
   //    percentaumento = 0.2;
    //   break
   // case '103':
    //   percentaumento = 0.3;
     //  break
//}

//const salarioNovo = salario + salario*percentaumento;
//alert(`salario anterior: ${salario}; Salario novo: ${salarioNovo}; deferença: ${salarioNovo - salario}`);

//for (let i = 1; i < 1000; i++){
  //let soma = 0;
 // if(i%3 === 0 && i%5 === 0) {
   // soma +=i;
 // }
//}
//alert(`A soma dos multiplos de 3 e 5 é ${soma}`);

//const N = parseInt(prompt('digite seu numero'));
//for(let i = 1; i <=10; i++){
  //console.log(N*i);

//}

//Faça um algoritmo que imprima números inteiros de n a 1
 //(Ex.: O usuário digita o número 10. Você deve lista 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);

 //const numero = parseInt(prompt('digite aqui seu numero'));
 //for (let i = numero; i >=1; i--){
 //  console.log (i);
// }

