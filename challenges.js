function compareTrue(valor1, valor2){
  if ( valor1 === true && valor2 === true){
      return true
  } else {
      return false
  }

}

function calcArea(base, height){
  let resultado = (base * height) / 2
  return resultado

}

function splitSentence(frase){
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

function concatName(lista){
  ultimoItem = lista[lista.length - 1]
  primeiroItem = lista[0]
  return (ultimoItem + ", " + primeiroItem )

}

function footballPoints(wins, ties){
  let resultado = (wins * 3) + (ties * 1)
  return resultado
  
}
