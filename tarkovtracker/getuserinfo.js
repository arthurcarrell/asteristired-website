function setuserinfo(factionname, playername, playerlevel){
    faction.innerHTML = factionname.toUpperCase();
    username.innerHTML = playername;
    displaylevel.innerHTML = playerlevel;
}
    
setuserinfo("bear","asteristired",8)