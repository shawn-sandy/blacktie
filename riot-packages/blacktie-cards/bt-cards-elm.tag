<bt-card>
	<div class={ cardClasses }>
		<yield from="header"></yield>
		<div class={ opts.contentClasses || "card-elm-content"}>
			<yield></yield>
		</div>
		<yield from="footer"></yield>
	</div>
	<script>
		const customClasses = opts.elmClass || "";
		this.cardClasses = "card-elm " + customClasses;
	</script>
	<style type="text/scss">
	@import "./_cards.scss";
	</style>
</bt-card>
