kolory = ["wino","trefl","dzwonek","serce"];
figury = ["2","3","4","5","6","7","8","9","10","jopek","dama","krol","as"];
usedcards = []
kolorywgrze = [0,1,2,3]
shoesizecount=0;
kolorcount=0;
figuracount=0;
var karta;
buttonson=true;
suma=0;
sumagracz=0;
sumadealer=0;
outcome=null;
dealersturn=null;
splitable=false;
cardsingame=null
shoesize=0
aswrece=false;
reka="graczkarty";



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
    cardsingame=52*shoesize
    kolorywgrze = [0,1,2,3]
    resettable()
    rozdaj()
}

function randomCard(){
    
    randkolor = kolorywgrze[Math.floor(Math.random() * kolorywgrze.length)];
    if(shoe[randkolor].length==0){
        kolorywgrze.splice(randkolor,1)
        randomCard()
    }
    randfig = Math.floor(Math.random() * shoe[randkolor].length);
    kartafig = shoe[randkolor][randfig];
    karta = shoe[randkolor][randfig] + " " + kolory[randkolor];
    shoe[randkolor].splice(randfig,1);
    usedcards.push(kartafig);
    cardsingame--;
}

function tasowanie(){
    togglebuttons()
    createshoe(shoesize)
    document.getElementById("tasowanie").style.display = "none";
}


function sumowanie(){
    suma=0;
    if(kartafig == "10" || kartafig == "jopek" || kartafig == "dama" || kartafig == "krol"){
        suma+=10;
    }
    if(kartafig == "as" && dealersturn==false){
        aswrece=true;
        suma+=11
    }
    if(kartafig == "as" && dealersturn==true){
        aswrecedealera=true;
        suma+=11
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
    document.getElementById(reka).innerHTML += karta + "<br>";
    if(sumagracz>21){
        if(aswrece==true){
            sumagracz-=10
            aswrece=false;
            document.getElementById("graczsuma").innerHTML = "suma: " + sumagracz;
            return
        }
        togglebuttons()
        dealer1karta()
        document.getElementById("dealerpierwszakarta").style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("dealerpierwszakarta").style.color = "rgb(255, 245, 158)";
        sumadealer += zakrytakartawartosc;
        document.getElementById("dealersuma").innerHTML = "suma: " + sumadealer;
        przegrales()
    }
}

function stoj(){
    togglebuttons()
    document.getElementById("dealerpierwszakarta").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("dealerpierwszakarta").style.color = "rgb(255, 245, 158)";
    sumadealer += zakrytakartawartosc;
    document.getElementById("dealersuma").innerHTML = "suma: " + sumadealer;
    while(sumadealer<17){
        setTimeout(dealerdobierz(), 1000)
    }
    if(sumadealer>21){
        if(aswrecedealera==true){
            sumadealer-=10
            aswrecedealera=false;   
            document.getElementById("dealersuma").innerHTML = "suma: " + sumadealer;
        }
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

function split(){
    alert("split")
    //document.getElementById("splitbtn").disabled = true;
    document.getElementById("graczkarty").innerHTML = document.getElementById("graczkarty").innerHTML.replace(karta+'<br>',"")
    document.getElementById("graczkarty2").innerText = karta;
    reka="graczkarty";
    document.getElementById(reka).style.backgroundColor = "#35654d";
    document.getElementById(reka).style.filter = "saturate(150%)";
    document.getElementById(reka).style.border = "1px solid rgba(255, 247, 0, 0.54)"

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
    aswrece=false;
    aswrecedealera=false;
    reka="graczkarty";
}

function dealerdobierz(){
    dealersturn=true
    randomCard();
    sumowanie();
    sumadealer += suma;
    document.getElementById("dealersuma").innerHTML = "suma: " + sumadealer;
    document.getElementById("dealerkarty").innerHTML += karta + "<br>";
    dealersturn=false;
}

function dealer1karta(){
    randomCard();
    sumowanie();
    zakrytakartawartosc = suma;
    document.getElementById("dealerpierwszakarta").innerHTML = karta;
}

function rozdaj(){
    
    
    resettable();
    dealer1karta();
    dealerdobierz();
    dobierz();
    dobierz();
    splitcheck();
    

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
    if(cardsingame<10){
        togglebuttons()
        document.getElementById("tasowanie").style.display = "block";
        setTimeout(tasowanie,2000);
        return
    }
}

function splitcheck(){
    if(usedcards[usedcards.length-2]==usedcards[usedcards.length-1]){
        //document.getElementById("splitbtn").disabled = false;
        splitable=true;
    }
}







createshoe();

