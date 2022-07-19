/*Variáveis e Tipos com JavaScript

Atribuição de valores

Case Type                               Example
Original Variable as String             some awesome var
Camel Case                              someAwesomeVar
Snake Case                              some_awesome_var
Kebab Case                              some-awesome-var
Pascal Case                             SomeAwesomeVar
Upper Case Snake Case                   SOME_AWESOME_VAR


Variáveis

let - introduz o conceito de escopo de bloco e let não faz hoisting.
Hoisting - atribuir um valor a uma variável antes de declarar ela.

var a = 1;
var b = 2;

if (a === 1) {
var a = 11; // the scope is global
let b = 22; // the scope is inside the if-block

console.log(a); // 11
console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
*/

//numberOne = 1; //variável de escopo global. Não precisaria declarar essa variável nas linhas abaixo.

//console.log(numberOne + 2);

//var numberOne;


//let numberOne; O uso do let sempre deve ser declarado antes da atribuição de um valor.


//-------------------------------------------------------------------------------------------------

/*var firstName = "João";
var lastName = "Souza";

if (firstName === "João") {
    var firstName = "Pedro";
    let lastName = "Silva";
}

console.log(firstName, lastName); */

/*var firstName = "João";
let lastName = "Souza";

if (firstName === "João") {
    let lastName = "Rodrigues"
    var firstName = "Pedro";
    lastName = "Silva";

    console.log(lastName);
}

console.log(firstName, lastName); */

/*-----------------------------------------------------------------------------------------------------*/

/*
Constantes
-Declarada em SNAKE_UPPER_CASE
-Escopo de bloco
-Não faz hoisting

A declaração da constante deve ser sempre em SNAKE_UPPER_CASE conforme exemplo abaixo:

const DAYS_IN_A_WEEK = 7;
const MY_NAME = "Kieran";

Não podemos nem redeclarar e nem reatribuir o valor de uma constante, conforme abaixo:
const FIRST_NAME = "Andre";
const FIRST_NAME = "Adriano";

*/

/*
var, let e const

                   var         const         let
escopo      global ou local    bloco         bloco
redeclarar         sim         não           não
reatribuir         sim         não           sim
hoisting           sim         não           não

o que é o escopo global? Se eu tenho uma função, a minha variável vai estar disponível tanto dentro dessa função quanto em qualquer bloco dentro dessa função. Diferente do let que quando declarado em um bloco ele vai ficar naquele bloco, ou seja ele não vai poder ser usado no restante da função.

*/
