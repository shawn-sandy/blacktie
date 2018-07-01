<bt-svg-icon>
    <use href={ src +"#"+ icon }></use>
    <script>
    this.src = opts.src || "/icons/material-icons.svg"
    this.icon = opts.icon || "circle"
    </script>
    <style>
        :scope {
            display: inline-block;
        }
    </style>
</bt-svg-icon>
