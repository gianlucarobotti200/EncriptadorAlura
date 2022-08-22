document.getElementById("bEncriptar").addEventListener("click", function(){
    let textSinEncriptar = document.getElementById("texto").value;
    console.log(textSinEncriptar);
    
    let textEncriptado = ""

    for(let i = 0; i <= (textSinEncriptar.length)-1; i++){
        if (textSinEncriptar[i] == "a"){
            textEncriptado += "ai";
        } else if(textSinEncriptar[i] == "e"){
            textEncriptado += "enter";
        } else if(textSinEncriptar[i] == "i"){
            textEncriptado += "imes";
        } else if(textSinEncriptar[i] == "o"){
            textEncriptado += "ober";
        } else if(textSinEncriptar[i] == "u"){
            textEncriptado += "ufat";
        } else if(textSinEncriptar[i]== " "){
            textEncriptado += " ";
        } else{
            textEncriptado += textSinEncriptar[i];
        }
    }

    console.log(textEncriptado);

    
})


