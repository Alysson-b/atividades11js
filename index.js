/* const ages = [32,33,12,40]

function checkAge(age){
    return age > document.getElementById("ageToCheck").value
}

function myFunction(){
    document.getElementById("demo").innerHTML = ages.filter(checkAge);
} */
/* 

const numeros = [5,10,15,20]

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log("array original:", numeros)
console.log("soma dos numeros:", soma) */

/* 
const frutas = ['maça', 'banana', 'manga']

frutas.forEach(function(fruta, index){
    console.log(`fruta: ${fruta} Índece: ${index}`)
}) */

    /* 
const numeros = [1,2,3,4,5]

numeros.forEach(numeros =>  console.log(numeros * 2)); */

/* const user = [
    {nome: 'alice', idade: 25},
    {nome: 'michel', idade: 19},
    {nome: 'luan', idade: 22}
    
]

user.forEach(usuario => {
    usuario.idade += 1;
})

console.log(user) */


// atividade 1 //

const numeros = [50,45,67,89,10,5]

const numerosMultiplicados =  numeros.map(numero => numero * 2)
 
console.log(numerosMultiplicados)


// atividade  2 //

const numero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const Pares = numero.filter(numero => numero % 2 === 0)

console.log(Pares)


 /*atividade 3 */
const numeross = [1,2,3,4,5,6]

const soma = numeross.reduce((calcular, numero) => calcular + numero, 0);

console.log(soma)


/* atividade 4 */
const lista = [5,10,15,20,25]


const quadrada = lista.map(listas => listas ** 2)

console.log(quadrada)

/* atividade 5 */
const nomes = ['alice', 'alisson', 'michael', 'jefferson']

const novaArray = nomes.map(elemento => elemento.toUpperCase())

console.log(novaArray) 

/* arividade 6 */
const listas = ['banana', 'maça', 'goiaba', 'pera', 'melancia']

const caracteres = listas.filter(listas => listas.length > 5)

console.log(caracteres)