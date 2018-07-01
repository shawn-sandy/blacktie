<bt-icon class="components">
	<svg class={class }>
		<use xmlnsXlink"http://www.w3.org/1999/xlink" xlink:href={ icon }></use>
	</svg>
	<script>

		this.url = opts.url || '/icons/bytesize-symbols.min.svg#'
		this.icon = this.url + opts.svg
		this.class = opts.classNames ? 'animated fadeIn '+opts.classNames : 'svg-elm-64 animated fadeIn'
		const getSvg = document.querySelector('use')

		console.log('svg', getSvg);

	</script>
</bt-icon>
