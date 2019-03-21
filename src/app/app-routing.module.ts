import { AuthGuardService } from './services/auth-guard.service';
import { ProtectedComponent } from './components/protected/protected.component';
import { PriceComponent } from './components/price/price.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'price', component: PriceComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [ AuthGuardService ] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
