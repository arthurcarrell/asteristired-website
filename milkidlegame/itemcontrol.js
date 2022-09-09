function showitemText(item){
    item = youritems[item]
    itemText.innerHTML = `<h3 class="${item["iteminfo"]["rarity"]}">${item["iteminfo"]["name"]}</h3><br>`
    if (item["iteminfo"]["on-click"] !== "empty"){itemText.innerHTML += `<p class="${item["iteminfo"]["rarity"]}"><b>ON CLICK:</b> ${item["text"]["clickability"]["name"]}</p><p class="infoTextColor">${item["text"]["clickability"]["description"]}</p>`}
    if (item["iteminfo"]["on-tick"] !== "empty"){itemText.innerHTML += `<p class="${item["iteminfo"]["rarity"]}"><b>PASSIVE:</b> ${item["text"]["tickability"]["name"]}</p><p class="infoTextColor">${item["text"]["tickability"]["description"]}</p>`}
    itemText.innerHTML += `<br><h3 class="${item["iteminfo"]["rarity"]}">${item["iteminfo"]["rarity"]}</h3>`
    if (item["iteminfo"]["tags"].includes("UPGRADED")){itemText.innerHTML += '<p class="infoTextColor"><i>(Upgraded)</i></p>';}
}

function grantitem(item){
    if (allitems.hasOwnProperty(item) === false){item = "null"}
    if (youritems.hasOwnProperty(item) === false){
        youritems[item] = allitems[item]
        items.innerHTML += `<img src="textures/${youritems[item]["iteminfo"]["texture"]}" height=50 width=50 onmouseover="showitemText('${item}')" onclick="useitem('${item}')" class="item">`;
    } else if (youritems[item]["iteminfo"]["amount"] >= youritems[item]["iteminfo"]["maxamount"]) {
       grantmilk(youritems["iteminfo"]["sellamount"])
    } else {
        youritems[item]["iteminfo"]["amount"] += 1
    }
    
}

function upgradefeature(item){
    if (item === "cowbell"){youritems[item]["iteminfo"]["on-tick"] = "cowbellUpgrade";}
    if (item === "springitem"){youritems[item]["iteminfo"]["on-tick"] = "springitemUpgrade";}
    if (item === "summeritem"){youritems[item]["iteminfo"]["on-tick"] = "summeritemUpgrade";}
    if (item === "fallitem"){youritems[item]["iteminfo"]["on-tick"] = "fallitemUpgrade";}
    if (item === "winteritem"){youritems[item]["iteminfo"]["on-tick"] = "winteritemUpgrade";}
    if (item === "voiditem"){youritems[item]["iteminfo"]["on-tick"] = "voiditemUpgrade";}
}
function upgradeitem(item){
    if (youritems.hasOwnProperty(item)){ 
        let rarity = youritems[item]["iteminfo"]["rarity"]
        if (rarity == "COMMON"){youritems[item]["iteminfo"]["rarity"] = "UNCOMMON"} else
        if (rarity == "UNCOMMON"){youritems[item]["iteminfo"]["rarity"] = "RARE"} else
        if (rarity == "RARE"){youritems[item]["iteminfo"]["rarity"] = "EPIC"} else
        if (rarity == "EPIC"){youritems[item]["iteminfo"]["rarity"] = "LEGENDARY"} else
        if (rarity == "LEGENDARY"){youritems[item]["iteminfo"]["rarity"] = "MYTHIC"} else
        if (rarity == "MYTHIC"){youritems[item]["iteminfo"]["rarity"] = "DIVINE"}
        youritems[item]["iteminfo"]["tags"].push("UPGRADED");
        upgradefeature(item)
    }
}
function useitem(item){
    if (youritems[item]["iteminfo"]["manause"] <= manaAmount){
        manaAmount -= youritems[item]["iteminfo"]["manause"]
        clickUse = youritems[item]["iteminfo"]["on-click"]
        if (clickUse == "cowbellClick"){
            grantmilk((cow.amount * (0.1 * (Math.ceil(Cowhappy) / 5))) * 600000)
        } else if (clickUse == "switchSpring"){setSeason("Spring")}
        else if (clickUse == "switchSummer"){setSeason("Summer")}
        else if (clickUse == "switchFall"){setSeason("Fall")}
        else if (clickUse == "switchWinter"){setSeason("Winter")}
        else if (clickUse == "switchVoid"){setSeason("Void")}
    } else {
        alert("You do not have enough mana for this!!")
    }
}