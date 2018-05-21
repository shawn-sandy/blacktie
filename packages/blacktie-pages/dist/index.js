import route from 'riot-route'
riot.tag2('bt-page', '<main data-is="{page}"></main>', '', '', function(opts) {
		var self = this
		const links = {
			home: "/",
			components: "bt-components"
		}
		route.start(true)

		self.page = 'bt-landing-page'

		route(function (page, id, action) {

			if (page) {
				self.page = page;
				switchComponent(self.page)
			}

			console.log('routes', self.page, id, action)

		})

		function switchComponent(page) {
			self.page = page
			self.update()
		}

});
