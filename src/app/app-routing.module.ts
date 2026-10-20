import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SuggestsongComponent } from './suggestsong/suggestsong.component';

const routes: Routes = [
   { path: 'about', component: AboutComponent },
   { path: 'suggestsong', component: SuggestsongComponent }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [AboutComponent, SuggestsongComponent]
