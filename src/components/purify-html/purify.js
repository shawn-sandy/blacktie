const purify = require("dompurify");

this.on("mount", function() {
  const elm = document.querySelector(".bt-purify-html");
  const el = elm.innerHTML;
  let content = purify.sanitize(el);

  console.log(content, "purify", elm);
});
