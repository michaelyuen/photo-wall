import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MasonryModule } from 'angular2-masonry';
import { PhotoGalleryComponent } from './index';

@NgModule({
	imports: [
		MasonryModule,
		SharedModule
	],
	declarations: [PhotoGalleryComponent],
	exports: [PhotoGalleryComponent]
})
export class PhotoGalleryModule {}
