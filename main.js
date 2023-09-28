


function registraComanda()
{
    
    //registrando as variaveis digitadas

        let nComanda = parseInt(document.getElementById("nComanda").value)
        let Obs = (document.getElementById("Obs").value)
        let reserva = parseInt(document.getElementById("reserva").value)
        let lugar = (document.getElementById("lugar").value)
        let nome = (document.getElementById(("nome").value))
        let tel = parseInt(document.getElementById("tel").value)
        let dtNasc = parseInt(document.getElementById("dtNasc").value)
        let generoF = Boolean(document.getElementById("generoF")) // tem erro
        let generoM = Boolean(document.getElementById("generoM")) // tem erro
        let generoO = Boolean(document.getElementById("generoO")) // tem erro
        let VIP = Boolean(document.getElementById("VIP"))
        
        console.log(nComanda, Obs, reserva, lugar, nome, tel, dtNasc, generoF,generoM, generoO, VIP)
   
    adicionaLinha('tabelaComandas')

}  

//Funcao adiciona uma nova linha na tabela

function adicionaLinha(idTab) {

    var tabela = document.getElementById(idTab);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2); 
    var celula4 = linha.insertCell(3); 
    var celula5 = linha.insertCell(4); 
    var celula6 = linha.insertCell(5); 
    var celula7 = linha.insertCell(6);
    var celula8 = linha.insertCell(7);  
    celula1.innerHTML = nComanda.value; 
    celula2.innerHTML =  nome.value.toUpperCase(); 
    celula3.innerHTML =  reserva.value.toUpperCase();
    celula4.innerHTML =  lugar.value.toUpperCase();
    celula5.innerHTML =  tel.value.toUpperCase(); 
    celula6.innerHTML =  VIP; //tem erro aqui ainda
    celula7.innerHTML =  Obs.value.toUpperCase();

    celula8.innerHTML =  "<button  onclick='removeLinha(this)'> Ⓧ </button>";
}



 // funcao remove uma linha da tabela
 function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('tabelaComandas').deleteRow(i);
  }   






/// ========== rumbling=========


// function incluir(){

//     let nota = document.getElementById("nota")
//     let peso = document.getElementById("peso")

//     let ListaNotas = JSON.parse(localStorage.getItem('notas')) || []
//     let ListaPesos = JSON.parse(localStorage.getItem('pesos')) || []

//     ListaNotas.push(parseInt(nota.value))
//     ListaPesos.push(parseInt(peso.value))

//     localStorage.setItem('notas', JSON.stringify(ListaNotas))
//     localStorage.setItem('pesos', JSON.stringify(ListaPesos))


// }



// function calcular(){

//     let notas_como_numero = JSON.parse(localStorage.getItem("notas"))
//     let pesos_como_numero = JSON.parse(localStorage.getItem("pesos"))

//     console.log(notas_como_numero)


//     let media = 0
//     let somaPesos = 0
    
      
//     //console.log(notas_como_numero.length)


//     for (let i = 0; i < notas_como_numero.length; i++) {
//         media = media + notas_como_numero[i]*pesos_como_numero[i]
//         somaPesos = somaPesos + pesos_como_numero[i]
//     }

//     media = media / somaPesos

//     console.log("Média é" + media)
//     console.log("somapesos é" + somaPesos)


// let elementocomResultado = document.getElementById("mostrarresultado")
// elementocomResultado.innerText  = media



// }

// function limpar(){

//     localStorage.clear("notas")
//     localStorage.clear("pesos")

// }