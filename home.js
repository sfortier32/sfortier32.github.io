const filterButton = document.getElementById("filter-button");
const filterContainer = document.getElementById("filter-container");
const projectItems = document.querySelectorAll(".filter-item");
const listItems = document.querySelectorAll("li");

filterContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

filterButton.onclick = function (e) {
  e.stopPropagation();
  if (filterContainer.classList.contains("filters-active")) {
    filterContainer.classList.remove("filters-active");
  } else {
    filterContainer.classList.add("filters-active");
  }
};

window.addEventListener("click", (e) => {
  filterContainer.classList.remove("filters-active");
});

window.addEventListener("load", addListFilters);

function addListFilters() {
  for (let i = 0; i < listItems.length; i++) {
    let curItem = listItems[i];
    let input = curItem.getElementsByTagName("input")[0];
    curItem.addEventListener("click", updateFilters(input.id, input));
  }
}

function updateFilters(id, input) {
  return function (e) {
    e.preventDefault();
    input.checked = input.checked ? false : true;
    for (let i = 0; i < projectItems.length; i++) {
      let curItem = projectItems[i];
      if (curItem.classList.contains(id) && input.checked) {
        curItem.style.display = "block";
      } else if (curItem.classList.contains(id) && !input.checked) {
        let classList = Array.from(curItem.classList).slice(0, -1);
        if (classList.some((x) => document.getElementById(x).checked)) {
          curItem.style.display = "block";
        } else {
          curItem.style.display = "none";
        }
      }
    }
  };
}
