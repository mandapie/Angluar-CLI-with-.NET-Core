"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(_movieService) {
        this._movieService = _movieService;
        this.imageWidth = 100;
        this.imageMargin = 2;
        this.seePoster = false;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.movies = this._movieService.getMovies();
    };
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
        })
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map