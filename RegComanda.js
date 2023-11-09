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
//let comandas = [];

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

           
            // document.getElementById('listaComandas').appendChild(comandaDiv)

            document.getElementById('boxId').appendChild(idDiv)
            document.getElementById('boxNome').appendChild(nomeDiv)
            document.getElementById('boxReserva').appendChild(reservaDiv)
            document.getElementById('boxLugar').appendChild(lugarDiv)
            document.getElementById('boxTelefone').appendChild(telefoneDiv)
            document.getElementById('boxVIP').appendChild(VIPDiv)
            document.getElementById('boxOBS').appendChild(obsDiv)

        })}
    
    // }else {

    //         const ultimaComanda = comandas[comandas.lenght - 1];

    //         const comandaDiv = document.createElement('div')
    //         comandaDiv.textContent = `Comanda: ${item.comanda}`
    
    //         const nomeDiv = document.createElement('div')
    //         nomeDiv.textContent = `Nome: ${item.nome}`
    
    //         const reservaDiv = document.createElement('div')
    //         reservaDiv.innerText = `Reserva: ${item.reserva}`
            
    //         const lugarDiv = document.createElement('div')
    //         lugarDiv.innerText = `Lugar: ${item.lugar}`

    //         const telefoneDiv = document.createElement('div')
    //         telefoneDiv.innerText = `Telefone: ${item.telefone}`

    //         const VIPDiv = document.createElement('div')
    //         VIPDiv.innerText = `Vip: ${item.vip}`

    //         const ObsDiv = document.createElement('div')
    //         ObsDiv.innerText = `Obs: ${item.obs}`
            
    //         comandaDiv.comandaDiv
    //         comandaDiv.appendChild(nomeDiv)
    //         comandaDiv.appendChild(reservaDiv)
    //         comandaDiv.appendChild(lugarDiv)
    //         comandaDiv.appendChild(telefoneDiv)
    //         comandaDiv.appendChild(VIPDiv)
    //         comandaDiv.appendChild(ObsDiv)


    // } 
}


// salva comandas


btnAdicionarComanda.addEventListener('click', (event) => {
    event.preventDefault()

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
