import { Directive, ElementRef, HostListener, Renderer2,OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]',
})
export class DropdownDirective  {
  /*constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('click') onClick(event: Event) {
    const dropdown = this.el.nativeElement.closest('.dropdown');
    if (dropdown) {
      dropdown.classList.toggle('open');
    }
  }*/
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    const dropdownMenu = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      const isClickInside = this.elRef.nativeElement.contains(event.target);
      if (isClickInside) {
        dropdownMenu.classList.toggle('show');
      } else {
        dropdownMenu.classList.remove('show');
      }
    }
  }
}
/*@HostBinding('class.open') isOpen=false;
  toggele=true;
  @Input() appDropdownToggle:string;
  @HostBinding('style.backgroundColor') backgroundColor:string= 'pink';
@HostListener('click') onClick(event:Event){
  console.log("appDropdownToggle color:"+this.appDropdownToggle);
  if(this.toggele && this.appDropdownToggle!= null){
    console.log("backgroundColor befor:"+this.backgroundColor);

    this.backgroundColor=this.appDropdownToggle.valueOf();
    console.log("backgroundColor after:"+this.backgroundColor);

    this.toggele=false;
  }
  else{
  this.backgroundColor='pink';
  this.toggele=true;

  }
//this.isOpen=!this.isOpen
   
}
  ngOnInit(){
  // this.el.nativeElement.style.backgroundColor='green';
  //this.renderer.setStyle(this.el.nativeElement,'backgroundColor','yellow');
  }*/
