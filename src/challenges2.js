// Desafio 11
function generatePhoneNumber(arrayNumero) {
  let numeroFormatado = ''
  let cont = 0
  if (arrayNumero.length === 11){
    for (let i = 0 ; i < arrayNumero.length; i += 1){
      for (let ix = 0 ; ix < arrayNumero.length; ix += 1){
        if ( arrayNumero[ix] === arrayNumero[i]){
          cont += 1 
        }
      } if (cont < 3){
        cont = 0
      }
      if (i === 0){
        numeroFormatado += "("
        numeroFormatado += arrayNumero[i]
      } else if (i === 1){
        numeroFormatado += arrayNumero[i]
        numeroFormatado += ") "
      } else if (i === 6){
        numeroFormatado += arrayNumero[i]
        numeroFormatado += "-"
        
      } else if(arrayNumero[i] < 0 || arrayNumero[i] > 9 || cont >= 3){
        numeroFormatado = "não é possível gerar um número de telefone com esses valores"
        break
      } else {
        numeroFormatado += arrayNumero[i]
      } 
    } 
  } else {
    numeroFormatado = "Array com tamanho incorreto." 
  }

  return numeroFormatado
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
