"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(http, router, route, baseUrl) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.param1 = _this.route.snapshot.paramMap.get('id');
        });
        http.get(baseUrl + 'api/Movies/MovieDetail?id=' + this.param1).subscribe(function (result) {
            _this.movie = result;
        }, function (error) { return console.error(error); });
    }
    MovieDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/movies']);
    };
    MovieDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-movieDetail',
            templateUrl: './movieDetail.component.html'
        }),
        __param(3, core_1.Inject('BASE_URL'))
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movieDetail.component.js.map