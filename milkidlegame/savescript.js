console.log("savescript.js loaded!")

var savedata = ""
function createsavev2(){
    savedata = ""
    savedata += `<milk>${milk}</milk>`
    savedata += `<advancements>${advancements}</advancements>`
    for (let i = 0; i < allbuildings.length; i++){
        savedata += `<${allbuildings[i].name}>${allbuildings[i].amount}</${allbuildings[i].name}>`
    }
    savedata += `<cowhappy>${Cowhappy}</cowhappy>`

    localStorage.setItem("savedata",savedata)
}

var typedWord = '';
window.addEventListener('keypress', function(e){
  var c = String.fromCharCode(e.keyCode);
  typedWord += c.toLowerCase();
  if(typedWord.length > 7) typedWord = typedWord.slice(1);
  if(typedWord == 'devmode'){ajDev.style.display = "block"};
});
function deletesave(){
    console.log("Deleting Save.")
    localStorage.removeItem("savedata")
}

function getdataitem(item){
  try{
    let returndata = savedata.split(`<${item}>`)[1];
    returndata = returndata.split(`</${item}>`)[0];
    return returndata;
  } catch{
    console.error(`Could not find "${item}" in savedata`)
    return null
  }
}
function loadsavev2(){
    console.log("Fetching Save File...")
    savedata = window.localStorage.getItem("savedata")
    if (savedata != false){
        console.log("Found Save File. Loading save...")
        advancements = getdataitem("advancements").split(","); 
        milk = parseInt(getdataitem("milk"));
        for (let i = 0; i < allbuildings.length; i++){ // loads all buildings.
          if(getdataitem(getdataitem(allbuildings[i].name)) == null){grantbuilding(allbuildings[i],parseInt(getdataitem(allbuildings[i].name)));}
        }
        Cowhappy = parseFloat(getdataitem("cowhappy"))
    } else {
      console.log("Could not find save file...")
      Cowhappy = 5;
    }
}

function transfersave(){
  console.log("Getting Cookie...")
  cookie = getCookie("savedata")
  localStorage.setItem("savedata",cookie)
  delete_cookie("savedata")
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

if (getCookie("savedata") != ""){
  let saveTransfer = confirm("Cookies are no longer used in milk clicker. localStorage is used.\nTransfer cookie data to localStorage? (Cookie data will be lost forever if declined.)")
  if (saveTransfer == true){transfersave();loadsavev2()} else {delete_cookie("savedata")}

}

/* how old save files looked:
1/2/6/4/23423424.3/2/44

how the new ones will look
<advancements>349</advancements><cowsAmount>123</cowsAmount>

*/