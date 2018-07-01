<bt-upload-rounded>
	<div
	data-is="bt-upload"
	color={ opts.color || "red" }
	elm-class={ styles }
	placeholder-classes={ placeholderClasses || "file-elm-placeholder" }
	label-classes={ opts.labelClasses || "" }
    upload-placeholder={ opts.placeholder || "Please select a file to upload"} }>
		<yield></yield>
	</div>
	<script>
		const classes = opts.elmClass || '';
		this.styles = "elm-rds-rounded " + classes;
	</script>
</bt-upload-rounded>
