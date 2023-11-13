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

let comandasLS = JSON.parse(localStorage.getItem('comandas'));

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


btnAdicionarComanda.addEventListener('click', () => {

 
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

//registrando mesas ocupadas em outro Array

    let ocupadasLS = JSON.parse(localStorage.getItem('ocupadas')) || []

    ocupadasLS.push((lugar.value))

    localStorage.setItem('ocupadas', JSON.stringify(ocupadasLS))


}
)

    //limpa todas as comandas

btnLimpaComanda.addEventListener('click', (event) => {
    event.preventDefault()
    
    localStorage.removeItem('comandas')
       localStorage.removeItem('ocupadas')


    swal({
            title: "Atenção!!",
            text: "Todas Comandas apagadas!",
            icon: "warning",
            button: false,
                });
        
    setTimeout(function() {
            location.reload();  
            }, 750);

    }
    )

btnLimpaUltima.addEventListener('click', () => {

    comandas.pop({
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
            text: "Ultima Comanda apagada",
            icon: "success",
            button: false,
            });
        
    setTimeout(function() {
            location.reload();  
            }, 750);
//} // if do campo em branco

}
)

function verificaMesas(){

    let ocupadasLS = JSON.parse(localStorage.getItem('ocupadas')) || []

    var IsSF1_occupied = ocupadasLS.find((i) => i === "Sofa#1");
    console.log(IsSF1_occupied);

    var IsSF2_occupied = ocupadasLS.find((i) => i === "Sofa#2");
    console.log(IsSF2_occupied);

    var IsSF3_occupied = ocupadasLS.find((i) => i === "Sofa#3");
    console.log(IsSF3_occupied);

    var IsM1_occupied = ocupadasLS.find((i) => i === "Mesa#1");
    console.log(IsM1_occupied);

    var IsM2_occupied = ocupadasLS.find((i) => i === "Mesa#2");
    console.log(IsM2_occupied);

    var IsM3_occupied = ocupadasLS.find((i) => i === "Mesa#3");
    console.log(IsM3_occupied);

}

verificaMesas();
