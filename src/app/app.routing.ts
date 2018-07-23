import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard/auth-guard.service';
import { CanDeactivateGuardService } from './auth-guard/can-deactivate-guard.service';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemComponent } from './item/item.component';
import { SideNavLayoutComponent } from './layouts/side-nav-layout/side-nav-layout.component';



export const appRoutes = [
    { path: '', pathMatch: 'full' , redirectTo: 'signin' },
    { path: 'signup', component: SignupComponent  },
    { path: 'signin', component: SigninComponent  },
    { path: 'layout', component: GridLayoutComponent  },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService], children: [
			{ path: '/s', pathMatch: 'full' , component: SideNavLayoutComponent, outlet: 'home' },
    	] 
    },
    { path: 'item', component: ItemComponent,  children: [
        { path: ':id', component: ItemComponent },
        { path: '', pathMatch: 'full' , redirectTo: '1' }
      ]
    },
    { path: '**', component: PageNotFoundComponent }
    // { path: 'home', component: HomeComponent, canActivate: [AuthGuardService], canDeactivate: [CanDeactivateGuardService] },

]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}