import { Directive } from '@angular/core';
import { Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSearchResult]'
})
export class SearchResultDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input('appSearchResult') set appUnless(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
