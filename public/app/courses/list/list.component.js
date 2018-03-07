System.register(['@angular/core', '@angular/router', '../courses.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, courses_service_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_router, _route, _coursesService) {
                    this._router = _router;
                    this._route = _route;
                    this._coursesService = _coursesService;
                    this.article = {};
                }
                ListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.routingObserver = this._route.params.subscribe(function (params) {
                        var courseno = params['courseno'];
                        _this._coursesService
                            .read(courseno)
                            .subscribe(function (articles) { return _this.articles = articles; });
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
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        templateUrl: 'app/courses/list/list.template.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, courses_service_1.CoursesService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map