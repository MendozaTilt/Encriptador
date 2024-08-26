const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");


function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    if(textoEncriptado== "" || textoEncriptado !== textoEncriptado.toLowerCase() || /[áéíóúÁÉÍÓÚ]/.test(textoEncriptado)||/[^a-z0-9\s]/.test(textoEncriptado)){
        mostrarAlerta();

    }else{
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";  
    }
}

function encriptar(stringEncripada){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncripada = stringEncripada.toLowerCase();

    for(let i = 0; i <matrizcodigo.length; i++){  
        if(stringEncripada.includes(matrizcodigo[i][0])){
            stringEncripada = stringEncripada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])

        }

      }
      return stringEncripada
}


function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    if(textoEncriptado== "" || textoEncriptado !== textoEncriptado.toLowerCase() || /[áéíóúÁÉÍÓÚ]/.test(textoEncriptado)||/[^a-z0-9\s]/.test(textoEncriptado)){
        mostrarAlerta();

    }else{
        mensaje.value = textoEncriptado;
        textArea.value = "";
        
    }

function desencriptar(stringDesencriptar){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i <matrizcodigo.length; i++){  
        if(stringDesencriptar.includes(matrizcodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])

        }

      }
      return stringDesencriptar;
    }
}


function botoncopiar(){
    let resultadoEncriptador = mensaje.value;
    let copiarresultado = document.querySelector(".boton_copiar");
    navigator.clipboard.writeText(resultadoEncriptador);
    setTimeout(() => {
        let boton = document.querySelector(".boton_copiar")
        boton.classList.add("letra_dif")
       copiarresultado.textContent ="copiado" 
    }, "0");
    
    setTimeout(() => {
        let boton = document.querySelector(".boton_copiar")
        boton.classList.remove("letra_dif")
        copiarresultado.textContent   = "copiar"
      },  "500");
}

function mostrarAlerta() {
    Swal.fire({
        title: 'Error',
        text: 'Ingrese texto con minúsculas y sin acentos',
        icon: 'warning',
        confirmButtonText: 'Entendido',
         confirmButtonColor: '#2E073F',
         
    });
}