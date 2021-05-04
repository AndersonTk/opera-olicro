import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { User } from './user.model';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user: any = {}; // objeto vazio
  
  //estamos incluindo um novo usuario
  private isNovo : boolean= true;
  
  
  

  constructor( ){  }

  ngOnInit(): void {
   
  }
  save() {

   }
//    getFormGroupClass(isValid : boolean, isPristine: boolean) : {} {
//      //validando campo preenchido
//     return {
//         'form-group' : true,
//         'has-danger': !isValid && !isPristine,
//         'has-success': isValid && !isPristine
//     }
    
// }
// getFormControlClass(isValid : boolean, isPristine: boolean) : {} {
//   return {
//       'form-control' : true,
//       'has-danger': !isValid && !isPristine,
//       'has-success': isValid && !isPristine
//   };
// }
onSubmit() : void {
  if (this.isNovo) {
      console.log('cadastrar');
  } else {
      console.log('alterar');
  }
}

}
