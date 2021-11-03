import { Component, OnInit } from '@angular/core';
import { Pedido } from '../model/pedido';
import Swal from 'sweetalert2'

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
    Swal.fire({
      title:"Producto agregado",
      text: "Se agrego correctamente",
      icon: 'success'
    }
    );
  }

  elHijoEliminoAlgo(evento:any){
    this.pedido.pedidoDetalle.splice(evento.id,1);
    console.log(evento);
    Swal.fire({
      title:"Producto eliminado",
      text: "Se elimino correctamente",
      icon: 'warning'
    });
  }

}
