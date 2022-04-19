// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === false && valor2 === true){
    return false
  } else if (valor1 === true && valor2 === false){
  return false
  } else if (valor1 === false && valor2 === false){
  return false
  }
return true
}

// Desafio 2
function calcArea(base, height){
  let resultado = (base * height) / 2
  return resultado
  
}

// Desafio 3
function splitSentence(frase) {
  let listaPalavra = []
    let palavra = ''
    for (let i = 0 ; i <= frase.length; i += 1){
        if (frase[i] === ' ' || i === frase.length){
          listaPalavra.push(palavra)
          palavra = ''
        } else {
          palavra += frase[i]
        }
    }
  return listaPalavra
}

// Desafio 4
function concatName(lista) {
  ultimoItem = lista[lista.length - 1]
    primeiroItem = lista[0]
    return (ultimoItem + ", " + primeiroItem )
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + (ties * 1)
  return resultado
}

// Desafio 6
function highestCount() {
  maior = 0
  vezesAparecida = 0
  for (let i = 0; i <= array.length; i += 1){
      if (array[i] > maior){
          maior = array[i]
          vezesAparecida = 1
      } else {
          if (array[i] === maior){
              vezesAparecida += 1
          }
      }
  }
  return vezesAparecida
}

// Desafio 7
function catAndMouse() {
  if (cat1 < cat2){
    return 'cat1'
  } else if (cat1 === cat2){
    return "os gatos trombam e o rato foge"
  } else {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz() {
  let status = []
  for (let num = 0; num < array.length; num += 1){
      if (array[num] % 3 === 0 && array[num] % 5 === 0){
        status.push("fizzBuzz")
      }
      else if (array[num] % 3 === 0){
          status.push("fizz")
      } else if (array[num] % 5 === 0){
        status.push("buzz")  
      } else {
        status.push("bug!")
      }
  }
  return status
}

// Desafio 9
function encode(frase) {
  let aux = ''
  fraseCodificada = ''
  for (let i = 0; i < frase.length; i += 1){
    aux = frase[i]
    switch (aux) {
      case 'a':
        fraseCodificada += '1'
        break
      
      case 'e':
        fraseCodificada += '2'
        break

      case 'i':
        fraseCodificada += '3'
        break

      case 'o':
        fraseCodificada += '4'
        break

      case 'u':
        fraseCodificada += '5'
        break
      
      default :
        fraseCodificada += aux
        
    }

  }
  return fraseCodificada
}
function decode(frase) {
  let aux = ''
  fraseDecodificada = ''
  for (let i = 0; i < frase.length; i += 1){
    aux = frase[i]
    switch (aux) {
      case '1':
        fraseDecodificada += 'a'
        break
      
      case '2':
        fraseDecodificada += 'e'
        break

      case '3':
        fraseDecodificada += 'i'
        break

      case '4':
        fraseDecodificada += 'o'
        break

      case '5':
        fraseDecodificada += 'u'
        break
      
      default :
        fraseDecodificada += aux
        
    }
  }
    return fraseDecodificada
}
// Desafio 10
function techList(lista, nome) {
  let objetos = []
  for (let i = 0; i < lista.length; i += 1){
    let aux = lista[i];
    objetos.push({
        tech: aux, 
        nome: nome
      })
  }
  if (objetos.length > 0){
    return objetos
  } else {
    return "Erro: Lista"
  }
  
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Jadson"))
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};