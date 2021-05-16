import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

login = {
  email: '',
  password:''  
};

  constructor(
    private accontService:AccountService,
    private router: Router
    
  ) { }

  ngOnInit(): void {}
  async onSubmit(value: any){
    console.log(value);

    try{
      const result = await this.accontService.login(this.login);
      console.log(`Login efetuado: $(result)`);
      // navegar para a rota vazia novamente
      this.router.navigate(['']);
    } catch (error){
      console.error(error);
    }
  }

}
