// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// menuResolution.js

function menuResolution(whichArray)
{
    let resolutions =
    [
        1000,
        10000,
        100000,
        1000000,
        10000000
    ];

    if (ge('menuResolutionDiv'))
    {
        ge('menuResolutionDiv').remove();
    }

    //-//

    let menuResolutionDiv = ce('div');
    menuResolutionDiv.id = 'menuResolutionDiv';
    menuResolutionDiv.style.position = 'fixed';
    menuResolutionDiv.style.left = 5 + 'px';
    menuResolutionDiv.style.bottom = 5 + 'px';
    menuResolutionDiv.style.height = 170 + 'px';
    menuResolutionDiv.style.borderStyle = 'solid';
    menuResolutionDiv.style.borderWidth = 1 + 'px';
    menuResolutionDiv.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    menuResolutionDiv.style.borderRadius = 5 + 'px';
    menuResolutionDiv.style.overflowY = 'scroll';
    ba(menuResolutionDiv);

    //-//

    let closeButton = ce('button');
    closeButton.innerHTML = 'X';
    closeButton.className = 'buttonStyle001';
    closeButton.onclick = function()
    {
        ge('sfx_blip_001').play();
        ge('menuResolutionDiv').remove();
    };
    closeButton.style.position = 'relative';
    closeButton.style.left = 0 + 'px';
    closeButton.style.zIndex = 20;
    menuResolutionDiv.append(closeButton);

    //-//

    let theResolutionTitle = ce('div');
    theResolutionTitle.innerHTML = '&nbsp' + 'Resolution';
    theResolutionTitle.style.color = 'rgb(255, 255, 255)';
    menuResolutionDiv.append(theResolutionTitle);

    //-//

    let theResolutionInput = ce('textarea');
    theResolutionInput.id = 'theResolutionInput';
    theResolutionInput.className = 'resolutionInput';
    theResolutionInput.style.height = 30 + 'px';
    theResolutionInput.title = 'Enter a Resolution such as:\n1000\n2500\n7000\n10000\n1000000';
    theResolutionInput.onkeyup = function()
    {
        resolution = theResolutionInput.value;
        makeLocationMarker();
    }
    menuResolutionDiv.append(theResolutionInput);

    //-//

    for (let x = 0; x < resolutions.length; x++)
    {
        let resolutionButton = ce('button');
        resolutionButton.className = 'buttonStyle001';
        resolutionButton.innerHTML = resolutions[x];
        resolutionButton.onclick = function()
        {
            ge('sfx_blip_001').play();

            resolution = resolutions[x];

            makeLocationMarker();

            ge('theResolutionInput').value = resolutions[x];
        };
        resolutionButton.onmouseover = function()
        {
            ge('sfx_warp_001').play();
        };
        resolutionButton.style.display = 'flex';
        resolutionButton.style.display = 'row';
        menuResolutionDiv.append(resolutionButton);
    }
}

