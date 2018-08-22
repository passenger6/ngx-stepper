import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  ViewRef
} from '@angular/core';


@Directive({
  selector: '[ngxOutlet]'
})
export class OutletDirective {

  attached: ViewRef;
  content: TemplateRef<any>;

  constructor(private _vcr: ViewContainerRef, private _templateRef: TemplateRef<any>) {
  }


  attach(content: TemplateRef<any>) {
    this.content = content;
    this.attached = this._vcr.createEmbeddedView(content);
  }

  hasAttached() {
    return this.attached != null;
  }

  detach() {
    this._vcr.detach();
    this.attached = null;
  }
}
