let ball = document.getElementById("ballone");
      let balltwo = document.getElementById("balltwo");
      console.log(ball);
      
      let velocity = 2;
      let positionX = 0;
      let velocityX = 0;
      var reverse = false;
  // Create a movingBall Function
      function moveBall() {
        var xMin = 0;
        var xMax = 1300;

        if (reverse) {
          positionX = positionX - velocity;
          ball.style.left = positionX;
          balltwo.style.right = positionX + "px";
         
          
        } else {
          positionX = positionX + velocity;
          ball.style.left = positionX;
          balltwo.style.right = positionX +'px';
        }
        if (positionX > xMax || positionX === xMin) {
          reverse = !reverse;
        }
      }

   

     
         
          
       

      setInterval(moveBall, 1);