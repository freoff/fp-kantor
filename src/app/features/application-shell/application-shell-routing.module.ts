import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellContainerComponent } from './containers/shell-container/shell-container.component';

const routes: Routes = [{ path: '', component: ShellContainerComponent, children: [] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationShellRoutingModule {}
