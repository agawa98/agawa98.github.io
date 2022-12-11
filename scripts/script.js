









//goofy ahh mode

var changeSpeed = 1000;

function goofymaker(){
    var divs = document.getElementsByTagName("div")
    for(let i=0; i<divs.length; i++){
        let r=Math.floor(Math.random()*255)
        let g=Math.floor(Math.random()*255)
        let b=Math.floor(Math.random()*255)
        divs[i].style.backgroundColor = "rgb("+r+","+g+","+b+")"
        divs[i].style.color = "rgb("+(256-r)+","+(256-g)+","+(256-b)+")"
    }
}

function goofmanager(){
    goofymaker()
    goofchanger = setInterval(goofymaker,changeSpeed)
}

function speed(){
    console.log(document.getElementById("goofyrange").value)
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
    console.log("asdad")
    slider.min = "1"
    slider.value = 1000;
    slider.style.width = button.style.width
    
    goofmanager()
})



//warning

document.getElementById("warning").addEventListener("click", ()=>{
    document.getElementById("warning").remove()
})


