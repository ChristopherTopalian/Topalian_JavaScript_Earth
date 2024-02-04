// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeLocationMarker.js

function makeLocationMarker()
{
    let w = ge("world").style.width = resolution;
    let h = ge("world").style.height = resolution;

    for (let x = 0; x < locations.length; x++)
    {
        let locationMarker = ce("div");
        locationMarker.innerHTML = x;
        locationMarker.id = x;
        locationMarker.className = "locationMarker";
        locationMarker.title = locations[x].name;
        ba(locationMarker);

        //-//

        let theX = ((w / 360) * (180 + locations[x].longitude)); 

        let theY = ((h / 180) * (90 - locations[x].latitude));

        //-//

        locationMarker.onclick = function()
        {
            ge("sfx_blip_001").play();

            ge("latitudeLongitude").value = locations[x].name;

            ge(x).style.backgroundColor = "rgb(0, 255, 255)";

            setTimeout(function()
            {
                ge(x).style.backgroundColor = "rgb(0, 0, 0)";
            }, 1000);
        };

        ge(x).style.left = theX + "px";
        ge(x).style.top = theY + "px";
    }
}

