// verificando Status do Usuario

//let elementoSigin

let statusUser = localStorage.getItem("registro");

if(statusUser){console.log(statusUser)} else {elementoSigin.textContent  = "Sign-In"}

// final do verificando Status do Usuario

// alterando o nome no elemento Sign-In
   
    let elementoSignin = document.getElementById("SigIn");

 
    if(statusUser != "DESCONHECIDO"  )
        {

        elementoSignin.textContent  = "Bem-Vindo, "+ statusUser;
        

        }else
        {
        elementoSignin.textContent  = "Sign-In"
        }

// final do alterando o nome no elemento Signin


// Deslogando com botao

function deslogar()
{
    localStorage.removeItem('registro');
        swal({
        title: "Atenção!",
        text: "Você foi desconectado",
        icon: "success",
        button: false,
        });

setTimeout(function() {
 irParaHome()  // Código a ser executado após 1 segundo
    }, 1500);
}


function irPararegistraComandas(){

   window.location.href = "RegComanda.html"

}

function irParaHome(){

   window.location.href = "Index.html"

}

function irParaMesas(){

   window.location.href = "MesasLayout.html"

}

function irParaSenha(){

let User = (document.getElementById("usuario").value);
let PSW = (document.getElementById("senha").value);

console.log(User + PSW)


if(User.toUpperCase()=="BRUNO" && PSW == "123")
{
    
    swal({
        title: "Atenção!!",
        text: "Usuário Registrado. Indo a HOME...",
        icon: "success",
        button: false,
            });
    
setTimeout(function() {
 irParaHome()  // Código a ser executado após 1 segundo
    }, 1500);


    let Registrado = User.toUpperCase();
    Registrado = localStorage.setItem("registro", Registrado);
    
       


} else
{
    swal({
        title: "Atenção!!",
        text: "Usuário desconhecido. Indo a HOME...",
        icon: "warning",
         button: false,
            });
            
     let Registrado = "DESCONHECIDO";
    Registrado = localStorage.setItem("registro", Registrado);

   setTimeout(function() {
 irParaHome()  // Código a ser executado após 1 segundo
    }, 1500);

}
   
}
// registrando as comandas ///////////////

//elementos

let comandas = [];
const nComanda = document.getElementById("nComanda");
const id = document.getElementById("nComanda");
const nome = document.getElementById("nome")
const reserva = document.getElementById("reserva")
const lugar = document.getElementById("lugar")
const tel = document.getElementById("tel")
const obs = document.getElementById("Obs")

let VIP = "";
if( document.getElementById("VIP").checked === true) {VIP = "VIP Ativo"} else { VIP = "VIP Inativo"}

// array de comandas

let comandasLS = JSON.parse(localStorage.getItem('comandas'))

if (Array.isArray(comandasLS) && comandasLS.length > 0) {
    comandas.push(...comandasLS)
    mostraComandas()
}

function mostraComandas(mostraTodos = true) {
    if (mostraTodos) {
        comandas.map((item) => {
            
            const comandaDiv = document.createElement('div')
            comandaDiv.textContent = `${item.nComanda}`

            const idDiv = document.createElement('div')
            idDiv.textContent = `${item.id}`
    
            const nomeDiv = document.createElement('div')
            nomeDiv.textContent = `${item.nome}`
    
            const reservaDiv = document.createElement('div')
            reservaDiv.innerText = `${item.reserva}`
            
            const lugarDiv = document.createElement('div')
            lugarDiv.innerText = `${item.lugar}`

            const telefoneDiv = document.createElement('div')
            telefoneDiv.innerText = `${item.telefone}`

            const VIPDiv = document.createElement('div')
            VIPDiv.innerText = `${item.VIP}`

            const obsDiv = document.createElement('div')
            obsDiv.innerText = `${item.obs}`
            
            comandaDiv.comandaDiv
            comandaDiv.appendChild(idDiv)
            comandaDiv.appendChild(nomeDiv)
            comandaDiv.appendChild(reservaDiv)
            comandaDiv.appendChild(lugarDiv)
            comandaDiv.appendChild(telefoneDiv)
            comandaDiv.appendChild(VIPDiv)
            comandaDiv.appendChild(obsDiv)

           
            document.getElementById('boxId').appendChild(idDiv)
            document.getElementById('boxNome').appendChild(nomeDiv)
            document.getElementById('boxReserva').appendChild(reservaDiv)
            document.getElementById('boxLugar').appendChild(lugarDiv)
            document.getElementById('boxTelefone').appendChild(telefoneDiv)
            document.getElementById('boxVIP').appendChild(VIPDiv)
            document.getElementById('boxOBS').appendChild(obsDiv)

        })}
    
}

// const nComanda = document.getElementById("nComanda");
// const id = document.getElementById("nComanda");
// const nome = document.getElementById("nome")
// const reserva = document.getElementById("reserva")
// const lugar = document.getElementById("lugar")
// const tel = document.getElementById("tel")
// const obs = document.getElementById("Obs")

// salva comandas


// console.log("id" + (id.value==""));
// console.log("nome" + (nome.value==""));
// console.log("res" + (reserva.value==""));
// console.log("lug" + (lugar.value==""));
// console.log("tel" + (tel.value==""));

const isEmpty = (id.value =="" && nome.value =="" && tel.value =="");

console.log(isEmpty)
console.log(!isEmpty)

btnAdicionarComanda.addEventListener('click', () => {

         
    //   if(isEmpty){

    //       swal({
    //         title: "Atenção!!",
    //         text: "Existem campos em branco. \n Por favor revise antes de continuar...",
    //         icon: "warning",
    //         dangerMode: true,
    //         buttons: true,
    //             });

    // }else {



    if( document.getElementById("VIP").checked === true) {VIP = "VIP Ativo"} else { VIP = "VIP Inativo"}
    
    comandas.push({
        nComanda: nComanda.value,
        id: id.value,
        nome: nome.value,
        reserva: reserva.value,
        lugar: lugar.value,
        telefone: tel.value,
        VIP : VIP,
        obs : obs.value,
    })

    localStorage.setItem('comandas', JSON.stringify(comandas))

    swal({
            title: "Sucesso!!",
            text: "Nova Entrada registrada",
            icon: "success",
            button: false,
            });
        
    setTimeout(function() {
            location.reload();  
            }, 750);
//} // if do campo em branco
}
)



    //limpa todas as comandas

btnLimpaComanda.addEventListener('click', (event) => {
    event.preventDefault()
    
    localStorage.removeItem('comandas')

    swal({
            title: "Atenção!!",
            text: "Entradas apagadas!",
            icon: "warning",
            button: false,
                });
        
    setTimeout(function() {
            location.reload();  
            }, 750);

    }
    )
