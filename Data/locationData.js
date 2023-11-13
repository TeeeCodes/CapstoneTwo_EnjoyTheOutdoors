const states = [
  "Select One",
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "DC",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

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

let selectedStatesEl = document.getElementById("select-states");
let selectedParkTypesEl = document.getElementById("select-types");

window.onload = () => {
  populateStates();

  //   Populate Dropdown
  selectedStatesEl.onchange = () => {
    let selectedParkTypesEl = document.getElementById("select-types");
    selectedParkTypesEl.style.visibility = "visible";
    selectedParkTypesEl.options.length = 0;

    let option = new Option("Select One");
    selectedParkTypesEl.appendChild(option);

    //Loop
    for (let types of parkTypes) {
      let selectedType = states.value;
      if (types.name === selectedType) {
        let typeOption = new Option(types);
        selectedParkTypesEl.appendChild(typeOption);
      }
    }
  };

  //   Add Descriptions
};

//   Populate Dropdown
function populateStates() {
  let selectedStatesEl = document.getElementById("select-states");

  for (let i = 0; i < states.length; i++) {
    let stateNames = states[i];

    let stateOption = new Option(stateNames);

    selectedStatesEl.appendChild(stateOption);
  }
}
