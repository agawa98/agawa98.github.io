kolory = ["wino","trefl","dzwonek","serce"];
figury = ["2","3","4","5","6","7","8","9","10","jopek","dama","krol","as"];
shoesizecount=0;
kolorcount=0;
figuracount=0;
var karta;
buttonson=true;
suma=0;
sumagracz=0;
sumadealer=0;
outcome=null;


function createshoe(shoesize){
    shoesize = document.getElementById("shoesizeinput").value;
    shoe = [
        wino = [],
        trefl = [],
        dzwonek = [],
        serce = []
    ];
    while(shoesizecount<shoesize){
        while(kolorcount<4){
            while(figuracount<13){
                shoe[kolorcount].push(figury[figuracount]);
                figuracount++;
            }
            figuracount=0;
            kolorcount++;
        }
        kolorcount=0;
        shoesizecount++;
    }
    shoesizecount=0;
    resettable()
}

function randomCard(){
    randkolor = Math.floor(Math.random() * 4);
    randfig = Math.floor(Math.random() * shoe[randkolor].length);
    kartafig = shoe[randkolor][randfig];
    console.log(shoe[randkolor][randfig] + " " + kolory[randkolor]);
    karta = shoe[randkolor][randfig] + " " + kolory[randkolor];
    shoe[randkolor].splice(randfig,1);
}

function sumowanie(){
    suma=0;
    if(kartafig == "10" || kartafig == "jopek" || kartafig == "dama" || kartafig == "krol"){
        suma+=10;
    }
    if(kartafig == "as"){
        if(suma>11){
            suma++;
        }
        if(suma<=10){
            suma+=11;
        }
    }
    if(parseInt(kartafig)>=2 && parseInt(kartafig)<=9){
        suma = suma+parseInt(kartafig);
    }
}

function dobierz(){
    randomCard();
    sumowanie();
    sumagracz += suma;
    document.getElementById("graczsuma").innerHTML = "suma: " + sumagracz;
    document.getElementById("graczkarty").innerHTML += karta + "<br>";
    if(sumagracz>21){
        togglebuttons()
        dealer1karta()
        document.getElementById("dealerpierwszakarta").style.backgroundColor = "#35654d";
        document.getElementById("dealerpierwszakarta").style.color = "rgb(255, 245, 158)";
        sumadealer += zakrytakartawartosc;
        document.getElementById("dealersuma").innerHTML = "suma: " + sumadealer;
        przegrales()
    }
}

function stoj(){
    togglebuttons()
    document.getElementById("dealerpierwszakarta").style.backgroundColor = "#35654d";
    document.getElementById("dealerpierwszakarta").style.color = "rgb(255, 245, 158)";
    sumadealer += zakrytakartawartosc;
    document.getElementById("dealersuma").innerHTML = "suma: " + sumadealer;
    while(sumadealer<17){
        setTimeout(dealerdobierz(), 1000)
    }
    if(sumadealer>21){
        wygrales()
        return
    }
    if(sumadealer>sumagracz){
        przegrales();
        return
    }
    if(sumadealer==sumagracz){
        remis();
        return
    }
    if(sumadealer<sumagracz){
        wygrales();
        return
    }
}

function resettable(){
    document.getElementById("graczsuma").innerHTML = "suma: "
    document.getElementById("graczkarty").innerHTML = "";
    document.getElementById("dealersuma").innerHTML = "suma: "
    document.getElementById("dealerkarty").innerHTML = "";
    document.getElementById("dealerpierwszakarta").style.backgroundColor = "#000000";
    document.getElementById("dealerpierwszakarta").style.color = "rgb(0,0,0)";
    suma=0;
    sumagracz=0;
    sumadealer=0;
}

function dealerdobierz(){
    randomCard();
    sumowanie();
    sumadealer += suma;
    document.getElementById("dealersuma").innerHTML = "suma: " + sumadealer;
    document.getElementById("dealerkarty").innerHTML += karta + "<br>";
}

function dealer1karta(){
    randomCard();
    sumowanie();
    zakrytakartawartosc = suma;
    document.getElementById("dealerpierwszakarta").innerHTML = karta;
}

function rozdaj(){
    
    createshoe();
    resettable();
    dobierz();
    dobierz();
    dealer1karta();
    dealerdobierz();
    

    if(sumagracz==21){
        
    }
}

function togglebuttons(){
    console.log("toggle")
    if(buttonson==true){
        document.querySelectorAll('button.playingbutton').forEach(elem => {
            elem.disabled = true;
            buttonson=false;
        });
        return;
    }
    if(buttonson==false){
        document.querySelectorAll('button.playingbutton').forEach(elem => {
            elem.disabled = false;
            buttonson=true;
        });
        return;
    }
}

function przegrales(){
    document.getElementById("przegrales").style.display = "block";
    outcome="przegrales";
}

function remis(){
    document.getElementById("remis").style.display = "block";
    outcome="remis";
}

function wygrales(){
    document.getElementById("wygrales").style.display = "block";
    outcome="wygrales";
}

function newgame(){
    togglebuttons();
    rozdaj();
    document.getElementById(outcome).style.display = "none";
}




rozdaj();