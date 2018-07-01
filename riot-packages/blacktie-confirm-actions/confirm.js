const classes = opts.elmClass || "";

		this.urlLink = opts.url || "";
		this.buttonLabel = opts.label || "Delete";
		this.confirmation = opts.confirmation || "Confirm";
		this.timer = opts.timeout || 3000;
		this.elmClass = 'button ' + classes;

		handleClickActions(e) {
			const elm = e.target;

			if (this.confirmation === elm.textContent.trim()) {
				elm.textContent = this.buttonLabel;
			} else {

				elm.textContent = this.confirmation;
				setTimeout(() => {
					elm.textContent = this.buttonLabel;
				}, this.timer);
				e.preventDefault();
			}
		}

		this.on('mount', () => {

		});
