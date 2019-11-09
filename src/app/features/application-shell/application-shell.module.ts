import { NgModule } from '@angular/core';
import { ShellContainerComponent } from './containers/shell-container/shell-container.component';
import { ShellComponent } from './components/shell/shell.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationShellRoutingModule } from './application-shell-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ShellContainerComponent, ShellComponent, FooterComponent, HeaderComponent],
  imports: [SharedModule, ApplicationShellRoutingModule, CommonModule]
})
export class ApplicationShellModule {}
