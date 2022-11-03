import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MuseumDetailComponent} from "./views/museum-detail/museum-detail.component";
import { ExhibitionDetailComponent } from "./views/exhibition-detail/exhibition-detail.component";
import {HomeComponent} from "./views/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'museums/:id', component: MuseumDetailComponent},
  {path: 'museums/:museumId/exhibitions/:exhibitionId', component: ExhibitionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
