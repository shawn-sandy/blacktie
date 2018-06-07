riot.tag2('demo-page', '<div class="container"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium eligendi vitae sapiente tenetur maiores est impedit officiis beatae! Doloremque, repellat dicta velit qui inventore cum dolores ea non quaerat corrupti. Pariatur alias, vitae est eaque, quae ipsum quas, ab iure enim consectetur temporibus exercitationem quo. Cumque esse tempore nam.</p> </div>', '', '', function(opts) {
});

import route from 'riot-route'
riot.tag2('bt-page', '<div data-is="{page}"></div>', '', '', function(opts) {
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
});
