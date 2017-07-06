import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'photo-gallery',
	templateUrl: 'photo-gallery.html',
	styleUrls: ['photo-gallery.scss']
})
export class PhotoGalleryComponent implements OnInit {

	list: Array<any> = [];

	options: any = {
		columnWidth: '.sizer',
		itemSelector: '.brick',
		percentPosition: true
	};

	ngOnInit() {
		this.list = Array.apply(null, {length: 12}).map(Number.call, Number);
	}
}
