let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res') 
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else {
        false
    }
}

function adicionar(){
    num.innerHTML = ''
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }else{
        alert(`O Valor ${num.value} é invalido ou já encontrado na lista`)
    }
    num.value = ''
    num.focus()
  
    //res.innerHTML = valores
}

function finalizar(){
    res.innerHTML += `<p>Ao todo, temos <strong>${valores.length}</strong> números cadastrados</p>`

    let maior = valores[0]
    for(let i in valores){
       if(valores[i]>maior){
        maior = valores[i]
       }
    }
    res.innerHTML += `<p>O maior valor encontrado foi <strong>${maior}</strong></p>`

    let menor = valores[0]
    for(let i in valores){  
    if(valores[i]<menor){
        menor = valores[i]
        }
    }
    res.innerHTML += `<p>O menor valor encontrado foi <strong>${menor}</strong></p>`

    let soma = 0
    for(let i in valores){
        soma = soma  + valores[i]
    }
    res.innerHTML += `<p> Somando todos os valores, temos <strong> ${soma}</strong></p>`

    let divisao = soma / valores.length
    
    res.innerHTML += `<p>A média dos valores digitados é <strong>${divisao}</strong></p>` 


}

