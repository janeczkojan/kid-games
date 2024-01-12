import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'touch-board',
    loadChildren: () =>
      import('./views/touch-board-view/touch-board-view.module').then(m => m.TouchBoardViewModule)
  },
  { path: '', redirectTo: '/touch-board', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
