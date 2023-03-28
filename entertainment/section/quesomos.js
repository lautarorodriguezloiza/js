/* Informacion del Usuario*/

let informacionUsuario = document.getElementById("informacion");
informacionUsuario.addEventListener("submit",agregarInformacion)

function agregarInformacion(e){
        e.preventDefault()
    let nombre = e.target[0].value
    let edad = e.target[1].value
    let nombreUsurario = e.target[2].value
    let nombreEdad = document.createElement ("div")
    nombreEdad.innerHTML= `Usted se registro con el nombre de:  ${nombre} Usuario: ${nombreUsurario} Su edad es: ${edad} ` 
    document.body.appendChild(nombreEdad)

    /*local y json*/
let nombreGuardado = JSON.parse(localStorage.getItem("nombreEdad"))
if(nombreGuardado){
    nombreGuardado.innerHTML = "Su informacion:"
}else{
localStorage.setItem("nombreEdad",JSON.stringify(nombreEdad))
}

/*class para cambiar un poco el diseño al texto*/

informacion.className = "infouser"
nombreEdad.classList.add("informacion-usuario")
}

