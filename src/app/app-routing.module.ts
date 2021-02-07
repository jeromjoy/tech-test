import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ReadmeComponent } from './readme/readme.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: '', component: ReadmeComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'devices', component: DeviceListComponent},
  {path: 'movies', component: MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
