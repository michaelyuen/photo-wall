import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: '',
				children: [
					// {
					// 	path: 'case',
					// 	loadChildren: './components/case/case.module#CaseModule'
					// },
					// {
					// 	path: 'scenario',
					// 	loadChildren: './components/scenario/scenario.module#ScenarioModule'
					// },
					// {
					// 	path: '',
					// 	redirectTo: 'scenario',
					// 	pathMatch: 'full'
					// }
				]
			}
		])
	]
})
export class AppRoutingModule {}
