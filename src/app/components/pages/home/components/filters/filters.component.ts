import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html'
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['electronic', 'sports'];

  onShowCategory(cat: string): void {
    this.showCategory.emit(cat);
  }
}
