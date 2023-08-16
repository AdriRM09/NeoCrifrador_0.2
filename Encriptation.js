
function encriptar(){
   var saltos=parseInt(document.getElementById("clave").value);
   const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
   var inputOriginal=document.getElementById('text1')
   var result=document.getElementById('cifrado')
   let originalMessage=inputOriginal.value.toLowerCase()
   for (let i = 0; i < originalMessage.length; i++) {
       let letra=originalMessage[i]
       let index=alphabet.indexOf(letra)
       let newLetter=alphabet[index+saltos]
       originalMessage=originalMessage.replaceAll(letra,newLetter)
   }
   result.value=originalMessage
}


function desencriptar(){
   var saltos=parseInt(document.getElementById("clave").value);
   const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
   var inputOriginal=document.getElementById('text2')
   var result=document.getElementById('deCifrado')
   let originalMessage=inputOriginal.value
   for (let i = 0; i < originalMessage.length; i++) {
       let letra=originalMessage[i]
       let index=alphabet.indexOf(letra)
       let newLetter=alphabet[index-saltos]
       originalMessage=originalMessage.replaceAll(letra,newLetter)  
   }
   result.value=originalMessage
}

function reiniciar(){
    document.getElementById('clave').value = '';
    document.getElementById('text1').value = '';
    document.getElementById('cifrado').value = '';
    document.getElementById('text2').value = '';
    document.getElementById('deCifrado').value = '';
}

