// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// menuOfFunctions.js

let theFunctions =
[
    {
        name: 'menuResolution(locations)',
        fullName: 'menuResolution',
        description: 'Resolution'
    },

    {
        name: 'menuLocations(locations)',
        fullName: 'menuLocations',
        description: 'Locations'
    }
];

function menuOfFunctions()
{
    if (ge('menuOfFunctionsDiv'))
    {
        ge('menuOfFunctionsDiv').remove();
    }

    //-//

    // menuOfFunctionsDiv
    let menuOfFunctionsDiv = ce('div');
    menuOfFunctionsDiv.style.position = 'fixed';
    menuOfFunctionsDiv.style.left = 0 + 'px';
    menuOfFunctionsDiv.style.top = 22 + 'px';
    menuOfFunctionsDiv.style.zIndex = 1000;
    menuOfFunctionsDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    menuOfFunctionsDiv.id = 'menuOfFunctionsDiv';
    ba(menuOfFunctionsDiv);

    //-//

    let minimizeButton = ce('button');
    minimizeButton.innerHTML = '_';
    minimizeButton.className = 'buttonStyle001';
    minimizeButton.style.position = 'absolute';
    minimizeButton.style.left = 0 + 'px';
    minimizeButton.style.top = -22 + 'px';
    minimizeButton.onclick = function()
    {
        ge('sfx_blip_001').play();

        // minimize height of the window to show only _ and □
        ge('buttonDiv').style.height = 0 + 'px';
    };
    menuOfFunctionsDiv.append(minimizeButton);

    //-//

    let maximizeButton = ce('button');
    maximizeButton.innerHTML = '□';
    maximizeButton.className = 'buttonStyle001';
    maximizeButton.style.position = 'absolute';
    maximizeButton.style.left = 28 + 'px';
    maximizeButton.style.top = -22 + 'px';
    maximizeButton.onclick = function()
    {
        ge('sfx_blip_001').play();
        ge('buttonDiv').style.height = 200 + 'px';
    };
    menuOfFunctionsDiv.append(maximizeButton);

    //-//

    let buttonDiv = ce('div');
    buttonDiv.innerHTML = '<br>';
    buttonDiv.id = 'buttonDiv';
    buttonDiv.className = 'scrolling';
    buttonDiv.style.float = 'left';
    buttonDiv.style.overflowY = 'auto';
    buttonDiv.style.resize = 'both';
    buttonDiv.style.height = 200 + 'px';
    buttonDiv.style.minWidth = '150px';
    buttonDiv.style.marginLeft = 'auto';
    buttonDiv.style.marginRight = 'auto';
    menuOfFunctionsDiv.append(buttonDiv);

    //-//

    for (let x = 0; x < theFunctions.length; x++)
    {
        let theButton = ce('button');
        theButton.innerHTML = theFunctions[x].description;
        theButton.style.display = 'flex';
        theButton.style.flexDirection = 'row';
        theButton.className = 'buttonStyle001';
        theButton.title = theFunctions[x].fullName;
        theButton.onclick = function()
        {
            ge('sfx_blip_001').play();

            eval(''+theFunctions[x].name+'' + ';');

            console.log(''+theFunctions[x].name+'');
        };
        theButton.onmouseover = function()
        {
            ge('sfx_warp_001').play();
        };
        buttonDiv.append(theButton);

        //-//

        ge('buttonDiv').style.height = 0 + 'px';
    }
}

