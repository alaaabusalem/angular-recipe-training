import { Directive, ElementRef, HostListener, Renderer2,OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]',
})
export class DropdownDirective implements OnInit{
  constructor(private el: ElementRef, private renderer: Renderer2) {}
 
@HostBinding('class.open') isOpen=false;
  toggele=true;
  @Input() appDropdownToggle:string
  @HostBinding('style.backgroundColor') backgroundColor:string= 'pink';
@HostListener('click') onClick(event:Event){
  if(this.toggele && this.appDropdownToggle!= null){
    this.backgroundColor=this.appDropdownToggle;
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
  }
}