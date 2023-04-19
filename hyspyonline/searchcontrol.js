var loaded = false;
function loadprofiledata(name){
    var dataShow;
    var client = new XMLHttpRequest();
    client.open('GET', `articles/${name}.txt`);
    client.onreadystatechange = function() {
        if (loaded == false){
            dataShow = client.responseText
            loadarticle(dataShow)
            if (client.responseText != ""){
                loaded = true;
            }
        }
    }
    client.send()
    titletxt.innerHTML = `${name} - Hypixel Bedwars`;
}
var hypixelranks = {
    "NONE":{"color":"#707070","modifercolor":"#707070","text":""},
    "VIP":{"color":"#42ff1c","modifercolor":"#ff9d00","text":"VIP"},
    "MVP":{"color":"#17fffb","modifercolor":"#fc3f3f","text":"MVP"},
    "SUPERSTAR":{"color":"#ff9d00","modifercolor":"#fc3f3f","text":"MVP"},
    "ADMINISTRATOR":{"color":"#bf2222","modifercolor":"#fc3f3f","text":"ADMIN"},
    "OWNER":{"color":"#bf2222","modifercolor":"#fc3f3f","text":"OWNER"},
    "PIG":{"color":"#f25edc","modifercolor":"#17fffb","text":"PIG"}

}
function setrank(rank,modifer=""){
    return `<span style="color: ${hypixelranks[rank][color]};">${hypixelranks[rank][text]}</span><span style="color:${hypixelranks[rank][modifercolor]};">${modifer}</span>`
}
