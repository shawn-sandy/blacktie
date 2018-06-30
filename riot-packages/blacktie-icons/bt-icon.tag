<bt-icon>
	<svg class={ elmClass }>
		<use xlink:href={ icon }></use>
	</svg>
	<script>
		const name = opts.icon || 'account-circle'
		const src = opts.srcFile || '/icons/material-icons.svg'
		const elmClass = opts.iconClass || ''
		this.icon = src + "#" + name
		this.elmClass = 'bt-icon ' + elmClass
	</script>
	<style type="text/scss">

        :scope {
			display: inline-flex;
			overflow: hidden;
		}

		@import './style.scss';
    </style>
</bt-icon>
