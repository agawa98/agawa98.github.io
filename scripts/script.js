











function goofy(){
    var divs = document.getElementsByTagName("div")
    for(let i=0; i<divs.length; i++){
        let r=Math.floor(Math.random()*255)
        let g=Math.floor(Math.random()*255)
        let b=Math.floor(Math.random()*255)
        divs[i].style.backgroundColor = "rgb("+r+","+g+","+b+")"
        divs[i].style.color = "rgb("+(256-r)+","+(256-g)+","+(256-b)+")"
    } 
}





document.getElementById("goofer").addEventListener("click", goofy)


