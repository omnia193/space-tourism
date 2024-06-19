var body= document.body;
console.log(body)
var mainbtns= document.getElementById("mainbtns")
console.log(mainbtns);
var burgericon= document.getElementById("burgericon")
console.log(burgericon);

 var homebtn = document.getElementById("homebtn");
console.log(homebtn);
var explorbutton = document.getElementById("explorbutton");
console.log(explorbutton);
var downdiv = document.getElementById("downdiv");
console.log(downdiv);
var clickcount = 0;
console.log(clickcount);
var destination =document.getElementById("destination")
console.log(destination);
var destinationbtn =document.getElementById("destinationbtn")

var moon= document.getElementById("moon")
console.log(moon);
var infop=document.getElementById("infop")
console.log(infop);
var moonimg=document.getElementById("moonimg")
console.log(moonimg);
var datedivofmoon1=document.getElementById("datedivofmoon1")
console.log(datedivofmoon1);
var datedivofmoon2=document.getElementById("datedivofmoon2")
console.log(datedivofmoon2);

var mars= document.getElementById("mars")
console.log(mars);
var infop2=document.getElementById("infop2")
console.log(infop2);
var marsimg=document.getElementById("marsimg")
console.log(marsimg);
var datedivofmars1=document.getElementById("datedivofmars1")
console.log(datedivofmars1);
var datedivofmars2=document.getElementById("datedivofmars2")
console.log(datedivofmars2);

var europa= document.getElementById("europa")
console.log(europa);
var infop3=document.getElementById("infop3")
console.log(infop3);
var europaimg=document.getElementById("europaimg")
console.log(europaimg);
var datedivofeuropa1=document.getElementById("datedivofeuropa1")
console.log(datedivofeuropa1);
var datedivofeuropa2=document.getElementById("datedivofeuropa2")
console.log(datedivofeuropa2);

var titan= document.getElementById("titan")
console.log(titan);
var infop4=document.getElementById("infop4")
console.log(infop4);
var titanimg=document.getElementById("titanimg")
console.log(titanimg);
var datedivoftitan1=document.getElementById("datedivoftitan1")
console.log(datedivoftitan1);
var datedivoftitan2=document.getElementById("datedivoftitan2")
console.log(datedivoftitan2);

var crewbtn=document.getElementById("crewbtn")
console.log(crewbtn);
var crew=document.getElementById("crew")
console.log(crew);

var commanderbtn=document.getElementById("commanderbtn")
console.log(commanderbtn);
var infopofcommander=document.getElementById("infopofcommander")
console.log(infopofcommander);
var commanderimg=document.getElementById("commanderimg")
console.log(commanderimg);

var markbtn=document.getElementById("markbtn")
console.log(markbtn);
var infopofmark=document.getElementById("infopofmark")
console.log(infopofmark);
var markimg=document.getElementById("markimg")
console.log(markimg);

var victorbtn=document.getElementById("victorbtn")
console.log(victorbtn);
var infopofvictor=document.getElementById("infopofvictor")
console.log(infopofvictor);
var victorimg=document.getElementById("victorimg")
console.log(victorimg);

var anoushehbtn=document.getElementById("anoushehbtn")
console.log(anoushehbtn);
var infopofanousheh=document.getElementById("infopofanousheh")
console.log(infopofanousheh);
var anoushehimg=document.getElementById("anoushehimg")
console.log(anoushehimg);

var technologybtn=document.getElementById("technologybtn")
console.log(technologybtn);
var technology=document.getElementById("technology")
console.log(technology);

var vehicle=document.getElementById("vehicle")
console.log(vehicle);
var vehiclediv=document.getElementById("vehiclediv")
console.log(vehiclediv);
var vehicleimg=document.getElementById("vehicleimg")
console.log(vehicleimg);

var spaceport=document.getElementById("spaceport")
console.log(spaceport);
var spaceportdiv=document.getElementById("spaceportdiv")
console.log(spaceportdiv);
var spaceportimg=document.getElementById("spaceportimg")
console.log(spaceportimg);

var capsule=document.getElementById("capsule")
console.log(capsule);
var capsulediv=document.getElementById("capsulediv")
console.log(capsulediv);
var capsuleimg=document.getElementById("capsuleimg")
console.log(capsuleimg);




/*homebtn.onclick = function() {
    if (downdiv.style.display === "none") {
        downdiv.style.display = "flex";
     
        destination.style.display="none"
        crew.style.display = "none";
    } else {
        downdiv.style.display = "none";
        destination.style.display = "none";
        crew.style.display = "none";
       
    }
    clickcount++;
    console.log(clickcount);
}*/


var homebtn = document.getElementById("homebtn");
console.log(homebtn);
var explorbutton = document.getElementById("explorbutton");
console.log(explorbutton);
var downdiv = document.getElementById("downdiv");
console.log(downdiv);
var clickcount = 0;
console.log(clickcount);
var destination = document.getElementById("destination");
homebtn.onclick = function() {
    if (downdiv.style.display === "none" || downdiv.style.display === "") {
        downdiv.style.display = "flex"; 
        destination.style.display = "none";
        crew.style.display = "none";
        technology.style.display = "none";
        vehiclediv.style.display = "none";
        vehicleimg.style.display="none";
        spaceportdiv.style.display = "none";
        spaceportimg.style.display="none";
        capsulediv.style.display = "none";
        capsuleimg.style.display="none";

    } else {
        downdiv.style.display = "flex"; 
        destination.style.display = "none";
        crew.style.display = "none";
        technology.style.display = "none";
    }
    clickcount++;
    console.log(clickcount);
}

destinationbtn.onclick = function() {
    if (destination.style.display === "none") {
        destination.style.display = "block";
        downdiv.style.display = "none";
        crew.style.display = "none";
        technology.style.display = "none";
        infop.style.display = "block";
        moonimg.style.display = "block";
        datedivofmoon1.style.display="block";
        datedivofmoon2.style.display="block";
        infop2.style.display = "none";
        marsimg.style.display = "none";
        datedivofmars1.style.display="none";
        datedivofmars2.style.display="none";
        infop3.style.display = "none";
        europaimg.style.display = "none";
        datedivofeuropa1.style.display="none";
        datedivofeuropa2.style.display="none";
        infop3.style.display = "none";
        titanimg.style.display = "none";
         datedivoftitan1.style.display="none";
         datedivoftitan2.style.display="none";


         //document.body.style.backgroundImage ="url('path/to/destination/background-destination-desktop.jpg')";//
      
         
    
         
      // document.body.style.backgroundImage="(url'path/to/dest ination/background-destination-desktop.jpg')"; 
       //"url('destination/background-destination-desktop.jpg');";//
    console.log(getComputedStyle(body).backgroundImage);
    
        }
    else {
        destination.style.display = "none";
        downdiv.style.display = "flex";
        crew.style.display = "none";
        technology.style.display = "none";

    }
    clickcount++;
    console.log(clickcount);

}
moon.onclick = function() {
    if (infop.style.display === "none") {
        infop.style.display = "block";
        moonimg.style.display = "block";
        datedivofmoon1.style.display="block";
        datedivofmoon2.style.display="block";
        infop2.style.display = "none";
        marsimg.style.display = "none";
        datedivofmars1.style.display="none";
        datedivofmars2.style.display="none";
        infop3.style.display = "none";
        europaimg.style.display = "none";
        datedivofeuropa1.style.display="none";
        datedivofeuropa2.style.display="none";
        infop4.style.display = "none";
        titanimg.style.display = "none";
         datedivoftitan1.style.display="none";
         datedivoftitan2.style.display="none";
     
 
    }
    else {
        infop.style.display = "block";
        moonimg.style.display = "block";
        datedivofmoon1.style.display="block";
        datedivofmoon2.style.display="block";
    }
    clickcount++;
    console.log(clickcount);
}
mars.onclick = function() {
    if (infop2.style.display === "none") {
        infop2.style.display = "block";
        marsimg.style.display = "block";
        datedivofmars1.style.display="block";
        datedivofmars2.style.display="block";
        infop.style.display = "none";
        moonimg.style.display = "none";
        datedivofmoon1.style.display="none";
        datedivofmoon2.style.display="none";
        infop3.style.display = "none";
        europaimg.style.display = "none";
        datedivofeuropa1.style.display="none";
        datedivofeuropa2.style.display="none";
        infop4.style.display = "none";
        titanimg.style.display = "none";
         datedivoftitan1.style.display="none";
         datedivoftitan2.style.display="none";
 
    }
    else {
        infop2.style.display = "block";
        marsimg.style.display = "block";
        datedivofmars1.style.display="block";
        datedivofmars2.style.display="block";
       
    }
    clickcount++;
    
console.log(clickcount);
}

europa.onclick = function() {
    if (infop3.style.display === "none") {
        infop3.style.display = "block";
        europaimg.style.display = "block";
        datedivofeuropa1.style.display="block";
        datedivofeuropa2.style.display="block";
        infop2.style.display = "none";
        marsimg.style.display = "none";
        datedivofmars1.style.display="none";
        datedivofmars2.style.display="none";
        infop.style.display = "none";
        moonimg.style.display = "none";
        datedivofmoon1.style.display="none";
        datedivofmoon2.style.display="none";
        infop4.style.display = "none";
        titanimg.style.display = "none";
         datedivoftitan1.style.display="none";
         datedivoftitan2.style.display="none";
    }
 
    
    else {
        infop3.style.display = "block";
        europaimg.style.display = "block";
        datedivofeuropa1.style.display="block";
        datedivofeuropa2.style.display="block";


      
    }
    clickcount++;
    
console.log(clickcount);
}


titan.onclick = function() {
    if (infop4.style.display === "none") {
        infop4.style.display = "block";
       titanimg.style.display = "block";
        datedivoftitan1.style.display="block";
        datedivoftitan2.style.display="block";
        infop.style.display = "none";
        moonimg.style.display = "none";
        datedivofmoon1.style.display="none";
        datedivofmoon2.style.display="none";
        infop2.style.display = "none";
        marsimg.style.display = "none";
        datedivofmars1.style.display="none";
        datedivofmars2.style.display="none";
        infop3.style.display = "none";
        europaimg.style.display = "none";
        datedivofeuropa1.style.display="none";
        datedivofeuropa2.style.display="none";


     
    }
 
    
    else {
        infop4.style.display = "block";
        titanimg.style.display = "block";
         datedivoftitan1.style.display="block";
         datedivoftitan2.style.display="block";


      
    }
    clickcount++;
    
console.log(clickcount);
}






crewbtn.onclick = function() {
    if (crew.style.display === "none") {
        crew.style.display = "flex";
        downdiv.style.display = "none";
        destination.style.display = "none";
        technology.style.display = "none";
        infopofcommander.style.display = "block";
        commanderimg.style.display = "block";
         commanderbtn.style.backgroundColor="white"
        infopofmark.style.display = "none";
        markimg.style.display = "none";
        infopofvictor.style.display = "none";
        victorimg.style.display = "none";
        infopofanousheh.style.display = "none";
        anoushehimg.style.display = "none";



    }
    else {
        crew.style.display = "flex";
        downdiv.style.display = "none";
        technology.style.display = "none";
        infopofcommander.style.display = "block";
        commanderimg.style.display = "block";
         commanderbtn.style.backgroundColor="white"
         infopofmark.style.display = "none";
         markimg.style.display = "none";
         infopofvictor.style.display = "none";
         victorimg.style.display = "none";
         infopofanousheh.style.display = "none";
         anoushehimg.style.display = "none";
    }
    clickcount++;
    console.log(clickcount);

}
commanderbtn.onclick = function() {
    if (infopofcommander.style.display === "none") {
        infopofcommander.style.display = "block";
        commanderimg.style.display = "block";
         commanderbtn.style.backgroundColor="white"
        infopofmark.style.display = "none";
        markimg.style.display = "none";
        infopofvictor.style.display = "none";
        victorimg.style.display = "none";
        infopofanousheh.style.display = "none";
        anoushehimg.style.display = "none";

    }
    else {
        infopofcommander.style.display = "block";
        commanderimg.style.display = "block";
             infopofmark.style.display = "none";
        markimg.style.display = "none";
        infopofvictor.style.display = "none";
        victorimg.style.display = "none";
        infopofanousheh.style.display = "none";
        anoushehimg.style.display = "none";

    }
    clickcount++;
    console.log(clickcount);

}
markbtn.onclick = function() {
    if (infopofmark.style.display === "none") {
        infopofmark.style.display = "block";
        markimg.style.display = "block";
        markbtn.style.backgroundColor="white"
        infopofcommander.style.display = "none";
        commanderimg.style.display = "none";
        infopofvictor.style.display = "none";
        victorimg.style.display = "none";
        infopofanousheh.style.display = "none";
        anoushehimg.style.display = "none";

    }
    else {
        infopofmark.style.display = "block";
        markimg.style.display = "block";
        markbtn.style.backgroundColor="rgb(202, 198, 198)";
        

    }
    clickcount++;
    console.log(clickcount);

}

victorbtn.onclick = function() {
    if (infopofvictor.style.display === "none") {
        infopofvictor.style.display = "block";
        victorimg.style.display = "block";
        victorbtn.style.backgroundColor="white"
        infopofcommander.style.display = "none";
        commanderimg.style.display = "none";
        infopofmark.style.display = "none";
        markimg.style.display = "none";
        infopofanousheh.style.display = "none";
        anoushehimg.style.display = "none";



    }
    else {
        infopofvictor.style.display = "block";
        victorimg.style.display = "block";
        victorbtn.style.backgroundColor="rgb(202, 198, 198)";

    }
    clickcount++;
    console.log(clickcount);

}

anoushehbtn.onclick = function() {
    if (infopofanousheh.style.display === "none") {
        infopofanousheh.style.display = "block";
        anoushehimg.style.display = "block";
        anoushehbtn.style.backgroundColor="white"
        infopofcommander.style.display = "none";
        commanderimg.style.display = "none";
        infopofmark.style.display = "none";
        markimg.style.display = "none";
        infopofvictor.style.display = "none";
        victorimg.style.display = "none";


    }
    else {
        infopofanousheh.style.display = "block";
        anoushehimg.style.display = "block";
        anoushehbtn.style.backgroundColor="rgb(202, 198, 198)"

    }
    clickcount++;
    console.log(clickcount);

}

technologybtn.onclick = function() {
    if (technology.style.display === "none") {
        technology.style.display = "flex";
        vehicle.style.color="black"
        vehiclediv.style.display = "block";
        downdiv.style.display = "none";
        destination.style.display = "none";
        crew.style.display = "none";
        infopofcommander.style.display = "block";
        commanderimg.style.display = "block";
         commanderbtn.style.backgroundColor="white"
        infopofmark.style.display = "none";
        markimg.style.display = "none";
        infopofvictor.style.display = "none";
        victorimg.style.display = "none";
        infopofanousheh.style.display = "none";
        anoushehimg.style.display = "none";



    }
    else {
        vehicle.style.color="black"
        vehiclediv.style.display = "block";
        technology.style.display = "flex";
        downdiv.style.display = "none";
              destination.style.display = "none";
        crew.style.display = "none";
        infopofcommander.style.display = "none";
        commanderimg.style.display = "none";
             infopofmark.style.display = "none";
         markimg.style.display = "none";
         infopofvictor.style.display = "none";
         victorimg.style.display = "none";
         infopofanousheh.style.display = "none";
         anoushehimg.style.display = "none";
    }
    clickcount++;
    console.log(clickcount);

}

vehicle.onclick = function() {
    if (vehiclediv.style.display === "none") {

        vehicle.style.backgroundColor="white";
        vehicle.style.color="black"
        vehiclediv.style.display = "block";
                vehicleimg.style.display="block";
        downdiv.style.display = "none";
        destination.style.display = "none";
        crew.style.display = "none";
        infopofcommander.style.display = "block";
        commanderimg.style.display = "block";
         commanderbtn.style.backgroundColor="white"
        infopofmark.style.display = "none";
        markimg.style.display = "none";
        infopofvictor.style.display = "none";
        victorimg.style.display = "none";
        infopofanousheh.style.display = "none";
        anoushehimg.style.display = "none";
        spaceportdiv.style.display = "none";
        spaceportimg.style.display="none";
        capsulediv.style.display = "none";
        capsuleimg.style.display="none";



    }
    else {
        vehicle.style.backgroundColor="none";
         spaceport.style.backgroundColor="none";
        vehiclediv.style.display = "block";
        vehicleimg.style.display="block";
        downdiv.style.display = "none";
              destination.style.display = "none";
        crew.style.display = "none";
        infopofcommander.style.display = "none";
        commanderimg.style.display = "none";
             infopofmark.style.display = "none";
         markimg.style.display = "none";
         infopofvictor.style.display = "none";
         victorimg.style.display = "none";
         infopofanousheh.style.display = "none";
         anoushehimg.style.display = "none";
         spaceportdiv.style.display = "none";
         spaceportimg.style.display="none";
         capsulediv.style.display = "none";
         capsuleimg.style.display="none";
    }
    clickcount++;
    console.log(clickcount);

}


spaceport.onclick = function() {
    if (spaceportdiv.style.display === "none") {
        spaceport.style.backgroundColor="white";
          spaceport.style.color="black"
        spaceportdiv.style.display = "block";
                spaceportimg.style.display="block";
        downdiv.style.display = "none";
        destination.style.display = "none";
        crew.style.display = "none";
        infopofcommander.style.display = "block";
        commanderimg.style.display = "block";
         commanderbtn.style.backgroundColor="white"
        infopofmark.style.display = "none";
        markimg.style.display = "none";
        infopofvictor.style.display = "none";
        victorimg.style.display = "none";
        infopofanousheh.style.display = "none";
        anoushehimg.style.display = "none";
        vehiclediv.style.display = "none";
        vehicleimg.style.display="none";
        capsulediv.style.display = "none";
        capsuleimg.style.display="none";

    }
    else {
        spaceport.style.backgroundColor="none";
        spaceportdiv.style.display = "block";
        spaceportimg.style.display="block";
        downdiv.style.display = "none";
              destination.style.display = "none";
        crew.style.display = "none";
        infopofcommander.style.display = "none";
        commanderimg.style.display = "none";
             infopofmark.style.display = "none";
         markimg.style.display = "none";
         infopofvictor.style.display = "none";
         victorimg.style.display = "none";
         infopofanousheh.style.display = "none";
         anoushehimg.style.display = "none";
         vehiclediv.style.display = "none";
         vehicleimg.style.display="none";
         capsulediv.style.display = "none";
         capsuleimg.style.display="none";
    }
    clickcount++;
    console.log(clickcount);

}

capsule.onclick = function() {
    if (capsulediv.style.display === "none") {
        capsule.style.backgroundColor="white";
          capsule.style.color="black"
        capsulediv.style.display = "block";
        capsuleimg.style.display="block";
        downdiv.style.display = "none";
        destination.style.display = "none";
        crew.style.display = "none";
        infopofcommander.style.display = "block";
        commanderimg.style.display = "block";
         commanderbtn.style.backgroundColor="white"
        infopofmark.style.display = "none";
        markimg.style.display = "none";
        infopofvictor.style.display = "none";
        victorimg.style.display = "none";
        infopofanousheh.style.display = "none";
        anoushehimg.style.display = "none";
        vehiclediv.style.display = "none";
        vehicleimg.style.display="none";
        spaceportdiv.style.display = "none";
        spaceportimg.style.display="none";

    }
    else {
        capsule.style.backgroundColor="none"; 
        capsulediv.style.display = "block";
        capsuleimg.style.display="block";
        downdiv.style.display = "none";
              destination.style.display = "none";
        crew.style.display = "none";
        infopofcommander.style.display = "none";
        commanderimg.style.display = "none";
             infopofmark.style.display = "none";
         markimg.style.display = "none";
         infopofvictor.style.display = "none";
         victorimg.style.display = "none";
         infopofanousheh.style.display = "none";
         anoushehimg.style.display = "none";
         vehiclediv.style.display = "none";
         vehicleimg.style.display="none";
         spaceportdiv.style.display = "none";
        spaceportimg.style.display="none";
    }
    clickcount++;
    console.log(clickcount);

    document.getElementsByClassName("mainbtns")
}
burgericon.onclick = function() {
    if (mainbtns.style.display === "none") {
mainbtns.style.display="block";
mainbtns.style.flexDirection="column"


    }}
















