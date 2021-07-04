/* Praticando com Pilhas */

var elementos = [];
var topo = -1;
const MAX = 10;

function push(num) {
  if (topo < MAX) {
    topo = topo + 1;
    elementos[topo] = num;
  } else {
    console.log('A pilha está cheia.');
  }
}

function pop() {
  if (topo != -1) {
    let num = elementos[topo];
    return num;
  } else {
    console.log('A pilha está vazia.');
  }
}

// --------- parte do código que usa a pilha -----//
push(10);
push(20);
push(30);

console.log(elementos); // 10, 20, 30
console.log(pop());
// ------------------------------------------------- //

function estaVazia() {
  return topo == -1;
}

// converte número decimail para binário  //
var numeroDecimal = 10;
var resto;

console.log('Hora de empilhar...');
while (numeroDecimal != 0) {
  resto = parseInt(numeroDecimal) % 2;
  push(resto);
  numeroDecimal = parseInt(numeroDecimal / 2);
}

console.log('Desempilhando tudo!');
while (!estaVazia()) {
  console.log(pop()); // 30, 20, 10
}
