import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  titulo: string = 'Hola soy un hijo';
  constructor() { }

  ngOnInit(): void {
  }

}
