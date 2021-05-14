const btnCalc = document.querySelector('.calc')
btnCalc.addEventListener('click', calcular)
const btnClear = document.querySelector('.clear')
btnClear.addEventListener('click', limpar)

const resultado = document.querySelector('.resultado')



function calcular(){

     let salario = Number(document.querySelector('#salario').value)
     let horasProjeto = Number(document.querySelector('#horasProjeto').value)
     let custosFixos =  Number(document.querySelector('#custosFixos').value)
     let lucro = Number(document.querySelector('#lucro').value)
  
     
     let custoPorHora = (salario / 22) / 8   
     let custoBase = custoPorHora * horasProjeto
     let porcento = (custoBase + custosFixos) / 100 * lucro
     let precoFinal = (custoBase + custosFixos + porcento).toFixed(2)
     
    
     resultado.innerHTML = `O preço final do seu projeto é <b>R$${precoFinal.replace('.', ',')}</b>! <br> O valor da sua hora trabalhada é de <b>R$${custoPorHora.toFixed(2).replace('.', ',')}</b> <br>*para o cálculo foi utilizada uma carga horária diária de 8h e 22 dias úteis no mês.`
}

function limpar(){


     let salario = document.querySelector('#salario')
     let horasProjeto = document.querySelector('#horasProjeto')
     let custosFixos =  document.querySelector('#custosFixos')
     let lucro = document.querySelector('#lucro')

     salario.value = ''
     horasProjeto.value = ''
     custosFixos.value = ''
     lucro.value = ''

     resultado.innerHTML = 'Resultado'
}