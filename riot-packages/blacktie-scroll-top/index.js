this.toggleButton = "elm-hide";
this.classes = opts.elmClass || "back-to-top animated bounceInUp";

const screenH = window.innerHeight;

this.on("mount", () => {
  elm = this.root.querySelector(".back-to-top");

  window.addEventListener("scroll", e => {
    if (window.pageYOffset > screenH) {
      elm.classList.remove("elm-hide");
    } else {
      elm.classList.add("elm-hide");
    }
  });
});
