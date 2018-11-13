import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'star-rating',
  templateUrl: './review.component.html'
})

export class ReviewComponent implements OnChanges{
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  reviewWidth: number;

  ngOnChanges(): void {
    this.reviewWidth = this.rating * 86 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`rating: ${this.rating}`);
  }
}
