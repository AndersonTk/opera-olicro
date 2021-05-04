import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { ResetComponent } from './view/reset/reset.component';


const routes: Routes = [
  
  {
    path:'',
    component: HomeComponent,pathMatch: 'full'
  },
  {
    path:'cadastro',
    component:CadastroComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'reset',
    component:ResetComponent 

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
