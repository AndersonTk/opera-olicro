import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { error } from 'selenium-webdriver';
import { AnunciosService } from '../anuncios.service';

@Component({
  selector: 'app-anuncio-form',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.css']
})
export class AnuncioformComponent implements OnInit {
  
  constructor(
    private service: AnunciosService,
    private http: HttpClient,
    private form: FormBuilder,
    private route: ActivatedRoute
    ) { }



  residuo = 
  {
    type_deal:'',
      tipo_residuo:'',
      nome_residuo:'',
  };

  ngOnInit(): void {


    this.route.params.subscribe(
      (params: any) => {
        const id = params ['id'];
        console.log(id);
      }
    )
  }
  
  onSubmit(value:any){
    
    console.log(this.residuo);
    this.service.create(this.residuo).subscribe(
      sucess => console.log('Sucesso'),
      error => console.error(error),
      () => console.log ('request completo'),
      
      
      
    );
    
    alert('Anúncio cadastrado com Sucesso!! :-)\n\n');
   
    

  }

  resetForm(Form: NgForm){
    Form.reset();
  }
 
}


