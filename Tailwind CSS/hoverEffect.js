let days = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let optionsContainer = document.getElementById("optionsContainer");

days.map((val, ind) => {
  let option = document.createElement("div");
  option.innerHTML = `
        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            ${val}
            </a>
        `;

  optionsContainer.append(option);
});
