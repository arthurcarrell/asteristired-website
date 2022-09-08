function setCookie(cname, cvalue, exdays=3640) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function loaddata(){
  if (getCookie("wordleTotalAttempts") >= 1) {
    stats["wins"] = getCookie("wordleWins").parseInt()
    stats["losses"] = getCookie("wordleLosses").parseInt()
    stats["totalAttempts"] = getCookie("wordleTotalAttempts").parseInt()
  } else {
    stats = {"wins":0,"losses":0,"totalAttempts":0}
  }
  if (getCookie("wordleTotalAttemptsChl") >= 1){
    challengestats["wins"] = getCookie("wordleWinsChl").parseInt()
    challengestats["losses"] = getCookie("wordleLossesChl").parseInt()
    challengestats["totalAttempts"] = getCookie("wordleTotalAttemptsChl").parseInt()
  } else {
    challengestats = {"wins":0,"losses":0,"totalAttempts":0}
  }
}

function savedata(){
    setCookie("wordleWins",stats["wins"].parseInt())
    setCookie("wordleLosses",stats["losses"].parseInt())
    setCookie("wordleTotalAttempts",stats["totalAttempts"].parseInt())

    setCookie("wordleWinsChl",challengestats["wins"].parseInt())
    setCookie("wordleLossesChl",challengestats["losses"].parseInt())
    setCookie("wordleTotalAttemptsChl",challengestats["totalAttempts"].parseInt())
}