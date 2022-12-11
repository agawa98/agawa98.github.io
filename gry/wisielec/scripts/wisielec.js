var input = document.getElementById("miejsceliterki");
    input.addEventListener("keyup", function(enter) {
        if(enter.keyCode===13){
        enter.preventDefault();
        document.getElementById("przycisk").click();
        document.getElementById("miejsceliterki").value="";
        }
    });


var licznikzgadnietych = 0;
var dobrze = false;
var zycie =10;
document.getElementById("zycia").innerHTML = ("zycia: " + zycie);
var wpisanelitery = [];
var plansza = [];
var punkt = 0;
document.getElementById("wynik").innerHTML = ("punkty: " + punkt);

function refresh(){
    var zycie =10;
    document.getElementById("zycia").innerHTML = ("zycia: " + zycie);
    var slowa = ["krowa","andaluzja","wombat","kombatanci","laptop","gzyms","klawiatura","zegarek","prysznic","toporek"]
    var liczlos = Math.floor(Math.random() * 9) + 0;
    var cojestwpisane = document.getElementById("wpisanaliterka");
    cojestwpisane.innerText = "wpisana literka: ";
    wybraneslowo = slowa[liczlos];
    plansza = [];
    wpisanelitery = [];
    document.getElementById("juzwpisane").innerHTML = ("wpisales juz: ");
    for(var i = 0;i<wybraneslowo.length;i++){
            plansza.push(" _ ");
            document.getElementById("plansza").innerHTML = (plansza);
        }
}


    var slowa = ["krowa","andaluzja","wombat","kombatanci","laptop","gzyms","klawiatura","zegarek","prysznic","toporek"]
    var liczlos = Math.floor(Math.random() * 9) + 0;
    wybraneslowo = slowa[liczlos];

function cojestwinpucie(){
    var cojestwpisane = document.getElementById("wpisanaliterka");
    var inputval = document.getElementById("miejsceliterki").value;
    cojestwpisane.innerText = "wpisana literka: " + inputval;
}

function niechcegrac(){
    window.close();
}


        for(var i = 0;i<wybraneslowo.length;i++){
            plansza.push(" _ ");
            document.getElementById("plansza").innerHTML = (plansza);
        }
    

function calycyrk(){
    
    var literkainput = document.getElementById("miejsceliterki").value;

    wpisanelitery.push(literkainput);
    wpisanelitery.sort();
    document.getElementById("juzwpisane").innerHTML = ("wpisales juz: " + wpisanelitery);

    dobrze = false;
    for(var x=0;x<wybraneslowo.length;x++){
        if(literkainput==wybraneslowo[x]){
            dobrze = true;
            
            break;
        }
    }
    if(literkainput!=wybraneslowo[x]){
        zycie--;
        
        document.getElementById("zycia").innerHTML = ("zycia: " + zycie);   
    }

    for(var i = 0;i<wybraneslowo.length;i++){
    
    }

    if(dobrze==true){
        for(var i=0;i<wybraneslowo.length;i++){
            if(literkainput==wybraneslowo[i]){
                plansza[i]=" " + literkainput + " ";
                
            }
        }
        document.getElementById("plansza").innerHTML = plansza;
    }

    for(var i=0;i<wybraneslowo.length;i++){
        if(plansza[i]!=" _ "){
            licznikzgadnietych++;
        }
    }

    if(licznikzgadnietych==wybraneslowo.length){
        alert("wygrales/as brawo, plus 1 punkt")
        punkt++;
        document.getElementById("wynik").innerHTML = ("wynik: " + punkt);
    }

    if(zycie<=0){
        alert("przegrales!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        
        window.close();
    }
    
    licznikzgadnietych = 0;
}
