import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-reto1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-reto1.component.html',
  styleUrl: './angular-reto1.component.css'
})
export class AngularReto1Component {

  email:string = "";
  password:string = "";
  passwordRepeat = "";
  //passCorrecta= this.comprobacionPass(this.password,this.passwordRepeat); Revisar

  comprobacionPass(password:String, passwordRepetida:String){
    let resultado:boolean = false;
    if (password === passwordRepetida) {

      resultado = true;
      
    }

    console.log(resultado)
    return resultado
  }

}
