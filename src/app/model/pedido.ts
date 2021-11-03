import { PedidoDetalle } from "./pedido-detalle";

export class Pedido{
    cliente!:string;
    direccion!:string;
    pedidoDetalle : PedidoDetalle[] = new Array<PedidoDetalle>();
    
    constructor(){
        this.cliente = this.cliente;
        this.direccion = this.direccion;
        this.pedidoDetalle = this.pedidoDetalle;
    }
}