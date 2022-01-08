function getValue(value) {
    if (document.getElementById("operateur").innerHTML == false) {
        document.getElementById("nombreX").innerHTML += value;
    }
    else {
        document.getElementById("nombreY").innerHTML += value;
    }
    document.getElementById("resultat").innerHTML = '';
}    

function operateur(value) {
    document.getElementById("operateur").innerHTML = value
}

function result() {
    let x = document.getElementById("nombreX").innerHTML;
    let y = document.getElementById("nombreY").innerHTML;

    if (document.getElementById("operateur").innerHTML == "+") {
        document.getElementById("nombreX").innerHTML = '';
        document.getElementById("nombreY").innerHTML = '';
        document.getElementById("operateur").innerHTML = '';
        document.getElementById("resultat").innerHTML = ((+x) + (+y));
    }
    if (document.getElementById("operateur").innerHTML == "-") {
        document.getElementById("nombreX").innerHTML = '';
        document.getElementById("nombreY").innerHTML = '';
        document.getElementById("operateur").innerHTML = '';
        document.getElementById("resultat").innerHTML = ((+x) - (+y));
        
    }
    if (document.getElementById("operateur").innerHTML == "/") {
        document.getElementById("nombreX").innerHTML = '';
        document.getElementById("nombreY").innerHTML = '';
        document.getElementById("operateur").innerHTML = '';
        document.getElementById("resultat").innerHTML = ((+x) / (+y));
    }
    if (document.getElementById("operateur").innerHTML == "*") {
        document.getElementById("nombreX").innerHTML = '';
        document.getElementById("nombreY").innerHTML = '';
        document.getElementById("operateur").innerHTML = '';
        document.getElementById("resultat").innerHTML = ((+x) * (+y));
    }    
}

function ce() {
    document.getElementById("nombreX").innerHTML = '';
    document.getElementById("nombreY").innerHTML = '';
    document.getElementById("operateur").innerHTML = '';
    document.getElementById("resultat").innerHTML = '';
}

function c() {
    if (document.getElementById("nombreY").innerHTML != ''){
        document.getElementById("nombreY").innerHTML = '';
    }else if(document.getElementById("operateur").innerHTML != ''){
        document.getElementById("operateur").innerHTML = '';
    }else if (document.getElementById("nombreX").innerHTML != ''){
        document.getElementById("nombreX").innerHTML = '';
    }
    document.getElementById("resultat").innerHTML = '';
}

function positifNegatif() {
    if (document.getElementById("resultat").innerHTML != '') {
    document.getElementById("resultat").innerHTML *= (-1);
    } else if (document.getElementById("nombreY").innerHTML != '') {
        document.getElementById("nombreY").innerHTML *= (-1);
    } else if (document.getElementById("operateur").innerHTML != '' && document.getElementById("nombreX").innerHTML != '' || document.getElementById("nombreX").innerHTML != '') {
        document.getElementById("nombreX").innerHTML *= (-1);        
    } 
}
function del() {
    if (document.getElementById("resultat").innerHTML != '') {
        document.getElementById("resultat").innerHTML = document.getElementById("resultat").innerHTML.slice(0,-1);
    } else if (document.getElementById("nombreY").innerHTML != '') {
        document.getElementById("nombreY").innerHTML = document.getElementById("nombreY").innerHTML.slice(0,-1);
    } else if (document.getElementById("operateur").innerHTML != '') {
        document.getElementById("operateur").innerHTML = document.getElementById("operateur").innerHTML.slice(0,-1);
    } else if (document.getElementById("nombreX").innerHTML != '') {
        document.getElementById("nombreX").innerHTML = document.getElementById("nombreX").innerHTML.slice(0,-1);
    }
}

function virgule() {
    let virgule = false
    for (i=0; i<document.getElementById("nombreX").innerHTML.length; i++) {
        if (document.getElementById("nombreX").innerHTML[i] == ".") {
            virgule = true;
        }
    }
    
    if (virgule == false) {
        document.getElementById("nombreX").innerHTML += ".";
    }
    if (document.getElementById("operateur").innerHTML != '') {
        virgule = false;
        for (i=0; i<document.getElementById("nombreY").innerHTML.length; i++) {
            if (document.getElementById("nombreY").innerHTML[i] == ".") {
                virgule = true;
            }
        }
        if (virgule == false) {
            document.getElementById("nombreY").innerHTML += ".";
        }
    }
}

function carre() {
    if (document.getElementById("resultat").innerHTML != '') {
        document.getElementById("resultat").innerHTML *= document.getElementById("resultat").innerHTML;
    } else if (document.getElementById("nombreY").innerHTML != '') {
        document.getElementById("nombreY").innerHTML *= document.getElementById("nombreY").innerHTML;
    }  else if (document.getElementById("nombreX").innerHTML != '') {
        document.getElementById("nombreX").innerHTML *= document.getElementById("nombreX").innerHTML;
    }
}

function cube() {
    if (document.getElementById("resultat").innerHTML != '') {
        document.getElementById("resultat").innerHTML = Math.pow(document.getElementById("resultat").innerHTML, 3);
    } else if (document.getElementById("nombreY").innerHTML != '') {
        document.getElementById("nombreY").innerHTML = Math.pow(document.getElementById("nombreY").innerHTML, 3);
    }  else if (document.getElementById("nombreX").innerHTML != '') {
        document.getElementById("nombreX").innerHTML = Math.pow(document.getElementById("nombreX").innerHTML, 3);
    }
}

function racineCarre() {
    if (document.getElementById("resultat").innerHTML != '') {
        document.getElementById("resultat").innerHTML = Math.sqrt(document.getElementById("resultat").innerHTML);
    } else if (document.getElementById("nombreY").innerHTML != '') {
        document.getElementById("nombreY").innerHTML = Math.sqrt(document.getElementById("nombreY").innerHTML);
    }  else if (document.getElementById("nombreX").innerHTML != '') {
        document.getElementById("nombreX").innerHTML = Math.sqrt(document.getElementById("nombreX").innerHTML);
    }
}

function pi() {
    if (document.getElementById("resultat").innerHTML != '') {
        document.getElementById("resultat").innerHTML = Math.PI * document.getElementById("resultat").innerHTML;
    } else if (document.getElementById("nombreY").innerHTML != '') {
        document.getElementById("nombreY").innerHTML = Math.PI * document.getElementById("nombreY").innerHTML;
    }  else if (document.getElementById("nombreX").innerHTML != '') {
        document.getElementById("nombreX").innerHTML = Math.PI * document.getElementById("nombreX").innerHTML;
    }
}



