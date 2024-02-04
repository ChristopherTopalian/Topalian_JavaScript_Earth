// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// menuLocations.js

function menuLocations(whichArray)
{
    let highlightColor = 'rgb(120, 120, 255)';
    let normalColor = 'rgb(0, 0, 0)';

    if (ge('menuLocationsDiv'))
    {
        ge('menuLocationsDiv').remove();
    }

    let menuLocationsDiv = ce('div');
    menuLocationsDiv.id = 'menuLocationsDiv';
    menuLocationsDiv.style.position = 'fixed';
    menuLocationsDiv.style.right = 5 + 'px';
    menuLocationsDiv.style.top = 20 + 'px';
    menuLocationsDiv.style.width = 200 + 'px';
    menuLocationsDiv.style.height = 380 + 'px';
    menuLocationsDiv.style.overflowY = 'scroll';
    menuLocationsDiv.style.borderStyle = 'solid';
    menuLocationsDiv.style.borderWidth = 1 + 'px';
    menuLocationsDiv.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    menuLocationsDiv.style.borderRadius = 5 + 'px';
    ba(menuLocationsDiv);

    //-//

    let closeButton = ce('button');
    closeButton.innerHTML = 'X';
    closeButton.onclick = function()
    {
        ge('sfx_blip_001').play();
        ge('menuLocationsDiv').remove();
    };
    closeButton.className = 'buttonStyle001';
    closeButton.style.position = 'relative';
    closeButton.style.left = 0 + 'px';
    closeButton.style.zIndex = 20;
    menuLocationsDiv.append(closeButton);

    //-//

    let theTitle = ce('div');
    theTitle.innerHTML = '&nbsp' + 'Locations';
    theTitle.style.color = 'rgb(255, 255, 255)';
    menuLocationsDiv.append(theTitle);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theButton = ce('button');
        theButton.style.display = 'flex';
        theButton.style.flexDirection = 'row';
        theButton.className = 'buttonStyle001';
        theButton.innerHTML = x + ' ' + whichArray[x].name;
        theButton.onclick = function()
        {
            ge('sfx_blip_001').play();

            scrollToLocation(x);

            ge(x).style.backgroundColor = highlightColor;

            ge('latitudeLongitude').value = whichArray[x].name + '\n' + whichArray[x].latitude + '\n' + whichArray[x].longitude;

            setTimeout(function()
            {
                ge(x).style.backgroundColor = normalColor;
            }, 1000);
        };
        theButton.onmouseover = function()
        {
            ge('sfx_warp_001').play();
        };
        menuLocationsDiv.append(theButton);
    }
}

