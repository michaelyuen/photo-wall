import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AdcIconModule } from './adc-icon/adc-icon.module';

@NgModule({
	exports: [
		AdcIconModule,
		CommonModule,
		HttpModule,
		RouterModule
	]
})
export class SharedModule {}
