import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TouchBoardViewComponent } from './components/touch-board-view/touch-board-view.component';

const routes: Routes = [{ path: '', component: TouchBoardViewComponent }];

@NgModule({
  declarations: [TouchBoardViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouchBoardViewModule {}
