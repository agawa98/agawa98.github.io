var szerokosc = window.innerWidth;
var wysokosc = window.innerHeight;

Crafty.init(document.getElementById("gamediv"));

Crafty.sprite(80, "img/sprites/kapusta.png",{
    kapusta:[0,0]
})

Crafty.sprite(40, "img/sprites/sprites40.png",{
    wally:[0,0],
    wallx:[1,0],
    groundcarrot:[0,1],
    ground:[1,1],
    robak:[0,2],
    fencey:[0,3],
    fencex:[1,3]
})

function generateWorld(){
    for(let wc=0;wc<szerokosc;wc+=40){
        for(let hc=0;hc<wysokosc;hc+=40){   
            let los = Math.floor(Math.random()*100)
            if(los>95){
                Crafty.e("2D, Canvas, groundcarrot")                      
                .attr({x:wc, y:hc})  
            } 
            else{
                Crafty.e("2D, Canvas, ground")                      
                .attr({x:wc, y:hc})  
            }                                  
        }                       
    }                       
    for(let hc=0;hc<wysokosc;hc+=40){                       
        Crafty.e("2D, Canvas, Collision, ground")                        
        .attr({x:0, y:hc})
        .checkHits("kapusta")
        .bind("HitOn", function(){
            kapusta.x+=7;
        })
        Crafty.e("2D, Canvas, fencey")
        .attr({x:0, y:hc})
    }
    for(let hc=0;hc<wysokosc;hc+=40){
        Crafty.e("2D, Canvas, Collision, ground")
        .attr({x:szerokosc-40, y:hc})
        .checkHits("kapusta")
        .bind("HitOn", function(){
            kapusta.x-=7;
        })
        Crafty.e("2D, Canvas, fencey")
        .attr({x:szerokosc-40, y:hc})
    }
    for(let wc=0;wc<szerokosc;wc+=40){
        Crafty.e("2D, Canvas, Collision, ground")
        .attr({x:wc, y:0})
        .checkHits("kapusta")
        .bind("HitOn", function(){
            kapusta.y+=7;
        })
        Crafty.e("2D, Canvas, fencex")
        .attr({x:wc, y:0})
    }
    for(let wc=0;wc<szerokosc;wc+=40){
        Crafty.e("2D, Canvas, Collision, ground")
        .attr({x:wc, y:wysokosc-40})
        .checkHits("kapusta")
        .bind("HitOn", function(){
            kapusta.y-=7;
        })
        Crafty.e("2D, Canvas, fencex")
        .attr({x:wc, y:wysokosc-40})
    }
}

function spawnBullet(){
    SpawnStations=[]
    xspawn=0
    yspawn=0
    randomXVel = (Math.floor(Math.random()*400+300))*(Math.round(Math.random()) * 2 - 1);
    randomYVel = (Math.floor(Math.random()*400+300))*(Math.round(Math.random()) * 2 - 1);
    console.log(randomXVel)
    console.log(randomYVel)
    if(randomXVel>0 && randomYVel>0){
        SpawnStations = ["W","SW","S"];
    }
    if(randomXVel<0 && randomYVel>0){
        SpawnStations = ["E","SE","S"];
    }
    if(randomXVel>0 && randomYVel<0){
        SpawnStations = ["W","NW","N"];
    }
    if(randomXVel<0 && randomYVel<0){
        SpawnStations = ["E","NE","N"];
    }
    let SpawnStation = SpawnStations[Math.floor(Math.random()*3)];
    if(SpawnStation == "W"){
        xspawn=-100;
        yspawn=wysokosc/2
    }
    if(SpawnStation == "NW"){
        xspawn=-100;
        yspawn=wysokosc+100
    }
    if(SpawnStation == "N"){
        xspawn=szerokosc/2
        yspawn=wysokosc+100
    }
    if(SpawnStation == "NE"){
        xspawn=szerokosc+100
        yspawn=wysokosc+100
    }
    if(SpawnStation == "E"){
        xspawn=szerokosc+100
        yspawn=wysokosc/2
    }
    if(SpawnStation == "SE"){
        xspawn=szerokosc+100
        yspawn=-100
    }
    if(SpawnStation == "S"){
        xspawn=szerokosc/2
        yspawn=-100
    }
    if(SpawnStation == "SW"){
        xspawn=-100;
        yspawn=-100
    }
    robak = Crafty.e("2D, Canvas, Collision, robak, Motion")
    .attr({x:xspawn, y:yspawn, w:60, h:60})
    .checkHits("kapusta")
    .bind("HitOn",function(){
        alert("przegrales")
    })
    robak.vx = randomXVel
    robak.vy = randomYVel
}

Crafty.scene("main", function(){
    generateWorld();
    kapusta = Crafty.e("2D, Canvas, Fourway, Collision, kapusta")
    .attr({x:szerokosc/2-40, y:wysokosc/2-40})
    .fourway(250)
    .collision()

    setInterval(spawnBullet,200);
});

Crafty.enterScene("main");