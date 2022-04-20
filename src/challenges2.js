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
function triangleCheck(lineA, lineB, lineC) {
  
  if (lineB + lineC > lineA && lineA > Math.abs(lineB - lineC) && lineC + lineA > lineB && lineB > Math.abs(lineC - lineA) &&  lineA + lineB > lineC && lineC > Math.abs(lineA - lineB) ){
    return true
  } else {
    return false
  }
}

// Desafio 13
function hydrate(frase) {
  let numeros = frase.match(/\d+/g)
  let aux = 0
  for (let i = 0; i < numeros.length; i += 1){
      aux += parseInt(numeros[i])
  }
  if (aux > 1){
    return aux + " copos de água"
  } else {
    return aux + " copo de água"
  }
  
}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
