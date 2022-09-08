var mods = {}
function initPack(packname,author,functionToRun){
    mods[packname] = author
    packsandCredits.innerHTML += `<br>${packname} by ${author}<br>`;
    functionToRun
}

/* function arthursExampleMod(){
    makeElementNest("gamingNest");
    allElements["gaming"] = {"info":{"name":"OwO epic gaming","color":"#3f60d9","nest":"gamingNest"},
    "crafting":{"life":"epic gamer"}};
    allElements["epic gamer"] = {"info":{"name":"Epic Gamer UwU","color":"#3f60d9","nest":"gamingNest"},
    "crafting":{"life":"epic gamer"}};
    allElements["earth"]["crafting"]["air"] = "gaming";
    allElements["life"]["crafting"]["gaming"] = "epic gamer";
    allElements["air"]["crafting"]["earth"] = "gaming";
    alert("This entire Mod Pack is an example and a joke LOL")
} 
initPack("Arthur's Example Pack","Arthur",arthursExampleMod())
*/

/* If you dont know how to make a pack, thats an example */