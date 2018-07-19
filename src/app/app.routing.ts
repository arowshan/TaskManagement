import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


export const appRoutes = [
    { path: '', pathMatch: 'full' , redirectTo: 'signup' },
    { path: 'signup', component: SignupComponent  },
    { path: 'signin', component: SigninComponent  }
]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}