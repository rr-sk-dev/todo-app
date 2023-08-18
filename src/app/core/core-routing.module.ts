import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
    path: '',
    pathMatch: 'full',
    component: CoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
