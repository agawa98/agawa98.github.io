function openNav(){
    dopasuj()
}

window.onload = displaywidth();
function displaywidth(){
    document.getElementById("tytul").innerHTML += window.innerWidth
}
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
var SidebarOpen = false;

function toggleSidebar(){
    var cykl = true;
    if(SidebarOpen==true && cykl==true){
        closeNav();
        console.log("zamykanie")
        SidebarOpen=false;
        cykl=false
        document.getElementById("przycisk").innerHTML = ">"
    } 
    if(SidebarOpen==false && cykl==true){
        openNav();
        console.log("otwieranie")
        SidebarOpen=true;
        cykl=false
        document.getElementById("przycisk").innerHTML = "<"
    }
    else{
        console.log("cos sie zesralo")
    }
}
function displayimg(clickid){
        console.log(clickid)
        document.getElementById("tablicadiv").innerHTML = '<img src="img/tabele/'+clickid+'.png" id="tablica">';

}
window.addEventListener('resize', dopasuj);
function dopasuj(){
    if(window.innerWidth>700){
        console.log(innerWidth)
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("main").style.marginLeft = "25%";

    }
    if(window.innerWidth<=700){
        console.log(innerWidth)
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("main").style.marginLeft = "100%";
    }
    
}
