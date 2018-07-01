<bt-page>
	<div data-is={ page }></div>
	<script>
		import route from 'riot-route'
		route.start(true)
		var self = this

		route(function (route) {
			if (route) {
				self.page = route;
			} else {
				self.page = opts.defaultPage
			}
			self.update()
			console.log('routes', self.page)
		})
	</script>
</bt-page>
