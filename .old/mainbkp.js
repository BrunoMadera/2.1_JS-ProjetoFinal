
// alterando o nome no elemento SIgIn
   
    let elementoSigin = document.getElementById("SigIn");

    console.log(elementoSigin+statusUser)

    if(statusUser != "DESCONHECIDO"  )
        {

        elementoSigin.textContent  = "Bem-Vindo, "+ statusUser;
        

        }else
        {
        elementoSigin.textContent  = "Sign-In"
        }

// final do alterando o nome no elemento Signin

// verificando Status do Usuario

//let elementoSigin

let statusUser = localStorage.getItem("registro")

if(statusUser){console.log(statusUser)} else {elementoSigin.textContent  = "Sign-In"}

// final do verificando Status do Usuario

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
