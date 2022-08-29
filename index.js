const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e =>{
    textarea.style.heigth = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
})

document.getElementById("bEncriptar").addEventListener("click", function(){
    let textSinEncriptar = (document.getElementById("texto").value).toLowerCase();
    if (textSinEncriptar == ""){
        alert("No se encuentra mensaje a encriptar");
    }
    console.log(textSinEncriptar);
    
    let textAreaText = document.querySelector(".textFound");
    textAreaText.style.display = "none";
    let textAreaImg = document.querySelector(".textImg");
    textAreaImg.style.background = "none";


    let textEncriptado = ""

    for(let i = 0; i < (textSinEncriptar.length); i++){
        switch(textSinEncriptar[i]){
            case "a":
                textEncriptado += "ai";
                break;
            case "e":
                textEncriptado += "enter";
                break;
            case "i":
                textEncriptado += "imes";
                break;
            case "o":
                textEncriptado += "ober";
                break;
            case "u":
                textEncriptado += "ufat";
                break;
            case " ":
                textEncriptado += " ";
                break;
            default:
                textEncriptado += textSinEncriptar[i];
        }
    }

    console.log(textEncriptado);
    let out = document.getElementById("out");
    out.innerText = textEncriptado;
    document.getElementById("texto").value="";
    
});

document.getElementById("bDesencrpitar").addEventListener("click", function(){
    
    let textEncriptado = (document.getElementById("texto").value).toLowerCase();
    if (textEncriptado == ""){
        alert("No se encuentra mensaje a desencriptar");
        return
    }
    console.log(textEncriptado);
    let textAreaText = document.querySelector(".textFound");
    textAreaText.style.display = "none";
    let textAreaImg = document.querySelector(".textImg");
    textAreaImg.style.background = "none";
    
    let textDesencriptado = textEncriptado;

    textDesencriptado = textDesencriptado.replaceAll("ai", "a");
    textDesencriptado = textDesencriptado.replaceAll("enter", "e");
    textDesencriptado = textDesencriptado.replaceAll("imes", "i");
    textDesencriptado = textDesencriptado.replaceAll("ober", "o");
    textDesencriptado = textDesencriptado.replaceAll("ufat", "u");
        
    console.log(textDesencriptado);
    let out = document.getElementById("out");
    out.innerText = textDesencriptado;
    document.getElementById("texto").value=""
})

function copyToClipBoard() {

    let content = document.getElementById('out');
    
    navigator.clipboard.writeText(content.value);
}

