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
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(http, baseUrl) {
        var _this = this;
        this.imageWidth = 100;
        this.imageMargin = 2;
        this.seePoster = false;
        http.get(baseUrl + 'api/Movies/GetMovies').subscribe(function (result) {
            _this.movies = result;
        }, function (error) { return console.error(error); });
    }
    MoviesComponent.prototype.toggleImage = function () {
        this.seePoster = !this.seePoster;
    };
    MoviesComponent.prototype.onRatingClicked = function (title, msg) {
        this.info = title + " " + msg;
    };
    MoviesComponent = __decorate([
        core_1.Component({
            selector: 'app-movies',
            templateUrl: './movies.component.html'
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map