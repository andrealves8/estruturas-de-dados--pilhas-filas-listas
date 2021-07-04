var valores = [5, 8, 10, 22, 45, 38];

function busca(num) {
  for (i = 0; i < 6; i++) {
    if (num == valores[i]) {
      return i;
    }
  }
  return -1;
}

// usando nossa ferramenta de busca //
console.log(busca(10)); // 2
console.log(busca(50)); // -1
// ------------------------------- //

function buscaBin(num)
let inicio, fim;
let meio;
let passos = 0;

inicio = 0;
fim = 9;

while(inicio < fim) {
  meio = parseInt((inicio + fim)) / 2;
  passos = passos + 1;
  if (num == valores[meio]) {
    console.log("achei em " + passos + " passos")
    return meio;
  }
  else {
    if (num < valores[meio]) {
      inicio = meio + 1;
    } else {
      fim = meio -1;

    }
  }
}  
console.log("não achei em " + passos + " passos"); 
return -1;

// usando ferramenta de busca //
console.log(buscaBin(10));
