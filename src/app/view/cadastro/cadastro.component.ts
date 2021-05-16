import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, NG_VALIDATORS, PatternValidator, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { User } from '../../shared/model/user.model';
import { take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { variable } from '@angular/compiler/src/output/output_ast';
import { CadastroService } from './cadastro.service';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  submitted = false;

  constructor( 
    private fb: FormBuilder,
    private http: HttpClient,
    private service: CadastroService
    ){
   }

  get f() { return this.cadastro.controls; }

  cadastro = this.fb.group({
    nome: ['', Validators.required, Validators.minLength(3)],
     sobrenome:['', Validators.required],
     pais: ['', Validators.required],
     whatsapp: ['',Validators.required, Validators.pattern(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/)],
     email: ['', Validators.required,  Validators.email],
     senha: ['', Validators.required, Validators.minLength(6)],
     confirmeSenha:['', Validators.required, ],
     termos:[false, Validators.requiredTrue],
     
},{
validator: MustMatch('senha', 'confirmeSenha')  
});
ngOnInit(): void { }
  
onSubmit() {

  
  this.submitted = true;
  if (this.cadastro.invalid) {
    return;
}

  this.service.create(this.cadastro).subscribe(
  sucess => console.log('Sucesso'),
  error => console.error(error),
  () => console.log ('request completo')
  

  );alert('Cadastro Realizado com Sucesso!! :-)\n\n'); //+ JSON.stringify(this.cadastro.value, null, 4));
  //link de simulação para emular o envio do formulário
  this.http.post('http://httpbin.org/post', JSON.stringify(this.cadastro.value)).pipe(take(1))
  .subscribe(dados => {
     console.log(dados)
    
 // exibir valores de formulário em sucesso exibir valores de formulário em caso de sucesso
  
 
 
 //resertar formulario
    this.resetar();

    },(error:any) => alert('erro'));
    

    

}

resetar(){
  this.cadastro.reset();
}



  // static equalsTO(otherField: string){
  //   const validator = (formControl: FormControl) =>{
  //     if(otherField == null){
  //       throw new Error ('É Nessário informar um campo.');
  //     }

  //     const field = (<FormGroup>formControl.root).get(otherField);
      
  //     if (!field){
  //       throw new Error ('É necessário informar um campo valido.')
  //     }

  //     if (field.value !== formControl.value){
  //       return{
  //         equalsTO:otherField
  //       };

  //       return null;
  //     };
  //   return validator;
  //   }
    

}
//Função para comprar senha
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // retorna se outro validador  se já encontrou um erro no controle correspondente
          return;
      }

      // definir erro na correspondência de controle se a validação falhar
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
