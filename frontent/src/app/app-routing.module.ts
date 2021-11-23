import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecomendacoesComponent} from "./recomendacoes/recomendacoes.component";

const routes: Routes = [
  {path: 'recomendacoes', component: RecomendacoesComponent},
  {path: '', redirectTo: '/recomendacoes', pathMatch: 'full'},
  {path: '**', redirectTo: '/recomendacoes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
