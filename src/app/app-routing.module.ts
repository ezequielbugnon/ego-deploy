import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelosComponent } from './components/modelos/modelos.component';
import { FichaComponent } from './components/ficha/ficha.component';


const routes: Routes = [
  { path: 'ficha/:id', component: FichaComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: '', redirectTo: '/modelos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
