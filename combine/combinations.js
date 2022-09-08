/* How elements are made


"elementId":{"crafting":{"item1":"Item 1","item2":"Item 2"},"info":{"name":"Element Name","color":"HEX CODE"}}

*/

allElements = {
    // Starter Elements
    "fire":{"info":{"name":"Fire","color":"#f55920","nest":"fireNest"},
    "crafting":{"water":"energy","earth":"magma"}},

    "water":{"info":{"name":"Water","color":"#3f60d9","nest":"waterNest"},
    "crafting":{"fire":"energy","water":"lake","earth":"mud","cloud":"rain cloud"}},

    "earth":{"info":{"name":"Earth","color":"#7a502d","nest":"earthNest"},
    "crafting":{"water":"mud","fire":"magma"}},

    "air":{"info":{"name":"Air","color":"#c4c4c4","nest":"airNest"},
    "crafting":{"air":"wind","wind":"cloud"}},

    // fire tree

    "energy":{"info":{"name":"Energy","color":"#f2e122","nest":"fireNest"},
    "crafting":{"rain cloud":"thunder cloud","swamp":"life"}},

    "magma":{"info":{"name":"Magma","color":"#cf731d","nest":"fireNest"},
    "crafting":{}},

    // water tree

    "lake":{"info":{"name":"Lake","color":"#203cf5","nest":"waterNest"},
    "crafting":{"mud":"swamp"}},

    "swamp":{"info":{"name":"Swamp","color":"#253454","nest":"waterNest"},
    "crafting":{"energy":"life"}},

    // earth tree

    "mud":{"info":{"name":"Mud","color":"#4d3a2f","nest":"earthNest"},
    "crafting":{"lake":"swamp"}},

    // air tree

    "wind":{"info":{"name":"Wind","color":"#a1a1a1","nest":"airNest"},
    "crafting":{"air":"cloud"}},

    "cloud":{"info":{"name":"Cloud","color":"#e8e8e8","nest":"airNest"},
    "crafting":{"water":"rain cloud"}},

    "rain cloud":{"info":{"name":"Rain Cloud","color":"#909fb0","nest":"airNest"},
    "crafting":{"energy":"thunder cloud"}},

    "thunder cloud":{"info":{"name":"Thunder Cloud","color":"#bda131","nest":"airNest"},
    "crafting":{}},

    // life tree

    "life":{"info":{"name":"Life","color":"#23cf1d","nest":"lifeNest"},
    "crafting":{}}

}