import { Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
//mport { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
//import { EditComponent } from './edit/edit.component';

export const ArticlesRoutes: Routes = [{
  path: 'courses',
  component: CoursesComponent,
  children: [
	{path: ':courseno', component: ListComponent},
//	{path: 'create', component: CreateComponent},
	{path: '', component: ViewComponent}
///	{path: ':articleId/edit', component: EditComponent}
  ],
}];
