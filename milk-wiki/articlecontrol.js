var loaded = false;
function loadarticledata(name){
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
    titletxt.innerHTML = `${name} - Milk Clicker Wiki`
}

function loadarticle(data){
    article = data.split("\n")
    article.forEach(element => {
        if (element.includes("==")){
            phr = element.split("==")[1]
            ShowPage.innerHTML += `<h1>${phr}</h1><p>___________</p>`

        } else if (element.includes("__")){
            phr = element.split("__")[1]
            ShowPage.innerHTML += `<h3>${phr}</h3><p>_____</p>`
        } 
        
        else {
            ShowPage.innerHTML += `${element}<br>`
        }
    });
}