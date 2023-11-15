// Park Type Array
const parkTypes = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway",
  ];

let parkDropdownEl = document.getElementById("parkDropdown");




window.onload = () => {
    parkLoop();
    

    parkDropdownEl.onchange = () => {

        
    }
}

// Loop 
function parkLoop(){
    for(let i = 0; i < parkTypes.length; i++){
        let parks = parkTypes[i];
        
        let parkCategory = new Option(parks);
        parkDropdownEl.appendChild(parkCategory);
    }
}