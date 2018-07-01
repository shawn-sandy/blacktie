<bt-page-component>

	<div class="page">
		<hr>
	</div>

	<div class="container section">
		<p class="subtitle is-3">HTML ELEMENTS</p>

		<div class="forms">
			<input type="text" placeholder="This is an input">
		</div>
	</div>
	<div class="container section">
		<p class="subtitle is-3">Color Elements (color-elm)</p>
		<div class="content">
			<p class="box subtitle is-6 blue-elm">blue-elm</p>
			<p class="box subtitle is-6 red-elm">red-elm</p>
			<p class="box subtitle is-6 orange-elm">orange-elm</p>
			<p class="box subtitle is-6 yellow-elm">yellow-elm</p>
			<p class="box subtitle is-6 green-elm">green-elm</p>
			<p class="box subtitle is-6 lightgray-elm">lightgray-elm</p>
			<p class="box subtitle is-6 whitesmoke-elm">whitesmoke-elm</p>
			<p class="box subtitle is-6 gray-elm">gray-elm</p>
			<p class="box subtitle is-6 gray-dark-elm">gray-dark-elm</p>
			<p class="box subtitle is-6 black-pearl-elm">black-pearl-elm</p>
			<p class="box subtitle is-6 dark-blue-elm">dark-blue-elm</p>
			<p class="box subtitle is-6 black-elm">black-elm</p>
			<hr>
			<button class="button dark-blue-elm-button">Button</button>
			<button class="button whitesmoke-elm-button">Button</button>
			<button class="button yellow-elm-button">Button</button>
			<button class="button orange-elm-button">Button</button>
			<button class="button green-elm-button">Button</button>
			<button class="button blue-elm-button">Button</button>
		</div>
	</div>

	<div class="container section">
		<div class="content">
			<p class="subtitle is-3">Confirm Actions</p>
			<p>
				<bt-btn-confirm url="/me"></bt-btn-confirm>
				<bt-btn-confirm label="Remove Button" confirmation="Please Confirm" elm-class="green-elm-button" /></bt-btn-confirm>
			</p>
		</div>
	</div>

	<div class="container section">

		<div class="">
			<p class="subtitle is-3">Truncate Text Component</p>
			<hr>
		</div>

		<p>
			<strong>This text has been truncated</strong>

			<bt-truncate limit="10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae maiores neque tenetur magnam corrupti quod autem recusandae,
				deleniti, pariatur, libero consequuntur architecto dolor perspiciatis quidem corporis? Fugiat, neque quos?
			</bt-truncate>
		</p>

		<p>
			<bt-truncate limit="25">
				Another set... Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae maiores neque tenetur magnam corrupti
				quod autem recusandae, deleniti, pariatur, libero consequuntur architecto dolor perspiciatis quidem corporis? Fugiat,
				neque quos?
			</bt-truncate>
		</p>

	</div>

	<div class="container section">
		<div class="content">
			<p class="subtitle is-3">Loaders</p>
			<div class="columns">
				<div class="column is-2">

					<bt-card elm-class="card-elm gray-dark-elm elm-rds-medium">
						<div class="has-text-centered">
							<p class="is-capitalized">Spimple spinning Loader</p>
							<bt-loader-spin></bt-loader-spin>
						</div>
					</bt-card>

				</div>
			</div>
			<p>
				<bt-loader-processing></bt-loader-processing>
			</p>

		</div>
	</div>

	<div class="container section">
		<div class="content">
			<p class="subtitle is-3">Riot Icons</p>

			<p class="flex-elm col-6">
				<bt-icon></bt-icon>
				<bt-icon icon="i-search" icon-class="bt-icon-sm"></bt-icon>
				<bt-icon icon="i-search" icon-class="bt-icon-md"></bt-icon>
				<bt-icon icon="add-shopping-cart" icon-class="bt-icon-md"></bt-icon>
				<bt-icon-material></bt-icon-material>
				<bt-icon-bytes></bt-icon-bytes>
			</p>
		</div>
	</div>

	<section class="section container">
		<div class="subtitle is-3">Images</div>
		<bt-image caption-style="centered left bottom">
			<h1 class="title elm-color-white">
				Some Caption here
			</h1>
		</bt-image>
	</section>

	<div class="section container">
		<p class="subtitle is-3">File Upload Component </p>
		<div class="content">
			<p>
				<bt-upload field-name="sample-upload" />
			</p>
			<p>
				<bt-upload color="dark-blue" />
			</p>
			<p>
				<bt-upload-rounded color="red" elm-class="elm-rds-rounded"> Upload Label
				</bt-upload-rounded>
			</p>
		</div>
	</div>

	<section class="section container">
		<div class="container-fluid">

			<p class="subtitle is-3">Cards</p>
			<div class="columns">

				<div class="column">
					<bt-card>
						<p class="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, doloribus!!!!
						</p>
					</bt-card>
				</div>

				<div class="column">
					<bt-card elm-class="orange-elm elm-background-transparent">
						<p class="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, doloribus!!!!
						</p>
					</bt-card>
				</div>

				<div class="column">
					<bt-card elm-class="gray-elm elm-rds-medium">
						<p class="">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, doloribus!!!!
						</p>
					</bt-card>
				</div>

				<div class="column">
					<bt-card>
						<div class="has-text-centered">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, doloribus!
						</div>
					</bt-card>
				</div>

			</div>
		</div>
	</section>

	</div>
</bt-page-component>
