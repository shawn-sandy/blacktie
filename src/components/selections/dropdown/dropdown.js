document.addEventListener(
  "click",
  e => {
    const addressButton = e.target;

    let timer;

    if (e.target.matches(".address-dropdown-btn")) {
      const btn = e.target;

      e.preventDefault();
      hidebtAddressList();
      console.log(e.target, "clicked arrow");
      //hidebtAddressTitle()

      const add = document.querySelector(".bt-address-list");
      add.addEventListener("mouseleave", e => {
        console.log("leave list", e.target);
        const aList = e.target;
        aList.classList.add("d-none");
      });
    }

    if (e.target.matches(".bt-address-option")) {
      e.preventDefault();
      console.log("address option", e.target.textContent);
      document.querySelector(
        ".bt-address-selected"
      ).value = e.target.textContent.trim();
      hidebtAddressList();
    }

    if (e.target.matches(".bt-address-select")) {
      console.log(e.target, "bt-address-list");
    }
  },
  false
);

function hidebtAddressList() {
  const add = document.querySelector(".bt-address-list");
  add.classList.toggle("d-none");
}
