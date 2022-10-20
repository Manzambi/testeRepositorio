import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'etsto '
  Website = 'http://wwww.faztudo.com'
  estudiantes =['Andre', 'Antonio', 'Mario']
  provar = true
  mostrar = 'ocultar'
  Nombre = 'Name'

constructor(){
  
}

salvarDatos(valor:string){
  console.log(valor)
  this.estudiantes.push(valor)
}

MostarOcultar(){
  this.provar = !this.provar
  // if(this.provar== false)
    //   this.mostrar = 'mostar'
      // else this.mostrar='ocultar'
      

}


}
