class StackBlitzEmbed extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['name', 'height', 'view', 'open-file', 'hide-explorer', 'show-devtools'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback() {
		this.render();
	}

	get name() {
		return this.getAttribute('name') || '';
	}

	get height() {
		return this.getAttribute('height') || '600';
	}

	get view() {
		return this.getAttribute('view') || 'preview';
	}

	get openFile() {
		return this.getAttribute('open-file') || '';
	}

	get hideExplorer() {
		return this.hasAttribute('hide-explorer');
	}

	get showDevtools() {
		return this.hasAttribute('show-devtools');
	}

	render() {
		const iframe = document.createElement('iframe');
		const params = new URLSearchParams({
			embed: '1',
			hideExplorer: this.hideExplorer ? '1' : '0',
			file: this.openFile,
			view: this.view,
			devToolsHeight: this.showDevtools ? '50' : '0',
		});

		iframe.src = `https://stackblitz.com/edit/${this.name}?${params.toString()}`;
		iframe.height = this.height;
		iframe.style.width = '100%';
		iframe.style.border = 'none';

		// Clear previous content
		this.shadowRoot.innerHTML = '';
		this.shadowRoot.appendChild(iframe);
	}
}

customElements.define('stackblitz-embed', StackBlitzEmbed);
