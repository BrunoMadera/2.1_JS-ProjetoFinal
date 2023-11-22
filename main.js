// //icone do Help




// function abrirHelp(){

// import Swal from 'sweetalert2';

//         Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//         footer: '<a href="#">Why do I have this issue?</a>'
//         });
// }

// verificando Status do Usuario

//let elementoSigin 

let statusUser = localStorage.getItem("registro");
if(statusUser){console.log(statusUser)} else {localStorage.setItem("registro", "Sign-In")}

// final do verificando Status do Usuario

// alterando o nome no elemento Sign-In

      
    let elementoSignin = document.getElementById("SigIn");

 
    if(statusUser !== "DESCONHECIDO"  )
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
    localStorage.setItem("registro", "DESCONHECIDO");
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
   verificaMesas();


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
if( document.getElementById("VIP") && document.getElementById("VIP").checked === true) {VIP = "VIP Ativo"} else { VIP = "VIP Inativo"}

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
            if (IsSF1_occupied === "Sofa#1") {
        console.log("entrou:"+true)
        document.getElementById("sofa1").style.backgroundColor = "red";  
        document.getElementById("sofa1").style.color = "white";   
        }

    var IsSF2_occupied = ocupadasLS.find((i) => i === "Sofa#2");
    console.log(IsSF2_occupied);
            if (IsSF2_occupied === "Sofa#2") {
        console.log("entrou:"+true)
        document.getElementById("sofa2").style.backgroundColor = "red";
        document.getElementById("sofa2").style.color = "white";   
    
        }

    var IsSF3_occupied = ocupadasLS.find((i) => i === "Sofa#3");
    console.log(IsSF3_occupied);
            if (IsSF3_occupied === "Sofa#3") {
        console.log("entrou:"+true)
        document.getElementById("sofa3").style.backgroundColor = "red";    
        document.getElementById("sofa3").style.color = "white";   

        }


    var IsM1_occupied = ocupadasLS.find((i) => i === "Mesa#1");
    console.log(IsM1_occupied);
            if (IsM1_occupied === "Mesa#1") {
        console.log("entrou:"+true)
        document.getElementById("mesa1").style.backgroundColor = "red";    
        }


    var IsM2_occupied = ocupadasLS.find((i) => i === "Mesa#2");
    console.log(IsM2_occupied);
                if (IsM2_occupied === "Mesa#2") {
        console.log("entrou:"+true)
        document.getElementById("mesa2").style.backgroundColor = "red";    
        }


    var IsM3_occupied = ocupadasLS.find((i) => i === "Mesa#3");
    console.log(IsM3_occupied);
                if (IsM3_occupied === "Mesa#3") {
        console.log("entrou:"+true)
        document.getElementById("mesa3").style.backgroundColor = "red";    
        }

    var IsSL1_occupied = ocupadasLS.find((i) => i === "Lounge#1");
    console.log(IsSL1_occupied);
            if (IsSL1_occupied === "Lounge#1") {
        console.log("entrou:"+true)
        document.getElementById("lounge1").style.backgroundColor = "red";  
        document.getElementById("lounge1").style.color = "white";   
        }

    var IsSL2_occupied = ocupadasLS.find((i) => i === "Lounge#2");
    console.log(IsSL2_occupied);
            if (IsSL2_occupied === "Lounge#2") {
        console.log("entrou:"+true)
        document.getElementById("lounge2").style.backgroundColor = "red";  
        document.getElementById("lounge2").style.color = "white";   
        }

    var IsM4_occupied = ocupadasLS.find((i) => i === "Mesa#4");
    console.log(IsM4_occupied);
                if (IsM4_occupied === "Mesa#4") {
        console.log("entrou:"+true)
        document.getElementById("mesa4").style.backgroundColor = "red";    
        }

    var IsM5_occupied = ocupadasLS.find((i) => i === "Mesa#5");
    console.log(IsM5_occupied);
                if (IsM5_occupied === "Mesa#5") {
        console.log("entrou:"+true)
        document.getElementById("mesa5").style.backgroundColor = "red";    
        }

    var IsM6_occupied = ocupadasLS.find((i) => i === "Mesa#6");
    console.log(IsM6_occupied);
                if (IsM6_occupied === "Mesa#6") {
        console.log("entrou:"+true)
        document.getElementById("mesa6").style.backgroundColor = "red";    
        }

    var IsM7_occupied = ocupadasLS.find((i) => i === "Mesa#7");
    console.log(IsM7_occupied);
                if (IsM7_occupied === "Mesa#7") {
        console.log("entrou:"+true)
        document.getElementById("mesa7").style.backgroundColor = "red";    
        }

}