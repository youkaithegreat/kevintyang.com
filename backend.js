
        var counter = 0;
        //counter for the easter egg at 5 clicks, where you are redirected to my wedding photography page

        function okaybossman(){
        //button javascript function as proof of concept. 
        //expanded functionality could be to completely switch the text in the box instead of making it disappear and/or replacing it with plain formatting
          
        
          var element = document.getElementById("page-info");
          //retrieves the main text as well as the Prism container 

          if(element.style.display === "none" && counter < 5){
            
            element.style.display = "block";
            
            document.getElementById("no-more-code").innerHTML = "NO CODE!";
            //sets button status 
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