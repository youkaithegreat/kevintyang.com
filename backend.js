var x;
        var counter = 0;
        function okaybossman(){
          
          var element = document.getElementById("page-info");

          

          if(element.style.display === "none" && counter < 5){
            element.style.display = "block";
            document.getElementById("no-more-code").innerHTML = "NO CODE!";
            counter++;
            alert("That's what I thought. Realize your mistakes. " + counter);

          }
          else if (counter >= 5){
            alert("You've pushed the button too many times, goodbye. Book me for wedding photography instead.");
            counter = 0;
            window.location.replace("http://www.youkaicreations.com");
            
          }
          else
          {
            counter++;
            document.getElementById("no-more-code").innerHTML = "Show me code, that was a bad decision and I regret everything."
            element.style.display = "none";
            alert("Okay Boss Man, Don't regret this decision. " + counter);
          
          }
        
        }