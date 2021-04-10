
var dataegzaminu = new Date("May 4, 2021 09:00:00").getTime();
var egzdate = new Date("May 4, 2021 09:00:00")
var miesslowo = "asd"
var tygslowo = "asd"
var dzienslowo = "asd"
var godzslowo = "asd"
var minslowo = "asd"
var sekslowo = "asd"
var msslowo = "asd"




function main(){

    var teraz = new Date().getTime()

   

    var ms = dataegzaminu - teraz;


    if((ms/2628002880)>=5){
        miesslowo = " miesięcy"
    }
    else if((ms/2628002880)<5 && (ms/2628002880)>=2){
        miesslowo = " miesiące"   
    }
    else{
        miesslowo = " miesiąc"
    }

    if(ms/604800000>=5){
        tygslowo = " tygodni"
    }
    else if((ms/604800000)<5 && (ms/604800000)>=2){
        tygslowo = " tygodnie"   
    }
    else{
        tygslowo = " tydzień"
    }

    if((ms/86400000)>=2){
        dzienslowo = " dni"
    }
    else{
        dzienslowo = " dzień"
    }

    if((ms/3600000)>=5){
        godzslowo = " godzin"
    }
    else if((ms/3600000)<5 && (ms/3600000)>=2){
        godzslowo = " godziny"   
    }
    else{
        godzslowo = " godzina"
    }

    if((ms/60000)>=5){
        minslowo = " minut"
    }
    else if((ms/60000)<5 && (ms/60000)>=2){
        minslowo = " minuty"   
    }
    else{
        minslowo = " minuta"
    }

    if((ms / 1000)>=5){
        sekslowo = " sekund"
    }
    else if((ms / 1000)<5 && (ms / 1000)>=2){
        sekslowo = " sekundy"   
    }
    else{
        sekslowo = " sekunda"
    }

    if((ms)>=5){
        msslowo = " milisekund"
    }
    else if((ms)<5 && (ms)>=2){
        msslowo = " milisekundy"   
    }
    else{
        msslowo = " milisekunda"
    }





    document.getElementById("mies").innerHTML = ("~" + (ms/2628002880).toPrecision(3) + miesslowo);

    document.getElementById("tyg").innerHTML = ((ms/604800000).toPrecision(4) + tygslowo);

    document.getElementById("dni").innerHTML = ((ms/86400000).toPrecision(4) + dzienslowo);

    document.getElementById("godz").innerHTML = ((ms /3600000).toPrecision(7) + godzslowo);

    document.getElementById("min").innerHTML = ((ms/60000).toPrecision(8) + minslowo);

    document.getElementById("sek").innerHTML = ((ms / 1000).toPrecision(8) + sekslowo);

    document.getElementById("ms").innerHTML = (ms + msslowo);


    setTimeout(main, 1)
}

main()

    
 



    
