// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// loadSounds.js

let sounds =
[
    {
        name: `sfx_blip_001`,
        fileName: `media/sfx/sfx_blip_001.mp3`
    },

    {
        name: `sfx_warp_001`,
        fileName: `media/sfx/sfx_warp_001.mp3`
    }
];

function loadSounds(whichArray)
{
    for (let x = 0; x < whichArray.length; x++)
    {
        // theSound
        let theSound = ce('audio');
        theSound.id = whichArray[x].name;
        theSound.src = whichArray[x].fileName;
        theSound.volume = 1.0;
        theSound.style.display = 'none';
        ba(theSound);
    }
}

