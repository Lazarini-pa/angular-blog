import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomesComponent } from './pages/homes/homes.component';
import { ContentComponent } from './pages/content/content.component';


const routes: Routes = [
  {
    path:'',
    component:HomesComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
