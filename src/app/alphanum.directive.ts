import { Directive, HostListener ,ElementRef,Input, Host} from '@angular/core';

@Directive({
  selector: '[appAlphanum]'
})
export class AlphanumDirective {
  
  private regex: RegExp = new RegExp(/^[a-zA-Z]([a-zA-Z0-9]+ ?)*$/);


  constructor(private elementRef: ElementRef) { }


  @HostListener('keydown',['$event'])onKeyDown(event:KeyboardEvent){

    const inputValue: string = this.elementRef.nativeElement.value.concact(event.key);
    console.log(event.key);
    if(inputValue && !String(inputValue).match(this.regex)){
      event.preventDefault();
    }
    return;
  }

  
}
