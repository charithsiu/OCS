import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'list',
  templateUrl: 'app/courses/list/list.template.html',
})
export class ListComponent {
	article: any = {};
	articles: any;
	routingObserver: any;
	errorMessage: string;

	constructor(private _router:Router, 
		private _route: ActivatedRoute,private _coursesService: CoursesService) {}

	ngOnInit() {
		
			this.routingObserver = this._route.params.subscribe(params => {
			let courseno = params['courseno'];
			this._coursesService
			.read(courseno)
			.subscribe(articles  => this.articles = articles);
		});
		
			//this._coursesService.list().subscribe(articles  => this.articles = articles);
				/*this.user = this._authenticationService.user

		this.routingObserver = this._route.params.subscribe(params => {
			let articleId = params['articleId'];

			this._coursesService
				.read(articleId)
				.subscribe(
					article => {
						this.article = article;
						this.allowEdit = (this.user && this.user._id === this.article.creator._id);
		 			},
					error => this._router.navigate(['/course'])
				);
		});*/
	}

	/*ngOnDestroy() {
		this.routingObserver.unsubscribe();
	}

	delete() {
		this._coursesService.delete(this.article._id).subscribe(deletedArticle => this._router.navigate(['/articles']),
																 error => this.errorMessage = error);
	}*/
}