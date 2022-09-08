var wowsosecret = 0;
var audio = document.getElementById("wowsosecret"); 
var infotxt = document.getElementById("infotxt")
var text = 0;
var quagclicks = 0;
function secret() { 
  infotxt.innerHTML = "WOW! you are a good searcher!<br>Looks like a secret has appeared!"
  alert("Secret admin powers activate! or maybe not.")
  beta.style = "display: inline;"
  audio.play();
  wowsosecret = 1
}
var typedWord = '';
window.addEventListener('keypress', function(e){
  var c = String.fromCharCode(e.keyCode);
  typedWord += c.toLowerCase();
  if(typedWord.length > 11) typedWord = typedWord.slice(1);
  if(typedWord == 'wowsosecret' && wowsosecret == 0){
      secret()
  }
});
var dooropen = 0;
var answer;
var doorclicks = 0;
function doormsg(){
    doorclicks += 1;
    switch(doorclicks){
      case 1:
        alert("The door refuses to budge.");
        break;
      case 2:
        alert("The door is locked...");
        break;
      case 3:
        alert("This door is not open.");
        break;
      case 4:
        alert("Its a locked door.");
        break;
      case 5:
        alert("You've clicked on this door for 5 times now. what are you expecting to change?");
        break;
      case 6:
        alert("You can check the website's code if you want, this door does literally nothing at the moment.");
        break;
      case 7:
        alert("Although I have big plans for what will be behind this door.");
        break;
      case 8:
        alert("Clicking on this door does nothing.");
        doorclicks = 7;
        break;
    }
}

function bypass(){
  console.log("oy, what ye doing in the console");
}

function quagclick(){
  quagclicks += 1
  if (quagclicks == 5 && wowsosecret == 0){
    secret()
  }
}