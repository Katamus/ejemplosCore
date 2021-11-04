import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoDetalle } from '../model/pedido-detalle';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.scss']
})
export class PedidoDetalleComponent implements OnInit {
  @Input() pedidoDetalle: PedidoDetalle[] = new Array<PedidoDetalle>();
  @Output() seEliminoUnProducto : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  eliminar(posicion:number){
    this.seEliminoUnProducto.emit({id:posicion});
    console.log(posicion);
  }

 ngOnChanges(){
  console.log("Se asigno un valor al pedido");
 }
}
