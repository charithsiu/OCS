System.register(['./courses.component', './list/list.component', './view/view.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var courses_component_1, list_component_1, view_component_1;
    var ArticlesRoutes;
    return {
        setters:[
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            }],
        execute: function() {
            //import { EditComponent } from './edit/edit.component';
            exports_1("ArticlesRoutes", ArticlesRoutes = [{
                    path: 'courses',
                    component: courses_component_1.CoursesComponent,
                    children: [
                        { path: ':courseno', component: list_component_1.ListComponent },
                        //	{path: 'create', component: CreateComponent},
                        { path: '', component: view_component_1.ViewComponent }
                    ],
                }]);
        }
    }
});
//# sourceMappingURL=courses.routes.js.map