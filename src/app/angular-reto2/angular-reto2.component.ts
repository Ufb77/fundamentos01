import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-reto2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-reto2.component.html',
  styleUrl: './angular-reto2.component.css'
})
export class AngularReto2Component {
descripcion:String = "";
codigo:number = 0;
precioCosto: number = 0;
precioVenta: number = 0;
stockIdeal: number = 0;
comprobacion:boolean = false;

comprobacionPrecioStock():void{

  if(this.precioCosto> 0 && this.precioVenta>0 && this.stockIdeal>0){
    console.log("Producto dado de alta");
  }else{
    console.log("error")
  }

}
}
