import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemplosCore';
  @ViewChild('inputNombre',{static:true}) inputNombre!:ElementRef;

  constructor(){
    
  }

  mostrar(){
    console.log(this.inputNombre.nativeElement.value);
    //this.inputNombre.nativeElement.style.background = "red";
    //this.inputNombre.nativeElement.focus();
    this.inputNombre.nativeElement.select();
  }
}
