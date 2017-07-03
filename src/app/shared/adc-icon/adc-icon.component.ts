import { Component, Input } from '@angular/core';

@Component({
	selector: 'adc-icon',
	template:
	`
	<svg class="adc-icon">
		<use [attr.xlink:href]="baseUrl + '#' + name" />
	</svg>
	`,
	styles: [
	`
		:host { display: block; }
	`
	]
})
export class AdcIconComponent {

	baseUrl: String = SVG_PATH;
	@Input() name: String;
}
