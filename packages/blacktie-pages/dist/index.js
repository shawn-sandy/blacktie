riot.tag2('demo-page', '<div class="container"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium eligendi vitae sapiente tenetur maiores est impedit officiis beatae! Doloremque, repellat dicta velit qui inventore cum dolores ea non quaerat corrupti. Pariatur alias, vitae est eaque, quae ipsum quas, ab iure enim consectetur temporibus exercitationem quo. Cumque esse tempore nam.</p> </div>', '', '', function(opts) {
});

import route from 'riot-route'
riot.tag2('bt-page', '<main data-is="{page}"></main>', '', '', function(opts) {


		var self = this
		const links = {
			home: "/",
			components: "bt-components"
		}
		route.start(true)

		self.page = opts.defaultPage || 'demo-page'

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
