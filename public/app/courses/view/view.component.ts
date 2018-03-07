import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { AuthenticationService } from '../../authentication/authentication.service';
import { CoursesService } from '../courses.service';
import { Script } from 'vm';

@Component({
  selector: 'view',
  templateUrl: 'app/courses/view/view.template.html',
})
export class ViewComponent {
  article: any = {};
	articles: any;
	errorMessage: string;

	constructor(private _router:Router, 
		private _route: ActivatedRoute,private _coursesService: CoursesService) {}

	ngOnInit() {
		this._coursesService.list().subscribe(articles  => this.articles = articles);
	}

}