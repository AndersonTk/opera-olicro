import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { ResetComponent } from './view/reset/reset.component';
import { AnuncioComponent } from './view/anuncio/anuncio.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AuthGuard } from './account/shared/auth.guard';
import { PerfilComponent} from './view/perfil/perfil.component'
import { from } from 'rxjs';


const routes: Routes = [
 
  
  {
    path:'',
    component: PerfilComponent,
    children:[ 
     { path: '', redirectTo: 'anuncio', pathMatch: 'full'  },  
     { path: 'anuncio', component:AnuncioComponent },
      { path: 'perfil', component:PerfilComponent }
      
   
      
    ],
    canActivate:[AuthGuard]
  },
  {path: '', component:AuthenticationComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full'  },
    { path: 'login', component:LoginComponent  },
    { path:'cadastro', component:CadastroComponent },

    
  ]
},

{ path: 'reset', component:ResetComponent },

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
