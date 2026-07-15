let states = [];

fetch("nigeria-state-and-lgas.json")
  .then(response => response.json())
  .then(data => {
    states = data;

    let stateBox = document.getElementById("state");

    data.forEach(item => {
      let option = document.createElement("option");
      option.text = item.state;
      option.value = item.state;
      stateBox.add(option);
    });

    stateBox.addEventListener("change", function () {
      let selectedState = this.value;
      let lgaBox = document.getElementById("lga");

      lgaBox.innerHTML = "<option value=''>Select LGA</option>";

      let state = states.find(item => item.state === selectedState);

      if (state) {
        state.lgas.forEach(lga => {
          let option = document.createElement("option");
          option.text = lga;
          option.value = lga;
          lgaBox.add(option);
        });
      }
    });
  });

let voterCardForm = document.querySelector("form");

voterCardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Congratulations! Registration successful.");
});