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

function highestCount(array){
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

function catAndMouse(cat1, cat2){
  if (cat1 < cat2){
      return 'cat1'
  } else if (cat1 === cat2){
      return "os gatos trombam e o rato foge"
  } else {
      return 'cat2'
  }

}

function fizzBuzz(array){
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

console.log(fizzBuzz([2, 15, 7, 9, 45]))