
        var canvas = document.getElementById("pole");
        var context = canvas.getContext("2d");
        var krok = 0.01;
        var masa = 0;

        var cx = Math.floor(Math.random() * 25) + 1;
        var cy = Math.floor(Math.random() * 25) + 1;

        var chlop = new Object();

        chlop.x = 240;
        chlop.y = 240;
        

        function gra(){

            requestAnimationFrame(gra);

            function clos(){
            var cx = Math.floor(Math.random() * 25) + 1;
            var cy = Math.floor(Math.random() * 25) + 1;
            }

            clos();

            
            
            var img = new Image()
            img.src = "img/pudzian.jpeg"
            img.onload = function(){
                context.drawImage(img, chlop.x, chlop.y, 40, 40)
            }

            var cookie = new Image()
            cookie.src = "img/cookie.png"
            cookie.onload = function(){
                context.drawImage(cookie, cx * 20, cy * 20, 40, 40)
            }

            

            if(chlop.x - cx * 20 <=20 && 0>=chlop.x-cx*20){
                masa++;
                clos();
                context.clearRect(cx*20, cy*20, 40, 40)
                document.getElementById("mass").innerHTML = ("masa: " + masa)
            }  


            document.addEventListener("keydown",function(strz){

                if(strz.which == 39){ //prawo

                    chlop.x += krok;
                    context.clearRect(chlop.x -1, chlop.y -1, 42, 42)

                }
                else if(strz.which == 38){ //gora

                    chlop.y -= krok;
                    context.clearRect(chlop.x -1, chlop.y -1, 42, 42)

                }
                else if(strz.which == 37){ //lewo
                     
                    chlop.x -= krok;
                    context.clearRect(chlop.x -1, chlop.y -1, 42, 42)

                }
                else if(strz.which == 40){ //dol

                    chlop.y += krok;
                    context.clearRect(chlop.x -1, chlop.y -1, 42, 42)
                }

            });
            
        }
        requestAnimationFrame(gra);