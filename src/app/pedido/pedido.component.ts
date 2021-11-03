import { Component, OnInit } from '@angular/core';
import { Pedido } from '../model/pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  pedido:Pedido = new Pedido();
  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto(){
    this.pedido.cliente = "lucas";
    this.pedido.direccion = "Calle 35 # 31-56";
    this.pedido.pedidoDetalle.push({
       cantidad:20,
       precio:15,
       producto:"algo",
       total:300
    })

  }
}
