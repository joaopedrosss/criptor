function encriptText(text){
    var strings = text.split('');
    var empty="";
    for(var i=0;i<strings.length;i++){
        let element = strings[i];
        if(isVogal(element)){
            empty += encriptElement(element);
        }else{
            empty += element;
        }
    }
    return empty;
}

function isVogal(element){
    vogal = ['a','e','i','o','u'];
    for(var i=0; i<vogal.length; i++){
        if(element==vogal[i]){
            return true;
        }
    }
    return false;
}

function encriptElement(element){
    switch (element){
        case 'a':
            return "ai"
        case 'e':
            return "enter";
        case 'i':
            return "imes";
        case 'o':
            return "ober"
        default:
            return "ufat"
    }
}
function descriptText(string){
    letters = ['a','e','i','o', 'u'];
    regexs = [/ai/g,/enter/g,/imes/g,/ober/g,/ufat/g];
    for(var i=0;i<regexs.length;i++){
        let regularEx = regexs[i];
        let letter = letters[i];

        if(regularEx.test(string)){
            string = string.replace(regularEx,letter);
        }
    }
    return string;
    /* dicitonay
       a = "ai" 
       e = "enter"; 
       i = "imes";
       o = "ober"
       u = "ufat"
     */

}

//só letras minusculas e sem acento

var input = document.getElementById("input");
var output = document.getElementById("output");
var encript = document.getElementById("encript-button");
var descript = document.getElementById("descript-button");

encript.onclick = function(){
    output.innerHTML = encriptText(input.value);
}

descript.onclick = function(){
    output.innerHTML = descriptText(input.value);
}


