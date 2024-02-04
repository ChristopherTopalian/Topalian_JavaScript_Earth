// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeLocationTextbox.js

function makeLocationTextbox()
{
    let locationTextbox = ce('textarea');
    locationTextbox.id = 'latitudeLongitude';
    locationTextbox.className = 'locationTextbox';
    locationTextbox.style.right = '5px';
    locationTextbox.style.bottom = '5px';
    ba(locationTextbox);
}

