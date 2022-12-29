









//goofy ahh mode

var changeSpeed = 1000;
var goofcounter = 9;

function goofymaker(){
    var divs = document.getElementsByTagName("div")
    for(let i=0; i<divs.length; i++){
        let r=Math.floor(Math.random()*255)
        let g=Math.floor(Math.random()*255)
        let b=Math.floor(Math.random()*255)
        divs[i].style.backgroundColor = "rgb("+r+","+g+","+b+")"
        divs[i].style.color = "rgb("+(256-r)+","+(256-g)+","+(256-b)+")"
    }
    /*
    zmienianie gradientu w tle (nie dziala nie wiem czemu i srednio mi sie chce to robic)

    goofcounter++
    if(goofcounter==10){
        let bgstring = "radial-gradient(circle"
        for(let j=0;j<3;j++){
            let br=Math.floor(Math.random()*255)
            let bg=Math.floor(Math.random()*255)
            let bb=Math.floor(Math.random()*255)
            bgstring+=", rgba("+br+","+bg+","+bb+",1) "+j*50+"%"
        }
        bgstring+=");"
        console.log(bgstring)
        document.body.style.background = bgstring
        document.body.style.animationDuration = changeSpeed*5
        goofcounter=0
    }
    */
}

function goofmanager(){
    goofymaker()
    goofchanger = setInterval(goofymaker,changeSpeed)
}

function speed(){
    changeSpeed = document.getElementById("goofyrange").value
    var divs = document.getElementsByTagName("div")
    for(let i=0;i<divs.length;i++){
        divs[i].style.transition = (changeSpeed/1000)+"s"
    }
    clearInterval(goofchanger)
    goofchanger = setInterval(goofymaker,changeSpeed)
}

document.getElementById("goofer").addEventListener("click", ()=>{
    let slider = document.getElementById("goofyrange")
    let button = document.getElementById("goofer")

    button.disabled = true
    slider.style.display = "block"
    slider.style.top = button.clientHeight+5+"px"
    slider.style.right = 0;
    slider.max = "2000"
    slider.min = "50"
    slider.value = 1000;
    slider.style.width = button.style.width
    
    goofmanager()
})



